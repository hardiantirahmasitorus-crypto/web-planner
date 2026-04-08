// Soal 5: Data Peserta (Array of Objects - Min 4 item)
let dataPeserta = [
    { id: 1, nama: "Ahmad Fauzi", usia: 25, tipe: "VIP" },
    { id: 2, nama: "Siti Aminah", usia: 22, tipe: "Reguler" },
    { id: 3, nama: "Budi Santoso", usia: 30, tipe: "VIP" },
    { id: 4, nama: "Lestari Putri", usia: 20, tipe: "Reguler" }
];

const container = document.getElementById('cardContainer');
const searchBar = document.getElementById('searchBar');

// Soal 5: Render DOM Dinamis
function renderData(filterData = dataPeserta) {
    container.innerHTML = "";
    filterData.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h4>${p.nama}</h4>
            <p>Usia: ${p.usia} Tahun</p>
            <p>Status: <strong>${p.tipe}</strong></p>
            <button onclick="hapusPeserta(${p.id})" style="color:red; border:none; background:none; cursor:pointer;">[Hapus Peserta]</button>
        `;
        container.appendChild(card);
    });
}

// Soal 5: Hapus tanpa reload
function hapusPeserta(id) {
    if(confirm("Hapus peserta ini?")) {
        dataPeserta = dataPeserta.filter(p => p.id !== id);
        renderData();
    }
}

// Fitur Cari
searchBar.addEventListener('keyup', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = dataPeserta.filter(p => p.nama.toLowerCase().includes(keyword));
    renderData(filtered);
});

// Soal 4: Validasi Form
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('emailPeserta').value;
    const usia = document.getElementById('usiaPeserta').value;
    const errorBox = document.getElementById('errorMsg');
    
    errorBox.innerHTML = "";

    if (!email.includes("@")) {
        errorBox.innerHTML = "Format email tidak valid!";
        return;
    }
    if (usia <= 0) {
        errorBox.innerHTML = "Usia harus berupa angka positif!";
        return;
    }

    alert("Pendaftaran Berhasil!");
    // Menambahkan data baru secara dinamis (Soal 5)
    const namaBaru = document.getElementById('namaPeserta').value;
    const statusBaru = document.querySelector('input[name="status"]:checked').value;
    
    dataPeserta.push({
        id: Date.now(),
        nama: namaBaru,
        usia: usia,
        tipe: statusBaru
    });
    
    renderData();
    this.reset();
});

renderData();