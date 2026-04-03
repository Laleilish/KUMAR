// Nav Bar
fetch('pages/navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;

    // Inisialisasi hamburger SETELAH HTML selesai di-inject
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
      navLinks.classList.add('active');
      navbar.classList.add('menu-open');
    });

    document.querySelector('.close-btn').addEventListener('click', () => {
      navLinks.classList.remove('active');
      navbar.classList.remove('menu-open');
    });
  });