// Tahun berjalan di footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle menu di layar kecil
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isHidden = navLinks.classList.toggle('hidden');
  const isOpen = !isHidden;
  navLinks.classList.toggle('flex', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.add('hidden');
    navLinks.classList.remove('flex');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Buka menu');
  });
});

// Menandai link navigasi yang sedang aktif sesuai posisi scroll
const sections = document.querySelectorAll('main section[id]');
const navItems = document.querySelectorAll('[data-nav]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navItems.forEach(item => {
        const isActive = item.getAttribute('href') === `#${id}`;
        item.classList.toggle('border-gold', isActive);
        item.classList.toggle('text-[#ECE8DE]', isActive);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(section => observer.observe(section));
