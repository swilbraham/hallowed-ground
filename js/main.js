// ===== HEADER SCROLL =====
const header = document.getElementById('header');
const backToTop = document.querySelector('.back-to-top');

function handleScroll() {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  if (window.scrollY > 600) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}
window.addEventListener('scroll', handleScroll);
handleScroll();

// ===== BACK TO TOP =====
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== MOBILE NAV =====
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');

function toggleMobileNav() {
  mobileNav.classList.toggle('active');
  mobileNavOverlay.classList.toggle('active');
  hamburger.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMobileNav);
mobileNavOverlay.addEventListener('click', toggleMobileNav);

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (mobileNav.classList.contains('active')) toggleMobileNav();
  });
});

// ===== FADE-IN ON SCROLL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -60px 0px',
});

document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
  observer.observe(el);
});

// ===== SMOOTH ANCHOR OFFSET =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#' || targetId.length < 2) return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
