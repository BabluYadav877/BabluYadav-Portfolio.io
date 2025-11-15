// Main JS: mobile nav toggle and form handling
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }
});

// Simple form submission simulation
function handleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const msgEl = document.getElementById('formMsg');

  if (!name || !email || !message) {
    msgEl.textContent = 'Please fill all fields.';
    msgEl.style.color = '#ffbaba';
    return false;
  }

  msgEl.textContent = 'Message sent — thank you! I will reply shortly.';
  msgEl.style.color = '#baf7c0';

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
  return false;
}

window.handleSubmit = handleSubmit;
