function toggleMenu() {
  document.getElementById('menu').classList.toggle('active');
}

// active nav
document.querySelectorAll('.nav-menu a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});
