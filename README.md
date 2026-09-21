# Banc de preguntes · Matemàtiques II (CT)

Repositori de preguntes d'examen en LaTeX. Tries temes, el lloc et proposa una
pregunta per tema, en veus el PDF i en baixes el `.tex`, sol o muntat en un
examen complet.

**Obrir-lo:** doble clic a `index.html`. No cal servidor ni connexió.

---

## Afegir una pregunta

1. Copia una carpeta existent, per exemple `u7/bolzano-biseccio/q001/`, a
   `u7/bolzano-biseccio/q002/`.
2. Edita `pregunta.tex` i `meta.json`. No toquis res de `out/`.
3. `git push`. L'Action valida, compila i desa els PDF. Si alguna cosa falla,
   no es desa res i ho veus a la pestanya **Actions** amb el motiu exacte.

## Les regles

| # | Regla | Qui la fa complir |
|---|---|---|
| 1 | Les fonts són `pregunta.tex` i `meta.json`. `out/` i `cataleg.js` són **generats**: no s'editen mai. | l'Action els sobreescriu |
| 2 | Tota pregunta val **2,50 punts**. Cada apartat és múltiple de **0,25**. | `build.py` |
| 3 | La puntuació s'escriu **només** a `\apartat{...}`. Enlloc més. | `build.py` la llegeix del `.tex` |
| 4 | Una pregunta és **només el cos**: sense `\documentclass`, `\usepackage` ni `\begin{document}`. | `build.py` |
| 5 | Hi ha **un sol preàmbul**, `build/preambul.tex`. Un paquet nou s'hi afegeix allà i es recompila tot. | `build.py` |
| 6 | Els codis `q001`, `q002`… són **permanents**: mai es renumeren ni es reaprofiten. Les adreces desades en depenen. | tu |
| 7 | `\end{solucio}` va **sol a la seva línia**. | `build.py` |

## Macros del preàmbul

| Escrius | Surt |
|---|---|
| `\begin{apartats} … \end{apartats}` | llista a) b) c) |
| `\apartat{0,75}` | **a)** *(0,75 punts)* |
| `\begin{graella}{3} \sa … & \sa … \end{graella}` | i) ii) iii) en columnes, amb els `\lim` en mode display |
| `\si{-1\le x\le 2}` dins de `cases` | «si −1 ≤ x ≤ 2», amb el signe ben espaiat |
| `\begin{solucio} … \end{solucio}` | només apareix a la versió amb solucions, en blau |

Tota la resta és LaTeX normal.

## `meta.json`

```json
{
  "titol": "Teorema de Bolzano, bisecció i punt de tall de dues corbes",
  "temes_secundaris": [],
  "dificultat": "●●○",
  "origen": [112, 113, 114, 120],
  "minuts": 14,
  "etiquetes": ["Bolzano", "bisecció"]
}
```

El tema principal és la carpeta on viu la pregunta. `origen` són els exercicis
del llibre que la inspiren. `dificultat` és `●○○`, `●●○` o `●●●`.

## Temes

Són a `temes.json`. Un tema nou s'hi afegeix abans de crear-ne la carpeta.

## Proves

```
python3 build/prova_validacio.py   # cada regla fa fallar el build quan cal
python3 build/build.py             # valida i compila (cal TeX Live)
python3 build/prova_paritat.py     # el .tex del lloc = el del build, byte a byte
```

L'Action les executa totes a cada push, en aquest ordre.

## Visibilitat

Aquest repositori ha de ser **privat**: conté les solucions. Amb el pla gratuït
de GitHub, les Actions en repositoris privats consumeixen minuts de la quota
mensual (cada build en gasta uns quants), i GitHub Pages no es pot fer servir
des d'un repositori privat. Per això el lloc està pensat per obrir-se en local.
