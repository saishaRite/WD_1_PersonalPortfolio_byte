// Typing animation in the hero heading.
const typingTarget = document.getElementById('typing-text');
const roles = ['CSE Student', 'Web Developer', 'Problem Solver', 'Tech Explorer'];
let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function runTypingAnimation() {
  const role = roles[roleIndex];
  characterIndex += isDeleting ? -1 : 1;
  typingTarget.textContent = role.slice(0, characterIndex);

  let delay = isDeleting ? 45 : 85;
  if (!isDeleting && characterIndex === role.length) {
    isDeleting = true;
    delay = 1250;
  } else if (isDeleting && characterIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 300;
  }
  window.setTimeout(runTypingAnimation, delay);
}
runTypingAnimation();

// Mobile navigation open / close.
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-link');

function closeMenu() {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  menuToggle.textContent = '☰';
}

menuToggle.addEventListener('click', () => {
  const opened = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(opened));
  menuToggle.setAttribute('aria-label', opened ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = opened ? '✕' : '☰';
});

navItems.forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('click', (event) => {
  if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 700) closeMenu();
});

// Reveal cards as they enter the viewport. The no-IntersectionObserver fallback
// keeps all content visible in older browsers.
const revealItems = document.querySelectorAll(
  '.section-heading, .panel, .skill-card, .project-card, .qualification-card, .resume-note, .contact-wrap'
);
if ('IntersectionObserver' in window) {
  revealItems.forEach((item) => item.classList.add('reveal'));
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

// Highlight the current navigation item while scrolling.
const observedSections = document.querySelectorAll('main section[id]');
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navItems.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  observedSections.forEach((section) => sectionObserver.observe(section));
}

// The contact form is handled by the Formspree AJAX library in index.html.

// Current year in the footer.
document.getElementById('year').textContent = new Date().getFullYear();
