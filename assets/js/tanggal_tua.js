// Load Navbar
fetch('pages/navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;

    // Inisialisasi hamburger
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    const closeBtn = document.querySelector('.close-btn');

    if (hamburger) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.add('active');
        navbar.classList.add('menu-open');
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navbar.classList.remove('menu-open');
      });
    }
  });

// Load Footer
fetch('pages/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  });

// Category filter functionality
document.addEventListener('DOMContentLoaded', () => {
  const categoryItems = document.querySelectorAll('.category-item');
  
  categoryItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all items
      categoryItems.forEach(cat => cat.classList.remove('active'));
      // Add active class to clicked item
      item.classList.add('active');
      
      // Here you can add filter logic for cards
      const categoryName = item.querySelector('span').textContent;
      console.log('Selected category:', categoryName);
    });
  });
});
