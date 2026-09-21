#!/usr/bin/env python3
# ═══════════════════════════════════════════════════════════════════════
#  prova_paritat.py — el .tex que baixa el lloc web ha de ser IDÈNTIC,
#  byte a byte, al que munta build.py per a la mateixa selecció.
#  ─────────────────────────────────────────────────────────────────────
#  Executa els fitxers reals cataleg.js + assets/app.js dins de Node amb
#  un DOM mínim, simula una adreça amb quatre temes i compara el resultat
#  amb munta() de build.py. També comprova el recompte de punts i que
#  una adreça amb codis inexistents no trenca la pàgina.
#
#  Ús:   python3 build/prova_paritat.py      (cal node i cataleg.js)
# ═══════════════════════════════════════════════════════════════════════

import json
import subprocess
import sys
from pathlib import Path

ARREL = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ARREL / "build"))
from build import munta, cos_amb_capcalera  # noqa: E402

HARNES = r"""
const fs = require('fs'), vm = require('vm');
const [arrel, hash] = process.argv.slice(1);
function el() {
  return { innerHTML:'', className:'', title:'', type:'', textContent:'', disabled:false,
    dataset:{}, style:{}, children:[], setAttribute(){}, appendChild(c){ this.children.push(c); return c; },
    remove(){}, click(){}, querySelectorAll(){ return []; } };
}
const nodes = {};
const ctx = vm.createContext({
  document: { querySelector: s => (nodes[s] ||= el()), createElement: el, body: el() },
  location: { hash, pathname: '/index.html', search: '' },
  history: { replaceState(_, __, u) { ctx.location.hash = String(u).split('#')[1] || ''; } },
  URL, Blob, setTimeout, console,
});
vm.runInContext(fs.readFileSync(arrel + '/cataleg.js', 'utf8'), ctx, { filename: 'cataleg.js' });
// Tema buit sintètic: la prova no pot dependre que el banc real en tingui cap.
vm.runInContext("BANC.temes.push({slug:'__buit__', unitat:'u7', nom:'Tema buit de prova', descripcio:''})", ctx);
vm.runInContext(fs.readFileSync(arrel + '/assets/app.js', 'utf8'), ctx, { filename: 'app.js' });
const r = vm.runInContext(`({
  ids: triades().map(q => q.id),
  tex: munta(cossosTriats(), false),
  sol: munta(cossosTriats(), true),
  recompte: document.querySelector('#recompte').innerHTML,
  hash: location.hash,
})`, ctx);
process.stdout.write(JSON.stringify(r));
"""


class AppPetada(Exception):
    """app.js ha llançat una excepció dins de Node: al navegador, pàgina en blanc."""


def web(hash_: str) -> dict:
    r = subprocess.run(["node", "-e", HARNES, str(ARREL), hash_],
                       capture_output=True, text=True)
    if r.returncode:
        raise AppPetada(r.stderr.strip())
    return json.loads(r.stdout)


def main() -> int:
    banc = json.loads((ARREL / "cataleg.js").read_text(encoding="utf-8")
                      .split("const BANC = ", 1)[1].rstrip().rstrip(";"))
    per_id = {q["id"]: q for q in banc["preguntes"]}
    fallades = 0

    def comprova(nom, cond, detall=""):
        nonlocal fallades
        fallades += not cond
        print(f"  {'✓' if cond else '✗'} {nom}" + (f"\n      {detall}" if not cond and detall else ""))

    # 1. Paritat amb quatre temes (un d'ells buit, que no ha de comptar)
    hash_ = "limits-grafica:q001,__buit__,continuitat-trossos:q001,bolzano-biseccio:q001,limits-punt:q001"
    r = web(hash_)
    esperat = ["u7/limits-grafica/q001", "u7/continuitat-trossos/q001",
               "u7/bolzano-biseccio/q001", "u7/limits-punt/q001"]
    comprova("el tema buit no entra a l'examen", r["ids"] == esperat, r["ids"])
    cossos = [cos_amb_capcalera(per_id[i]["tex"], f"Pregunta {n}", per_id[i]["procedencia"]) for n, i in enumerate(esperat, 1)]
    for sol, clau in ((False, "tex"), (True, "sol")):
        py = munta(banc["plantilla"], banc["preambul"], cossos, sol)
        igual = py == r[clau]
        detall = "" if igual else next(
            (f"primera diferència al caràcter {k}" for k, (a, b) in enumerate(zip(py, r[clau])) if a != b),
            f"longituds {len(py)} i {len(r[clau])}")
        comprova(f"paritat JS = Python ({'amb' if sol else 'sense'} solucions, {len(py)} caràcters)", igual, detall)
    comprova("el recompte diu 10,00 punts", "10,00 punts" in r["recompte"], r["recompte"])

    # 1b. Paritat amb segones variants i els temes nous
    hash_ = "limits-grafica:q002,parametres-ab:q001,bolzano-biseccio:q002,limits-infinit:q001"
    r = web(hash_)
    esperat = ["u7/limits-grafica/q002", "u7/parametres-ab/q001",
               "u7/bolzano-biseccio/q002", "u7/limits-infinit/q001"]
    comprova("les variants q002 es trien per codi", r["ids"] == esperat, r["ids"])
    cossos = [cos_amb_capcalera(per_id[i]["tex"], f"Pregunta {n}", per_id[i]["procedencia"]) for n, i in enumerate(esperat, 1)]
    py = munta(banc["plantilla"], banc["preambul"], cossos, True)
    comprova(f"paritat JS = Python amb variants ({len(py)} caràcters)", py == r["sol"])
    comprova("el recompte torna a dir 10,00 punts", "10,00 punts" in r["recompte"], r["recompte"])

    # 1c. Un examen PAU sencer (juny 2026): paritat i línia de procedència
    hash_ = "analisi:ana-26j-q1,algebra:alg-26j-q2,probabilitat:pro-26j-q3,geometria:geo-26j-q4b"
    r = web(hash_)
    esperat = ["pau/analisi/ana-26j-q1", "pau/algebra/alg-26j-q2",
               "pau/probabilitat/pro-26j-q3", "pau/geometria/geo-26j-q4b"]
    comprova("un examen PAU sencer es tria per codi", r["ids"] == esperat, r["ids"])
    cossos = [cos_amb_capcalera(per_id[i]["tex"], f"Pregunta {n}", per_id[i]["procedencia"])
              for n, i in enumerate(esperat, 1)]
    py = munta(banc["plantilla"], banc["preambul"], cossos, False)
    comprova(f"paritat JS = Python amb preguntes PAU ({len(py)} caràcters)", py == r["tex"])
    linies = r["tex"].splitlines()
    ok = all(linies[linies.index(f"\\encapcalament{{Pregunta {n}}}") + 1]
             == "\\procedencia{PAU juny 2026, sèrie 1}" for n in range(1, 5))
    comprova("cada pregunta PAU comença amb «PAU juny 2026, sèrie 1»", ok)
    comprova("el recompte de l'examen PAU diu 10,00 punts", "10,00 punts" in r["recompte"], r["recompte"])
    r = web("analisi:ana-26j-q4a")
    comprova("l'opció 4A es tria com a variant del bloc d'anàlisi", r["ids"] == ["pau/analisi/ana-26j-q4a"], r["ids"])
    r = web("limits-punt:q001")
    comprova("una pregunta del banc no porta cap línia de procedència", "\\procedencia{" not in
             r["tex"].split("\\begin{document}")[1], "")

    # 2. Una adreça amb codis inexistents i brossa no ha de petar
    r = web("bolzano-biseccio:q999,no-existeix:q001,,limits-punt:q001,limits-punt:q001")
    comprova("codi inexistent → primera variant, sense petar",
             r["ids"] == ["u7/bolzano-biseccio/q001", "u7/limits-punt/q001"], r["ids"])
    comprova("l'adreça es normalitza a codis estables",
             r["hash"] == "bolzano-biseccio:q001,limits-punt:q001", r["hash"])

    # 2b. Adreces mal formades: el que no s'entén s'ignora; la pàgina no peta
    for hash_, nom in (("limits-punt:q001,%", "un % solt"),
                       ("limits-punt:q001,%E2%9C", "una seqüència UTF-8 retallada"),
                       ("__proto__:q001,constructor,limits-punt:q001", "noms interns de JavaScript")):
        try:
            r = web(hash_)
            ok = r["ids"] == ["u7/limits-punt/q001"] and r["hash"] == "limits-punt:q001"
            detall = f"{r['ids']} · #{r['hash']}"
        except AppPetada as e:
            ok = False
            detall = "app.js peta: " + next((l for l in str(e).splitlines() if "Error" in l), str(e)[:120])
        comprova(f"una adreça amb {nom} s'ignora sense petar", ok, detall)

    # 3. Una selecció buida
    r = web("")
    comprova("sense selecció no hi ha preguntes", r["ids"] == [] and "Cap" in r["recompte"], r["recompte"])

    print(f"\n{'✓ El lloc i el build munten exactament el mateix.' if not fallades else f'✗ {fallades} comprovació(ns) fallides.'}")
    return 1 if fallades else 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except AppPetada as e:
        sys.exit(f"app.js ha petat dins de Node:\n{e}")
