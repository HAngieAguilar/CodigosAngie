const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const menuToggler = document.querySelector(".menu-toggler");
const logo = document.querySelector(".sidebar-header .header-logo img");
const cards = document.querySelector(".cards");
const search = document.querySelector(".search");
const titulo = document.querySelector(".titulo");

let collapsedSidebarHeight = "56px";
let fullSidebarHeight = "calc(100vh - 32px)";

const adjustLogoSize = (isCollapsed) => {
  logo.style.width = isCollapsed ? "60px" : "150px";
  logo.style.height = isCollapsed ? "60px" : "150px";
};

const ajustarContenido = (isCollapsed) => {
  const desplazamiento = isCollapsed ? "-30px" : "0";
  cards.style.left = desplazamiento;
  search.style.left = desplazamiento;
  titulo.style.left = desplazamiento;
};

// ✅ Sidebar toggle
sidebarToggler.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  const isCollapsed = sidebar.classList.contains("collapsed");
  adjustLogoSize(isCollapsed);
  ajustarContenido(isCollapsed);
});

// ✅ Menu toggle (solo en pantallas pequeñas)
const toggleMenu = (isMenuActive) => {
  sidebar.style.height = isMenuActive ? `${sidebar.scrollHeight}px` : collapsedSidebarHeight;
  menuToggler.querySelector("span").innerText = isMenuActive ? "close" : "menu";
};

menuToggler.addEventListener("click", () => {
  toggleMenu(sidebar.classList.toggle("menu-active"));
});

// ✅ Responsive behavior
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    sidebar.style.height = fullSidebarHeight;
    adjustLogoSize(sidebar.classList.contains("collapsed"));
  } else {
    sidebar.classList.remove("collapsed");
    sidebar.style.height = "auto";
    toggleMenu(sidebar.classList.contains("menu-active"));
    adjustLogoSize(false);
  }
});

// ✅ Abrir modal
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('modalCliente').style.display = 'flex';
    document.body.classList.add('modal-abierto');
  });
});

// ✅ Cerrar modal
function cerrarModal() {
  document.getElementById('modalCliente').style.display = 'none';
  document.body.classList.remove('modal-abierto');
}
