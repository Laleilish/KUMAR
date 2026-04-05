// Nav Bar
fetch('../pages/navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;
  });


// Split Bill
 let jumlahAnggota = 0;
    const btnTambah     = document.getElementById('btn-tambah');
    const btnKurang     = document.getElementById('btn-kurang');
    const counterNum    = document.getElementById('counter-num');
     
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
 
        hitungSplit();
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

  