/* ═══════════════════════════════════════════════════════════════════════
   Banc de preguntes — lògica del lloc.
   Vanilla. Cap dependència. Llegeix el global BANC de cataleg.js.

   REGLES D'AQUEST FITXER
   1. L'assemblatge del .tex fa servir BANC.plantilla, el mateix fitxer
      que fa servir build/build.py. Aquí no hi ha cap plantilla escrita.
   2. Tot String.replace amb contingut LaTeX fa servir una FUNCIÓ com a
      substitut: amb una cadena, JavaScript interpretaria $$, $' i $&
      (freqüents en LaTeX) i corrompria el .tex sense avisar.
   3. Tot text que arriba del catàleg passa per esc() abans d'entrar a
      l'HTML: un títol com "f(x) per a x<2" no pot trencar la pàgina.
   4. L'adreça guarda codis estables (tema:q002), mai posicions.
   5. Cap adreça, per mal formada que sigui, pot trencar la pàgina: el que
      no s'entén s'ignora.
   ═══════════════════════════════════════════════════════════════════════ */

// Sense prototip: així #__proto__ o #constructor no hi troben res. Amb {},
// hi trobarien les propietats d'Object i la pàgina petaria (regla 5).
const PER_TEMA = Object.create(null);
BANC.temes.forEach(t => { PER_TEMA[t.slug] = []; });
BANC.preguntes.forEach(p => { (PER_TEMA[p.tema] ||= []).push(p); });
Object.values(PER_TEMA).forEach(l => l.sort((a, b) => a.codi.localeCompare(b.codi)));

let seleccio = [];        // slugs, en l'ordre en què es trien
const variant = {};       // slug → índex dins PER_TEMA[slug]
const visor = {};         // slug → 'enunciat' | 'solucio' | undefined

// ── utilitats ────────────────────────────────────────────────────────
const $ = s => document.querySelector(s);
const num = n => n.toFixed(2).replace('.', ',');
const esc = s => String(s).replace(/[&<>"']/g,
  c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function baixa(nom, text) {
  const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
  const a = Object.assign(document.createElement('a'), { href: url, download: nom });
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/** Idèntic a munta() de build.py: mateixa plantilla, mateix ordre,
 *  cada marcador substituït un sol cop. */
function munta(cossos, solucions) {
  return BANC.plantilla
    .replace('%%SOLUCIONS%%', () => solucions ? '\\solucionstrue' : '\\solucionsfalse')
    .replace('%%PREAMBUL%%', () => BANC.preambul)
    .replace('%%COS%%', () => cossos.join('\n\n'));
}

/** Idèntic a cos_amb_capcalera() de build.py: capçalera, procedència PAU
 *  (si n'hi ha) i cos. La procedència surt del catàleg, mai del .tex. */
const ambCapcalera = (q, etiqueta) =>
  `\\encapcalament{${etiqueta}}\n`
  + (q.procedencia ? `\\procedencia{${q.procedencia}}\n` : '')
  + q.tex.trim();

const preguntaDe = slug => (PER_TEMA[slug] || [])[variant[slug] || 0];

/** Les preguntes que entraran a l'examen, en ordre. Els temes buits no
 *  compten: la numeració de les targetes i la del .tex són la mateixa. */
const triades = () => seleccio.map(preguntaDe).filter(Boolean);

// ── estat a l'adreça:  #bolzano-biseccio:q001,limits-punt:q002 ────────
function llegeixHash() {
  let cru = location.hash.replace(/^#/, '');
  // Un % solt o una adreça retallada fan petar decodeURIComponent. Els slugs
  // i els codis són ASCII: si no es pot descodificar, es llegeix tal com és.
  try { cru = decodeURIComponent(cru); } catch { /* es queda sense descodificar */ }
  cru.split(',').filter(Boolean).forEach(tros => {
    const [slug, codi] = tros.split(':');
    const llista = PER_TEMA[slug];
    if (!llista || seleccio.includes(slug)) return;
    seleccio.push(slug);
    const i = llista.findIndex(q => q.codi === codi);
    variant[slug] = i >= 0 ? i : 0;       // codi desaparegut → la primera
  });
}

function escriuHash() {
  const s = seleccio.map(slug => {
    const q = preguntaDe(slug);
    return q ? `${slug}:${q.codi}` : slug;
  }).join(',');
  history.replaceState(null, '', s ? '#' + s : location.pathname + location.search);
}

// ── accions ──────────────────────────────────────────────────────────
function commuta(slug) {
  const i = seleccio.indexOf(slug);
  if (i >= 0) { seleccio.splice(i, 1); delete visor[slug]; }
  else { seleccio.push(slug); variant[slug] ??= 0; }
  pinta();
}

function rota(slug, pas) {
  const n = PER_TEMA[slug].length;
  if (n < 2) return;
  variant[slug] = ((variant[slug] || 0) + pas + n) % n;
  if (visor[slug]) visor[slug] = 'enunciat';
  pinta();
}

function mostra(slug, quin) {
  visor[slug] = visor[slug] === quin ? undefined : quin;
  pinta();
}

// ── pintat ───────────────────────────────────────────────────────────
function pintaTemes() {
  const ul = $('#temes');
  ul.innerHTML = '';
  Object.entries(BANC.unitats).forEach(([u, info]) => {
    const temes = BANC.temes.filter(t => t.unitat === u);
    if (!temes.length) return;
    const cap = document.createElement('li');
    cap.className = 'grup' + (u === 'pau' ? ' grup-pau' : '');
    cap.innerHTML = `<span>${esc(info.nom)}</span> ${esc(info.subtitol)}`;
    ul.appendChild(cap);
    temes.forEach(t => pintaTema(ul, t));
  });
}

function pintaTema(ul, t) {
  const n = PER_TEMA[t.slug].length;
  const triat = seleccio.includes(t.slug);
  const li = document.createElement('li');
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'tema' + (triat ? ' tria' : '') + (n ? '' : ' buit');
  b.title = t.descripcio;
  b.setAttribute('aria-pressed', String(triat));
  b.innerHTML = `<span class="marca" aria-hidden="true">${triat ? '✓' : ''}</span>
    <span class="tema-nom">${esc(t.nom)}</span>
    <span class="tema-n">${n}</span>`;
  b.onclick = () => commuta(t.slug);
  li.appendChild(b);
  ul.appendChild(li);
}

function pintaCarta(slug, posicio) {
  const tema = BANC.temes.find(t => t.slug === slug);
  const llista = PER_TEMA[slug];
  const div = document.createElement('div');

  if (!llista.length) {
    div.className = 'carta sensepr';
    div.innerHTML = `<div class="carta-dalt"><span class="carta-tema">${esc(tema.nom)}</span></div>
      <div class="meta">Encara no hi ha cap pregunta d'aquest tema. No comptarà a l'examen.</div>`;
    return div;
  }

  const q = preguntaDe(slug);
  const esPau = Boolean(q.procedencia);
  const unitatsTxt = q.unitats.length
    ? q.unitats.map(u => `<abbr title="${esc(BANC.unitats[u]?.subtitol || '')}">${esc(u)}</abbr>`).join(' · ')
    : 'per definir';
  div.className = 'carta' + (esPau ? ' pau' : '');
  div.innerHTML = `
    <div class="carta-dalt">
      <span class="num">Pregunta ${posicio}</span>
      <span class="carta-tema">${esc(tema.nom)}</span>
      ${esPau ? `<span class="pau-badge">${esc(q.procedencia)}</span>` : ''}
    </div>
    <div class="carta-titol">${esc(q.titol)}</div>
    <div class="meta">
      <span>${q.apartats.map(num).join(' + ')} = ${num(q.punts)} punts</span>
      <span>${esc(q.dificultat)}</span>
      <span>~${q.minuts} min</span>
      ${esPau ? `<span>cal haver fet: ${unitatsTxt}</span>` : `<span>llibre: ${q.origen.map(esc).join(', ')}</span>`}
      <span>${esc(q.codi)}</span>
    </div>
    <div class="accions">
      <button type="button" class="secundari" data-fer="enunciat" aria-pressed="${visor[slug] === 'enunciat'}">Enunciat</button>
      <button type="button" class="secundari" data-fer="solucio" aria-pressed="${visor[slug] === 'solucio'}">Solució</button>
      <button type="button" class="secundari" data-fer="tex">.tex</button>
      <span class="variant">
        <button type="button" class="secundari" data-fer="prev" aria-label="Variant anterior" ${llista.length < 2 ? 'disabled' : ''}>◀</button>
        <span>${(variant[slug] || 0) + 1}/${llista.length}</span>
        <button type="button" class="secundari" data-fer="next" aria-label="Variant següent" ${llista.length < 2 ? 'disabled' : ''}>▶</button>
      </span>
    </div>`;

  if (visor[slug]) {
    const src = visor[slug] === 'solucio' ? q.pdf_solucio : q.pdf;
    const v = document.createElement('div');
    v.className = 'visor';
    v.innerHTML = `<iframe src="${esc(src)}#toolbar=0&amp;navpanes=0" title="${esc(q.titol)}"></iframe>
      <div class="peu">Si el PDF no es veu incrustat,
        <a href="${esc(src)}" target="_blank" rel="noopener">obre'l en una pestanya</a>.</div>`;
    div.appendChild(v);
  }

  const fer = {
    enunciat: () => mostra(slug, 'enunciat'),
    solucio:  () => mostra(slug, 'solucio'),
    tex:      () => baixa(`${q.id.replace(/\//g, '-')}.tex`,
                          munta([ambCapcalera(q, `Pregunta ${posicio}`)], false)),
    prev:     () => rota(slug, -1),
    next:     () => rota(slug, +1),
  };
  div.querySelectorAll('button[data-fer]').forEach(b => { b.onclick = fer[b.dataset.fer]; });
  return div;
}

function pinta() {
  pintaTemes();

  const cont = $('#seleccio');
  cont.innerHTML = '';
  if (!seleccio.length) {
    cont.innerHTML = '<div class="cap">Tria temes a l\'esquerra i aniran apareixent aquí com a preguntes d\'examen.</div>';
  }
  let posicio = 0;
  seleccio.forEach(slug => {
    const plena = PER_TEMA[slug].length > 0;
    cont.appendChild(pintaCarta(slug, plena ? ++posicio : null));
  });

  const qs = triades();
  const cent = qs.reduce((s, q) => s + Math.round(q.punts * 100), 0);
  const minuts = qs.reduce((s, q) => s + q.minuts, 0);
  $('#recompte').innerHTML = qs.length
    ? `<span class="seg">${qs.length} ${qs.length === 1 ? 'pregunta' : 'preguntes'}</span> · `
      + `<span class="seg ${cent === 1000 ? 'just' : 'fora'}">${num(cent / 100)} punts</span> · `
      + `<span class="seg">~${minuts} min</span>`
    : 'Cap pregunta triada';

  $('#baixa-tex').disabled = !qs.length;
  $('#baixa-sol').disabled = !qs.length;
  escriuHash();
}

// ── arrencada ────────────────────────────────────────────────────────
const cossosTriats = () => triades().map((q, i) => ambCapcalera(q, `Pregunta ${i + 1}`));

$('#baixa-tex').onclick = () => baixa('main.tex', munta(cossosTriats(), false));
$('#baixa-sol').onclick = () => baixa('main-solucions.tex', munta(cossosTriats(), true));
$('#segell').textContent = `${BANC.preguntes.length} preguntes · ${BANC.generat}`;

llegeixHash();
pinta();
