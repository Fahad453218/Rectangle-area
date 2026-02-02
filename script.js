const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const form = document.querySelector('.contact-form');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

dropdownToggle.addEventListener('click', () => {
  const isExpanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
  dropdownToggle.setAttribute('aria-expanded', String(!isExpanded));
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.2 }
);

const revealElements = document.querySelectorAll('.section, .hero, .service-card, .portfolio-card, .about-content, .contact-form');
revealElements.forEach(element => {
  element.classList.add('reveal');
  observer.observe(element);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  form.reset();
  alert('Thanks for reaching out! We will get back to you shortly.');
});
