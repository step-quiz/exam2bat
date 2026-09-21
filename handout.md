# Handout · Banc de preguntes de Matemàtiques II

**Data:** 21 de setembre de 2026 · **Estat:** 18 preguntes (13 de la unitat 7 i 5 de la PAU)
· 286 minuts d'examen al banc · 21 comprovacions del validador, 9 de sortida del build i 19 de
paritat

Aquest document explica tota la feina feta fins avui i tota la feina pendent, amb prou
detall perquè qualsevol persona pugui reprendre el projecte sense haver seguit les converses
on es va construir. El README descriu com és el projecte; aquest document explica com hi hem
arribat i cap on ha d'anar.

---

## 1. Resum

El projecte ha passat per cinc sessions. La primera va avaluar un `main.tex` fet per una
altra IA i en va treure les lliçons. La segona va construir l'arquitectura: el build, el lloc
web, l'Action de GitHub i les proves. La tercera va completar la unitat 7, amb 13 preguntes
verificades. La quarta va obrir la secció PAU i hi va importar l'examen sencer de juny de
2026. La cinquena va revisar el projecte sencer, en va corregir quatre errors i va fixar les
prioritats. La màquina funciona de punta a punta. El que queda és sobretot contingut: primer
els temes de la u8, que acaba l'1 de novembre, i després els 56 exercicis PAU pendents i la
resta d'unitats.

---

## 2. Com hem arribat aquí

### 2.1 Sessió 1 · Avaluació del `main.tex` original

El punt de partida va ser un examen de límits i continuïtat, generat per una altra IA a
partir dels PNG del solucionari (`sol-main`). La valoració va ser de notable alt (≈7,5/10).

- **Matemàticament, impecable.** Es van verificar totes les respostes, i no n'hi havia cap
  d'errònia.
- **Bona alineació** amb els 23 exercicis assignats a les quatre setmanes de la unitat 7. Hi
  havia dues excepcions: un límit (polinomi entre exponencial) exigia la jerarquia d'infinits,
  que no era a cap exercici assignat; i hi faltaven radicals, valor absolut i logaritme a
  trossos.
- **Defectes de disseny.** Qui triava l'opció 4b no s'examinava de Bolzano, que era tota la
  quarta setmana. L'examen tenia uns 26 ítems, 55-70 minuts, massa just per a una sessió de 55.
- **Defectes de LaTeX.** `\text{si } -1` produïa un signe menys mal espaiat; l'`array` posava
  els `\lim` en estil de text; hi havia un `\displaystyle` en línia i una col·lisió de notació
  ($f$ per a dues funcions); el tractament barrejava «escolliu» i «determina»; la graella era
  massa clara; el separador quedava orfe; i les solucions eren comentaris morts després de
  `\end{document}`.
- **Un error que no es va detectar llavors:** la graella de la gràfica estava desquadrada
  respecte dels enters. Es va descobrir a la sessió 3 (vegeu l'apartat 4).

### 2.2 Sessió 2 · Arquitectura i primer lloc

Decisions del professor: els PDF els compila GitHub Actions (vàlid amb el pla gratuït); la
unitat mínima és una pregunta de 2,5 punts amb apartats múltiples de 0,25; i els exàmens no
porten capçalera.

Es va construir: `build.py` (validar, compilar, generar el catàleg), el preàmbul compartit,
la plantilla d'assemblatge única, el lloc (`index.html`, `app.js`, `style.css`), l'Action,
les dues bateries de proves i el README. Les cinc preguntes de l'examen original es van
migrar al format nou, corregides.

Abans de lliurar, es van trobar i tancar set errors del codi propi (vegeu l'apartat 4). El
més subtil: `String.replace` de JavaScript interpreta `$$` i `$'`, que són habituals en
LaTeX, i corrompia el `.tex` en silenci.

### 2.3 Sessió 3 · La unitat 7 completa

Es van omplir els tres temes buits (`limits-infinit`, `limits-trossos` i `parametres-ab`) i
es va afegir una segona variant als altres cinc: vuit preguntes noves. Cada enunciat es va
calibrar amb els exercicis reals del llibre, i cada `origen` diu la veritat. Es van cobrir
les llacunes detectades a la sessió 1. Per a l'exercici 114, es va seguir el conveni del
llibre: després d'una bisecció, tabula per dècimes.

Totes les respostes es van verificar per dos camins. En fer-ho, es va descobrir que
**SymPy 1.14 calcula malament** $\lim_{x\to-\infty}2^{x}$: diu $+\infty$. Es va contrastar
numèricament.

Es van corregir dos errors del `build.py`, i el més greu de tot el projecte: **la graella
TikZ desquadrada**. Afectava la pregunta de gràfiques que ja era publicada i l'examen
original.

### 2.4 Sessió 4 · La secció PAU

Es va analitzar el repositori `pau`: 62 preguntes, cadascuna amb enunciat (`-e`), pistes del
professor (`-p`) i **criteri d'avaluació oficial** (`-s`). Les 62 valen 2,5 punts amb
apartats múltiples de 0,25, i per tant encaixen al banc sense excepcions. La sessió 5 va
trobar que dues d'aquestes entrades són el mateix exercici: són 61 exercicis diferents
(vegeu 7.6).

La sèrie només apareix a la capçalera del criteri oficial del **primer exercici** de cada
document. D'allà se'n van treure set. Les de juny de 2023 les va confirmar el professor: van
ser les sèries 1 i 5, per aquest ordre, i no la 4 que deia l'exemple inicial. Les de
setembre de 2023 i juny de 2024 provenen d'una rèplica pública.

Troballa estructural: **cap pregunta PAU es pot fer sencera al final de la unitat 7.** Totes
les que toquen límits, continuïtat o Bolzano ho barregen amb derivades, monotonia o àrees.
Per això el professor va triar una **secció PAU per blocs** (Àlgebra, Geometria, Anàlisi i
Probabilitat), i cada pregunta indica fins a quina unitat cal haver arribat.

Es va importar l'examen sencer de juny de 2026, sèrie 1: exercicis 1, 2, 3, 4A i 4B. Es van
verificar 32 resultats dels criteris oficials, i es va trobar una errada al document oficial:
$D(4{,}5)=6{,}85$, quan el valor correcte és 6,875. Es va corregir amb una *Nota del banc*.

### 2.5 Sessió 5 · Revisió i correccions

Una revisió completa del codi, de les dades i de les 18 preguntes, contrastada amb els
repositoris `pau` i `sol` i amb el full de programació del curs.

- **Codi.** És net i està ben estructurat. S'hi van trobar quatre errors, tots corregits
  (vegeu l'apartat 4). El catàleg podia portar un preàmbul de prova i un build fallit deixava
  PDF escrits a `out/`. A més, una adreça mal formada deixava la pàgina en blanc, i el push del
  bot fallava si la branca avançava durant el build. Cada correcció té la seva prova, i s'ha
  comprovat que la prova falla amb el codi antic.
- **Contingut.** Es va fer una segona verificació independent de les 18 preguntes i no s'hi
  va trobar cap error. Tots els `origen` són dins dels 23 exercicis assignats a la u7.
- **Compilació real.** Per primera vegada es va compilar amb `lmodern` i `babel` català, els
  mateixos paquets que instal·la l'Action. Les 18 preguntes ocupen una pàgina i no hi ha cap
  *Overfull*. L'examen PAU de juny de 2026 baixat del lloc compila en 2 pàgines, i la versió
  amb solucions, en 5.
- **Repositori `pau`.** `pro-25s-q3ab` i `ana-25s-q3c` són el mateix exercici: els tres PDF
  (`-e`, `-p`, `-s`) tenen el mateix text. Hi ha 61 exercicis diferents, no 62, i en queden 56
  per importar (vegeu 7.6).
- **Programació del curs.** El full «2Bat - Unitats i feina Classroom» dona els títols de les
  unitats 1 a 6 i l'ordre real del curs, que no és el numèric (vegeu 7.4 i 7.5).
- **Repositori real (`step-quiz/exam2bat`).** Els lliuraments s'hi apliquen pujant el ZIP a
  `_uploads`, i un workflow d'extracció en fa commit. Aquest bot no pot escriure a
  `.github/workflows/`, i per això `compila.yml` no hi ha arribat mai: al Codespace, `git
  status` el mostrava com a fitxer no seguit. L'Action «Compila el banc» no s'havia executat
  mai, i els PDF del repositori són els del ZIP complet (vegeu 7.1).

---

## 3. Decisions preses

| Decisió | Origen | Per què |
|---|---|---|
| PDF compilats per GitHub Actions | Professor | El navegador no compila LaTeX; és gratuït |
| Pregunta de 2,5 punts, apartats múltiples de 0,25 | Professor | 4 preguntes = 10 punts; coincideix exactament amb la PAU |
| Exàmens sense capçalera | Professor | Preferència del professor |
| Repositori privat | Proposta acceptada | Conté solucions; en públic, GitHub Pages les exposaria |
| Solucions dins de cada pregunta (`\ifsolucions`) | Disseny | Dues versions a partir d'un sol font |
| Plantilla d'assemblatge única per a Python i JS | Disseny | El `.tex` baixat i el compilat no poden divergir |
| Catàleg amb el LaTeX incrustat | Disseny | El lloc funciona obert com a fitxer, sense servidor |
| L'adreça guarda codis estables, no posicions | Disseny | Les seleccions desades no es poden trencar |
| Secció PAU per blocs | Professor | No es pot fer cap PAU sencera al final de la u7, i no calen encara els temes de les altres unitats |
| Juny de 2023 = sèries 1 i 5 | Professor | Dada confirmada amb els originals |
| Enunciats PAU literals (vosaltres) | Disseny, **revisable** | Fidelitat a l'examen real |
| Solució PAU = criteri oficial + pauta | Disseny | Autoritat i utilitat per corregir; les errades es corregeixen amb nota |
| Apartats PAU numerats a), b), c) | Disseny | Coherència dins d'un examen muntat |
| Primer la u8, després la PAU | Professor | La u8 acaba l'1 de novembre; la PAU no té data |
| El filtre PAU segueix l'ordre real del curs | Proposta acceptada | El curs fa u7–u10, u13, u14, u1–u6, u11 i u12: l'ordre numèric enganyaria |
| La u4 (Vectors a l'espai) es fa dins de la u5 | Professor | Manera habitual de programar-la |
| Lliurament per canvis, a partir de l'estat del repositori | Proposta acceptada | Substituir el repositori per un ZIP pot desfer canvis fets entre sessions |
| Els PDF i el catàleg només els desa l'Action | Disseny | Si també se'n fa commit en local, xoquen amb el commit del bot |
| `--preambul` només canvia la compilació | Disseny | El catàleg ha de portar sempre el preàmbul oficial |

---

## 4. Errors trobats i corregits

| Error | On | Correcció |
|---|---|---|
| `\text{si } -1` espaia el menys com a binari | Examen original | Macro `\si{…}` |
| Graella TikZ desquadrada (passos d'1 cm absolut) | Original i `limits-grafica/q001` | `step=1` i **regla 8** al validador |
| `replace` de JS interpretava `$$`, `$'` i `$&` | `app.js` | Substituts en forma de funció |
| La numeració de les targetes no coincidia amb la del `.tex` si hi havia un tema buit | `app.js` | Numeració només de temes amb preguntes |
| L'adreça guardava posicions | `app.js` | Codis estables (`tema:q002`) |
| Text del catàleg sense escapar dins de l'HTML | `app.js` | `esc()` |
| Botons il·legibles en mode fosc | `style.css` | Token `--sobre-acc` |
| «4 preguntas» (castellà) | `app.js` | «preguntes» |
| La barra inferior partia «10,00 / punts» al mòbil | `style.css` | Talls només als separadors |
| El build petava amb avisos amb accents (sortida T1 de `pdflatex`) | `build.py` | Descodificació tolerant |
| `--pregunta` generava un catàleg mutilat | `build.py` | Només limita la compilació |
| La prova de paritat depenia que un tema real fos buit | `prova_paritat.py` | Tema buit sintètic |
| Fórmules llargues en línia desbordaven | 2 preguntes | Passades a mode destacat |
| $D(4{,}5)=6{,}85$ en lloc de 6,875 | **Criteri oficial** PAU 2026 | Valor correcte i *Nota del banc* |
| `--preambul` escrivia el preàmbul de prova al catàleg, i els `.tex` baixats en sortien sense `babel` | `build.py` | El catàleg porta sempre `build/preambul.tex`, i el build avisa que aquells PDF no són definitius |
| Un build fallit deixava a `out/` els PDF que ja havia compilat | `build.py` | Es compila en una carpeta temporal i es copia a `out/` només si no hi ha cap error |
| Una adreça amb un `%` solt, o amb `#__proto__` o `#constructor`, deixava la pàgina en blanc | `app.js` | Descodificació tolerant i `PER_TEMA` sense prototip |
| El push del bot era rebutjat si la branca avançava durant el build | `compila.yml` | `git pull --rebase` i fins a tres intents |

---

## 5. Què està verificat i què no

**Verificat:**

- Les respostes de les 13 preguntes de la u7, amb càlcul simbòlic i un segon mètode per a
  tots els límits a l'infinit.
- 32 resultats dels criteris oficials de juny de 2026, per un mètode independent.
- `prova_validacio.py`: 21 avaries provocades, cadascuna rebutjada pel build.
- `prova_sortida.py`: 9 comprovacions, sense TeX (un `pdflatex` fals al PATH). Un build que
  falla, per validació o per compilació, no toca cap fitxer. Un de correcte els escriu tots,
  `--pregunta` només escriu els de la pregunta indicada i `--preambul` no arriba al catàleg.
  També s'ha confirmat amb el `pdflatex` real.
- `prova_paritat.py`: 19 comprovacions. El lloc (executant l'`app.js` real) i el build
  munten el mateix `.tex`, byte a byte, també amb preguntes PAU i amb la procedència al lloc
  exacte. Tres adreces mal formades s'ignoren sense que la pàgina peti.
- En un Chromium real: selecció, variants, adreça, recàrrega, descàrregues, secció PAU i
  adreces mal formades.
- La compilació amb el preàmbul oficial, amb `lmodern` i `babel` català (sessió 5). Les 18
  preguntes ocupen una pàgina, sense cap *Overfull*. El `main.tex` baixat de l'examen de 2026
  compila en 2 pàgines, i el de solucions, en 5.
- El pas de desar de l'Action, simulat amb un remot local i un clon superficial en quatre
  casos. Sense canvis, no fa res. En un push normal, desa. Si la branca ha avançat, incorpora el
  commit nou i desa. Si hi ha un conflicte, falla sense desar res.

**No verificat en aquest entorn:**

- El visor de PDF incrustat, perquè el navegador sense pantalla no en té. Si un navegador no
  el mostra, cada targeta té un enllaç per obrir el PDF en una pestanya.

---

## 6. Inventari

### 6.1 Unitat 7 · Límits i continuïtat (13 preguntes)

| Tema | Codi | Títol | Punts | Dif. | Llibre |
|---|---|---|---|---|---|
| Bolzano i bisecció | `q001` | Teorema de Bolzano, bisecció i punt de tall de dues corbes | 1,00 + 0,75 + 0,75 | ●●○ | 112, 113, 114, 120 |
| Bolzano i bisecció | `q002` | Bolzano per assolir un valor, arrel amb error menor que una dècima i punt de tall | 1,00 + 1,00 + 0,50 | ●●○ | 43, 113, 114, 120 |
| Continuïtat de funcions a trossos | `q001` | Paràmetres de continuïtat i classificació en una funció a trossos | 1,25 + 1,25 | ●●○ | 40, 103, 106 |
| Continuïtat de funcions a trossos | `q002` | Continuïtat d'una funció a trossos amb logaritme i d'una funció amb valor absolut | 1,25 + 1,25 | ●●● | 93, 102 |
| Domini i discontinuïtats | `q001` | Domini, classificació de discontinuïtats i construcció d'una racional | 0,75 + 1,00 + 0,75 | ●●○ | 47, 93, 94 |
| Domini i discontinuïtats | `q002` | Dominis amb radical i logaritme, discontinuïtats d'una racional amb Ruffini i funció inventada | 0,75 + 1,00 + 0,75 | ●●○ | 47, 93, 94 |
| Límits a partir d'una gràfica | `q001` | Límits i continuïtat llegits sobre una gràfica | 1,25 + 1,25 | ●○○ | 44, 66, 68, 92 |
| Límits a partir d'una gràfica | `q002` | Límits i continuïtat sobre una gràfica amb un angle, un forat i una asímptota | 1,25 + 1,25 | ●●○ | 44, 66, 68, 92 |
| Límits en l'infinit | `q001` | Límits en l'infinit: racionals, potències, exponencials i un paràmetre | 1,00 + 0,75 + 0,75 | ●●○ | 45, 46, 48 |
| Límits en un punt | `q001` | Càlcul de límits: infinit, indeterminació 0/0 i funció a trossos | 1,00 + 0,75 + 0,75 | ●●○ | 46, 48, 76, 88, 90 |
| Límits en un punt | `q002` | Límits en un punt: 0/0 amb Ruffini, funció amb radical i límits infinits | 1,00 + 0,75 + 0,75 | ●●○ | 70, 76 |
| Límits de funcions a trossos | `q001` | Límits d'una funció a trossos amb paràmetre i indeterminació 0/0 | 0,75 + 1,25 + 0,50 | ●●○ | 76, 88, 90 |
| Paràmetres per a la continuïtat | `q001` | Paràmetres de continuïtat amb exponencial i logaritme, i un paràmetre amb dues solucions | 1,50 + 1,00 | ●●○ | 40, 102, 106 |

### 6.2 Registre de convocatòries PAU

| Codi | Convocatòria | Sèrie | Font |
|---|---|---|---|
| `23j` | juny 2023 | 1 | Confirmat pel professor: el juny de 2023 es van publicar les sèries 1 i 5, per aquest ordre. |
| `23j2` | juny 2023 | 5 | Confirmat pel professor; coincideix amb el catàleg del repositori pau. |
| `23s` | setembre 2023 | 2 | examenselectivitat.cat (Matemàtiques 2023, setembre, sèrie 2). El tall del criteri oficial no conserva la capçalera. |
| `24i` | juny 2024 | 5 | Capçalera del criteri oficial: ana-24i-q1-s.pdf. |
| `24j` | juny 2024 | 1 | examenselectivitat.cat: juny 2024 = sèries 1 i 5; la 5 és la 24i. El tall del criteri oficial no conserva la capçalera. |
| `24s` | setembre 2024 | 3 | Capçalera del criteri oficial: ana-24s-q1-s.pdf. |
| `25i` | juny 2025 | 4 | Capçalera del criteri oficial: ana-25i-q1-s.pdf. |
| `25j` | juny 2025 | 1 | Capçalera del criteri oficial: ana-25j-q1-s.pdf. |
| `25s` | setembre 2025 | 3 | Capçalera del criteri oficial: ana-25s-q1-s.pdf. |
| `26j` | juny 2026 | 1 | Capçalera del criteri oficial: ana-26j-q1-s.pdf. |
| `26j2` | juny 2026 | 5 | Capçalera del criteri oficial: ana-26j2-q1-s.pdf. |

### 6.3 Seguiment de les 62 entrades PAU (61 exercicis)

Ordenades de la més recent a la més antiga, que és l'ordre d'importació recomanat.

| Codi | Convocatòria | Bloc | Títol (catàleg del repositori `pau`) | Estat |
|---|---|---|---|---|
| `ana-26j2-q1` | juny 2026 · s5 | Anàlisi | Paràbola i hipèrbola: punts de tall i àrea entre corbes | pendent |
| `alg-26j2-q2` | juny 2026 · s5 | Àlgebra | Matrius M, N: invertibilitat de MN i NM | pendent |
| `pro-26j2-q3` | juny 2026 · s5 | Probabilitat | Lectura i esport: prob. total, Bayes i extrems de f(x) | pendent |
| `ana-26j2-q4a` | juny 2026 · s5 | Anàlisi | f(x) a partir de la gràfica de f'(x): tangent, extrems, àrea | pendent |
| `geo-26j2-q4b` | juny 2026 · s5 | Geometria | Braç robòtic: distància, pla i punt de xoc | pendent |
| `ana-26j-q1` | juny 2026 · s1 | Anàlisi | Funció a trossos amb exponencial i paràbola: continuïtat i àrea | ✅ importada |
| `alg-26j-q2` | juny 2026 · s1 | Àlgebra | Sistema de tres plans amb paràmetre m | ✅ importada |
| `pro-26j-q3` | juny 2026 · s1 | Probabilitat | Entrades de concert: sorteig i web; Bolzano amb decibels | ✅ importada |
| `ana-26j-q4a` | juny 2026 · s1 | Anàlisi | Optimització: barana circular i quadrada de 10 m | ✅ importada |
| `geo-26j-q4b` | juny 2026 · s1 | Geometria | Pla PQR, àrea del triangle i tetraedre de volum 1 | ✅ importada |
| `ana-25j-q1` | juny 2025 · s1 | Anàlisi | f(x)=(x²−2x)/(x−1): asímptotes, tangents, pendent | pendent |
| `alg-25j-q2` | juny 2025 · s1 | Àlgebra | Sistema lineal amb paràmetre p | pendent |
| `pro-25j-q3` | juny 2025 · s1 | Probabilitat | Peces ferro/acer: prob. total, binomial i màxim f(p) | pendent |
| `ana-25j-q4a` | juny 2025 · s1 | Anàlisi | Vela semiparabòlica: cost del material | pendent |
| `geo-25j-q4b` | juny 2025 · s1 | Geometria | Pla perpendicular a x+y=0 i recta mediadora | pendent |
| `ana-25s-q1` | setembre 2025 · s3 | Anàlisi | Optimització: terreny triangular A(m) mínim | pendent |
| `alg-25s-q2` | setembre 2025 · s3 | Àlgebra | Sistema lineal amb paràmetre m | pendent |
| `pro-25s-q3ab` | setembre 2025 · s3 | Probabilitat | Sesamoïditis: probabilitat total i Bayes | pendent · **mateix exercici que `ana-25s-q3c`** (7.6) |
| `ana-25s-q3c` | setembre 2025 · s3 | Anàlisi | Trobar a, b, c de f(x)=ax³+bx²+cx per condicions | pendent · **mateix exercici que `pro-25s-q3ab`** (7.6) |
| `ana-25s-q4a` | setembre 2025 · s3 | Anàlisi | Vitrall Sagrada Família: sin(x/4) i cos(x/4) | pendent |
| `geo-25s-q4b` | setembre 2025 · s3 | Geometria | Plans paral·lels a 2x−y+z=5 i distàncies | pendent |
| `ana-25i-q1` | juny 2025 · s4 | Anàlisi | f(x)=√(1+x³): domini, derivada, tangent | pendent |
| `alg-25i-q2` | juny 2025 · s4 | Àlgebra | Sistema amb plans π₁,π₂,π₃ (paràmetre a) | pendent |
| `pro-25i-q3` | juny 2025 · s4 | Probabilitat | Filtre de correu brossa: prob. total, Bayes i integral | pendent |
| `ana-25i-q4a` | juny 2025 · s4 | Anàlisi | Optimització: ampolla cilindre + mitja esfera | pendent |
| `alg-25i-q4b` | juny 2025 · s4 | Àlgebra | Matrius que commuten; invertibilitat; A⁻¹=A | pendent |
| `ana-24s-q1` | setembre 2024 · s3 | Anàlisi | f(x)=3x¹³+5x³+2: Bolzano i monotonia | pendent |
| `alg-24s-q2` | setembre 2024 · s3 | Àlgebra | Sistema lineal amb paràmetre m | pendent |
| `ana-24s-q3` | setembre 2024 · s3 | Anàlisi | Àrees del logotip: cúbica i paràbola | pendent |
| `pro-24s-q4` | setembre 2024 · s3 | Probabilitat | Arrítmia i monitor Holter: prob. total i Bayes | pendent |
| `ana-24s-q5` | setembre 2024 · s3 | Anàlisi | Rectangle inscrit en y=e^(−2x): àrea màxima i tangent | pendent |
| `geo-24s-q6` | setembre 2024 · s3 | Geometria | Recta perpendicular a un pla i plans paral·lels | pendent |
| `ana-24j-q1` | juny 2024 · s1 | Anàlisi | f(x)=2·ln(x)/x: extrems, asímptotes, tangent | pendent |
| `alg-24j-q2` | juny 2024 · s1 | Àlgebra | Sistema lineal amb paràmetre k | pendent |
| `ana-24j-q3` | juny 2024 · s1 | Anàlisi | Àrea d'un terreny: cúbica i recta PR | pendent |
| `pro-24j-q4` | juny 2024 · s1 | Probabilitat | Boles B,A,Y,E,S,F,A,N,S: sense i amb reemplaçament | pendent |
| `ana-24j-q5` | juny 2024 · s1 | Anàlisi | Optimització: cobert de fusta adossat a una paret | pendent |
| `geo-24j-q6` | juny 2024 · s1 | Geometria | Pla mediador i triangle isòsceles | pendent |
| `ana-24i-q1` | juny 2024 · s5 | Anàlisi | f(x)=−2+10(x−1)·ln(x): Bolzano, monotonia, límits | pendent |
| `alg-24i-q2` | juny 2024 · s5 | Àlgebra | Matriu invertible i equació matricial PX+Q=2R | pendent |
| `ana-24i-q3` | juny 2024 · s5 | Anàlisi | Paràboles f_a: tangent i àrea entre corbes | pendent |
| `pro-24i-q4` | juny 2024 · s5 | Probabilitat | La Rut i els problemes: prob. total, Bayes, binomial | pendent |
| `ana-24i-q5` | juny 2024 · s5 | Anàlisi | Optimització: decorat rectangle + semicercles | pendent |
| `geo-24i-q6` | juny 2024 · s5 | Geometria | Posició relativa de rectes i perpendicular comuna | pendent |
| `alg-23s-q1` | setembre 2023 · s2 | Àlgebra | Matriu inversa via (A−2I)²=3I | pendent |
| `ana-23s-q2` | setembre 2023 · s2 | Anàlisi | f(x)=1/x: tangent i triangle d'àrea constant | pendent |
| `alg-23s-q3` | setembre 2023 · s2 | Àlgebra | Sistema lineal amb paràmetre m | pendent |
| `ana-23s-q4` | setembre 2023 · s2 | Anàlisi | Bolzano i àrea entre f(x) i h(x) | pendent |
| `geo-23s-q5` | setembre 2023 · s2 | Geometria | Perpendicular comuna de dues rectes i distància | pendent |
| `ana-23s-q6` | setembre 2023 · s2 | Anàlisi | Optimització: trapezi isòsceles d'àrea màxima | pendent |
| `ana-23j2-q1` | juny 2023 · s5 | Anàlisi | Àrea de la regió delimitada per f(x)=−x²+x+6 i g(x)=−9x+3x² | pendent |
| `alg-23j2-q2` | juny 2023 · s5 | Àlgebra | Sistema lineal amb paràmetre k | pendent |
| `geo-23j2-q3` | juny 2023 · s5 | Geometria | Posició relativa de rectes a l'espai segons m i distància | pendent |
| `ana-23j2-q4` | juny 2023 · s5 | Anàlisi | Optimització: torre de comunicacions i cost del cablejat | pendent |
| `alg-23j2-q5` | juny 2023 · s5 | Àlgebra | Família de matrius 2×2 amb a, b ∈ ℝ | pendent |
| `ana-23j2-q6` | juny 2023 · s5 | Anàlisi | Funció racional: paràmetres a, b per extrem relatiu | pendent |
| `ana-23j-q1` | juny 2023 · s1 | Anàlisi | Polinomi cúbic determinat per condicions sobre f, f', f'' | pendent |
| `alg-23j-q2` | juny 2023 · s1 | Àlgebra | Producte de matrius A·B i propietat idempotent | pendent |
| `ana-23j-q3` | juny 2023 · s1 | Anàlisi | Funció f'(x) per trams i recta tangent a f' | pendent |
| `alg-23j-q4` | juny 2023 · s1 | Àlgebra | Sistema lineal amb paràmetre λ | pendent |
| `ana-23j-q5` | juny 2023 · s1 | Anàlisi | Optimització: jardí rectangular adossat a un mur | pendent |
| `geo-23j-q6` | juny 2023 · s1 | Geometria | Plans perpendiculars i punt més proper a una recta | pendent |

---

## 7. Feina pendent

### 7.1 Com s'apliquen els lliuraments

Des de la sessió 5, cada sessió parteix de l'estat actual del repositori i lliura només els
fitxers de font que canvia. Tot es fa des de la web de GitHub; no cal el Codespace.

- **A l'inici de la sessió**, el professor baixa el repositori de GitHub (Code → Download ZIP)
  i el puja a la conversa. No serveix el ZIP de la sessió anterior, perquè pot no incloure
  canvis fets després.
- **Al final**, la sessió lliura un ZIP amb una sola carpeta, `banc-preguntes/`, que conté
  només els fitxers de font que canvien, amb els camins del repositori. Mai no porta PDF, ni
  `cataleg.js`, ni res de `.github/workflows/`.
- **Per aplicar-lo**, el professor puja el ZIP a la carpeta `_uploads` (Add file → Upload
  files). Un workflow del repositori el descomprimeix a l'arrel i en fa commit, amb el missatge
  «Auto-extract uploaded zip».
- **Després, cal llançar el build a mà** des d'Actions → Compila el banc → Run workflow.
  GitHub no encadena els workflows: un commit fet pel bot d'extracció no dispara cap altre
  workflow, tampoc «Compila el banc».
- **Els workflows** (`.github/workflows/`) no poden arribar per `_uploads`, perquè el bot no té
  permís per escriure-hi. Es creen i s'editen des de la web de GitHub, enganxant-ne el
  contingut.

**Aquest lliurament (sessió 5)** es fa en dos passos. Primer, un ZIP amb sis fitxers per
`_uploads`: `build/build.py`, `build/prova_sortida.py` (nou), `build/prova_paritat.py`,
`assets/app.js`, `README.md` i `handout.md`. Després, cal crear `.github/workflows/compila.yml`
des de la web, perquè el repositori no el té (vegeu 2.5). En crear-lo, l'Action s'executa per
primera vegada i compila tots els PDF amb el preàmbul oficial. D'aquesta manera se
substitueixen els del ZIP complet, que s'havien compilat sense `lmodern` ni `babel`. L'Action
té set passos, i tots han de sortir en verd.

### 7.2 Dades del professor

- **Unitats 1 a 6: resolt.** Els títols surten del full de programació i la u4 la va confirmar
  el professor. Són Matrius (u1), Determinants (u2), Sistemes d'equacions (u3), Vectors a
  l'espai (u4, que es fa dins de la u5), Rectes i plans en l'espai (u5) i Angles i distàncies
  a l'espai (u6). S'han d'afegir a `temes.json`, i llavors es poden omplir les `unitats`
  d'`alg-26j-q2` i de `geo-26j-q4b`. Mentre no hi siguin, les targetes diuen «per definir» i el
  build n'avisa. Una PAU que necessiti vectors ha de dir `u5`, no `u4`.
- **Pendent de confirmar: l'exercici 92 de la u8.** Surt a les setmanes 5 i 7, tant al full de
  programació com a `tasques.js` del repositori `sol`. Cal saber si és volgut abans de
  calibrar els temes de la u8.
- Opcionalment, **confirmar amb els originals** les sèries de `23s` (2) i `24j` (1), que avui
  provenen d'una rèplica pública.

### 7.3 Importació PAU: 56 exercicis en 10 convocatòries

Es fa després de la u8 (decisió de la sessió 5).

| Convocatòria | Sèrie | Pendents |
|---|---|---|
| `26j2` juny 2026 | 5 | 5 |
| `25j` juny 2025 | 1 | 5 |
| `25s` setembre 2025 | 3 | 5 exercicis (6 entrades al repositori `pau`; vegeu 7.6) |
| `25i` juny 2025 | 4 | 5 |
| `24s` setembre 2024 | 3 | 6 |
| `24j` juny 2024 | 1 | 6 |
| `24i` juny 2024 | 5 | 6 |
| `23s` setembre 2023 | 2 | 6 |
| `23j2` juny 2023 | 5 | 6 |
| `23j` juny 2023 | 1 | 6 |

Ritme proposat: **dues convocatòries per sessió**, unes onze preguntes, en cinc sessions.
Algunes preguntes tenen figures (per exemple, la gràfica de $f'(x)$ de `ana-26j2-q4a`) que
s'han de refer en TikZ; compten el doble de feina.

Les preguntes anteriors a 2025 segueixen el format antic, en què es triaven 4 qüestions de
6. Continuen sent de 2,5 punts i hi encaixen igual.

### 7.4 Contingut del banc, en l'ordre del calendari

L'ordre de les unitats el fixa la programació del curs: el full «2Bat - Unitats i feina
Classroom» i, per a les setmanes ja programades, `tasques.js` del repositori `sol`. No és
l'ordre numèric.

| Unitat | Setmanes | Última data límit |
|---|---|---|
| u7 Límits i continuïtat | 1–4 | 11 d'octubre de 2026 · **feta** |
| u8 Derivades | 5–7 | 1 de novembre de 2026 · **la següent** |
| u9 Aplicacions de les derivades | 8–10 | 22 de novembre de 2026 |
| u10 Representació de funcions | 11–12 i 17 | 6 de desembre de 2026 i 10 de gener de 2027 |
| u13 Probabilitat | 13–14 | 20 de desembre de 2026 |
| u14 Distribucions de probabilitat | 15–16 | 3 de gener de 2027 |
| u1 Matrius | 18–19 | 24 de gener de 2027 |
| u2 Determinants | 20–22 | 14 de febrer de 2027 |
| u3 Sistemes d'equacions | 23–25 | 7 de març de 2027 |
| u5 Rectes i plans en l'espai (amb la u4) | 26–30 | 11 d'abril de 2027 |
| u6 Angles i distàncies a l'espai | 31–32 | 25 d'abril de 2027 |
| u11 Integrals | 33–34 | 9 de maig de 2027 |
| u12 La integral definida | 35–36 | 23 de maig de 2027 |

- **Temes i preguntes de la u8**, que són la prioritat. Cal seguir el mateix patró de la u7:
  taxonomia de temes, calibratge amb els exercicis assignats a les setmanes 5 a 7 i verificació
  per dos camins. Són 17 exercicis, 16 de diferents (vegeu 7.2).
- Després, les unitats en l'ordre de la taula.
- Segona variant per a `limits-infinit`, `limits-trossos` i `parametres-ab`, els tres temes
  de la u7 que només en tenen una.

### 7.5 Millores del lloc

- **Filtre de preguntes PAU per unitats fetes.** Amb 29 preguntes d'anàlisi, recórrer-les amb
  ◀ ▶ serà feixuc: és la millora més necessària quan avanci la importació. El filtre ha de
  seguir l'**ordre real del curs** de la taula de 7.4, no l'ordre numèric: «fins a la u9» vol
  dir u7, u8 i u9, però «fins a la u1» inclou també la u10, la u13 i la u14. Aquesta seqüència
  s'ha de desar com a dada, per exemple a `temes.json`, i no s'ha de deduir dels números. Un
  cop existeixi, la u1 i les altres unitats noves s'hi afegeixen en l'ordre del curs.
- **Conservar els visors PDF oberts.** Ara cada clic torna a pintar totes les targetes: els
  `iframe` es recreen i els PDF es tornen a carregar. Amb molts visors oberts es notarà.
- Al mòbil, llista de temes plegable. Ara la llista queda sencera abans de l'examen.
- Els noms de les unitats apareixen en passar el ratolí per sobre, i això no funciona en
  pantalles tàctils. Cal mostrar-los d'una altra manera.
- Poder reordenar les preguntes de l'examen. Ara surten en l'ordre en què es trien.

### 7.6 Decisions obertes

- **Com s'importa l'exercici 3 de setembre de 2025.** El repositori `pau` el té dues vegades,
  com a `pro-25s-q3ab` i com a `ana-25s-q3c`. És un sol exercici de 2,5 punts: a) i b) de
  probabilitat, i c) de derivades. Si s'importen totes dues entrades, un examen el podria
  portar dues vegades. Si només s'importen a) i b), sumen 1,5 punts i el build les rebutja.
  La proposta és importar-lo **una sola vegada**, al bloc de probabilitat i amb els tres
  apartats. Cal triar el codi abans, perquè serà permanent:
  - `pro-25s-q3ab` manté l'identificador del repositori `pau`, però suggereix que només té
    els apartats a) i b);
  - `pro-25s-q3` descriu millor l'exercici, però trenca la regla que el codi és el del
    repositori `pau`.
- **Fer els PDF reproduïbles.** pdfTeX hi escriu la data i un identificador. Per això cada
  build reescriu tots els PDF encara que no canviïn, i el commit del bot els toca tots cada
  vegada. Amb `SOURCE_DATE_EPOCH` i `FORCE_SOURCE_DATE=1` fixos a l'Action, dos builds
  idèntics no canvien cap PDF (comprovat a la sessió 5). Caldria fer el mateix amb el camp
  `generat` del catàleg, que ara canvia a cada build.
- **Tractament de vosaltres o de tu.** Si un examen barreja preguntes PAU (literals, amb
  vosaltres) amb preguntes del banc (amb tu), hi conviuen les dues formes.
- Si s'hi incorporen les **pistes** del repositori `pau` (els PDF `-p`), com una tercera vista
  al costat de l'enunciat i la solució.
- Si mai el repositori es fa públic, caldrà revisar els drets dels enunciats i dels criteris
  PAU, i decidir-ne la llicència.

---

## 8. Riscos i limitacions coneguts

- **Els workflows no poden arribar per `_uploads`.** El bot d'extracció no té permís per
  escriure a `.github/workflows/`, i un push des del Codespace, amb el permís per defecte,
  tampoc. Es creen i s'editen des de la web de GitHub.
- **El build no es dispara sol després d'una pujada a `_uploads`.** El commit del bot
  d'extracció no activa cap altre workflow: cal llançar «Compila el banc» a mà (7.1).
- **Fitxers generats per una altra via.** Els PDF i `cataleg.js` només els ha de generar
  l'Action. Si n'arriben per `_uploads` o des del Codespace, poden no coincidir amb les fonts.
  A més, si arriben mentre l'Action treballa, el pas de desar xoca i falla sense desar res
  (simulat a la sessió 5).
- **PDF no reproduïbles.** Cada build reescriu tots els PDF encara que no canviïn (vegeu 7.6).
- **GitHub Pages publicaria les solucions.** Amb el pla gratuït, Pages només publica
  repositoris públics. Amb GitHub Pro publica repositoris privats, però el lloc publicat és
  públic: qualsevol persona amb l'adreça veuria les solucions. Només GitHub Enterprise Cloud
  permet un lloc privat. Per veure el lloc des de GitHub sense publicar res, vegeu el README
  («Veure el lloc des del Codespace»).
- **Quota de minuts.** Les Actions en repositoris privats consumeixen minuts del pla
  gratuït. Cada build instal·la TeX Live i en gasta uns pocs.
- **Visor de PDF.** Depèn del navegador; hi ha l'enllaç alternatiu.
- **SymPy 1.14** s'equivoca amb límits d'exponencials a $-\infty$. Qualsevol verificació ha de
  tenir un segon mètode.

---

## 9. Procediment per importar una convocatòria PAU

És el procediment que es va seguir amb juny de 2026.

1. **Llegir els originals com a imatge, no com a text.** El text dels PDF perd les fórmules
   (`e2x –1` vol dir $e^{2x-1}$), i hi ha funcions a trossos que no hi surten. Cal renderitzar
   `data/<codi>-e.pdf` i `data/<codi>-s.pdf` i llegir-los.
2. **Transcriure l'enunciat literalment** a `pau/<bloc>/<codi>/pregunta.tex`, amb les macros
   del banc: `\apartat{}` amb la puntuació oficial, `\si{}` a les funcions a trossos, i TikZ
   amb `step=1` si hi ha figures.
3. **Transcriure el criteri oficial** a cada `solucio`, i acabar cada apartat amb
   «*Pauta oficial:* …».
4. **Verificar tots els resultats** per un mètode independent, amb càlcul simbòlic i un segon
   camí per als límits a l'infinit. Si el criteri oficial s'equivoca, corregir-ho i deixar una
   *Nota del banc*.
5. **Escriure el `meta.json`**: títol, unitats necessàries, dificultat, uns 22 minuts i
   etiquetes.
6. **Compilar** amb `python3 build/build.py --pregunta pau/`. Cada enunciat ha d'ocupar una
   pàgina, i no hi pot haver cap *Overfull*: les fórmules llargues en línia han de passar a mode
   destacat. Si a l'entorn falten paquets, s'afegeix `--preambul` amb un preàmbul reduït, i el
   build avisa que aquells PDF no són definitius.
7. **Passar les proves**: `prova_validacio.py`, `prova_sortida.py` i `prova_paritat.py`.
8. **Fer un PDF de revisió del lot** perquè el professor el contrasti amb els originals.
9. **Lliurar només les fonts**, pel mètode de 7.1. Mai PDF ni `cataleg.js`.

Si el repositori `pau` incorpora convocatòries noves, s'han d'afegir a
`pau/convocatories.json` amb la seva font. La sèrie es troba a la capçalera del criteri oficial
del primer exercici.

---

## 10. Trampes tècniques ja conegudes

| Trampa | Com s'evita |
|---|---|
| `String.replace` amb una cadena interpreta `$$`, `$'`, `$&` | Sempre un substitut en forma de funció |
| `grid` de TikZ fa passos d'1 cm absolut | `step=1` explícit (regla 8) |
| `pdflatex` escriu els accents en T1, no en UTF-8 | Descodificació tolerant de la sortida |
| El paquet `comment` exigeix `\end{solucio}` sol a la línia | Regla 7 |
| Una macro amb `@` definida fora de `\makeatletter` | Tot el bloc dins de `\makeatletter … \makeatother` |
| `\si` xoca amb `siunitx` si mai s'hi carrega | El build fallaria en voler redefinir-la; caldria reanomenar-la |
| `grep [ÈE]` no funciona amb UTF-8 | Fer servir Python amb normalització Unicode |
| El commit del bot podria tornar a disparar l'Action | Filtre de camins, `[skip ci]` i `GITHUB_TOKEN` |
| `decodeURIComponent` llança una excepció amb un `%` solt | `try/catch`: l'adreça es llegeix sense descodificar (regla 5 d'`app.js`) |
| Un objecte `{}` troba `__proto__` i `constructor` com si fossin temes | `PER_TEMA` es crea amb `Object.create(null)` |
| Si la branca avança durant el build, el push del bot és rebutjat | `git pull --rebase` i fins a tres intents |
| pdfTeX escriu la data i un identificador a cada PDF | `SOURCE_DATE_EPOCH` (pendent, 7.6) |
| Provar el build sense TeX | Un `pdflatex` fals al PATH, com fa `prova_sortida.py` |

---

## 11. Aquest lliurament

És el primer lliurament amb el mètode nou (7.1). Té dues parts.

El ZIP `banc-preguntes-sessio5.zip`, per pujar a `_uploads`, conté una carpeta
`banc-preguntes/` amb només els sis fitxers de font que canvien:

| Fitxer | Canvi |
|---|---|
| `build/build.py` | Compila en una carpeta temporal i publica només si no hi ha cap error. `--preambul` ja no toca el catàleg |
| `build/prova_sortida.py` | **Nou.** 9 comprovacions del que escriu el build i quan |
| `build/prova_paritat.py` | 3 comprovacions noves d'adreces mal formades (19 en total) |
| `assets/app.js` | Adreces mal formades: descodificació tolerant i `PER_TEMA` sense prototip |
| `README.md` | Principi 3, opcions del build, proves, fitxers generats, `_uploads` i com veure el lloc des del Codespace |
| `handout.md` | Sessió 5: revisió, correccions, decisions, calendari i flux de lliurament |

El fitxer `.github/workflows/compila.yml` es crea des de la web de GitHub, enganxant-ne el
contingut. Porta un pas nou per a la prova de sortida i el reintent del push del bot.

No porta cap PDF ni `cataleg.js`: els genera l'Action la primera vegada que s'executa.
