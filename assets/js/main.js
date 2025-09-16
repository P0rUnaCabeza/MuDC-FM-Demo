// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  const sections = Array.from(links).map(link =>
    document.querySelector(link.getAttribute('href'))
  );

  // Smooth scroll on click
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Highlight nav item on scroll
  window.addEventListener('scroll', () => {
    let index = sections.findIndex(sec => {
      const rect = sec.getBoundingClientRect();
      return rect.top > 0 && rect.top < window.innerHeight / 2;
    });
    links.forEach(a => a.classList.remove('active'));
    if (index !== -1) links[index].classList.add('active');
  });
});
