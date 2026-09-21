/* FITXER GENERAT PER build/build.py — NO L'EDITIS MAI */
const BANC = {
 "generat": "2026-09-21 19:46 UTC",
 "unitats": {
  "u7": {
   "nom": "Unitat 7",
   "subtitol": "Límits i continuïtat"
  },
  "u8": {
   "nom": "Unitat 8",
   "subtitol": "Derivades"
  },
  "u9": {
   "nom": "Unitat 9",
   "subtitol": "Aplicacions de les derivades"
  },
  "u10": {
   "nom": "Unitat 10",
   "subtitol": "Representació de funcions"
  },
  "u11": {
   "nom": "Unitat 11",
   "subtitol": "Integrals"
  },
  "u12": {
   "nom": "Unitat 12",
   "subtitol": "La integral definida"
  },
  "u13": {
   "nom": "Unitat 13",
   "subtitol": "Probabilitat"
  },
  "u14": {
   "nom": "Unitat 14",
   "subtitol": "Distribucions de probabilitat"
  },
  "pau": {
   "nom": "PAU",
   "subtitol": "Preguntes reals de les proves d'accés"
  }
 },
 "temes": [
  {
   "slug": "limits-grafica",
   "unitat": "u7",
   "nom": "Límits a partir d'una gràfica",
   "descripcio": "Llegir límits laterals, límits a l'infinit i continuïtat sobre una gràfica donada."
  },
  {
   "slug": "limits-infinit",
   "unitat": "u7",
   "nom": "Límits en l'infinit",
   "descripcio": "Racionals, potències, radicals i exponencials quan x tendeix a ±∞."
  },
  {
   "slug": "limits-punt",
   "unitat": "u7",
   "nom": "Límits en un punt",
   "descripcio": "Indeterminació 0/0, factorització i límits laterals."
  },
  {
   "slug": "limits-trossos",
   "unitat": "u7",
   "nom": "Límits de funcions a trossos",
   "descripcio": "Límits en els punts d'enganxament i en l'infinit."
  },
  {
   "slug": "continuitat-trossos",
   "unitat": "u7",
   "nom": "Continuïtat de funcions a trossos",
   "descripcio": "Estudi i classificació de discontinuïtats en funcions definides per trossos."
  },
  {
   "slug": "parametres-ab",
   "unitat": "u7",
   "nom": "Paràmetres per a la continuïtat",
   "descripcio": "Determinar a i b perquè una funció a trossos sigui contínua."
  },
  {
   "slug": "domini-discontinuitats",
   "unitat": "u7",
   "nom": "Domini i discontinuïtats",
   "descripcio": "Domini de radicals i logaritmes, i classificació de discontinuïtats de racionals."
  },
  {
   "slug": "bolzano-biseccio",
   "unitat": "u7",
   "nom": "Bolzano i bisecció",
   "descripcio": "Teorema de Bolzano, acotació d'arrels per bisecció i punts de tall de corbes."
  },
  {
   "slug": "algebra",
   "unitat": "pau",
   "nom": "Àlgebra",
   "descripcio": "Matrius, determinants i sistemes lineals amb paràmetre."
  },
  {
   "slug": "geometria",
   "unitat": "pau",
   "nom": "Geometria",
   "descripcio": "Rectes i plans a l'espai, distàncies, àrees i volums."
  },
  {
   "slug": "analisi",
   "unitat": "pau",
   "nom": "Anàlisi",
   "descripcio": "Continuïtat, derivades, optimització, representació i integrals."
  },
  {
   "slug": "probabilitat",
   "unitat": "pau",
   "nom": "Probabilitat",
   "descripcio": "Probabilitat total, Bayes i distribucions."
  }
 ],
 "plantilla": "\\documentclass[11pt,a4paper]{article}\n\\newif\\ifsolucions\n%%SOLUCIONS%%\n%%PREAMBUL%%\n\\begin{document}\n%%COS%%\n\\end{document}\n",
 "preambul": "% ═══════════════════════════════════════════════════════════════════════\n%  PREÀMBUL COMPARTIT DEL BANC DE PREGUNTES\n%  ─────────────────────────────────────────────────────────────────────\n%  CONTRACTE (llegeix-ho abans de tocar res):\n%\n%  · Aquest fitxer NO es compila sol. És un fragment.\n%  · Qui el fa servir (build.py o el lloc web) SEMPRE emet, per aquest\n%    ordre:  \\documentclass → \\newif\\ifsolucions + \\solucions(true|false)\n%            → aquest fitxer → \\begin{document} → cossos → \\end{document}\n%  · Tota pregunta del banc compila amb AQUEST preàmbul i cap altre.\n%    Si una pregunta necessita un paquet nou, s'afegeix aquí i es torna\n%    a compilar TOT el banc. Mai un \\usepackage dins d'una pregunta.\n% ═══════════════════════════════════════════════════════════════════════\n\n\\usepackage[T1]{fontenc}\n\\usepackage{lmodern}\n\\usepackage[catalan]{babel}\n\\usepackage{amsmath,amssymb}\n\\usepackage{array}\n\\usepackage{tikz}\n\\usepackage{enumitem}\n\\usepackage{xcolor}\n\\usepackage{comment}\n\\usepackage{needspace}\n\\usepackage[a4paper,top=1.8cm,bottom=1.8cm,left=2cm,right=2cm]{geometry}\n\n\\setlength{\\parindent}{0pt}\n\\setlength{\\parskip}{3pt}\n\n% ── 1. Capçalera de pregunta ──────────────────────────────────────────\n% El filet va A SOBRE de cada pregunta i el \\Needspace el manté enganxat\n% al seu text: així el filet mai queda orfe al capdamunt d'una pàgina.\n\\newcommand{\\encapcalament}[1]{%\n  \\par\\Needspace{6\\baselineskip}%\n  \\vspace{7pt}\\hrule\\vspace{7pt}%\n  \\noindent\\textbf{#1}\\par\\vspace{3pt}}\n\n% ── 2. Apartats a) b) c) amb la seva puntuació ────────────────────────\n% \\apartat{0,75} escriu \"(0,75 punts)\".  build.py llegeix aquests valors\n% del .tex: la puntuació viu AQUÍ i enlloc més.\n\\makeatletter\n\\newcommand{\\bp@ptsmot}[1]{\\def\\bp@a{#1}\\def\\bp@u{1}%\n  \\ifx\\bp@a\\bp@u 1~punt\\else #1~punts\\fi}\n\\newcommand{\\apartat}[1]{\\item \\textit{(\\bp@ptsmot{#1})}\\enspace\\ignorespaces}\n\\makeatother\n\\newenvironment{apartats}\n  {\\begin{enumerate}[label=\\textbf{\\alph*)},leftmargin=*,itemsep=5pt,topsep=3pt,parsep=0pt]}\n  {\\end{enumerate}}\n\n% ── 3. Graella de subapartats i) ii) iii) en mode display ─────────────\n% \\begin{graella}{4} \\sa ... & \\sa ... \\\\ \\sa ... \\end{graella}\n% La columna força \\displaystyle: els \\lim hi surten amb el subíndex A\n% SOTA, igual que en una fórmula destacada. Mai fem servir array pelat.\n\\newcounter{bpsa}\n\\newcommand{\\sa}{\\stepcounter{bpsa}\\textup{\\roman{bpsa})}~}\n\\newenvironment{graella}[1]\n  {\\setcounter{bpsa}{0}\\[\\begin{array}{*{#1}{>{\\displaystyle}l}}}\n  {\\end{array}\\]}\n\n% ── 4. Condicions dins de \\begin{cases} ───────────────────────────────\n% \\si{-1\\le x\\le 2}  →  el signe menys surt unari i ben espaiat.\n% Escriure \\text{si } -1\\le x\\le 2 a pèl produeix \"si − 1 ≤ x ≤ 2\". Bug.\n\\newcommand{\\si}[1]{\\text{si }{#1}}\n\n% ── 5. Solucions ──────────────────────────────────────────────────────\n% REGLA: \\end{solucio} ha d'anar SOL a la seva línia (ho exigeix el\n% paquet comment quan la solució s'exclou). build.py ho comprova.\n\\ifsolucions\n  \\newenvironment{solucio}\n    {\\par\\nopagebreak\\vspace{3pt}\\begingroup\\color{blue!55!black}\\small\n     \\textbf{Solució.}\\enspace\\ignorespaces}\n    {\\par\\endgroup\\vspace{3pt}}\n\\else\n  \\excludecomment{solucio}\n\\fi\n\n% ── 6. Procedència de les preguntes PAU ───────────────────────────────\n% La línia «PAU juny 2026, sèrie 1» la injecta el build (i el lloc) just\n% després de la capçalera, a partir del codi de la pregunta i de\n% pau/convocatories.json. No s'escriu mai a mà: build.py ho rebutja.\n\\newcommand{\\procedencia}[1]{\\noindent{\\small\\itshape #1}\\par\\vspace{3pt}}\n",
 "preguntes": [
  {
   "id": "pau/algebra/alg-26j-q2",
   "unitat": "pau",
   "tema": "algebra",
   "codi": "alg-26j-q2",
   "titol": "Sistema de tres plans amb paràmetre: discussió, interpretació i quarta equació",
   "punts": 2.5,
   "apartats": [
    1.0,
    1.0,
    0.5
   ],
   "dificultat": "●●○",
   "origen": [],
   "minuts": 22,
   "etiquetes": [
    "Rouché-Frobenius",
    "paràmetre",
    "posició relativa de plans"
   ],
   "temes_secundaris": [],
   "procedencia": "PAU juny 2026, sèrie 1",
   "unitats": [],
   "tex": "Considereu el sistema d'equacions lineals següent, que està format per tres plans a l'espai\ni depèn del paràmetre real $m$:\n\\[\n\\left.\\begin{aligned}\nx+my+z&=4\\\\\nx+3y+z&=5\\\\\nmx+y+z&=4\n\\end{aligned}\\ \\right\\}.\n\\]\n\n\\begin{apartats}\n\n\\apartat{1}\nDiscutiu el sistema per als diferents valors del paràmetre $m$.\n\n\\begin{solucio}\nLa matriu de coeficients i la matriu ampliada del sistema són\n\\[\nA=\\begin{pmatrix}1&m&1\\\\1&3&1\\\\m&1&1\\end{pmatrix}\n\\quad\\text{i}\\quad\n\\bar A=\\left(\\begin{array}{ccc|c}1&m&1&4\\\\1&3&1&5\\\\m&1&1&4\\end{array}\\right).\n\\]\nCalculant el determinant de la matriu $A$, tenim\n$\\begin{vmatrix}1&m&1\\\\1&3&1\\\\m&1&1\\end{vmatrix}=3+m^2+1-3m-1-m=m^2-4m+3$.\nPer obtenir els valors crítics fem\n$|A|=0\\iff m^2-4m+3=0\\iff m=\\frac{4\\pm\\sqrt{16-12}}{2}=3,\\ 1$.\\\\\nEn el cas $m\\neq1,3$, tenim $|A|\\neq0$ i $\\operatorname{rang}(A)=\\operatorname{rang}(\\bar A)=3$;\ncom que hi ha tres incògnites, el sistema és \\textbf{compatible determinat}.\\\\\nEn el cas $m=3$, tenim $|A|=0$ i $\\begin{vmatrix}1&3\\\\3&1\\end{vmatrix}\\neq0$, per tant\n$\\operatorname{rang}(A)=2$. D'altra banda,\n$\\begin{vmatrix}1&3&4\\\\1&3&5\\\\3&1&4\\end{vmatrix}=\\begin{vmatrix}1&3&4\\\\0&0&1\\\\3&1&4\\end{vmatrix}\n=-\\begin{vmatrix}1&3\\\\3&1\\end{vmatrix}=8\\neq0$,\ni deduïm que $\\operatorname{rang}(\\bar A)=3$ i que el sistema és \\textbf{incompatible}.\\\\\nFinalment, en el cas $m=1$, tenim $|A|=0$, $\\begin{vmatrix}1&1\\\\1&3\\end{vmatrix}\\neq0$,\n$\\operatorname{rang}(A)=2$, i també $\\operatorname{rang}(\\bar A)=2$ per tenir la primera i\nla tercera files iguals. El sistema és \\textbf{compatible indeterminat} amb un grau de\nllibertat.\n\n\\textit{Pauta oficial:} 0,25 per calcular el determinant i trobar els dos valors crítics, i\n0,25 per la discussió de cadascun dels tres casos.\n\\end{solucio}\n\n\\apartat{1}\nInterpreteu geomètricament aquest sistema per a tots els valors del paràmetre $m$ i\nresoleu-lo, si és possible, per al cas $m=1$.\n\n\\begin{solucio}\nEs tracta de tres plans a l'espai, que estan en diverses posicions relatives segons el valor\ndel paràmetre. Si $m\\neq1,3$, el sistema és compatible determinat: els tres plans es tallen\nen un \\textbf{únic punt} comú. Si $m=3$, és incompatible: no tenen cap punt en comú, cosa que\nes veu directament perquè el primer pla, $x+3y+z=4$, i el segon, $x+3y+z=5$, són\n\\textbf{paral·lels i no coincidents}. Si $m=1$, el sistema és compatible indeterminat amb un\ngrau de llibertat: els tres plans es tallen en una \\textbf{recta} comuna, que trobem resolent\nel sistema:\n\\[\n\\left.\\begin{aligned}x+y+z&=4\\\\x+3y+z&=5\\\\x+y+z&=4\\end{aligned}\\right\\}\n\\overset{F_1=F_3}{\\iff}\n\\left.\\begin{aligned}x+y+z&=4\\\\x+3y+z&=5\\end{aligned}\\right\\}\n\\overset{z=\\lambda}{\\implies}\n\\left.\\begin{aligned}x+y&=4-\\lambda\\\\x+3y&=5-\\lambda\\end{aligned}\\right\\}\n\\]\n\\[\nx=\\frac{\\begin{vmatrix}4-\\lambda&1\\\\5-\\lambda&3\\end{vmatrix}}{\\begin{vmatrix}1&1\\\\1&3\\end{vmatrix}}\n =\\frac{12-3\\lambda-5+\\lambda}{2}=\\frac{7-2\\lambda}{2},\\qquad\ny=\\frac{\\begin{vmatrix}1&4-\\lambda\\\\1&5-\\lambda\\end{vmatrix}}{\\begin{vmatrix}1&1\\\\1&3\\end{vmatrix}}\n =\\frac{5-\\lambda-4+\\lambda}{2}=\\frac12.\n\\]\nLes solucions són tots els punts $\\left(\\frac{7-2\\lambda}{2},\\frac12,\\lambda\\right)$ amb\n$\\lambda\\in\\mathbb{R}$: la intersecció dels tres plans és la recta\n$(x,y,z)=\\left(\\frac72,\\frac12,0\\right)+\\lambda(-1,0,1)$.\n\n\\textit{Pauta oficial:} 0,25 per cadascuna de les tres interpretacions geomètriques i 0,25\nper la resolució del sistema en el cas $m=1$.\n\\end{solucio}\n\n\\apartat{0,5}\nPer a $m=1$, és possible afegir una quarta equació de manera que el sistema resultant sigui\ncompatible determinat i tingui com a solució $(x,y,z)=\\left(3,\\frac12,\\frac12\\right)$?\nRaoneu la resposta.\n\n\\begin{solucio}\nPer a $m=1$, el sistema té infinites solucions, una de les quals és\n$(x,y,z)=\\left(3,\\frac12,\\frac12\\right)$: precisament la que correspon a $\\lambda=\\frac12$.\nPer tant, qualsevol nova equació que també tingui aquest punt com a solució (per exemple,\n$x=3$) i que doni una matriu de coeficients de rang 3, convertirà el sistema en compatible\ndeterminat amb el punt desitjat com a única solució. L'equació proposada ho compleix:\n\\[\n\\operatorname{rang}\\begin{pmatrix}1&1&1\\\\1&3&1\\\\1&1&1\\\\1&0&0\\end{pmatrix}\n=\\operatorname{rang}\\begin{pmatrix}1&1&1\\\\1&3&1\\\\1&0&0\\end{pmatrix}=3.\n\\]\n\\textit{Pauta oficial:} 0,5 per donar l'equació demanada i raonar que és vàlida.\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "pau/algebra/alg-26j-q2/out/enunciat.pdf",
   "pdf_solucio": "pau/algebra/alg-26j-q2/out/solucio.pdf"
  },
  {
   "id": "pau/analisi/ana-26j-q1",
   "unitat": "pau",
   "tema": "analisi",
   "codi": "ana-26j-q1",
   "titol": "Funció a trossos amb exponencial i paràbola: continuïtat, àrea i tangent",
   "punts": 2.5,
   "apartats": [
    1.0,
    1.0,
    0.5
   ],
   "dificultat": "●●○",
   "origen": [],
   "minuts": 22,
   "etiquetes": [
    "continuïtat amb paràmetre",
    "àrea",
    "recta tangent"
   ],
   "temes_secundaris": [],
   "procedencia": "PAU juny 2026, sèrie 1",
   "unitats": [
    "u7",
    "u8",
    "u12"
   ],
   "tex": "Considereu la funció definida a trossos següent:\n\\[\nf(x)=\\begin{cases}\n  5e^{2x} & \\si{x\\le 0},\\\\[3pt]\n  (x+m)^2+1 & \\si{0<x<2},\\\\[3pt]\n  1 & \\si{2\\le x},\n\\end{cases}\n\\]\non $m$ és un paràmetre real.\n\n\\begin{apartats}\n\n\\apartat{1}\nDetermineu els valors de $m$ que fan que la funció $f(x)$ sigui contínua en tot el seu\ndomini. Justifiqueu la resposta.\n\n\\begin{solucio}\nCom que les tres funcions que defineixen $f$ són contínues en els seus respectius\nintervals de definició, només cal imposar que $f$ sigui contínua als punts de contacte,\n$x=0$ i $x=2$.\\\\\nEn $x=0$: $\\lim_{x\\to0^-}f(x)=\\lim_{x\\to0^-}5e^{2x}=5$, \\ $f(0)=5e^0=5$ \\ i\n$\\lim_{x\\to0^+}f(x)=\\lim_{x\\to0^+}\\big((x+m)^2+1\\big)=m^2+1$. Per tant, $f$ és contínua en\n$x=0$ si i només si $m^2+1=5$, cosa que passa si i només si $m=\\pm2$.\\\\\nEn $x=2$: $\\lim_{x\\to2^-}f(x)=(2+m)^2+1$, \\ $f(2)=1$ \\ i $\\lim_{x\\to2^+}f(x)=1$, i la funció\nés contínua en $x=2$ si i només si $(2+m)^2+1=1$, cosa que passa si i només si $m=-2$.\\\\\nPer tant, la funció és contínua en tots els punts \\textbf{només quan $m=-2$}.\n\n\\textit{Pauta oficial:} 0,25 per justificar que ja és contínua fora dels punts de\ncontacte; 0,25 per estudiar cadascun dels dos contactes, i 0,25 per combinar-ho i donar\nla resposta final correcta.\n\\end{solucio}\n\n\\apartat{1}\nFeu un esbós de la gràfica de $y=f(x)$ per al cas $m=-2$, i calculeu l'àrea delimitada\nper aquesta gràfica, l'eix $OX$ i les rectes $x=-1$ i $x=3$.\n\n\\begin{solucio}\n\\begin{center}\n\\begin{tikzpicture}[x=0.9cm,y=0.55cm]\n  \\fill[blue!12,domain=-1:0,samples=40] (-1,0) -- plot (\\x,{5*exp(2*\\x)}) -- (0,0) -- cycle;\n  \\fill[blue!12,domain=0:2,samples=40] (0,0) -- plot (\\x,{(\\x-2)^2+1}) -- (2,0) -- cycle;\n  \\fill[blue!12] (2,0) rectangle (3,1);\n  \\draw[gray!55,very thin,step=1] (-3,0) grid (4,5);\n  \\draw[->] (-3.3,0) -- (4.5,0) node[below right] {$x$};\n  \\draw[->] (0,-0.3) -- (0,5.7) node[above left] {$y$};\n  \\foreach \\i in {-3,-2,-1,1,2,3,4} \\draw (\\i,0.1) -- (\\i,-0.1) node[below,font=\\scriptsize] {$\\i$};\n  \\foreach \\j in {1,2,3,4,5} \\draw (0.08,\\j) -- (-0.08,\\j) node[left,font=\\scriptsize] {$\\j$};\n  \\draw[blue!70!black,thick,domain=-3:0,samples=80,smooth] plot (\\x,{5*exp(2*\\x)});\n  \\draw[blue!70!black,thick,domain=0:2,samples=40,smooth] plot (\\x,{(\\x-2)^2+1});\n  \\draw[blue!70!black,thick] (2,1) -- (4,1);\n\\end{tikzpicture}\n\\end{center}\nPer representar la funció quadràtica es pot calcular el vèrtex amb la fórmula\n$x=\\frac{-b}{2a}=2$, o bé observar que és una translació 2 unitats a la dreta i una unitat\namunt de la paràbola $y=x^2$.\\\\\nÉs clar, fins i tot sense la gràfica, que la funció és positiva en tot el seu domini. Per\ntant, per calcular l'àrea demanada cal calcular la integral definida\n\\begin{align*}\nA&=\\int_{-1}^{3}f(x)\\,dx=\\int_{-1}^{0}5e^{2x}\\,dx+\\int_{0}^{2}\\big((x-2)^2+1\\big)\\,dx+\\int_{2}^{3}1\\,dx\\\\\n &=\\Big[\\tfrac52\\,e^{2x}\\Big]_{-1}^{0}+\\Big[\\tfrac{(x-2)^3}{3}+x\\Big]_{0}^{2}+\\Big[x\\Big]_{2}^{3}\n  =\\frac52-\\frac{5}{2e^2}+2+\\frac83+3-2\\simeq7{,}83\\ \\text{u}^2.\n\\end{align*}\n\\textit{Pauta oficial:} 0,25 per l'esbós de la gràfica; 0,25 pel plantejament correcte de\nl'àrea com a suma d'integrals; 0,25 pel càlcul de la integral de la part exponencial, i\n0,25 per la integral de la part parabòlica.\n\\end{solucio}\n\n\\apartat{0,5}\nPer a $m=-2$, trobeu un punt on la recta tangent a $y=f(x)$ sigui paral·lela a $y=-2x$.\nCalculeu l'equació d'aquesta recta tangent.\n\n\\begin{solucio}\nCom que el primer tram de la gràfica és creixent, i el tercer és pla, només pot haver-hi\npunts amb pendent negativa al tram del mig. Volem un punt on el pendent sigui $-2$; per\ntant, derivem el tram parabòlic i igualem la derivada a $-2$:\n$2(x-2)=-2\\ \\Rightarrow\\ x=1$.\\\\\nLa recta tangent al punt $\\big(1,f(1)\\big)=(1,2)$ és $y-2=-2(x-1)$, és a dir, $y=-2x+4$.\n\n\\textit{Pauta oficial:} 0,25 per trobar el punt i 0,25 pel càlcul de l'equació de la recta\ntangent.\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "pau/analisi/ana-26j-q1/out/enunciat.pdf",
   "pdf_solucio": "pau/analisi/ana-26j-q1/out/solucio.pdf"
  },
  {
   "id": "pau/analisi/ana-26j-q4a",
   "unitat": "pau",
   "tema": "analisi",
   "codi": "ana-26j-q4a",
   "titol": "Optimització: barana circular i quadrada de 10 m",
   "punts": 2.5,
   "apartats": [
    2.5
   ],
   "dificultat": "●●○",
   "origen": [],
   "minuts": 22,
   "etiquetes": [
    "optimització",
    "àrea mínima"
   ],
   "temes_secundaris": [],
   "procedencia": "PAU juny 2026, sèrie 1",
   "unitats": [
    "u9"
   ],
   "tex": "L'alcalde d'un poble de Catalunya encarrega a l'arquitecte municipal el disseny d'un parc\ninfantil que es construirà en un terreny públic. Per a complir la normativa vigent, en el parc\nhi ha d'haver dos espais ben delimitats: un per a una boca de reg ---el qual, segons\nl'arquitecte, ha de tenir forma circular---, i un altre per a una caseta on es guardin les\neines de manteniment ---el qual ha de tenir forma quadrada. Per motius estètics, l'arquitecte\nvol delimitar cadascun d'aquests dos espais amb una barana de forja.\n\n\\begin{apartats}\n\n\\apartat{2,5}\nSabent que les dues baranes mesuren exactament 10\\,m de longitud en total, quina mida ha de\ntenir la barana de cada espai per tal que la suma de les superfícies dels dos espais sigui la\nmés petita possible? Quina és aquesta superfície mínima?\n\n\\begin{solucio}\nAnomenem $x$ la longitud en metres del primer tros de barana, amb el qual es farà el tancat\ncircular; de l'altre tros, de $10-x$ metres, se'n farà el tancat quadrat. Com que $x$ ha de\nser el perímetre d'una circumferència, el seu radi serà $r=\\frac{x}{2\\pi}$, i l'àrea de\nl'espai circular valdrà $A_1=\\pi\\left(\\frac{x}{2\\pi}\\right)^2$. D'altra banda, com que\n$10-x$ és el perímetre d'un quadrat, el seu costat serà $c=\\frac{10-x}{4}$, i l'àrea de\nl'espai quadrat valdrà $A_2=\\left(\\frac{10-x}{4}\\right)^2$. La funció a minimitzar és\n\\[\nA(x)=\\pi\\left(\\frac{x}{2\\pi}\\right)^2+\\left(\\frac{10-x}{4}\\right)^2\n=\\frac{x^2}{4\\pi}+\\frac{100-20x+x^2}{16}\n=\\frac{(4+\\pi)x^2-20\\pi x+100\\pi}{16\\pi}.\n\\]\nDerivem i busquem els punts crítics:\n\\[\nA'(x)=\\frac{(8+2\\pi)x-20\\pi}{16\\pi}=0\\ \\Longrightarrow\\ x=\\frac{20\\pi}{8+2\\pi}\\simeq4{,}4\\ \\text{m}.\n\\]\nPer assegurar que es tracta d'un mínim, la segona derivada és positiva:\n$A''(x)=\\dfrac{8+2\\pi}{16\\pi}>0$.\\\\\nAixí doncs, per tal de minimitzar la superfície total, l'arquitecte haurà de fer un\n\\textbf{tancat circular amb 4,4\\,m} de barana i un \\textbf{tancat quadrat amb els 5,6\\,m}\nrestants. La superfície total dels dos tancats serà\n\\[\nA(4{,}4)=\\frac{(4+\\pi)\\cdot4{,}4^2-20\\pi\\cdot4{,}4+100\\pi}{16\\pi}\\simeq3{,}5\\ \\text{m}^2.\n\\]\n\\textit{Pauta oficial:} 0,25 per plantejar el perímetre de la circumferència; 0,25 pel\nperímetre del quadrat; 0,5 per l'expressió de l'àrea total en funció d'una sola variable;\n0,5 per la derivada i l'obtenció del punt crític; 0,5 per comprovar que es tracta d'un mínim,\ni 0,5 per la resposta final, incloent-hi les dues longituds i el valor de l'àrea mínima.\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "pau/analisi/ana-26j-q4a/out/enunciat.pdf",
   "pdf_solucio": "pau/analisi/ana-26j-q4a/out/solucio.pdf"
  },
  {
   "id": "pau/geometria/geo-26j-q4b",
   "unitat": "pau",
   "tema": "geometria",
   "codi": "geo-26j-q4b",
   "titol": "Pla per tres punts, àrea d'un triangle i tetraedre de volum 1",
   "punts": 2.5,
   "apartats": [
    0.75,
    0.75,
    1.0
   ],
   "dificultat": "●●●",
   "origen": [],
   "minuts": 22,
   "etiquetes": [
    "producte vectorial",
    "distància punt-pla",
    "volum"
   ],
   "temes_secundaris": [],
   "procedencia": "PAU juny 2026, sèrie 1",
   "unitats": [],
   "tex": "Considereu els punts de l'espai $P=(1,0,-1)$, $Q=(3,-2,0)$ i $R=(1,1,1)$.\n\n\\begin{apartats}\n\n\\apartat{0,75}\nCalculeu l'equació del pla que conté els punts $P$, $Q$ i $R$.\n\n\\begin{solucio}\nComencem trobant els vectors $\\overrightarrow{PQ}=(2,-2,1)$ i $\\overrightarrow{PR}=(0,1,2)$.\nEl vector normal al pla buscat és\n\\[\n\\vec n=\\overrightarrow{PQ}\\times\\overrightarrow{PR}\n=\\begin{vmatrix}\\vec\\imath&\\vec\\jmath&\\vec k\\\\2&-2&1\\\\0&1&2\\end{vmatrix}\n=-4\\vec\\imath+2\\vec k-\\vec\\imath-4\\vec\\jmath=(-5,-4,2).\n\\]\nAixí doncs, el pla buscat té equació de la forma $5x+4y-2z+D=0$. Substituint les coordenades\ndel punt $R$ en aquesta equació deduïm $D=-7$ i, per tant, l'equació buscada és\n$\\pi\\colon\\ 5x+4y-2z-7=0$.\n\n\\textit{Pauta oficial:} 0,75 pel càlcul de l'equació correcta del pla.\n\\end{solucio}\n\n\\apartat{0,75}\nComproveu que l'àrea del triangle $\\Delta PQR$ és $\\dfrac{3\\sqrt5}{2}\\,\\text{u}^2$.\n\n\\begin{solucio}\nSi prenem el triangle $\\Delta PQR$ amb base $PQ$, aquesta mesura\n\\[\nd(P,Q)=\\sqrt{(3-1)^2+(-2-0)^2+(0+1)^2}=\\sqrt9=3.\n\\]\nD'altra banda, la recta $PQ$ té equació\n\\[\n(x,y,z)=(1,0,-1)+\\lambda(2,-2,1)=(1+2\\lambda,\\,-2\\lambda,\\,-1+\\lambda),\n\\]\namb vector director $(2,-2,1)$. El pla perpendicular a aquesta recta que passa per $R$ té\nequació de la forma $2x-2y+z+D=0$, amb $2-2+1+D=0\\Rightarrow D=-1$. La projecció de $R$\nsobre la recta $PQ$ és la intersecció d'aquest pla amb la recta:\n\\[\n2(1+2\\lambda)-2(-2\\lambda)+(-1+\\lambda)-1=0\\ \\Rightarrow\\ 9\\lambda=0\\ \\Rightarrow\\ \\lambda=0,\n\\]\nés a dir, el punt $(1,0,-1)$. És casualitat que sigui $P$: això vol dir que l'angle\n$\\widehat{RPQ}$ és recte. Així, l'àrea del triangle és\n\\[\n\\text{Àrea}(PQR)=\\frac{\\text{base}\\cdot\\text{alçada}}{2}=\\frac{d(P,Q)\\cdot d(P,R)}{2}\n=\\frac{3\\cdot\\sqrt{(1-1)^2+(1-0)^2+(1+1)^2}}{2}=\\frac{3\\sqrt5}{2}\\ \\text{u}^2.\n\\]\nAlternativament, aprofitant el producte vectorial de l'apartat anterior:\n\\[\n\\tfrac12\\big|\\overrightarrow{PQ}\\times\\overrightarrow{PR}\\big|=\\tfrac12\\sqrt{(-5)^2+(-4)^2+2^2}\n=\\tfrac12\\sqrt{45}=\\tfrac32\\sqrt5\\ \\text{u}^2.\n\\]\n\n\\textit{Pauta oficial:} 0,5 pel càlcul de la base i l'alçada del triangle, i 0,25 per l'àrea.\n\\end{solucio}\n\n\\apartat{1}\nDetermineu les condicions que han de complir les coordenades d'un quart punt $S=(x,y,z)$\nper tal que $P$, $Q$, $R$ i $S$ formin un tetraedre de volum 1. (El volum del tetraedre\nformat pels punts $P$, $Q$, $R$ i $S$ és:\n$\\text{volum}(PQRS)=\\dfrac{\\text{àrea}(\\Delta PQR)\\cdot\\text{altura}}{3}$.)\n\n\\begin{solucio}\nEl volum del tetraedre determinat pels punts $P$, $Q$, $R$, $S$ és\n\\[\n\\text{Volum}(PQRS)=\\frac{\\text{Àrea}(PQR)\\cdot\\text{alçada}}{3}=\\frac{\\frac{3\\sqrt5}{2}\\cdot d(S,\\pi)}{3}.\n\\]\nCom que la distància del punt $S=(x,y,z)$ al pla $\\pi\\colon 5x+4y-2z-7=0$ és\n$d(S,\\pi)=\\dfrac{|5x+4y-2z-7|}{\\sqrt{5^2+4^2+(-2)^2}}=\\dfrac{|5x+4y-2z-7|}{\\sqrt{45}}$,\nel lloc geomètric dels punts $S$ tals que el tetraedre $PQRS$ tingui volum 1 ve donat per\n\\[\n\\frac{\\frac{3\\sqrt5}{2}\\cdot\\frac{|5x+4y-2z-7|}{3\\sqrt5}}{3}=1\n\\ \\Longrightarrow\\ 5x+4y-2z-7=\\pm6,\n\\]\nés a dir, són \\textbf{dos plans paral·lels} al pla $\\pi$, d'equacions\n$5x+4y-2z-1=0$ \\ i \\ $5x+4y-2z-13=0$.\n\n\\textit{Pauta oficial:} 0,5 pel plantejament i el desenvolupament del problema; 0,25 per\ntractar correctament el valor absolut, i 0,25 per les equacions dels dos plans finals.\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "pau/geometria/geo-26j-q4b/out/enunciat.pdf",
   "pdf_solucio": "pau/geometria/geo-26j-q4b/out/solucio.pdf"
  },
  {
   "id": "pau/probabilitat/pro-26j-q3",
   "unitat": "pau",
   "tema": "probabilitat",
   "codi": "pro-26j-q3",
   "titol": "Entrades d'un concert: probabilitat total, Bayes i Bolzano",
   "punts": 2.5,
   "apartats": [
    0.75,
    0.75,
    1.0
   ],
   "dificultat": "●●○",
   "origen": [],
   "minuts": 22,
   "etiquetes": [
    "probabilitat total",
    "Bayes",
    "Bolzano"
   ],
   "temes_secundaris": [],
   "procedencia": "PAU juny 2026, sèrie 1",
   "unitats": [
    "u7",
    "u13"
   ],
   "tex": "L'Ajuntament de Canet de Mar ha aconseguit 24 entrades gratuïtes per a un concert d'un grup\nde rock català, i ha decidit sortejar-les entre els veïns interessats a assistir-hi. Tots els\nveïns del poble seguidors d'aquest grup s'apunten al sorteig, i només al 16\\,\\% els toca una\nentrada. De la resta de seguidors del grup, sis setenes parts intenten comprar una entrada\nper la web, on la probabilitat d'aconseguir-ne és del 25\\,\\%.\n\n\\begin{apartats}\n\n\\apartat{0,75}\nQuantes persones d'aquest municipi tenen entrada per al concert?\n\n\\begin{solucio}\nCalculem primer la probabilitat que un seguidor del grup aconsegueixi comprar una entrada al\nweb. Considerem els successos $ES$ = «obtenir entrada al sorteig», $W$ = «intentar\ncomprar-la al web» i $EW$ = «aconseguir entrada al web». A partir de les dades de\nl'enunciat, $P(ES)=0{,}16$, \\ $P(W)=(1-0{,}16)\\cdot\\frac67=0{,}72$ \\ i\n$P(EW)=P(W)\\cdot0{,}25=0{,}18$.\\\\\nPer tant, en total, el $16+18=34\\,\\%$ dels seguidors del grup al municipi aconsegueixen una\nentrada per al concert. Si el 16\\,\\% dels seguidors correspon a 24 persones, el 34\\,\\%\ncorrespondrà a\n$\\dfrac{24}{16}=\\dfrac{x}{34}\\Rightarrow\\dfrac32=\\dfrac{x}{34}\\Rightarrow x=17\\cdot3=51$\n\\textbf{persones}.\n\n\\textit{Pauta oficial:} 0,5 per calcular el percentatge de seguidors que obtenen entrada, i\n0,25 pel nombre de persones que això representa.\n\\end{solucio}\n\n\\apartat{0,75}\nSi escollim a l'atzar un veí de Canet seguidor d'aquest grup de rock i no té entrada per al\nconcert, quina és la probabilitat que hagués intentat aconseguir-la via web?\n\n\\begin{solucio}\nSigui $noE$ el succés «no tenir entrada per al concert». Ens demanen $P(W\\mid noE)$. Per la\nllei de Bayes,\n$P(W\\mid noE)=\\dfrac{P(noE\\mid W)\\,P(W)}{P(noE)}$.\nDe l'apartat anterior sabem que la probabilitat de no tenir entrada és\n$P(noE)=1-0{,}34=0{,}66$, i també que $P(W)=0{,}72$ i\n$P(noE\\mid W)=1-0{,}25=0{,}75$. Per tant,\n$P(W\\mid noE)=\\dfrac{0{,}75\\cdot0{,}72}{0{,}66}\\approx\\mathbf{0{,}82}$.\n\n\\textit{Pauta oficial:} 0,25 pel plantejament del problema i 0,5 pel càlcul de la\nprobabilitat demanada.\n\\end{solucio}\n\n\\apartat{1}\nEl dia del concert, l'equip de so mesura el nivell de decibels generat pels crits entusiastes\ndel públic durant els 5 minuts de durada de la cançó més famosa del grup; es pot aproximar\nper la funció següent:\n\\[\nS(t)=-t^3+12t^2-30t+90,\\qquad t\\in[0,5],\n\\]\non $t$ és el temps en minuts i $S(t)$ els decibels. Quan se superen els 100 decibels es\nconsidera que el públic està molt entregat i s'activen automàticament uns efectes lumínics\nespecials. S'activaran en algun moment durant aquests cinc minuts? Si la resposta és\nafirmativa, calculeu en quin minut s'activen, aproximat a les dècimes.\n\n\\begin{solucio}\n$S(t)$ és una funció polinòmica i, per tant, contínua. L'enunciat ens demana si en algun\nmoment $S(t)$ valdrà 100, és a dir, si $-t^3+12t^2-30t+90=100$. Si considerem la funció\n$D(t)=S(t)-100$, el problema es transforma en saber si $D(t)=0$ en algun moment\n$t\\in[0,5]$. Com que $D$ també és contínua i $D(0)=-10<0$ i $D(5)=15>0$, es compleixen les\nhipòtesis del teorema de Bolzano: existeix $c\\in(0,5)$ tal que $D(c)=0$. L'aproximem amb una\ndècima de precisió:\n\\begin{align*}\nD(2)&=-30<0 &&\\Rightarrow\\ \\exists\\,c\\in(2,5)\\ \\text{tal que}\\ D(c)=0,\\\\\nD(4)&=-2<0 &&\\Rightarrow\\ \\exists\\,c\\in(4,5),\\\\\nD(4{,}5)&=6{,}875>0 &&\\Rightarrow\\ \\exists\\,c\\in(4;\\,4{,}5),\\\\\nD(4{,}2)&=1{,}592>0 &&\\Rightarrow\\ \\exists\\,c\\in(4;\\,4{,}2),\\\\\nD(4{,}1)&=-0{,}201<0 &&\\Rightarrow\\ \\exists\\,c\\in(4{,}1;\\,4{,}2).\n\\end{align*}\nAixí doncs, els efectes lumínics s'activaran aproximadament al cap de \\textbf{4,1 minuts}\nd'haver començat a sonar la cançó.\\\\\n\\textit{Nota del banc:} el criteri oficial hi escriu $D(4{,}5)=6{,}85$; el valor exacte és\n$6{,}875$. No afecta la conclusió, perquè només compta el signe.\n\n\\textit{Pauta oficial:} 0,25 pel plantejament del problema i per comentar la continuïtat de\nla funció; 0,5 per la primera aplicació del teorema de Bolzano correctament raonada, i 0,25\nper l'aproximació fins a una dècima.\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "pau/probabilitat/pro-26j-q3/out/enunciat.pdf",
   "pdf_solucio": "pau/probabilitat/pro-26j-q3/out/solucio.pdf"
  },
  {
   "id": "u7/bolzano-biseccio/q001",
   "unitat": "u7",
   "tema": "bolzano-biseccio",
   "codi": "q001",
   "titol": "Teorema de Bolzano, bisecció i punt de tall de dues corbes",
   "punts": 2.5,
   "apartats": [
    1.0,
    0.75,
    0.75
   ],
   "dificultat": "●●○",
   "origen": [
    112,
    113,
    114,
    120
   ],
   "minuts": 14,
   "etiquetes": [
    "Bolzano",
    "bisecció",
    "punt de tall"
   ],
   "temes_secundaris": [],
   "procedencia": null,
   "unitats": [],
   "tex": "Considera la funció $f(x)=x^3+x^2+x-1$.\n\n\\begin{apartats}\n\n\\apartat{1}\nEnuncia el teorema de Bolzano i demostra que l'equació $f(x)=0$ té almenys una solució\na l'interval $[0,1]$.\n\n\\begin{solucio}\n\\emph{Teorema de Bolzano.} Si $f$ és contínua a $[a,b]$ i $f(a)$ i $f(b)$ tenen signes\noposats, aleshores existeix almenys un $c\\in(a,b)$ tal que $f(c)=0$.\\\\\n$f$ és polinòmica, per tant contínua a $\\mathbb{R}$ i en particular a $[0,1]$.\nCom que $f(0)=-1<0$ i $f(1)=2>0$, hi ha almenys una arrel a $(0,1)$.\n\\end{solucio}\n\n\\apartat{0,75}\nAplicant el mètode de la bisecció, troba un interval de longitud $\\tfrac14$ que contingui\nuna solució de l'equació. Justifica cada pas.\n\n\\begin{solucio}\n$f\\!\\left(\\tfrac12\\right)=\\tfrac18+\\tfrac14+\\tfrac12-1=-\\tfrac18<0$. Com que\n$f(1)>0$, l'arrel és a $\\left(\\tfrac12,1\\right)$, de longitud $\\tfrac12$.\\\\\n$f\\!\\left(\\tfrac34\\right)=\\tfrac{27}{64}+\\tfrac{9}{16}+\\tfrac34-1=\\tfrac{47}{64}>0$.\nCom que $f\\!\\left(\\tfrac12\\right)<0$, l'arrel és a\n$\\left(\\tfrac12,\\tfrac34\\right)$, de longitud $\\tfrac14$.\n\\end{solucio}\n\n\\apartat{0,75}\nDemostra que les gràfiques de les funcions $y=e^{x}$ i $y=3-x$ es tallen en algun punt\nd'abscissa $x\\in(0,1)$.\n\n\\begin{solucio}\nEs tallen on $e^x=3-x$, és a dir on $k(x)=e^x+x-3$ s'anul·la. $k$ és contínua a\n$\\mathbb{R}$ per ser suma de funcions contínues, i\n$k(0)=1-3=-2<0$, $k(1)=e-2\\approx0{,}72>0$.\nPer Bolzano existeix $c\\in(0,1)$ amb $k(c)=0$, que és l'abscissa del punt de tall.\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "u7/bolzano-biseccio/q001/out/enunciat.pdf",
   "pdf_solucio": "u7/bolzano-biseccio/q001/out/solucio.pdf"
  },
  {
   "id": "u7/bolzano-biseccio/q002",
   "unitat": "u7",
   "tema": "bolzano-biseccio",
   "codi": "q002",
   "titol": "Bolzano per assolir un valor, arrel amb error menor que una dècima i punt de tall",
   "punts": 2.5,
   "apartats": [
    1.0,
    1.0,
    0.5
   ],
   "dificultat": "●●○",
   "origen": [
    43,
    113,
    114,
    120
   ],
   "minuts": 14,
   "etiquetes": [
    "Bolzano",
    "aproximació d'arrels",
    "punt de tall",
    "exponencial"
   ],
   "temes_secundaris": [],
   "procedencia": null,
   "unitats": [],
   "tex": "\\begin{apartats}\n\n\\apartat{1}\nDemostra que la funció $f(x)=3^{x-1}+x$ pren el valor $4$ en algun punt de l'interval\n$(1,2)$.\n\n\\begin{solucio}\nConsiderem $g(x)=f(x)-4=3^{x-1}+x-4$. Demostrar que $f$ pren el valor $4$ equival a\ndemostrar que $g$ s'anul·la.\\\\\n$g$ és contínua a $\\mathbb{R}$ (suma d'una exponencial i un polinomi), en particular a\n$[1,2]$, i $g(1)=1+1-4=-2<0$, $g(2)=3+2-4=1>0$.\\\\\nPel teorema de Bolzano, existeix $c\\in(1,2)$ amb $g(c)=0$, és a dir, $f(c)=4$.\n\\end{solucio}\n\n\\apartat{1}\nDemostra que l'equació $x^3+2x-5=0$ té almenys una solució a l'interval $[1,2]$ i troba\nun interval de longitud $0{,}1$ que la contingui.\n\n\\begin{solucio}\n$p(x)=x^3+2x-5$ és polinòmica i, per tant, contínua. $p(1)=-2<0$ i $p(2)=7>0$: per\nBolzano hi ha una arrel a $(1,2)$.\\\\\n$p(1{,}5)=1{,}375>0$: l'arrel és a $(1;\\,1{,}5)$.\\\\\n$p(1{,}3)=-0{,}203<0$ i $p(1{,}4)=0{,}544>0$: l'arrel és a $(1{,}3;\\,1{,}4)$, de\nlongitud $0{,}1$. Qualsevol nombre d'aquest interval n'és una aproximació amb un error\nmenor que una dècima.\n\\end{solucio}\n\n\\apartat{0,5}\nDemostra que les gràfiques de $y=2^{x}$ i $y=3x$ es tallen en algun punt d'abscissa\n$x\\in(0,1)$.\n\n\\begin{solucio}\nEs tallen on $2^x=3x$, és a dir on s'anul·la $k(x)=2^x-3x$, que és contínua a\n$\\mathbb{R}$. $k(0)=1>0$ i $k(1)=2-3=-1<0$. Per Bolzano, existeix $c\\in(0,1)$ amb\n$k(c)=0$.\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "u7/bolzano-biseccio/q002/out/enunciat.pdf",
   "pdf_solucio": "u7/bolzano-biseccio/q002/out/solucio.pdf"
  },
  {
   "id": "u7/continuitat-trossos/q001",
   "unitat": "u7",
   "tema": "continuitat-trossos",
   "codi": "q001",
   "titol": "Paràmetres de continuïtat i classificació en una funció a trossos",
   "punts": 2.5,
   "apartats": [
    1.25,
    1.25
   ],
   "dificultat": "●●○",
   "origen": [
    40,
    103,
    106
   ],
   "minuts": 15,
   "etiquetes": [
    "sistema d'equacions",
    "salt finit",
    "salt infinit",
    "e^x"
   ],
   "temes_secundaris": [
    "parametres-ab"
   ],
   "procedencia": null,
   "unitats": [],
   "tex": "\\begin{apartats}\n\n\\apartat{1,25}\nDetermina els valors de $a$ i $b$ perquè la funció següent sigui contínua a tots els\npunts de $\\mathbb{R}$.\n\\[\nf(x)=\\begin{cases}\n  x^2-a & \\si{x<-1},\\\\[3pt]\n  bx+2  & \\si{-1\\le x\\le 2},\\\\[3pt]\n  ax+b  & \\si{x>2}.\n\\end{cases}\n\\]\n\n\\begin{solucio}\nCada branca és contínua al seu tros, de manera que només cal imposar la continuïtat\nals enganxaments.\\\\\nEn $x=-1$: $\\lim_{x\\to-1^-}f(x)=1-a$ i $f(-1)=-b+2$, d'on $1-a=-b+2$, és a dir $b=a+1$.\\\\\nEn $x=2$: $f(2)=2b+2$ i $\\lim_{x\\to2^+}f(x)=2a+b$, d'on $2b+2=2a+b$, és a dir $b=2a-2$.\\\\\nIgualant: $a+1=2a-2\\Rightarrow \\boxed{a=3}$ i $\\boxed{b=4}$.\n\\end{solucio}\n\n\\apartat{1,25}\nEstudia la continuïtat de la funció $h$ en $x=0$, $x=2$ i $x=3$, i classifica'n els\ntipus de discontinuïtat que presenta.\n\\[\nh(x)=\\begin{cases}\n  2x+1 & \\si{x<0},\\\\[3pt]\n  e^{x} & \\si{0\\le x\\le 2},\\\\[3pt]\n  \\dfrac{x-2}{x^2-5x+6} & \\si{x>2}.\n\\end{cases}\n\\]\n\n\\begin{solucio}\nPer a $x>2$, $\\dfrac{x-2}{(x-2)(x-3)}=\\dfrac{1}{x-3}$.\\\\\n$x=0$: laterals $1$ i $e^0=1$, i $h(0)=1$. \\textbf{És contínua.}\\\\\n$x=2$: $h(2)=e^2$ i $\\lim_{x\\to2^-}h(x)=e^2$, però $\\lim_{x\\to2^+}h(x)=\\frac{1}{2-3}=-1$.\nLaterals finits i diferents: \\textbf{salt finit}.\\\\\n$x=3$: $h(3)$ no existeix i els laterals valen $-\\infty$ i $+\\infty$:\n\\textbf{salt infinit} (asímptota vertical $x=3$).\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "u7/continuitat-trossos/q001/out/enunciat.pdf",
   "pdf_solucio": "u7/continuitat-trossos/q001/out/solucio.pdf"
  },
  {
   "id": "u7/continuitat-trossos/q002",
   "unitat": "u7",
   "tema": "continuitat-trossos",
   "codi": "q002",
   "titol": "Continuïtat d'una funció a trossos amb logaritme i d'una funció amb valor absolut",
   "punts": 2.5,
   "apartats": [
    1.25,
    1.25
   ],
   "dificultat": "●●●",
   "origen": [
    93,
    102
   ],
   "minuts": 15,
   "etiquetes": [
    "logaritme",
    "valor absolut",
    "salt finit"
   ],
   "temes_secundaris": [
    "domini-discontinuitats"
   ],
   "procedencia": null,
   "unitats": [],
   "tex": "\\begin{apartats}\n\n\\apartat{1,25}\nEstudia la continuïtat de la funció següent i classifica'n les discontinuïtats.\n\\[\nf(x)=\\begin{cases}\n  x+2 & \\si{x<-1},\\\\[3pt]\n  x^2 & \\si{-1\\le x\\le 2},\\\\[3pt]\n  3+\\ln(x-1) & \\si{x>2}.\n\\end{cases}\n\\]\n\n\\begin{solucio}\nLes dues primeres branques són polinòmiques. La tercera és contínua per a $x>1$, i per\ntant a $(2,+\\infty)$. Cal estudiar els enganxaments.\\\\\n$x=-1$: $\\lim_{x\\to-1^-}f(x)=1$, $f(-1)=1$ i $\\lim_{x\\to-1^+}f(x)=1$. \\textbf{És contínua.}\\\\\n$x=2$: $f(2)=4=\\lim_{x\\to2^-}f(x)$, però $\\lim_{x\\to2^+}f(x)=3+\\ln1=3$.\nLaterals finits i diferents: \\textbf{salt finit} (de salt $1$).\\\\\nPer tant, $f$ és contínua a $\\mathbb{R}\\setminus\\{2\\}$.\n\\end{solucio}\n\n\\apartat{1,25}\nEscriu la funció $h(x)=\\dfrac{x^2-1}{|x-1|}$ com una funció definida a trossos, sense\nvalor absolut. Estudia'n la continuïtat i classifica les discontinuïtats que presenti.\n\n\\begin{solucio}\n$h$ no està definida en $x=1$.\\\\\nSi $x>1$: $|x-1|=x-1$ i $h(x)=\\dfrac{(x-1)(x+1)}{x-1}=x+1$.\\\\\nSi $x<1$: $|x-1|=-(x-1)$ i $h(x)=\\dfrac{(x-1)(x+1)}{-(x-1)}=-x-1$.\n\\[\nh(x)=\\begin{cases} -x-1 & \\si{x<1},\\\\ x+1 & \\si{x>1}.\\end{cases}\n\\]\nCada branca és polinòmica, i per tant $h$ és contínua a $\\mathbb{R}\\setminus\\{1\\}$.\nEn $x=1$: $\\lim_{x\\to1^-}h(x)=-2$ i $\\lim_{x\\to1^+}h(x)=2$. Laterals finits i\ndiferents: \\textbf{salt finit}.\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "u7/continuitat-trossos/q002/out/enunciat.pdf",
   "pdf_solucio": "u7/continuitat-trossos/q002/out/solucio.pdf"
  },
  {
   "id": "u7/domini-discontinuitats/q001",
   "unitat": "u7",
   "tema": "domini-discontinuitats",
   "codi": "q001",
   "titol": "Domini, classificació de discontinuïtats i construcció d'una racional",
   "punts": 2.5,
   "apartats": [
    0.75,
    1.0,
    0.75
   ],
   "dificultat": "●●○",
   "origen": [
    47,
    93,
    94
   ],
   "minuts": 14,
   "etiquetes": [
    "domini",
    "evitable",
    "inventa"
   ],
   "temes_secundaris": [
    "continuitat-trossos"
   ],
   "procedencia": null,
   "unitats": [],
   "tex": "\\begin{apartats}\n\n\\apartat{0,75}\nDetermina el domini i estudia la continuïtat de les funcions següents:\n\\begin{graella}{2}\n  \\sa y=\\sqrt{x^2-9} & \\sa y=\\ln(4-x)\n\\end{graella}\n\n\\begin{solucio}\ni) Cal $x^2-9\\ge0$, és a dir $|x|\\ge3$: $\\mathrm{Dom}=(-\\infty,-3]\\cup[3,+\\infty)$.\nÉs contínua a tot el domini (composició de contínues).\\\\\nii) Cal $4-x>0$: $\\mathrm{Dom}=(-\\infty,4)$. És contínua a tot el domini.\n\\end{solucio}\n\n\\apartat{1}\nTroba els punts en què la funció\n\\[\nf(x)=\\frac{x^2-x-6}{x^2-2x-3}\n\\]\nés discontínua i classifica'n la discontinuïtat.\n\n\\begin{solucio}\n$f(x)=\\dfrac{(x-3)(x+2)}{(x-3)(x+1)}=\\dfrac{x+2}{x+1}$ per a $x\\ne3$.\nEl domini és $\\mathbb{R}\\setminus\\{-1,3\\}$.\\\\\n$x=3$: $\\lim_{x\\to3}f(x)=\\dfrac54$ existeix però $f(3)$ no. \\textbf{Discontinuïtat evitable.}\\\\\n$x=-1$: els laterals valen $-\\infty$ i $+\\infty$. \\textbf{Salt infinit} (asímptota vertical $x=-1$).\n\\end{solucio}\n\n\\apartat{0,75}\n\\textbf{Inventa.} Escriu una funció racional $g$ que compleixi simultàniament les\ncondicions següents: $\\lim_{x\\to+\\infty}g(x)=3$, presenta una discontinuïtat de salt\ninfinit en $x=2$ i una discontinuïtat evitable en $x=-1$.\n\n\\begin{solucio}\nPer exemple $g(x)=\\dfrac{3(x+1)(x-5)}{(x+1)(x-2)}$.\\\\\nEl factor $(x+1)$ es cancel·la: discontinuïtat evitable en $x=-1$, amb límit\n$\\frac{3(-6)}{-3}=6$. En $x=2$ el denominador s'anul·la i el numerador no: salt infinit.\nNumerador i denominador tenen el mateix grau i el quocient dels coeficients principals\nés $3$, així que $\\lim_{x\\to+\\infty}g(x)=3$. (La resposta no és única.)\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "u7/domini-discontinuitats/q001/out/enunciat.pdf",
   "pdf_solucio": "u7/domini-discontinuitats/q001/out/solucio.pdf"
  },
  {
   "id": "u7/domini-discontinuitats/q002",
   "unitat": "u7",
   "tema": "domini-discontinuitats",
   "codi": "q002",
   "titol": "Dominis amb radical i logaritme, discontinuïtats d'una racional amb Ruffini i funció inventada",
   "punts": 2.5,
   "apartats": [
    0.75,
    1.0,
    0.75
   ],
   "dificultat": "●●○",
   "origen": [
    47,
    93,
    94
   ],
   "minuts": 15,
   "etiquetes": [
    "domini",
    "Ruffini",
    "evitable",
    "inventa"
   ],
   "temes_secundaris": [
    "continuitat-trossos"
   ],
   "procedencia": null,
   "unitats": [],
   "tex": "\\begin{apartats}\n\n\\apartat{0,75}\nDetermina el domini i estudia la continuïtat de les funcions següents:\n\\begin{graella}{2}\n  \\sa y=\\sqrt{x^2-2x-3} & \\sa y=\\ln|x-2|\n\\end{graella}\n\n\\begin{solucio}\ni) Cal $x^2-2x-3=(x-3)(x+1)\\ge0$: $\\mathrm{Dom}=(-\\infty,-1]\\cup[3,+\\infty)$.\nÉs contínua a tot el domini.\\\\\nii) Cal $|x-2|>0$, és a dir $x\\ne2$: $\\mathrm{Dom}=\\mathbb{R}\\setminus\\{2\\}$.\nÉs contínua a tot el domini. En $x=2$ els dos laterals valen $-\\infty$:\n\\textbf{salt infinit} (asímptota vertical $x=2$).\n\\end{solucio}\n\n\\apartat{1}\nTroba els punts de discontinuïtat de la funció\n\\[\nf(x)=\\frac{x-1}{x^3+3x^2-4}\n\\]\ni classifica'ls.\n\n\\begin{solucio}\n$x=1$ anul·la el denominador. Per Ruffini, $x^3+3x^2-4=(x-1)(x^2+4x+4)=(x-1)(x+2)^2$.\nEl domini és $\\mathbb{R}\\setminus\\{-2,1\\}$ i, per a $x\\neq1$, $f(x)=\\dfrac{1}{(x+2)^2}$.\\\\\n$x=1$: $\\lim_{x\\to1}f(x)=\\dfrac19$, però $f(1)$ no existeix: \\textbf{evitable}.\\\\\n$x=-2$: $(x+2)^2>0$ als dos costats, així que els dos laterals valen $+\\infty$:\n\\textbf{salt infinit}, amb $\\lim_{x\\to-2}f(x)=+\\infty$.\n\\end{solucio}\n\n\\apartat{0,75}\n\\textbf{Inventa.} Escriu una funció definida a trossos que sigui contínua a tot\n$\\mathbb{R}$ excepte en $x=0$, on ha de tenir una discontinuïtat evitable, i en $x=3$, on\nha de tenir una discontinuïtat de salt finit.\n\n\\begin{solucio}\nPer exemple:\n\\[\nf(x)=\\begin{cases} x & \\si{x<3,\\ x\\ne0},\\\\ 1 & \\si{x=0},\\\\ x+1 & \\si{x\\ge3}.\\end{cases}\n\\]\nEn $x=0$: $\\lim_{x\\to0}f(x)=0\\ne f(0)=1$, evitable. En $x=3$: laterals $3$ i $4$, salt\nfinit. A la resta de punts, les branques són polinòmiques. (La resposta no és única.)\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "u7/domini-discontinuitats/q002/out/enunciat.pdf",
   "pdf_solucio": "u7/domini-discontinuitats/q002/out/solucio.pdf"
  },
  {
   "id": "u7/limits-grafica/q001",
   "unitat": "u7",
   "tema": "limits-grafica",
   "codi": "q001",
   "titol": "Límits i continuïtat llegits sobre una gràfica",
   "punts": 2.5,
   "apartats": [
    1.25,
    1.25
   ],
   "dificultat": "●○○",
   "origen": [
    44,
    66,
    68,
    92
   ],
   "minuts": 12,
   "etiquetes": [
    "lectura de gràfica",
    "límits laterals",
    "classificació"
   ],
   "temes_secundaris": [
    "limits-punt",
    "continuitat-trossos"
   ],
   "procedencia": null,
   "unitats": [],
   "tex": "La figura mostra la gràfica d'una funció $f$. La recta discontínua és una asímptota\nvertical; els cercles buits indiquen punts que no pertanyen a la gràfica i els cercles\nplens, punts que sí que hi pertanyen.\n\n\\begin{center}\n\\begin{tikzpicture}[x=0.95cm,y=0.78cm]\n  % Branques:  2-e^x  |  recta (0,3)-(2,1)  |  2/(4-x)  |  1-1/(x-4)^2\n  \\draw[gray!55,very thin,step=1] (-5,-3) grid (8,4);\n  \\draw[->] (-5.4,0) -- (8.6,0) node[below right] {$x$};\n  \\draw[->] (0,-3.4) -- (0,4.6) node[above left] {$y$};\n  \\foreach \\i in {-4,-2,2,6,8} \\draw (\\i,0.12) -- (\\i,-0.12) node[below,font=\\scriptsize] {$\\i$};\n  \\draw (4,0.12) -- (4,-0.12) node[below,xshift=5pt,font=\\scriptsize] {$4$};\n  \\foreach \\j in {-2,-1,1,2,3} \\draw (0.12,\\j) -- (-0.12,\\j) node[left,font=\\scriptsize] {$\\j$};\n  \\draw[dashed,thick] (4,-3) -- (4,4);\n  \\begin{scope}\n    \\clip (-5,-3) rectangle (8,4);\n    \\draw[red,very thick,domain=-5:0,samples=80,smooth] plot (\\x,{2-exp(\\x)});\n    \\draw[red,very thick] (0,3) -- (2,1);\n    \\draw[red,very thick,domain=2:3.6,samples=80,smooth] plot (\\x,{2/(4-\\x)});\n    \\draw[red,very thick,domain=4.4:8,samples=100,smooth] plot (\\x,{1-1/((\\x-4)^2)});\n  \\end{scope}\n  \\draw[fill=white,thick] (0,1) circle (2.4pt);\n  \\fill (0,3) circle (2.4pt);\n  \\draw[fill=white,thick] (2,1) circle (2.4pt);\n  \\fill (2,-1) circle (2.4pt);\n  \\node[red,font=\\small] at (-3.2,3.1) {$y=f(x)$};\n\\end{tikzpicture}\n\\end{center}\n\n\\begin{apartats}\n\n\\apartat{1,25}\nA partir de la gràfica, determina el valor dels límits següents. Si algun no existeix,\nindica-ho i justifica-ho amb els límits laterals.\n\\begin{graella}{4}\n  \\sa \\lim_{x\\to-\\infty}f(x) & \\sa \\lim_{x\\to0^-}f(x) & \\sa \\lim_{x\\to0^+}f(x) & \\sa \\lim_{x\\to2}f(x)\\\\[10pt]\n  \\sa \\lim_{x\\to4^-}f(x) & \\sa \\lim_{x\\to4^+}f(x) & \\sa \\lim_{x\\to+\\infty}f(x)\n\\end{graella}\n\n\\begin{solucio}\ni) $2$ \\quad ii) $1$ \\quad iii) $3$ \\quad iv) $1$ (els dos laterals valen 1)\n\\quad v) $+\\infty$ \\quad vi) $-\\infty$ \\quad vii) $1$.\n\\end{solucio}\n\n\\apartat{1,25}\nEstudia la continuïtat de $f$ en $x=0$, $x=2$ i $x=4$. Si en algun d'aquests punts no és\ncontínua, classifica'n la discontinuïtat (evitable, de salt finit o de salt infinit) i\njustifica-ho amb el valor de la funció i els límits.\n\n\\begin{solucio}\n$x=0$: $f(0)=3$, però els laterals valen $1$ i $3$. Com que són finits i diferents,\nhi ha una \\textbf{discontinuïtat de salt finit} (de salt $2$).\\\\\n$x=2$: els dos laterals valen $1$, així que $\\lim_{x\\to2}f(x)=1$, però $f(2)=-1$.\nCom que el límit existeix i no coincideix amb la imatge, la \\textbf{discontinuïtat és evitable}.\\\\\n$x=4$: $f(4)$ no existeix i els laterals valen $+\\infty$ i $-\\infty$.\n\\textbf{Discontinuïtat de salt infinit} (asímptota vertical $x=4$).\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "u7/limits-grafica/q001/out/enunciat.pdf",
   "pdf_solucio": "u7/limits-grafica/q001/out/solucio.pdf"
  },
  {
   "id": "u7/limits-grafica/q002",
   "unitat": "u7",
   "tema": "limits-grafica",
   "codi": "q002",
   "titol": "Límits i continuïtat sobre una gràfica amb un angle, un forat i una asímptota",
   "punts": 2.5,
   "apartats": [
    1.25,
    1.25
   ],
   "dificultat": "●●○",
   "origen": [
    44,
    66,
    68,
    92
   ],
   "minuts": 12,
   "etiquetes": [
    "lectura de gràfica",
    "límits laterals",
    "punt angulós",
    "classificació"
   ],
   "temes_secundaris": [
    "limits-punt",
    "continuitat-trossos"
   ],
   "procedencia": null,
   "unitats": [],
   "tex": "La figura mostra la gràfica d'una funció $f$. La recta discontínua és una asímptota\nvertical; els cercles buits indiquen punts que no pertanyen a la gràfica i els cercles\nplens, punts que sí que hi pertanyen.\n\n\\begin{center}\n\\begin{tikzpicture}[x=0.95cm,y=0.7cm]\n  % Branques:  2x+5 (x<=-1) | |x|+1 (-1<x<2) | 2+2/(4-x) (2<x<4) | 1+1/(x-4)^2 (x>4)\n  \\draw[gray!55,very thin,step=1] (-5,-3) grid (8,5);\n  \\draw[->] (-5.4,0) -- (8.6,0) node[below right] {$x$};\n  \\draw[->] (0,-3.4) -- (0,5.6) node[above left] {$y$};\n  \\foreach \\i in {-4,-2,2,6,8} \\draw (\\i,0.12) -- (\\i,-0.12) node[below,font=\\scriptsize] {$\\i$};\n  \\draw (4,0.12) -- (4,-0.12) node[below,xshift=5pt,font=\\scriptsize] {$4$};\n  \\foreach \\j in {-2,-1,2,3,4} \\draw (0.12,\\j) -- (-0.12,\\j) node[left,font=\\scriptsize] {$\\j$};\n  \\draw (0.12,1) -- (-0.12,1) node[right,xshift=6pt,font=\\scriptsize] {$1$};\n  \\draw[dashed,thick] (4,-3) -- (4,5);\n  \\begin{scope}\n    \\clip (-5,-3) rectangle (8,5);\n    \\draw[red,very thick] (-5,-5) -- (-1,3);\n    \\draw[red,very thick] (-1,2) -- (0,1) -- (2,3);\n    \\draw[red,very thick,domain=2:3.6,samples=80,smooth] plot (\\x,{2+2/(4-\\x)});\n    \\draw[red,very thick,domain=4.35:8,samples=100,smooth] plot (\\x,{1+1/((\\x-4)^2)});\n  \\end{scope}\n  \\fill (-1,3) circle (2.4pt);\n  \\draw[fill=white,thick] (-1,2) circle (2.4pt);\n  \\draw[fill=white,thick] (2,3) circle (2.4pt);\n  \\node[red,font=\\small] at (-3.4,4.2) {$y=f(x)$};\n\\end{tikzpicture}\n\\end{center}\n\n\\begin{apartats}\n\n\\apartat{1,25}\nA partir de la gràfica, determina el valor dels límits següents. Si algun no existeix,\nindica-ho i justifica-ho amb els límits laterals.\n\\begin{graella}{4}\n  \\sa \\lim_{x\\to-\\infty}f(x) & \\sa \\lim_{x\\to-1^-}f(x) & \\sa \\lim_{x\\to-1^+}f(x) & \\sa \\lim_{x\\to-1}f(x)\\\\[10pt]\n  \\sa \\lim_{x\\to2}f(x) & \\sa \\lim_{x\\to4^-}f(x) & \\sa \\lim_{x\\to4}f(x) & \\sa \\lim_{x\\to+\\infty}f(x)\n\\end{graella}\n\n\\begin{solucio}\ni) $-\\infty$ \\quad ii) $3$ \\quad iii) $2$ \\quad iv) no existeix, perquè els laterals\nvalen $3$ i $2$ \\quad v) $3$ \\quad vi) $+\\infty$ \\quad vii) $+\\infty$, perquè els dos\nlaterals valen $+\\infty$ \\quad viii) $1$.\n\\end{solucio}\n\n\\apartat{1,25}\nIndica, si existeixen, $f(-1)$, $f(0)$ i $f(2)$. Estudia la continuïtat de $f$ en\n$x=-1$, $x=0$, $x=2$ i $x=4$, i classifica'n les discontinuïtats.\n\n\\begin{solucio}\n$f(-1)=3$, $f(0)=1$ i $f(2)$ no existeix.\\\\\n$x=-1$: $f(-1)=3$ coincideix amb el lateral esquerre, però el dret val $2$. Laterals\nfinits i diferents: \\textbf{salt finit}.\\\\\n$x=0$: $\\lim_{x\\to0}f(x)=1=f(0)$. \\textbf{És contínua}: la gràfica hi fa un angle, però no\ns'hi trenca. Continuïtat no vol dir suavitat.\\\\\n$x=2$: $\\lim_{x\\to2}f(x)=3$, però $f(2)$ no existeix: \\textbf{evitable}.\\\\\n$x=4$: $f(4)$ no existeix i els dos laterals valen $+\\infty$: \\textbf{salt infinit}\n(asímptota vertical $x=4$).\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "u7/limits-grafica/q002/out/enunciat.pdf",
   "pdf_solucio": "u7/limits-grafica/q002/out/solucio.pdf"
  },
  {
   "id": "u7/limits-infinit/q001",
   "unitat": "u7",
   "tema": "limits-infinit",
   "codi": "q001",
   "titol": "Límits en l'infinit: racionals, potències, exponencials i un paràmetre",
   "punts": 2.5,
   "apartats": [
    1.0,
    0.75,
    0.75
   ],
   "dificultat": "●●○",
   "origen": [
    45,
    46,
    48
   ],
   "minuts": 12,
   "etiquetes": [
    "racionals",
    "exponencials",
    "radicals",
    "paràmetre"
   ],
   "temes_secundaris": [],
   "procedencia": null,
   "unitats": [],
   "tex": "\\begin{apartats}\n\n\\apartat{1}\nCalcula els límits següents:\n\\begin{graella}{3}\n  \\sa \\lim_{x\\to+\\infty}\\frac{5x-2}{3x^2+x+1} &\n  \\sa \\lim_{x\\to-\\infty}\\frac{2x^3-x}{1-x^2} &\n  \\sa \\lim_{x\\to-\\infty}\\frac{6x^2-5}{3x^2+2x}\n\\end{graella}\n\n\\begin{solucio}\ni) El grau del denominador és més gran que el del numerador: el límit val $0$.\\\\\nii) El grau del numerador és més gran. El quocient dels termes de grau més alt és\n$\\dfrac{2x^3}{-x^2}=-2x$, que tendeix a $+\\infty$ quan $x\\to-\\infty$: el límit és $+\\infty$.\\\\\niii) Mateix grau: quocient dels coeficients principals, $\\dfrac{6}{3}=2$.\n\\end{solucio}\n\n\\apartat{0,75}\nCalcula els límits següents:\n\\begin{graella}{4}\n  \\sa \\lim_{x\\to+\\infty}\\frac{1}{\\sqrt[3]{x}} &\n  \\sa \\lim_{x\\to+\\infty}\\left(\\frac34\\right)^{x} &\n  \\sa \\lim_{x\\to-\\infty}2^{-x} &\n  \\sa \\lim_{x\\to-\\infty}\\sqrt{1-x}\n\\end{graella}\n\n\\begin{solucio}\ni) $\\sqrt[3]{x}\\to+\\infty$, per tant el quocient tendeix a $0$.\\\\\nii) La base és més petita que $1$: $\\left(\\tfrac34\\right)^{x}\\to0$.\\\\\niii) Si $x\\to-\\infty$, aleshores $-x\\to+\\infty$ i $2^{-x}\\to+\\infty$.\\\\\niv) Si $x\\to-\\infty$, aleshores $1-x\\to+\\infty$ i $\\sqrt{1-x}\\to+\\infty$.\n\\end{solucio}\n\n\\apartat{0,75}\nConsidera la funció $f(x)=\\dfrac{kx^2-3x}{2x^2+5}$, on $k$ és un nombre real.\nDetermina $k$ perquè $\\lim_{x\\to+\\infty}f(x)=3$. Existeix algun valor de $k$ per al qual\naquest límit sigui $+\\infty$? Justifica-ho.\n\n\\begin{solucio}\nSi $k\\neq0$, numerador i denominador tenen grau $2$ i el límit val $\\dfrac{k}{2}$.\nImposant $\\dfrac{k}{2}=3$ s'obté $\\boxed{k=6}$.\\\\\nSi $k=0$, el numerador té grau $1$ i el límit val $0$. Per tant, el límit és sempre finit\n($\\tfrac k2$ o $0$) i \\textbf{no hi ha cap valor} de $k$ que el faci $+\\infty$: el grau del\nnumerador no pot superar mai el del denominador.\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "u7/limits-infinit/q001/out/enunciat.pdf",
   "pdf_solucio": "u7/limits-infinit/q001/out/solucio.pdf"
  },
  {
   "id": "u7/limits-punt/q001",
   "unitat": "u7",
   "tema": "limits-punt",
   "codi": "q001",
   "titol": "Càlcul de límits: infinit, indeterminació 0/0 i funció a trossos",
   "punts": 2.5,
   "apartats": [
    1.0,
    0.75,
    0.75
   ],
   "dificultat": "●●○",
   "origen": [
    46,
    48,
    76,
    88,
    90
   ],
   "minuts": 15,
   "etiquetes": [
    "racionals",
    "0/0",
    "a trossos",
    "ordres d'infinit"
   ],
   "temes_secundaris": [
    "limits-infinit",
    "limits-trossos"
   ],
   "procedencia": null,
   "unitats": [],
   "tex": "\\begin{apartats}\n\n\\apartat{1}\nCalcula els límits següents:\n\\begin{graella}{3}\n  \\sa \\lim_{x\\to+\\infty}\\frac{3x^2+1}{x-4} &\n  \\sa \\lim_{x\\to-\\infty}\\frac{1-x^4}{2x^4-x^2+5} &\n  \\sa \\lim_{x\\to+\\infty}\\frac{x^3+2x}{3^x}\n\\end{graella}\n\n\\begin{solucio}\ni) El grau del numerador supera el del denominador i el quocient dels coeficients\nprincipals és positiu: $+\\infty$.\\\\\nii) Mateix grau: quocient dels coeficients principals, $-1/2$.\\\\\niii) L'exponencial és un infinit d'ordre superior a qualsevol potència: $0$.\n\\end{solucio}\n\n\\apartat{0,75}\nCalcula, si existeixen, els límits següents. Si algun no existeix, justifica-ho amb\nels límits laterals.\n\\begin{graella}{2}\n  \\sa \\lim_{x\\to-2}\\frac{x^2+x-2}{x^2+3x+2} &\n  \\sa \\lim_{x\\to1}\\frac{x^2-1}{x^2-2x+1}\n\\end{graella}\n\n\\begin{solucio}\ni) $\\dfrac{(x+2)(x-1)}{(x+1)(x+2)}=\\dfrac{x-1}{x+1}\\to\\dfrac{-3}{-1}=3$.\\\\\nii) $\\dfrac{(x-1)(x+1)}{(x-1)^2}=\\dfrac{x+1}{x-1}$. Els laterals valen $-\\infty$ i\n$+\\infty$, per tant el límit \\textbf{no existeix}.\n\\end{solucio}\n\n\\apartat{0,75}\nDonada la funció\n\\[\ng(x)=\\begin{cases} x^2+1 & \\si{x<2},\\\\[4pt] \\dfrac{12}{x+1} & \\si{x\\ge 2},\\end{cases}\n\\]\ndetermina:\n\\begin{graella}{3}\n  \\sa \\lim_{x\\to-1}g(x) & \\sa \\lim_{x\\to2}g(x) & \\sa \\lim_{x\\to+\\infty}g(x)\n\\end{graella}\n\n\\begin{solucio}\ni) Com que $-1<2$, hi actua la branca $x^2+1$: el límit val $2$. (La branca\n$12/(x+1)$ no hi intervé.)\\\\\nii) Laterals $5$ i $4$: el límit \\textbf{no existeix}.\\\\\niii) $12/(x+1)\\to 0$.\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "u7/limits-punt/q001/out/enunciat.pdf",
   "pdf_solucio": "u7/limits-punt/q001/out/solucio.pdf"
  },
  {
   "id": "u7/limits-punt/q002",
   "unitat": "u7",
   "tema": "limits-punt",
   "codi": "q002",
   "titol": "Límits en un punt: 0/0 amb Ruffini, funció amb radical i límits infinits",
   "punts": 2.5,
   "apartats": [
    1.0,
    0.75,
    0.75
   ],
   "dificultat": "●●○",
   "origen": [
    70,
    76
   ],
   "minuts": 13,
   "etiquetes": [
    "0/0",
    "Ruffini",
    "radical",
    "k/0"
   ],
   "temes_secundaris": [],
   "procedencia": null,
   "unitats": [],
   "tex": "\\begin{apartats}\n\n\\apartat{1}\nCalcula els límits següents:\n\\begin{graella}{3}\n  \\sa \\lim_{x\\to3}\\frac{x^2-9}{x^2-5x+6} &\n  \\sa \\lim_{x\\to-1}\\frac{x^3+1}{x^2-1} &\n  \\sa \\lim_{x\\to2}\\frac{x^2-4x+4}{x^2-3x+2}\n\\end{graella}\n\n\\begin{solucio}\nTots tres presenten una indeterminació $\\tfrac00$: es factoritza i se simplifica.\\\\\ni) $\\dfrac{(x-3)(x+3)}{(x-3)(x-2)}=\\dfrac{x+3}{x-2}\\to\\dfrac{6}{1}=6$.\\\\\nii) Per Ruffini, $x^3+1=(x+1)(x^2-x+1)$:\n$\\dfrac{(x+1)(x^2-x+1)}{(x+1)(x-1)}=\\dfrac{x^2-x+1}{x-1}\\to\\dfrac{3}{-2}=-\\dfrac32$.\\\\\niii) $\\dfrac{(x-2)^2}{(x-2)(x-1)}=\\dfrac{x-2}{x-1}\\to\\dfrac{0}{1}=0$.\n\\end{solucio}\n\n\\apartat{0,75}\nDonada la funció $f(x)=\\dfrac{2x}{\\sqrt{x^2+5}}$, calcula:\n\\begin{graella}{3}\n  \\sa \\lim_{x\\to2}f(x) & \\sa \\lim_{x\\to-1}f(x) & \\sa \\lim_{x\\to0}f(x)\n\\end{graella}\n\n\\begin{solucio}\n$f$ és contínua a tot $\\mathbb{R}$, perquè el radicand és sempre positiu: n'hi ha prou\nde substituir.\\\\\ni) $\\dfrac{4}{\\sqrt9}=\\dfrac43$. \\quad\nii) $\\dfrac{-2}{\\sqrt6}=-\\dfrac{2\\sqrt6}{6}=-\\dfrac{\\sqrt6}{3}$. \\quad\niii) $\\dfrac{0}{\\sqrt5}=0$.\n\\end{solucio}\n\n\\apartat{0,75}\nCalcula, si existeixen, els límits següents. Justifica-ho amb els límits laterals.\n\\begin{graella}{2}\n  \\sa \\lim_{x\\to1}\\frac{x+2}{(x-1)^2} & \\sa \\lim_{x\\to1}\\frac{x+2}{x-1}\n\\end{graella}\n\n\\begin{solucio}\nEn tots dos casos el numerador tendeix a $3$ i el denominador a $0$.\\\\\ni) $(x-1)^2>0$ als dos costats de $1$: els dos laterals valen $+\\infty$ i, per tant,\nel límit és $+\\infty$.\\\\\nii) $x-1$ canvia de signe: el lateral esquerre val $-\\infty$ i el dret $+\\infty$.\nEl límit \\textbf{no existeix}.\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "u7/limits-punt/q002/out/enunciat.pdf",
   "pdf_solucio": "u7/limits-punt/q002/out/solucio.pdf"
  },
  {
   "id": "u7/limits-trossos/q001",
   "unitat": "u7",
   "tema": "limits-trossos",
   "codi": "q001",
   "titol": "Límits d'una funció a trossos amb paràmetre i indeterminació 0/0",
   "punts": 2.5,
   "apartats": [
    0.75,
    1.25,
    0.5
   ],
   "dificultat": "●●○",
   "origen": [
    76,
    88,
    90
   ],
   "minuts": 12,
   "etiquetes": [
    "a trossos",
    "0/0",
    "límits laterals",
    "paràmetre"
   ],
   "temes_secundaris": [
    "limits-punt"
   ],
   "procedencia": null,
   "unitats": [],
   "tex": "Considera la funció\n\\[\ng(x)=\\begin{cases}\n  \\dfrac{x^2-4}{x+2} & \\si{x<1},\\\\[8pt]\n  x^2+k & \\si{x\\ge 1},\n\\end{cases}\n\\]\non $k$ és un nombre real.\n\n\\begin{apartats}\n\n\\apartat{0,75}\nCalcula $\\lim_{x\\to-2}g(x)$ i $\\lim_{x\\to0}g(x)$.\n\n\\begin{solucio}\nTots dos punts són a la branca $x<1$.\\\\\nEn $x=-2$ hi ha una indeterminació $\\tfrac00$:\n$\\dfrac{x^2-4}{x+2}=\\dfrac{(x+2)(x-2)}{x+2}=x-2\\to-4$.\nEl límit val $-4$, tot i que $g(-2)$ no existeix.\\\\\nEn $x=0$ se substitueix directament: $\\dfrac{-4}{2}=-2$.\n\\end{solucio}\n\n\\apartat{1,25}\nCalcula, en funció de $k$, els límits laterals de $g$ en $x=1$. Per a quin valor de $k$\nexisteix $\\lim_{x\\to1}g(x)$? Quant val aquest límit?\n\n\\begin{solucio}\n$\\lim_{x\\to1^-}g(x)=\\dfrac{1-4}{1+2}=-1$ \\quad i \\quad $\\lim_{x\\to1^+}g(x)=1+k$.\\\\\nEl límit existeix si i només si els dos laterals coincideixen: $1+k=-1$, és a dir\n$\\boxed{k=-2}$. Aleshores $\\lim_{x\\to1}g(x)=-1$.\n\\end{solucio}\n\n\\apartat{0,5}\nPer a $k=-2$, calcula $\\lim_{x\\to-\\infty}g(x)$ i $\\lim_{x\\to+\\infty}g(x)$.\n\n\\begin{solucio}\nQuan $x\\to-\\infty$ actua la primera branca, que per a $x\\ne-2$ és $x-2\\to-\\infty$.\\\\\nQuan $x\\to+\\infty$ actua la segona: $x^2-2\\to+\\infty$.\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "u7/limits-trossos/q001/out/enunciat.pdf",
   "pdf_solucio": "u7/limits-trossos/q001/out/solucio.pdf"
  },
  {
   "id": "u7/parametres-ab/q001",
   "unitat": "u7",
   "tema": "parametres-ab",
   "codi": "q001",
   "titol": "Paràmetres de continuïtat amb exponencial i logaritme, i un paràmetre amb dues solucions",
   "punts": 2.5,
   "apartats": [
    1.5,
    1.0
   ],
   "dificultat": "●●○",
   "origen": [
    40,
    102,
    106
   ],
   "minuts": 13,
   "etiquetes": [
    "sistema d'equacions",
    "logaritme",
    "exponencial",
    "equació de segon grau"
   ],
   "temes_secundaris": [
    "continuitat-trossos"
   ],
   "procedencia": null,
   "unitats": [],
   "tex": "\\begin{apartats}\n\n\\apartat{1,5}\nDetermina els valors de $a$ i $b$ perquè la funció següent sigui contínua a tot $\\mathbb{R}$.\n\\[\nf(x)=\\begin{cases}\n  e^{x}+a & \\si{x\\le 0},\\\\[3pt]\n  ax+b & \\si{0<x<2},\\\\[3pt]\n  4+\\ln(x-1) & \\si{x\\ge 2}.\n\\end{cases}\n\\]\n\n\\begin{solucio}\nCada branca és contínua al seu interval: $e^x+a$ i $ax+b$ ho són a tot $\\mathbb{R}$, i\n$4+\\ln(x-1)$ ho és per a $x>1$, en particular a $[2,+\\infty)$. Només cal estudiar els\nenganxaments.\\\\\nEn $x=0$: $f(0)=e^0+a=1+a$ i $\\lim_{x\\to0^+}f(x)=b$. Cal $b=1+a$.\\\\\nEn $x=2$: $\\lim_{x\\to2^-}f(x)=2a+b$ i $f(2)=4+\\ln1=4$. Cal $2a+b=4$.\\\\\nSubstituint: $2a+1+a=4$, d'on $\\boxed{a=1}$ i $\\boxed{b=2}$.\n\\end{solucio}\n\n\\apartat{1}\nTroba \\textbf{tots} els valors de $m$ per als quals la funció següent és contínua a tot\n$\\mathbb{R}$.\n\\[\nh(x)=\\begin{cases}\n  x+m^2 & \\si{x<1},\\\\[3pt]\n  x^2+3m & \\si{x\\ge 1}.\n\\end{cases}\n\\]\n\n\\begin{solucio}\nLes dues branques són polinòmiques, i per tant contínues: només cal estudiar $x=1$.\\\\\n$\\lim_{x\\to1^-}h(x)=1+m^2$ i $h(1)=1+3m$.\\\\\nCal $1+m^2=1+3m$, és a dir $m^2-3m=m(m-3)=0$: $\\boxed{m=0}$ o $\\boxed{m=3}$.\nHi ha \\textbf{dos} valors. (Comprovació amb $m=3$: $1+9=10$ i $1+9=10$.)\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "u7/parametres-ab/q001/out/enunciat.pdf",
   "pdf_solucio": "u7/parametres-ab/q001/out/solucio.pdf"
  }
 ]
};
