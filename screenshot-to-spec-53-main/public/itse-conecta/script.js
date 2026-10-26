// ===== ITSE Conecta · Presentación de la propuesta =====
// Todos los datos de la demostración son ficticios.

// --- Menú móvil ---
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// --- Animación al hacer scroll y enlace activo ---
const observer = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === "#" + current)
  );
});

// --- Contenido de la demostración (datos ficticios) ---
const demo = {
  anuncios: `
    <h3>📢 Anuncios</h3>
    <div class="item"><div class="avatar">📌</div><div><b>Inscripciones del próximo cuatrimestre <span class="pill">Oficial</span></b><small>Publicado hace 2 horas · Secretaría Académica (ejemplo)</small></div></div>
    <div class="item"><div class="avatar">🏆</div><div><b>Convocatoria: concurso de innovación</b><small>Publicado ayer · Coordinación estudiantil (ejemplo)</small></div></div>
    <div class="item"><div class="avatar">🛠️</div><div><b>Mantenimiento del laboratorio de cómputo</b><small>Publicado hace 3 días</small></div></div>`,
  comunidad: `
    <h3>👥 Comunidad estudiantil</h3>
    <div class="mini-grid">
      <div class="mini"><div class="emoji">💻</div><b>Club de Programación</b><br><small>128 miembros</small></div>
      <div class="mini"><div class="emoji">🤖</div><b>Robótica ITSE</b><br><small>64 miembros</small></div>
      <div class="mini"><div class="emoji">🎨</div><b>Diseño y Multimedia</b><br><small>90 miembros</small></div>
      <div class="mini"><div class="emoji">⚽</div><b>Deportes</b><br><small>150 miembros</small></div>
    </div>`,
  foro: `
    <h3>💬 Foro</h3>
    <div class="item"><div class="avatar">AM</div><div><b>¿Recomendaciones para estudiar bases de datos?</b><small>Ana M. · 12 respuestas</small></div><button class="like">👍 18</button></div>
    <div class="item"><div class="avatar">JR</div><div><b>Grupo de estudio para cálculo</b><small>José R. · 7 respuestas</small></div><button class="like">👍 9</button></div>
    <div class="item"><div class="avatar">LP</div><div><b>Experiencias en pasantías</b><small>Laura P. · 21 respuestas</small></div><button class="like">👍 33</button></div>`,
  biblioteca: `
    <h3>📚 Biblioteca de recursos</h3>
    <div class="mini-grid">
      <div class="mini"><div class="emoji">📄</div><b>Guía de Redes</b><br><small>PDF · Infraestructura</small></div>
      <div class="mini"><div class="emoji">🎥</div><b>Intro a Python</b><br><small>Video · Desarrollo</small></div>
      <div class="mini"><div class="emoji">📝</div><b>Apuntes de Estadística</b><br><small>Documento · Ciencias</small></div>
      <div class="mini"><div class="emoji">🧪</div><b>Prácticas de laboratorio</b><br><small>PDF · Electrónica</small></div>
    </div>`,
  eventos: `
    <h3>📅 Eventos</h3>
    <div class="item"><div class="avatar">15</div><div><b>Feria tecnológica estudiantil</b><small>Viernes · 9:00 a.m. · Auditorio (ejemplo)</small></div><button class="like">Asistiré</button></div>
    <div class="item"><div class="avatar">22</div><div><b>Taller de emprendimiento</b><small>Miércoles · 2:00 p.m. · Aula 3</small></div><button class="like">Asistiré</button></div>
    <div class="item"><div class="avatar">30</div><div><b>Hackathon ITSE</b><small>Sábado · Todo el día</small></div><button class="like">Asistiré</button></div>`,
  perfiles: `
    <h3>🪪 Perfiles</h3>
    <div class="profile"><div class="avatar">CG</div><div><b>Carlos Gómez (estudiante ficticio)</b><br><small>Desarrollo de Software · 2.º año</small></div></div>
    <div class="mini-grid">
      <div class="mini"><b>Intereses</b><br><small>Web, IA, videojuegos</small></div>
      <div class="mini"><b>Comunidades</b><br><small>Club de Programación</small></div>
      <div class="mini"><b>Aportes</b><br><small>12 recursos compartidos</small></div>
    </div>`,
  notificaciones: `
    <h3>🔔 Notificaciones</h3>
    <div class="item unread"><div class="avatar">📢</div><div><b>Nuevo anuncio oficial publicado</b><small>Hace 5 minutos</small></div></div>
    <div class="item unread"><div class="avatar">💬</div><div><b>Respondieron a tu pregunta en el foro</b><small>Hace 1 hora</small></div></div>
    <div class="item"><div class="avatar">📅</div><div><b>Recordatorio: Feria tecnológica mañana</b><small>Ayer</small></div></div>`,
};

const demoTabs = document.getElementById("demoTabs");
const demoContent = document.getElementById("demoContent");
const demoPath = document.getElementById("demoPath");

function showTab(name) {
  demoContent.innerHTML = demo[name];
  demoPath.textContent = name;
  // Reinicia la animación de entrada
  demoContent.style.animation = "none";
  void demoContent.offsetWidth;
  demoContent.style.animation = "";
  demoTabs.querySelectorAll("button").forEach((b) =>
    b.classList.toggle("active", b.dataset.tab === name)
  );
}

demoTabs.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (btn) showTab(btn.dataset.tab);
});

// Botones interactivos dentro de la demo (solo visuales)
demoContent.addEventListener("click", (e) => {
  const btn = e.target.closest(".like");
  if (btn) btn.classList.toggle("on");
});

showTab("anuncios");
