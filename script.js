// ===== TOGGLE MENU =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    navLinks.classList.remove('active');
  });
});

// ===== FILTER PROJECTS =====
const filterButtons = document.querySelectorAll('.filter-buttons button');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    projectCards.forEach(card => {
      card.style.display = (category === 'all' || card.dataset.category === category)
        ? 'block' : 'none';
    });
  });
});

// ===== LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-content');
const closeLightbox = document.querySelector('.lightbox .close');

document.querySelectorAll('.lightbox-img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightbox.setAttribute('aria-hidden', 'false');
    lightboxImg.src = img.src;
  });
});

closeLightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightbox.setAttribute('aria-hidden', 'true');
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
  }
});

// ===== FORM VALIDATION =====
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Message sent successfully!');
  form.reset();
});
