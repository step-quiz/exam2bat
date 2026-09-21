# Handout · Banc de preguntes de Matemàtiques II

**Data:** 21 de setembre de 2026 · **Estat:** 18 preguntes (13 de la unitat 7 i 5 de la PAU)
· 286 minuts d'examen al banc · 21 comprovacions del validador, cadascuna amb la seva prova

Aquest document explica tota la feina feta fins avui i tota la feina pendent, amb prou
detall perquè qualsevol persona pugui reprendre el projecte sense haver seguit les converses
on es va construir. El README descriu com és el projecte; aquest document explica com hi hem
arribat i cap on ha d'anar.

---

## 1. Resum

El projecte ha passat per quatre sessions. La primera va avaluar un `main.tex` fet per una
altra IA i en va treure les lliçons. La segona va construir l'arquitectura: el build, el lloc
web, l'Action de GitHub i les proves. La tercera va completar la unitat 7, amb 13 preguntes
verificades. La quarta va obrir la secció PAU i hi va importar l'examen sencer de juny de
2026. La màquina funciona de punta a punta. El que queda és sobretot contingut: 57 preguntes
PAU per importar i els temes de les unitats 8 a 14.

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
apartats múltiples de 0,25, i per tant encaixen al banc sense excepcions.

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

---

## 5. Què està verificat i què no

**Verificat:**

- Les respostes de les 13 preguntes de la u7, amb càlcul simbòlic i un segon mètode per a
  tots els límits a l'infinit.
- 32 resultats dels criteris oficials de juny de 2026, per un mètode independent.
- `prova_validacio.py`: 21 avaries provocades, cadascuna rebutjada pel build.
- `prova_paritat.py`: 16 comprovacions. El lloc (executant l'`app.js` real) i el build
  munten el mateix `.tex`, byte a byte, també amb preguntes PAU i amb la procedència al lloc
  exacte.
- En un Chromium real: selecció, variants, adreça, recàrrega, descàrregues i secció PAU. El
  `main.tex` baixat de l'examen de 2026 compila en dues pàgines, sense cap desbordament.

**No verificat en aquest entorn:**

- La compilació amb `lmodern` i `babel` en català, perquè aquí no hi són. Els PDF d'aquest
  ZIP s'han compilat sense aquestes dues línies; el contingut és idèntic, però la tipografia
  i el guionatge poden variar lleugerament. L'Action de GitHub sí que les té.
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

### 6.3 Seguiment de les 62 preguntes PAU

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
| `pro-25s-q3ab` | setembre 2025 · s3 | Probabilitat | Sesamoïditis: probabilitat total i Bayes | pendent |
| `ana-25s-q3c` | setembre 2025 · s3 | Anàlisi | Trobar a, b, c de f(x)=ax³+bx²+cx per condicions | pendent |
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

### 7.1 Just després d'aplicar aquest ZIP

1. Substituir el contingut del repositori pel d'aquest ZIP, i fer commit i push.
2. **Llançar l'Action a mà** (Actions → Compila el banc → Run workflow). Els PDF del ZIP
   s'han compilat sense `lmodern` ni `babel` català, i si el push només canvia fitxers que
   l'Action no vigila, no es regenerarien sols.
3. Comprovar que els sis passos de l'Action surten en verd.

### 7.2 Dades que ha d'aportar el professor

- **Els títols de les unitats 1 a 6** (àlgebra i geometria). S'han d'afegir a `temes.json`, i
  llavors es poden omplir les `unitats` de `alg-26j-q2`, de `geo-26j-q4b` i de les altres
  preguntes d'àlgebra i geometria que s'importin. Mentre no hi siguin, les targetes diuen
  «per definir» i el build n'avisa.
- Opcionalment, **confirmar amb els originals** les sèries de `23s` (2) i `24j` (1), que avui
  provenen d'una rèplica pública.

### 7.3 Importació PAU: 57 preguntes en 10 convocatòries

| Convocatòria | Sèrie | Pendents |
|---|---|---|
| `26j2` juny 2026 | 5 | 5 |
| `25j` juny 2025 | 1 | 5 |
| `25s` setembre 2025 | 3 | 6 |
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

### 7.4 Contingut del banc

- Segona variant per a `limits-infinit`, `limits-trossos` i `parametres-ab`, els tres temes
  de la u7 que només en tenen una.
- Temes i preguntes de les unitats 8 a 14. Avui `temes.json` ja coneix aquestes unitats
  (les necessiten els requisits de les PAU), però només la 7 hi té temes. Cal seguir el
  mateix patró de la u7: taxonomia, calibratge amb els exercicis assignats i verificació.

### 7.5 Millores del lloc

- **Filtre de preguntes PAU per unitats fetes** («fins a la u9»). Amb 29 preguntes d'anàlisi,
  recórrer-les amb ◀ ▶ serà feixuc. És la millora més necessària quan avanci la importació.
- Al mòbil, llista de temes plegable. Ara la llista queda sencera abans de l'examen.
- Els noms de les unitats apareixen en passar el ratolí per sobre, i això no funciona en
  pantalles tàctils. Cal mostrar-los d'una altra manera.
- Poder reordenar les preguntes de l'examen. Ara surten en l'ordre en què es trien.

### 7.6 Decisions obertes

- **Tractament de vosaltres o de tu.** Si un examen barreja preguntes PAU (literals, amb
  vosaltres) amb preguntes del banc (amb tu), hi conviuen les dues formes.
- Si s'hi incorporen les **pistes** del repositori `pau` (els PDF `-p`), com una tercera vista
  al costat de l'enunciat i la solució.
- Si mai el repositori es fa públic, caldrà revisar els drets dels enunciats i dels criteris
  PAU, i decidir-ne la llicència.

---

## 8. Riscos i limitacions coneguts

- **Permís `workflow` a Codespaces.** Un push que modifica `.github/workflows/` pot ser
  rebutjat per falta de permís; en aquest cas, cal pujar el fitxer des de la web de GitHub.
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
   destacat.
7. **Passar les proves**: `prova_validacio.py` i `prova_paritat.py`.
8. **Fer un PDF de revisió del lot** perquè el professor el contrasti amb els originals.

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

---

## 11. Aquest lliurament

Aquest ZIP conté **l'estat complet del projecte** i substitueix tots els lliuraments
anteriors (`banc-preguntes.zip`, `actualitzacio-u7.zip` i `actualitzacio-pau.zip`). Inclou
les fonts, les proves, l'Action, el catàleg generat i els PDF. Obrint `index.html` amb doble
clic, el lloc funciona immediatament.
