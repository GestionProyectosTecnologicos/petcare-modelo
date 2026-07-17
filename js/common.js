/* ============ JS común a todas las páginas de PetCare ============ */

/* ---------- menú hamburguesa ---------- */
function toggleNav(btn){
  const bar = document.querySelector('.topbar');
  const open = bar.classList.toggle('open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
}

/* ---------- pestañas internas (subnav beneficiario / sidenav admin) ---------- */
function pane(prefix, id, btn){
  const scope = prefix === 'b' ? '#v-benef' : '#v-admin';
  document.querySelectorAll(scope + ' .pane').forEach(x => x.classList.remove('act'));
  document.getElementById(prefix + '-' + id).classList.add('act');
  btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('act'));
  btn.classList.add('act');
}

/* ---------- toast ---------- */
let tt;
function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(tt); tt = setTimeout(() => t.classList.remove('show'), 3400);
}
