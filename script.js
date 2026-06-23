// ===== STARS =====
(function () {
  const container = document.getElementById('stars');
  for (let i = 0; i < 90; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 2.5 + 0.4;
    s.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;top:${Math.random()*100}%;--dur:${(Math.random()*4+2).toFixed(1)}s;--delay:${(Math.random()*6).toFixed(1)}s;`;
    container.appendChild(s);
  }
})();

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('hidden');
  hamburger.querySelector('i').className = open ? 'fas fa-bars text-xl' : 'fas fa-times text-xl';
});
document.querySelectorAll('.mobile-link').forEach(link =>
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    hamburger.querySelector('i').className = 'fas fa-bars text-xl';
  })
);

// ===== TYPED ROLE ANIMATION =====
const roles = [
  'Network Engineer',
  'Full-Stack Developer',
  'Technical Artist',
  'Security Researcher',
  'NOC Engineer',
];
const typedEl = document.getElementById('typed-role');
let ri = 0, ci = 0, deleting = false;

function tick() {
  const word = roles[ri];
  if (deleting) {
    typedEl.textContent = word.slice(0, --ci);
    if (ci === 0) {
      deleting = false;
      ri = (ri + 1) % roles.length;
      setTimeout(tick, 380);
    } else {
      setTimeout(tick, 55);
    }
  } else {
    typedEl.textContent = word.slice(0, ++ci);
    if (ci === word.length) {
      deleting = true;
      setTimeout(tick, 2400);
    } else {
      setTimeout(tick, 88);
    }
  }
}
setTimeout(tick, 900);

// ===== AOS =====
AOS.init({ duration: 620, easing: 'ease-out-cubic', once: true, offset: 50 });
