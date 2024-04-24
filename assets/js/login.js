const alertContainer = document.getElementById('alert-container');
const alertMessage = document.getElementById('alert-message');
const alertClose = document.getElementById('alert-close');
const loginForm = document.getElementById('login-form');

// Untuk menampilkan alert
function showAlert(message) {
  alertMessage.innerText = message;
  alertContainer.style.display = 'block';
}

// Untuk menyembunyikan alert
function hideAlert() {
  alertContainer.style.display = 'none';
}

// Tutup alert saat klik tombol
alertClose.addEventListener('click', hideAlert);

// Cek credentials
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Logika login
  if (username === 'Maulana' && password === '1234' || username === 'Herdan' && password === '1234') {
    showAlert('Login successful!');
    window.location.href = 'home.html';
  } else {
    showAlert('Username atau passwordmu salah king!');
  }
});