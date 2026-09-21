#!/usr/bin/env python3
# ═══════════════════════════════════════════════════════════════════════
#  build.py — valida el banc, compila els PDF i genera cataleg.js
#  ─────────────────────────────────────────────────────────────────────
#  Ús:   python3 build/build.py [opcions]
#
#    --nomes-cataleg     no compila res, només revalida i regenera el
#                        catàleg (ràpid, per a canvis de meta.json)
#    --preambul FITXER   fa servir un altre preàmbul (per a proves)
#    --pregunta RUTA     compila només aquesta pregunta
#
#  El build FALLA (codi 1) i no escriu res si hi ha cap error. És
#  deliberat: val més no publicar que publicar un banc inconsistent.
# ═══════════════════════════════════════════════════════════════════════

import argparse
import json
import re
import shutil
import subprocess
import sys
import tempfile
from datetime import datetime, timezone
from pathlib import Path

ARREL = Path(__file__).resolve().parent.parent
PUNTS_PREGUNTA = 250          # centèsimes: tota pregunta val 2,50 punts
GRA = 25                      # centèsimes: tot apartat és múltiple de 0,25

CLAUS_META = {
    "titol": str, "temes_secundaris": list, "dificultat": str,
    "origen": list, "minuts": int, "etiquetes": list,
}
DIFICULTATS = {"●○○", "●●○", "●●●"}

errors: list[str] = []
avisos: list[str] = []


def error(on: str, msg: str) -> None:
    errors.append(f"{on}: {msg}")


def avis(on: str, msg: str) -> None:
    avisos.append(f"{on}: {msg}")


# ── assemblatge ────────────────────────────────────────────────────────
def munta(plantilla: str, preambul: str, cossos: list[str], solucions: bool) -> str:
    """Construeix un .tex complet. El lloc web fa EXACTAMENT això mateix
    amb la mateixa plantilla; per això la plantilla és un fitxer i no
    està escrita dins del codi."""
    # count=1: el mateix que String.replace de JavaScript (només la primera).
    return (plantilla
            .replace("%%SOLUCIONS%%", r"\solucionstrue" if solucions else r"\solucionsfalse", 1)
            .replace("%%PREAMBUL%%", preambul, 1)
            .replace("%%COS%%", "\n\n".join(cossos), 1))


MARCADORS = ("%%SOLUCIONS%%", "%%PREAMBUL%%", "%%COS%%")


def valida_plantilla(plantilla: str, preambul: str) -> None:
    for m in MARCADORS:
        n = plantilla.count(m)
        if n != 1:
            error("embolcall.tex", f"{m} hi apareix {n} cops (ha de ser exactament 1)")
        if m in preambul:
            error("preambul.tex", f"conté el marcador reservat {m}")


def cos_amb_capcalera(tex: str, etiqueta: str) -> str:
    return "\\encapcalament{%s}\n%s" % (etiqueta, tex.strip())


# ── validació ──────────────────────────────────────────────────────────
def punts_del_tex(tex: str, on: str) -> list[int]:
    """Llegeix els \\apartat{...}. La puntuació viu al .tex i enlloc més."""
    cent: list[int] = []
    for brut in re.findall(r"\\apartat\{([^}]*)\}", tex):
        net = brut.strip().replace(",", ".")
        try:
            valor = round(float(net) * 100)
        except ValueError:
            error(on, f"\\apartat{{{brut}}} no és un nombre")
            continue
        if valor % GRA:
            error(on, f"\\apartat{{{brut}}} no és múltiple de 0,25")
        cent.append(valor)
    if not cent:
        error(on, "no hi ha cap \\apartat{...}")
    elif sum(cent) != PUNTS_PREGUNTA:
        error(on, f"els apartats sumen {sum(cent)/100:.2f} i han de sumar 2,50")
    return cent


def valida_tex(tex: str, on: str) -> None:
    for prohibit in (r"\documentclass", r"\usepackage", r"\begin{document}"):
        if prohibit in tex:
            error(on, f"conté {prohibit}; una pregunta és només el cos")
    obre = len(re.findall(r"\\begin\{solucio\}", tex))
    tanca = len(re.findall(r"\\end\{solucio\}", tex))
    if obre != tanca:
        error(on, f"{obre} \\begin{{solucio}} i {tanca} \\end{{solucio}}")
    for linia in tex.splitlines():
        if r"\end{solucio}" in linia and linia.strip() != r"\end{solucio}":
            error(on, r"\end{solucio} ha d'anar sol a la seva línia")
    if obre == 0:
        avis(on, "no té solució")


def valida_meta(meta: dict, on: str, slugs: set[str]) -> None:
    for clau, tipus in CLAUS_META.items():
        if clau not in meta:
            error(on, f"falta la clau «{clau}» a meta.json")
        elif not isinstance(meta[clau], tipus):
            error(on, f"«{clau}» hauria de ser {tipus.__name__}")
    for extra in set(meta) - set(CLAUS_META):
        error(on, f"clau desconeguda a meta.json: «{extra}»")
    if meta.get("dificultat") not in DIFICULTATS:
        error(on, "«dificultat» ha de ser ●○○, ●●○ o ●●●")
    for t in meta.get("temes_secundaris", []):
        if t not in slugs:
            error(on, f"tema secundari inexistent: «{t}»")


# ── compilació ─────────────────────────────────────────────────────────
def compila(document: str, desti: Path, on: str) -> int | None:
    """Compila un .tex complet i desa el PDF a `desti`. Retorna les pàgines."""
    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        (tmp / "main.tex").write_text(document, encoding="utf-8")
        r = subprocess.run(
            ["pdflatex", "-interaction=nonstopmode", "-halt-on-error", "main.tex"],
            cwd=tmp, capture_output=True, text=True)
        log = (tmp / "main.log").read_text(encoding="utf-8", errors="replace") \
            if (tmp / "main.log").exists() else r.stdout
        if r.returncode != 0 or not (tmp / "main.pdf").exists():
            primera = next((l for l in log.splitlines() if l.startswith("! ")), "error desconegut")
            error(on, f"no compila → {primera}")
            return None
        for l in log.splitlines():
            if l.startswith("Overfull") or l.startswith("Underfull"):
                avis(on, l.strip()[:90])
        desti.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy(tmp / "main.pdf", desti)
        m = re.search(r"main\.pdf \((\d+) pages?", log)
        return int(m.group(1)) if m else None


# ── programa ───────────────────────────────────────────────────────────
def main() -> int:
    p = argparse.ArgumentParser()
    p.add_argument("--nomes-cataleg", action="store_true")
    p.add_argument("--preambul", default=str(ARREL / "build" / "preambul.tex"))
    p.add_argument("--pregunta", default=None)
    args = p.parse_args()

    temes_doc = json.loads((ARREL / "temes.json").read_text(encoding="utf-8"))
    slugs = {t["slug"] for t in temes_doc["temes"]}
    unitats = set(temes_doc["unitats"])
    for t in temes_doc["temes"]:
        if t["unitat"] not in unitats:
            error("temes.json", f"«{t['slug']}» apunta a una unitat inexistent")

    plantilla = (ARREL / "build" / "embolcall.tex").read_text(encoding="utf-8")
    preambul = Path(args.preambul).read_text(encoding="utf-8")
    valida_plantilla(plantilla, preambul)

    carpetes = sorted(d for d in ARREL.glob("u*/*/q*") if (d / "meta.json").exists())
    if args.pregunta:
        carpetes = [d for d in carpetes if args.pregunta in str(d)]

    preguntes = []
    vistos: set[str] = set()

    for dir_q in carpetes:
        unitat, tema, codi = dir_q.parts[-3:]
        ident = f"{unitat}/{tema}/{codi}"
        on = ident

        if tema not in slugs:
            error(on, f"el tema «{tema}» no és a temes.json")
            continue
        if ident in vistos:
            error(on, "identificador repetit")
            continue
        vistos.add(ident)

        try:
            meta = json.loads((dir_q / "meta.json").read_text(encoding="utf-8"))
        except json.JSONDecodeError as e:
            error(on, f"meta.json no és JSON vàlid ({e})")
            continue
        valida_meta(meta, on, slugs)

        if not (dir_q / "pregunta.tex").exists():
            error(on, "falta pregunta.tex")
            continue
        tex = (dir_q / "pregunta.tex").read_text(encoding="utf-8")
        valida_tex(tex, on)
        for m in MARCADORS:
            if m in tex:
                error(on, f"conté el marcador reservat {m}")
        apartats = punts_del_tex(tex, on)

        pdf_e = dir_q / "out" / "enunciat.pdf"
        pdf_s = dir_q / "out" / "solucio.pdf"
        if not args.nomes_cataleg:
            cos = cos_amb_capcalera(tex, "Pregunta")
            pagines = compila(munta(plantilla, preambul, [cos], False), pdf_e, on)
            compila(munta(plantilla, preambul, [cos], True), pdf_s, on)
            if pagines and pagines > 1:
                avis(on, f"l'enunciat ocupa {pagines} pàgines")
            estat = "✓" if not any(e.startswith(on + ":") for e in errors) else "✗"
            print(f"  {estat} {ident:<40} {' + '.join(f'{a/100:.2f}' for a in apartats):<22}"
                  f" {pagines or '?'} pàg.")

        preguntes.append({
            "id": ident, "unitat": unitat, "tema": tema, "codi": codi,
            "titol": meta.get("titol", ""),
            "punts": sum(apartats) / 100,
            "apartats": [a / 100 for a in apartats],
            "dificultat": meta.get("dificultat", ""),
            "origen": meta.get("origen", []),
            "minuts": meta.get("minuts", 0),
            "etiquetes": meta.get("etiquetes", []),
            "temes_secundaris": meta.get("temes_secundaris", []),
            "tex": tex,
            "pdf": f"{ident}/out/enunciat.pdf",
            "pdf_solucio": f"{ident}/out/solucio.pdf",
        })

    for a in avisos:
        print(f"  avís  {a}")
    if errors:
        print(f"\n✗ {len(errors)} error(s). No s'ha escrit res.\n", file=sys.stderr)
        for e in errors:
            print(f"  ERROR {e}", file=sys.stderr)
        return 1

    banc = {
        "generat": datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC"),
        "unitats": temes_doc["unitats"],
        "temes": temes_doc["temes"],
        "plantilla": plantilla,
        "preambul": preambul,
        "preguntes": preguntes,
    }
    sortida = ("/* FITXER GENERAT PER build/build.py — NO L'EDITIS MAI */\n"
               "const BANC = " + json.dumps(banc, ensure_ascii=False, indent=1) + ";\n")
    (ARREL / "cataleg.js").write_text(sortida, encoding="utf-8")

    minuts = sum(q["minuts"] for q in preguntes)
    print(f"\n✓ {len(preguntes)} preguntes · {len(slugs)} temes · "
          f"{minuts} min de banc · cataleg.js {len(sortida)//1024} kB")
    return 0


if __name__ == "__main__":
    sys.exit(main())
