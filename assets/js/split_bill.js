// Nav Bar
fetch('pages/navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;

    // Inisialisasi hamburger
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


// Split Bill
 let jumlahAnggota = 0;
    const btnTambah     = document.getElementById('btn-tambah');
    const btnKurang     = document.getElementById('btn-kurang');
    const counterNum    = document.getElementById('counter-num');
    const counterLabel  = document.querySelector('.counter-text h1');
    const counterSublabel = document.createElement('p'); 
    counterSublabel.className = 'counter-sublabel'; 
    document.querySelector('.counter-text').appendChild(counterSublabel); 

    function updateCounter() {
        counterNum.textContent = jumlahAnggota;
 
        if (jumlahAnggota === 0) {
            counterLabel.textContent    = 'Tambah anggota';
            counterSublabel.textContent = 'Ketuk + untuk menambah';
            btnKurang.disabled = true;
        } else {
            counterLabel.textContent    = `${jumlahAnggota} orang`;
            counterSublabel.textContent = jumlahAnggota === 1 ? '1 anggota terlibat' : `${jumlahAnggota} anggota terlibat`;
            btnKurang.disabled = false;
        }
    }
 
    btnTambah.addEventListener('click', () => {
        jumlahAnggota++;
        updateCounter();
    });
 
    btnKurang.addEventListener('click', () => {
        if (jumlahAnggota > 0) {
            jumlahAnggota--;
            updateCounter();
        }
    });
 
// Footer
fetch('../pages/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  });
  