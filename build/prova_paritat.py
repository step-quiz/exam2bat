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


def web(hash_: str) -> dict:
    r = subprocess.run(["node", "-e", HARNES, str(ARREL), hash_],
                       capture_output=True, text=True)
    if r.returncode:
        raise SystemExit(f"app.js ha petat dins de Node:\n{r.stderr}")
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
    hash_ = "limits-grafica:q001,limits-infinit,continuitat-trossos:q001,bolzano-biseccio:q001,limits-punt:q001"
    r = web(hash_)
    esperat = ["u7/limits-grafica/q001", "u7/continuitat-trossos/q001",
               "u7/bolzano-biseccio/q001", "u7/limits-punt/q001"]
    comprova("el tema buit no entra a l'examen", r["ids"] == esperat, r["ids"])
    cossos = [cos_amb_capcalera(per_id[i]["tex"], f"Pregunta {n}") for n, i in enumerate(esperat, 1)]
    for sol, clau in ((False, "tex"), (True, "sol")):
        py = munta(banc["plantilla"], banc["preambul"], cossos, sol)
        igual = py == r[clau]
        detall = "" if igual else next(
            (f"primera diferència al caràcter {k}" for k, (a, b) in enumerate(zip(py, r[clau])) if a != b),
            f"longituds {len(py)} i {len(r[clau])}")
        comprova(f"paritat JS = Python ({'amb' if sol else 'sense'} solucions, {len(py)} caràcters)", igual, detall)
    comprova("el recompte diu 10,00 punts", "10,00 punts" in r["recompte"], r["recompte"])

    # 2. Una adreça amb codis inexistents i brossa no ha de petar
    r = web("bolzano-biseccio:q999,no-existeix:q001,,limits-punt:q001,limits-punt:q001")
    comprova("codi inexistent → primera variant, sense petar",
             r["ids"] == ["u7/bolzano-biseccio/q001", "u7/limits-punt/q001"], r["ids"])
    comprova("l'adreça es normalitza a codis estables",
             r["hash"] == "bolzano-biseccio:q001,limits-punt:q001", r["hash"])

    # 3. Una selecció buida
    r = web("")
    comprova("sense selecció no hi ha preguntes", r["ids"] == [] and "Cap" in r["recompte"], r["recompte"])

    print(f"\n{'✓ El lloc i el build munten exactament el mateix.' if not fallades else f'✗ {fallades} comprovació(ns) fallides.'}")
    return 1 if fallades else 0


if __name__ == "__main__":
    sys.exit(main())
