'use strict';

/* ---------- Base de datos simulada ---------- */
const FV = 'Frutas y Verduras', AB = 'Abarrotes / Pasillo', LA = 'Lácteos', OT = 'Otros';
const ing = (nombre, cantidad, unidad, categoriaSupermercado) => ({ nombre, cantidad, unidad, categoriaSupermercado });

const RECETAS = [
  {
    id: 1, titulo: 'Pasta al Pomodoro', categoria: 'Pasta', tiempo: 45, porcionesBase: 4, dificultad: 'Media',
    esRecetaDelDia: true, emoji: '🍝', hue: 14,
    ingredientes: [
      ing('Pasta', 200, 'g', AB), ing('Ajo', 2, 'dientes', FV), ing('Aceite de oliva', 2, 'cdas', AB),
      ing('Salsa de tomate', 200, 'g', AB), ing('Queso parmesano', 40, 'g', LA), ing('Sal', 1, 'pizca', AB),
      ing('Hojas de albahaca', 8, 'hojas', FV)
    ],
    pasos: [
      'Hierve abundante agua con sal y cuece la pasta según el paquete hasta que quede al dente.',
      'Mientras tanto, pica el ajo y dóralo con el aceite de oliva a fuego medio, sin que se queme.',
      'Añade la salsa de tomate y cocina 10 minutos a fuego bajo.',
      'Escurre la pasta, reserva un poco de agua de cocción y mézclala con la salsa.',
      'Sirve con parmesano rallado y hojas de albahaca fresca.'
    ]
  },
  {
    id: 2, titulo: 'Ensalada César con Pollo', categoria: 'Saludable', tiempo: 30, porcionesBase: 2, dificultad: 'Fácil',
    esRecetaDelDia: false, emoji: '🥗', hue: 110,
    ingredientes: [
      ing('Pechuga de pollo', 2, 'u', OT), ing('Lechuga romana', 1, 'u', FV), ing('Crutones', 100, 'g', AB),
      ing('Queso parmesano', 50, 'g', LA), ing('Aderezo César', 4, 'cdas', AB), ing('Limón', 1, 'u', FV)
    ],
    pasos: [
      'Sazona las pechugas con sal y pimienta y cocínalas a la plancha 6 minutos por lado.',
      'Déjalas reposar 5 minutos y córtalas en tiras.',
      'Lava y trocea la lechuga; colócala en un bol grande.',
      'Añade el aderezo, el jugo de limón y mezcla bien.',
      'Agrega el pollo, los crutones y el parmesano en láminas. Sirve de inmediato.'
    ]
  },
  {
    id: 3, titulo: 'Brownies de Chocolate', categoria: 'Postres', tiempo: 50, porcionesBase: 8, dificultad: 'Media',
    esRecetaDelDia: false, emoji: '🍫', hue: 25,
    ingredientes: [
      ing('Chocolate amargo', 200, 'g', AB), ing('Mantequilla', 150, 'g', LA), ing('Azúcar', 150, 'g', AB),
      ing('Huevos', 3, 'u', LA), ing('Harina', 80, 'g', AB), ing('Nueces', 60, 'g', AB), ing('Sal', 1, 'pizca', AB)
    ],
    pasos: [
      'Precalienta el horno a 180 °C y forra un molde cuadrado con papel de horno.',
      'Derrite el chocolate con la mantequilla a baño maría y deja entibiar.',
      'Bate los huevos con el azúcar hasta que espesen y mezcla con el chocolate.',
      'Incorpora la harina y la sal con movimientos envolventes; añade las nueces picadas.',
      'Vierte en el molde y hornea 25 minutos. Deja enfriar antes de cortar.'
    ]
  },
  {
    id: 4, titulo: 'Tacos de Pollo Rápidos', categoria: 'Rápidas', tiempo: 20, porcionesBase: 4, dificultad: 'Fácil',
    esRecetaDelDia: false, emoji: '🌮', hue: 45,
    ingredientes: [
      ing('Tortillas de maíz', 8, 'u', AB), ing('Pechuga de pollo', 300, 'g', OT), ing('Cebolla', 1, 'u', FV),
      ing('Cilantro', 1, 'manojo', FV), ing('Limón', 2, 'u', FV), ing('Aguacate', 2, 'u', FV), ing('Salsa picante', 4, 'cdas', AB)
    ],
    pasos: [
      'Corta el pollo en tiras finas y sazónalo con sal, pimienta y jugo de un limón.',
      'Saltéalo en una sartén caliente 7 minutos hasta que esté dorado.',
      'Pica la cebolla y el cilantro; corta el aguacate en láminas.',
      'Calienta las tortillas en un comal o sartén seca.',
      'Rellena con pollo, cebolla, cilantro y aguacate. Sirve con salsa y limón.'
    ]
  },
  {
    id: 5, titulo: 'Avena Nocturna con Frutas', categoria: 'Saludable', tiempo: 10, porcionesBase: 2, dificultad: 'Fácil',
    esRecetaDelDia: false, emoji: '🍓', hue: 340,
    ingredientes: [
      ing('Avena en hojuelas', 160, 'g', AB), ing('Leche', 400, 'ml', LA), ing('Yogur natural', 200, 'g', LA),
      ing('Plátano', 2, 'u', FV), ing('Fresas', 200, 'g', FV), ing('Miel', 2, 'cdas', AB), ing('Semillas de chía', 2, 'cdas', AB)
    ],
    pasos: [
      'Mezcla la avena, la leche, el yogur y las semillas de chía en un frasco o bol.',
      'Endulza con la miel y remueve bien.',
      'Tapa y refrigera al menos 6 horas, o toda la noche.',
      'Por la mañana, añade el plátano en rodajas y las fresas picadas.',
      'Sirve frío; si queda espesa, agrega un chorrito de leche.'
    ]
  }
];

const CATEGORIAS = [
  { nombre: 'Todas', emoji: '🍽️' }, { nombre: 'Pasta', emoji: '🍝' }, { nombre: 'Postres', emoji: '🍫' },
  { nombre: 'Saludable', emoji: '🥗' }, { nombre: 'Rápidas', emoji: '⚡' }
];
const ORDEN_SUPER = [FV, AB, LA, OT];
const STORAGE_KEY = 'recetario.lista.v1';

/* ---------- Utilidades ---------- */
const $ = s => document.querySelector(s);
const norm = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmtN = n => String(Math.round(n * 100) / 100).replace('.', ',');
const porId = id => RECETAS.find(r => r.id === id);

function textoIng(nombre, q, u) {
  if (q == null) return nombre;
  if (!u) return `${fmtN(q)} ${nombre}`;
  if (u === 'u') return `${fmtN(q)} × ${nombre}`;
  return `${fmtN(q)} ${u} de ${nombre}`;
}

/* ---------- Estado ---------- */
let pila = ['home'];
let catActiva = 'Todas';
let receta = null;
let porciones = 4;
let marcados = new Set();
let lista = cargarLista();
let toastTimer = null;

function cargarLista() {
  try {
    const v = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(v) ? v : [];
  } catch (e) { return []; }
}
function guardarLista() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(lista)); } catch (e) { /* almacenamiento no disponible */ }
}

/* ---------- Navegación ---------- */
function mostrar(vista) {
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === 'view-' + vista));
  $('#tabs').hidden = vista === 'search';
  document.querySelectorAll('.tabs button').forEach(b => b.classList.toggle('on', b.dataset.tab === (vista === 'list' ? 'list' : 'home')));
  $('#app').scrollTop = 0;
}
function ir(vista) { pila.push(vista); mostrar(vista); }
function volver() {
  if (pila.length > 1) pila.pop();
  const v = pila[pila.length - 1];
  if (v === 'list') renderLista();
  mostrar(v);
}
function irTab(tab) {
  pila = [tab];
  if (tab === 'list') renderLista();
  mostrar(tab);
}

/* ---------- Toast ---------- */
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ---------- Inicio ---------- */
function renderHome() {
  const dia = RECETAS.find(r => r.esRecetaDelDia) || RECETAS[0];
  const hero = $('#hero');
  hero.style.setProperty('--h', dia.hue);
  hero.dataset.id = dia.id;
  hero.innerHTML = `<span><span class="e" aria-hidden="true">${dia.emoji}</span><small>Receta del día</small><strong>${esc(dia.titulo)}</strong><small>${dia.tiempo} min</small></span>`;

  $('#cats').innerHTML = CATEGORIAS.map(c =>
    `<button class="cat" role="tab" type="button" data-cat="${c.nombre}" aria-selected="${c.nombre === catActiva}"><span aria-hidden="true">${c.emoji}</span>${c.nombre}</button>`
  ).join('');

  const visibles = RECETAS.filter(r => catActiva === 'Todas' || r.categoria === catActiva || (catActiva === 'Rápidas' && r.tiempo <= 20));
  $('#grid').innerHTML = visibles.length
    ? visibles.map(r => `<button class="card" type="button" data-id="${r.id}"><div class="ph" style="--h:${r.hue}" aria-hidden="true">${r.emoji}</div><b>${esc(r.titulo)}</b><small>${r.tiempo} min</small></button>`).join('')
    : '<p class="empty">No hay recetas en esta categoría.</p>';
}

/* ---------- Búsqueda ---------- */
function abrirBusqueda() {
  ir('search');
  const i = $('#search-input');
  i.value = '';
  renderSugerencias();
  i.focus();
}
function renderSugerencias() {
  const q = norm($('#search-input').value);
  const filas = [];
  RECETAS.forEach(r => {
    if (!q) { filas.push({ r, sub: r.categoria }); return; }
    if (norm(r.titulo).includes(q)) { filas.push({ r, sub: r.categoria }); return; }
    const hit = r.ingredientes.find(i => norm(i.nombre).includes(q));
    if (hit) filas.push({ r, sub: 'Ingrediente: ' + hit.nombre });
  });
  $('#suggest').innerHTML = filas.length
    ? filas.map(f => `<li><button type="button" data-id="${f.r.id}"><span class="ic" style="--h:${f.r.hue}" aria-hidden="true">${f.r.emoji}</span><span>${esc(f.r.titulo)}<small>${esc(f.sub)}</small></span></button></li>`).join('')
    : '<li class="empty">Sin resultados. Prueba con otro nombre o ingrediente.</li>';
}

/* ---------- Detalle ---------- */
function abrirReceta(id) {
  receta = porId(id);
  if (!receta) return;
  porciones = receta.porcionesBase;
  marcados = new Set();
  const img = $('#d-img');
  img.style.setProperty('--h', receta.hue);
  img.textContent = receta.emoji;
  $('#d-title').textContent = receta.titulo;
  $('#d-time').textContent = `Tiempo: ${receta.tiempo} min`;
  $('#d-diff').textContent = `Dificultad: ${receta.dificultad}`;
  $('#d-steps').innerHTML = receta.pasos.map(p => `<li>${esc(p)}</li>`).join('');
  $('#d-steps').hidden = true;
  $('#steps-btn').setAttribute('aria-expanded', 'false');
  $('#steps-btn').textContent = 'Ver Pasos de Preparación';
  renderIngredientes();
  if (pila[pila.length - 1] !== 'detail') ir('detail'); else mostrar('detail');
}
function factor() { return porciones / receta.porcionesBase; }
function renderIngredientes() {
  $('#d-n').textContent = porciones;
  $('#d-serv').textContent = `Porciones: ${porciones}`;
  $('#d-ings').innerHTML = receta.ingredientes.map((i, k) => {
    const t = textoIng(i.nombre, i.cantidad * factor(), i.unidad);
    return `<li><label><input type="checkbox" data-i="${k}" ${marcados.has(k) ? 'checked' : ''}><span class="${marcados.has(k) ? 'done' : ''}">${esc(t)}</span></label></li>`;
  }).join('');
}
function cambiarPorciones(d) {
  porciones = Math.min(24, Math.max(1, porciones + d));
  renderIngredientes();
}
function anadirFaltantes() {
  const todos = receta.ingredientes.map((i, k) => k);
  let idx = todos.filter(k => !marcados.has(k));
  if (!idx.length) { toast('Ya marcaste todos los ingredientes'); return; }
  idx.forEach(k => {
    const i = receta.ingredientes[k];
    const q = i.cantidad * factor();
    const ex = lista.find(x => !x.hecho && norm(x.nombre) === norm(i.nombre) && x.unidad === i.unidad && x.cantidad != null);
    if (ex) ex.cantidad = Math.round((ex.cantidad + q) * 100) / 100;
    else lista.push({ nombre: i.nombre, cantidad: Math.round(q * 100) / 100, unidad: i.unidad, cat: i.categoriaSupermercado, hecho: false });
  });
  guardarLista();
  toast(`${idx.length} ingrediente${idx.length > 1 ? 's' : ''} añadido${idx.length > 1 ? 's' : ''} a tu lista`);
}
function alternarPasos() {
  const ol = $('#d-steps'), b = $('#steps-btn');
  ol.hidden = !ol.hidden;
  b.setAttribute('aria-expanded', String(!ol.hidden));
  b.textContent = ol.hidden ? 'Ver Pasos de Preparación' : 'Ocultar Pasos de Preparación';
  if (!ol.hidden) ol.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ---------- Lista de compras ---------- */
function renderLista() {
  const q = norm($('#list-search').value);
  const items = lista.map((x, k) => ({ x, k })).filter(({ x }) => !q || norm(x.nombre).includes(q));
  const body = $('#list-body');
  if (!lista.length) { body.innerHTML = '<p class="empty">Tu lista está vacía. Añade ingredientes desde una receta o crea un artículo.</p>'; return; }
  if (!items.length) { body.innerHTML = '<p class="empty">Ningún artículo coincide con tu búsqueda.</p>'; return; }
  body.innerHTML = ORDEN_SUPER.map(cat => {
    const g = items.filter(({ x }) => x.cat === cat);
    if (!g.length) return '';
    return `<div class="group"><h3>${esc(cat)}</h3>${g.map(({ x, k }) =>
      `<label class="item"><input type="checkbox" data-k="${k}" ${x.hecho ? 'checked' : ''}><span class="${x.hecho ? 'done' : ''}">${esc(textoIng(x.nombre, x.cantidad, x.unidad))}</span></label>`
    ).join('')}</div>`;
  }).join('');
}
function papelera() {
  if (!lista.length) { toast('La lista ya está vacía'); return; }
  if (lista.some(x => x.hecho)) {
    lista = lista.filter(x => !x.hecho);
    toast('Artículos tachados eliminados');
  } else if (confirm('No hay artículos tachados. ¿Quieres vaciar toda la lista?')) {
    lista = [];
    toast('Lista vaciada');
  } else return;
  guardarLista();
  renderLista();
}
function abrirModal() {
  $('#modal').hidden = false;
  $('#m-input').value = '';
  $('#m-input').focus();
}
function cerrarModal() { $('#modal').hidden = true; }
function guardarPersonalizado() {
  const t = $('#m-input').value.trim();
  if (!t) { $('#m-input').focus(); return; }
  lista.push({ nombre: t, cantidad: null, unidad: '', cat: OT, hecho: false });
  guardarLista();
  cerrarModal();
  renderLista();
  toast('Artículo añadido');
}

/* ---------- Eventos ---------- */
document.addEventListener('click', e => {
  const act = e.target.closest('[data-act]');
  if (act) {
    const a = act.dataset.act;
    if (a === 'back') { if (pila[pila.length - 1] === 'search') $('#search-input').value = ''; volver(); }
    else if (a === 'minus') cambiarPorciones(-1);
    else if (a === 'plus') cambiarPorciones(1);
    else if (a === 'addMissing') anadirFaltantes();
    else if (a === 'steps') alternarPasos();
    else if (a === 'trash') papelera();
    else if (a === 'openModal') abrirModal();
    else if (a === 'closeModal') cerrarModal();
    else if (a === 'saveCustom') guardarPersonalizado();
    return;
  }
  const tab = e.target.closest('[data-tab]');
  if (tab) { irTab(tab.dataset.tab); return; }
  const cat = e.target.closest('[data-cat]');
  if (cat) { catActiva = cat.dataset.cat; renderHome(); return; }
  const card = e.target.closest('[data-id]');
  if (card) abrirReceta(Number(card.dataset.id));
});

$('#home-search').addEventListener('focus', abrirBusqueda);
$('#home-search').addEventListener('click', abrirBusqueda);
$('#search-input').addEventListener('input', renderSugerencias);
$('#search-clear').addEventListener('click', () => { $('#search-input').value = ''; renderSugerencias(); $('#search-input').focus(); });
$('#list-search').addEventListener('input', renderLista);
$('#m-input').addEventListener('keydown', e => { if (e.key === 'Enter') guardarPersonalizado(); if (e.key === 'Escape') cerrarModal(); });
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal') cerrarModal(); });

$('#d-ings').addEventListener('change', e => {
  const k = Number(e.target.dataset.i);
  if (Number.isNaN(k)) return;
  e.target.checked ? marcados.add(k) : marcados.delete(k);
  e.target.nextElementSibling.classList.toggle('done', e.target.checked);
});
$('#list-body').addEventListener('change', e => {
  const k = Number(e.target.dataset.k);
  if (Number.isNaN(k) || !lista[k]) return;
  lista[k].hecho = e.target.checked;
  guardarLista();
  e.target.nextElementSibling.classList.toggle('done', e.target.checked);
});

/* ---------- Arranque ---------- */
renderHome();
mostrar('home');
