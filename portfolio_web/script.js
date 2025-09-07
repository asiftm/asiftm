window.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => {
    startAnimation(); 
  });
});

function startAnimation() {
  const boxes = document.querySelectorAll('.intro, .lead, .btn, .hero-grid a, #about h2, #about p, #about a, #skills h2, #skills h3, #skills ul, #contact h2, #contact p, #contact a, .shot');

boxes.forEach((box, i) => {
  box.animate([
    { opacity: 0, transform: 'translateY(20px)' },
    { opacity: 1, transform: 'translateY(0)' }
  ], {
    duration: 600,
    easing: 'ease-out',
    fill: 'forwards',
    delay: i * 100
  });
});
}