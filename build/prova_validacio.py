#!/usr/bin/env python3
# ═══════════════════════════════════════════════════════════════════════
#  prova_validacio.py — comprova que build.py REBUTJA cada tipus d'error
#  ─────────────────────────────────────────────────────────────────────
#  Copia el banc a una carpeta temporal, hi injecta una sola avaria cada
#  vegada i exigeix que el build falli amb el missatge esperat. Si algun
#  dia una regla deixa de funcionar, aquesta prova ho detecta.
#
#  Ús:   python3 build/prova_validacio.py
# ═══════════════════════════════════════════════════════════════════════

import json
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ARREL = Path(__file__).resolve().parent.parent
Q = "u7/continuitat-trossos/q001"


def tex(r):  return r / Q / "pregunta.tex"
def meta(r): return r / Q / "meta.json"


def edita_tex(vell, nou):
    def f(r):
        s = tex(r).read_text(encoding="utf-8")
        assert vell in s, f"la prova no troba «{vell}»"
        tex(r).write_text(s.replace(vell, nou, 1), encoding="utf-8")
    return f


def edita_meta(canvi):
    def f(r):
        m = json.loads(meta(r).read_text(encoding="utf-8"))
        canvi(m)
        meta(r).write_text(json.dumps(m, ensure_ascii=False), encoding="utf-8")
    return f


AVARIES = [
    ("apartats que sumen 2,25",
     edita_tex(r"\apartat{1,25}", r"\apartat{1}"), "han de sumar 2,50"),
    ("apartat que no és múltiple de 0,25",
     edita_tex(r"\apartat{1,25}", r"\apartat{1,3}"), "múltiple de 0,25"),
    ("\\end{solucio} enganxat a text",
     edita_tex("\\end{solucio}", "fi. \\end{solucio}"), "sol a la seva línia"),
    ("\\usepackage dins d'una pregunta",
     edita_tex(r"\begin{apartats}", "\\usepackage{xcolor}\n\\begin{apartats}"), "només el cos"),
    ("marcador reservat dins d'una pregunta",
     edita_tex(r"\begin{apartats}", "%%COS%%\n\\begin{apartats}"), "marcador reservat"),
    ("tema secundari inexistent",
     edita_meta(lambda m: m.update(temes_secundaris=["no-existeix"])), "inexistent"),
    ("clau desconeguda a meta.json",
     edita_meta(lambda m: m.update(puntuacio=2.5)), "clau desconeguda"),
    ("dificultat mal escrita",
     edita_meta(lambda m: m.update(dificultat="alta")), "dificultat"),
    ("clau obligatòria absent",
     edita_meta(lambda m: m.pop("titol")), "falta la clau"),
    ("meta.json que no és JSON",
     lambda r: meta(r).write_text("{ titol: sense cometes }", encoding="utf-8"), "JSON vàlid"),
]


def main() -> int:
    fallades = 0
    for nom, avaria, esperat in AVARIES:
        with tempfile.TemporaryDirectory() as tmp:
            copia = Path(tmp) / "banc"
            shutil.copytree(ARREL, copia, ignore=shutil.ignore_patterns(".git", "*.pdf"))
            avaria(copia)
            r = subprocess.run([sys.executable, str(copia / "build" / "build.py"), "--nomes-cataleg"],
                               capture_output=True, text=True)
            ok = r.returncode == 1 and esperat in r.stderr
            fallades += not ok
            print(f"  {'✓' if ok else '✗'} {nom}")
            if not ok:
                print(f"      esperava codi 1 amb «{esperat}»; ha tornat {r.returncode}\n{r.stderr}")
    print(f"\n{'✓ Totes les regles es compleixen.' if not fallades else f'✗ {fallades} regla(es) no funcionen.'}")
    return 1 if fallades else 0


if __name__ == "__main__":
    sys.exit(main())
