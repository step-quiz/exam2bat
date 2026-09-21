/* FITXER GENERAT PER build/build.py — NO L'EDITIS MAI */
const BANC = {
 "generat": "2026-09-21 05:16 UTC",
 "unitats": {
  "u7": {
   "nom": "Unitat 7",
   "subtitol": "Límits i continuïtat"
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
  }
 ],
 "plantilla": "\\documentclass[11pt,a4paper]{article}\n\\newif\\ifsolucions\n%%SOLUCIONS%%\n%%PREAMBUL%%\n\\begin{document}\n%%COS%%\n\\end{document}\n",
 "preambul": "% ═══════════════════════════════════════════════════════════════════════\n%  PREÀMBUL COMPARTIT DEL BANC DE PREGUNTES\n%  ─────────────────────────────────────────────────────────────────────\n%  CONTRACTE (llegeix-ho abans de tocar res):\n%\n%  · Aquest fitxer NO es compila sol. És un fragment.\n%  · Qui el fa servir (build.py o el lloc web) SEMPRE emet, per aquest\n%    ordre:  \\documentclass → \\newif\\ifsolucions + \\solucions(true|false)\n%            → aquest fitxer → \\begin{document} → cossos → \\end{document}\n%  · Tota pregunta del banc compila amb AQUEST preàmbul i cap altre.\n%    Si una pregunta necessita un paquet nou, s'afegeix aquí i es torna\n%    a compilar TOT el banc. Mai un \\usepackage dins d'una pregunta.\n% ═══════════════════════════════════════════════════════════════════════\n\n\\usepackage[T1]{fontenc}\n\\usepackage{lmodern}\n\\usepackage[catalan]{babel}\n\\usepackage{amsmath,amssymb}\n\\usepackage{array}\n\\usepackage{tikz}\n\\usepackage{enumitem}\n\\usepackage{xcolor}\n\\usepackage{comment}\n\\usepackage{needspace}\n\\usepackage[a4paper,top=1.8cm,bottom=1.8cm,left=2cm,right=2cm]{geometry}\n\n\\setlength{\\parindent}{0pt}\n\\setlength{\\parskip}{3pt}\n\n% ── 1. Capçalera de pregunta ──────────────────────────────────────────\n% El filet va A SOBRE de cada pregunta i el \\Needspace el manté enganxat\n% al seu text: així el filet mai queda orfe al capdamunt d'una pàgina.\n\\newcommand{\\encapcalament}[1]{%\n  \\par\\Needspace{6\\baselineskip}%\n  \\vspace{7pt}\\hrule\\vspace{7pt}%\n  \\noindent\\textbf{#1}\\par\\vspace{3pt}}\n\n% ── 2. Apartats a) b) c) amb la seva puntuació ────────────────────────\n% \\apartat{0,75} escriu \"(0,75 punts)\".  build.py llegeix aquests valors\n% del .tex: la puntuació viu AQUÍ i enlloc més.\n\\makeatletter\n\\newcommand{\\bp@ptsmot}[1]{\\def\\bp@a{#1}\\def\\bp@u{1}%\n  \\ifx\\bp@a\\bp@u 1~punt\\else #1~punts\\fi}\n\\newcommand{\\apartat}[1]{\\item \\textit{(\\bp@ptsmot{#1})}\\enspace\\ignorespaces}\n\\makeatother\n\\newenvironment{apartats}\n  {\\begin{enumerate}[label=\\textbf{\\alph*)},leftmargin=*,itemsep=5pt,topsep=3pt,parsep=0pt]}\n  {\\end{enumerate}}\n\n% ── 3. Graella de subapartats i) ii) iii) en mode display ─────────────\n% \\begin{graella}{4} \\sa ... & \\sa ... \\\\ \\sa ... \\end{graella}\n% La columna força \\displaystyle: els \\lim hi surten amb el subíndex A\n% SOTA, igual que en una fórmula destacada. Mai fem servir array pelat.\n\\newcounter{bpsa}\n\\newcommand{\\sa}{\\stepcounter{bpsa}\\textup{\\roman{bpsa})}~}\n\\newenvironment{graella}[1]\n  {\\setcounter{bpsa}{0}\\[\\begin{array}{*{#1}{>{\\displaystyle}l}}}\n  {\\end{array}\\]}\n\n% ── 4. Condicions dins de \\begin{cases} ───────────────────────────────\n% \\si{-1\\le x\\le 2}  →  el signe menys surt unari i ben espaiat.\n% Escriure \\text{si } -1\\le x\\le 2 a pèl produeix \"si − 1 ≤ x ≤ 2\". Bug.\n\\newcommand{\\si}[1]{\\text{si }{#1}}\n\n% ── 5. Solucions ──────────────────────────────────────────────────────\n% REGLA: \\end{solucio} ha d'anar SOL a la seva línia (ho exigeix el\n% paquet comment quan la solució s'exclou). build.py ho comprova.\n\\ifsolucions\n  \\newenvironment{solucio}\n    {\\par\\nopagebreak\\vspace{3pt}\\begingroup\\color{blue!55!black}\\small\n     \\textbf{Solució.}\\enspace\\ignorespaces}\n    {\\par\\endgroup\\vspace{3pt}}\n\\else\n  \\excludecomment{solucio}\n\\fi\n",
 "preguntes": [
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
   "tex": "Considera la funció $f(x)=x^3+x^2+x-1$.\n\n\\begin{apartats}\n\n\\apartat{1}\nEnuncia el teorema de Bolzano i demostra que l'equació $f(x)=0$ té almenys una solució\na l'interval $[0,1]$.\n\n\\begin{solucio}\n\\emph{Teorema de Bolzano.} Si $f$ és contínua a $[a,b]$ i $f(a)$ i $f(b)$ tenen signes\noposats, aleshores existeix almenys un $c\\in(a,b)$ tal que $f(c)=0$.\\\\\n$f$ és polinòmica, per tant contínua a $\\mathbb{R}$ i en particular a $[0,1]$.\nCom que $f(0)=-1<0$ i $f(1)=2>0$, hi ha almenys una arrel a $(0,1)$.\n\\end{solucio}\n\n\\apartat{0,75}\nAplicant el mètode de la bisecció, troba un interval de longitud $\\tfrac14$ que contingui\nuna solució de l'equació. Justifica cada pas.\n\n\\begin{solucio}\n$f\\!\\left(\\tfrac12\\right)=\\tfrac18+\\tfrac14+\\tfrac12-1=-\\tfrac18<0$. Com que\n$f(1)>0$, l'arrel és a $\\left(\\tfrac12,1\\right)$, de longitud $\\tfrac12$.\\\\\n$f\\!\\left(\\tfrac34\\right)=\\tfrac{27}{64}+\\tfrac{9}{16}+\\tfrac34-1=\\tfrac{47}{64}>0$.\nCom que $f\\!\\left(\\tfrac12\\right)<0$, l'arrel és a\n$\\left(\\tfrac12,\\tfrac34\\right)$, de longitud $\\tfrac14$.\n\\end{solucio}\n\n\\apartat{0,75}\nDemostra que les gràfiques de les funcions $y=e^{x}$ i $y=3-x$ es tallen en algun punt\nd'abscissa $x\\in(0,1)$.\n\n\\begin{solucio}\nEs tallen on $e^x=3-x$, és a dir on $k(x)=e^x+x-3$ s'anul·la. $k$ és contínua a\n$\\mathbb{R}$ per ser suma de funcions contínues, i\n$k(0)=1-3=-2<0$, $k(1)=e-2\\approx0{,}72>0$.\nPer Bolzano existeix $c\\in(0,1)$ amb $k(c)=0$, que és l'abscissa del punt de tall.\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "u7/bolzano-biseccio/q001/out/enunciat.pdf",
   "pdf_solucio": "u7/bolzano-biseccio/q001/out/solucio.pdf"
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
   "tex": "\\begin{apartats}\n\n\\apartat{1,25}\nDetermina els valors de $a$ i $b$ perquè la funció següent sigui contínua a tots els\npunts de $\\mathbb{R}$.\n\\[\nf(x)=\\begin{cases}\n  x^2-a & \\si{x<-1},\\\\[3pt]\n  bx+2  & \\si{-1\\le x\\le 2},\\\\[3pt]\n  ax+b  & \\si{x>2}.\n\\end{cases}\n\\]\n\n\\begin{solucio}\nCada branca és contínua al seu tros, de manera que només cal imposar la continuïtat\nals enganxaments.\\\\\nEn $x=-1$: $\\lim_{x\\to-1^-}f(x)=1-a$ i $f(-1)=-b+2$, d'on $1-a=-b+2$, és a dir $b=a+1$.\\\\\nEn $x=2$: $f(2)=2b+2$ i $\\lim_{x\\to2^+}f(x)=2a+b$, d'on $2b+2=2a+b$, és a dir $b=2a-2$.\\\\\nIgualant: $a+1=2a-2\\Rightarrow \\boxed{a=3}$ i $\\boxed{b=4}$.\n\\end{solucio}\n\n\\apartat{1,25}\nEstudia la continuïtat de la funció $h$ en $x=0$, $x=2$ i $x=3$, i classifica'n els\ntipus de discontinuïtat que presenta.\n\\[\nh(x)=\\begin{cases}\n  2x+1 & \\si{x<0},\\\\[3pt]\n  e^{x} & \\si{0\\le x\\le 2},\\\\[3pt]\n  \\dfrac{x-2}{x^2-5x+6} & \\si{x>2}.\n\\end{cases}\n\\]\n\n\\begin{solucio}\nPer a $x>2$, $\\dfrac{x-2}{(x-2)(x-3)}=\\dfrac{1}{x-3}$.\\\\\n$x=0$: laterals $1$ i $e^0=1$, i $h(0)=1$. \\textbf{És contínua.}\\\\\n$x=2$: $h(2)=e^2$ i $\\lim_{x\\to2^-}h(x)=e^2$, però $\\lim_{x\\to2^+}h(x)=\\frac{1}{2-3}=-1$.\nLaterals finits i diferents: \\textbf{salt finit}.\\\\\n$x=3$: $h(3)$ no existeix i els laterals valen $-\\infty$ i $+\\infty$:\n\\textbf{salt infinit} (asímptota vertical $x=3$).\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "u7/continuitat-trossos/q001/out/enunciat.pdf",
   "pdf_solucio": "u7/continuitat-trossos/q001/out/solucio.pdf"
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
   "tex": "\\begin{apartats}\n\n\\apartat{0,75}\nDetermina el domini i estudia la continuïtat de les funcions següents:\n\\begin{graella}{2}\n  \\sa y=\\sqrt{x^2-9} & \\sa y=\\ln(4-x)\n\\end{graella}\n\n\\begin{solucio}\ni) Cal $x^2-9\\ge0$, és a dir $|x|\\ge3$: $\\mathrm{Dom}=(-\\infty,-3]\\cup[3,+\\infty)$.\nÉs contínua a tot el domini (composició de contínues).\\\\\nii) Cal $4-x>0$: $\\mathrm{Dom}=(-\\infty,4)$. És contínua a tot el domini.\n\\end{solucio}\n\n\\apartat{1}\nTroba els punts en què la funció\n\\[\nf(x)=\\frac{x^2-x-6}{x^2-2x-3}\n\\]\nés discontínua i classifica'n la discontinuïtat.\n\n\\begin{solucio}\n$f(x)=\\dfrac{(x-3)(x+2)}{(x-3)(x+1)}=\\dfrac{x+2}{x+1}$ per a $x\\ne3$.\nEl domini és $\\mathbb{R}\\setminus\\{-1,3\\}$.\\\\\n$x=3$: $\\lim_{x\\to3}f(x)=\\dfrac54$ existeix però $f(3)$ no. \\textbf{Discontinuïtat evitable.}\\\\\n$x=-1$: els laterals valen $-\\infty$ i $+\\infty$. \\textbf{Salt infinit} (asímptota vertical $x=-1$).\n\\end{solucio}\n\n\\apartat{0,75}\n\\textbf{Inventa.} Escriu una funció racional $g$ que compleixi simultàniament les\ncondicions següents: $\\lim_{x\\to+\\infty}g(x)=3$, presenta una discontinuïtat de salt\ninfinit en $x=2$ i una discontinuïtat evitable en $x=-1$.\n\n\\begin{solucio}\nPer exemple $g(x)=\\dfrac{3(x+1)(x-5)}{(x+1)(x-2)}$.\\\\\nEl factor $(x+1)$ es cancel·la: discontinuïtat evitable en $x=-1$, amb límit\n$\\frac{3(-6)}{-3}=6$. En $x=2$ el denominador s'anul·la i el numerador no: salt infinit.\nNumerador i denominador tenen el mateix grau i el quocient dels coeficients principals\nés $3$, així que $\\lim_{x\\to+\\infty}g(x)=3$. (La resposta no és única.)\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "u7/domini-discontinuitats/q001/out/enunciat.pdf",
   "pdf_solucio": "u7/domini-discontinuitats/q001/out/solucio.pdf"
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
   "tex": "La figura mostra la gràfica d'una funció $f$. La recta discontínua és una asímptota\nvertical; els cercles buits indiquen punts que no pertanyen a la gràfica i els cercles\nplens, punts que sí que hi pertanyen.\n\n\\begin{center}\n\\begin{tikzpicture}[x=0.95cm,y=0.78cm]\n  % Branques:  2-e^x  |  recta (0,3)-(2,1)  |  2/(4-x)  |  1-1/(x-4)^2\n  \\draw[gray!55,very thin] (-5,-3) grid (8,4);\n  \\draw[->] (-5.4,0) -- (8.6,0) node[below right] {$x$};\n  \\draw[->] (0,-3.4) -- (0,4.6) node[above left] {$y$};\n  \\foreach \\i in {-4,-2,2,6,8} \\draw (\\i,0.12) -- (\\i,-0.12) node[below,font=\\scriptsize] {$\\i$};\n  \\draw (4,0.12) -- (4,-0.12) node[below,xshift=5pt,font=\\scriptsize] {$4$};\n  \\foreach \\j in {-2,-1,1,2,3} \\draw (0.12,\\j) -- (-0.12,\\j) node[left,font=\\scriptsize] {$\\j$};\n  \\draw[dashed,thick] (4,-3) -- (4,4);\n  \\begin{scope}\n    \\clip (-5,-3) rectangle (8,4);\n    \\draw[red,very thick,domain=-5:0,samples=80,smooth] plot (\\x,{2-exp(\\x)});\n    \\draw[red,very thick] (0,3) -- (2,1);\n    \\draw[red,very thick,domain=2:3.6,samples=80,smooth] plot (\\x,{2/(4-\\x)});\n    \\draw[red,very thick,domain=4.4:8,samples=100,smooth] plot (\\x,{1-1/((\\x-4)^2)});\n  \\end{scope}\n  \\draw[fill=white,thick] (0,1) circle (2.4pt);\n  \\fill (0,3) circle (2.4pt);\n  \\draw[fill=white,thick] (2,1) circle (2.4pt);\n  \\fill (2,-1) circle (2.4pt);\n  \\node[red,font=\\small] at (-3.2,3.1) {$y=f(x)$};\n\\end{tikzpicture}\n\\end{center}\n\n\\begin{apartats}\n\n\\apartat{1,25}\nA partir de la gràfica, determina el valor dels límits següents. Si algun no existeix,\nindica-ho i justifica-ho amb els límits laterals.\n\\begin{graella}{4}\n  \\sa \\lim_{x\\to-\\infty}f(x) & \\sa \\lim_{x\\to0^-}f(x) & \\sa \\lim_{x\\to0^+}f(x) & \\sa \\lim_{x\\to2}f(x)\\\\[10pt]\n  \\sa \\lim_{x\\to4^-}f(x) & \\sa \\lim_{x\\to4^+}f(x) & \\sa \\lim_{x\\to+\\infty}f(x)\n\\end{graella}\n\n\\begin{solucio}\ni) $2$ \\quad ii) $1$ \\quad iii) $3$ \\quad iv) $1$ (els dos laterals valen 1)\n\\quad v) $+\\infty$ \\quad vi) $-\\infty$ \\quad vii) $1$.\n\\end{solucio}\n\n\\apartat{1,25}\nEstudia la continuïtat de $f$ en $x=0$, $x=2$ i $x=4$. Si en algun d'aquests punts no és\ncontínua, classifica'n la discontinuïtat (evitable, de salt finit o de salt infinit) i\njustifica-ho amb el valor de la funció i els límits.\n\n\\begin{solucio}\n$x=0$: $f(0)=3$, però els laterals valen $1$ i $3$. Com que són finits i diferents,\nhi ha una \\textbf{discontinuïtat de salt finit} (de salt $2$).\\\\\n$x=2$: els dos laterals valen $1$, així que $\\lim_{x\\to2}f(x)=1$, però $f(2)=-1$.\nCom que el límit existeix i no coincideix amb la imatge, la \\textbf{discontinuïtat és evitable}.\\\\\n$x=4$: $f(4)$ no existeix i els laterals valen $+\\infty$ i $-\\infty$.\n\\textbf{Discontinuïtat de salt infinit} (asímptota vertical $x=4$).\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "u7/limits-grafica/q001/out/enunciat.pdf",
   "pdf_solucio": "u7/limits-grafica/q001/out/solucio.pdf"
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
   "tex": "\\begin{apartats}\n\n\\apartat{1}\nCalcula els límits següents:\n\\begin{graella}{3}\n  \\sa \\lim_{x\\to+\\infty}\\frac{3x^2+1}{x-4} &\n  \\sa \\lim_{x\\to-\\infty}\\frac{1-x^4}{2x^4-x^2+5} &\n  \\sa \\lim_{x\\to+\\infty}\\frac{x^3+2x}{3^x}\n\\end{graella}\n\n\\begin{solucio}\ni) El grau del numerador supera el del denominador i el quocient dels coeficients\nprincipals és positiu: $+\\infty$.\\\\\nii) Mateix grau: quocient dels coeficients principals, $-1/2$.\\\\\niii) L'exponencial és un infinit d'ordre superior a qualsevol potència: $0$.\n\\end{solucio}\n\n\\apartat{0,75}\nCalcula, si existeixen, els límits següents. Si algun no existeix, justifica-ho amb\nels límits laterals.\n\\begin{graella}{2}\n  \\sa \\lim_{x\\to-2}\\frac{x^2+x-2}{x^2+3x+2} &\n  \\sa \\lim_{x\\to1}\\frac{x^2-1}{x^2-2x+1}\n\\end{graella}\n\n\\begin{solucio}\ni) $\\dfrac{(x+2)(x-1)}{(x+1)(x+2)}=\\dfrac{x-1}{x+1}\\to\\dfrac{-3}{-1}=3$.\\\\\nii) $\\dfrac{(x-1)(x+1)}{(x-1)^2}=\\dfrac{x+1}{x-1}$. Els laterals valen $-\\infty$ i\n$+\\infty$, per tant el límit \\textbf{no existeix}.\n\\end{solucio}\n\n\\apartat{0,75}\nDonada la funció\n\\[\ng(x)=\\begin{cases} x^2+1 & \\si{x<2},\\\\[4pt] \\dfrac{12}{x+1} & \\si{x\\ge 2},\\end{cases}\n\\]\ndetermina:\n\\begin{graella}{3}\n  \\sa \\lim_{x\\to-1}g(x) & \\sa \\lim_{x\\to2}g(x) & \\sa \\lim_{x\\to+\\infty}g(x)\n\\end{graella}\n\n\\begin{solucio}\ni) Com que $-1<2$, hi actua la branca $x^2+1$: el límit val $2$. (La branca\n$12/(x+1)$ no hi intervé.)\\\\\nii) Laterals $5$ i $4$: el límit \\textbf{no existeix}.\\\\\niii) $12/(x+1)\\to 0$.\n\\end{solucio}\n\n\\end{apartats}\n",
   "pdf": "u7/limits-punt/q001/out/enunciat.pdf",
   "pdf_solucio": "u7/limits-punt/q001/out/solucio.pdf"
  }
 ]
};
