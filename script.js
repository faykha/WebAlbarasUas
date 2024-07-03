
const hotelOptions = {
    bali: [
        { name: "HARRIS Hotel & Conventions Denpasar Bali", url: "https://www.discoverasr.com/en/harris/indonesia/harris-hotel-conventions-denpasar-bali" },
        { name: "Kuta Central Park Hotel Bali", url: "https://www.kutacentralparkhotel.com/" },
        { name: "INFINITY8 BALI", url: "https://infinity8bali.com/" }
    ],
    raja_ampat: [
        { name: "Raja Ampat Biodiversity Nature Resort", url: "https://rajaampatbiodiversity.com/" },
        { name: "Nyande Raja Ampat", url: "https://www.nyande-rajaampat.com/" },
        { name: "Waisai Beach Hotel (WBH)", url: "https://www.google.com/travel/search?ts=CAESCAoCCAMKAggDGhwSGhIUCgcI6A8QBxgHEgcI6A8QBxgIGAEyAhAAKgcKBToDSURS&qs=CAEyFENnc0k4Ylg1emNQeG9wcUhBUkFCOApCCRFA-pMAgMSfsUIJEVlJAA83yOX1QgkR1EiSJaKrccVaSzJJqgFGEAEqCSIFaG90ZWwoJjIeEAEiGmFSJNoNxigAtDyD8GInJAd7ydf4n0JxV3EgMhcQAiITaG90ZWwgZGkgcmFqYSBhbXBhdA&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls" }
    ],
    bromo: [
        { name: "Bromo Park Hotel", url: "https://www.bromoparkhotel.com/" },
        { name: "Grand Whiz Hotel Bromo", url: "https://grandwhiz.intiwhiz.com/bromo" },
        { name: "Hotel Bromo Permai 1 Cemorolawang", url: "https://www.google.com/travel/search?ts=CAESCAoCCAMKAggDGhwSGhIUCgcI6A8QBxgHEgcI6A8QBxgIGAEyAhAAKgcKBToDSURS&qs=CAEyE0Nnb0ktWXVPd3RMR3J1OXZFQUU4CkIJEbSL3AiAG8SfQgkR5loJ5rAJ_ldCCRHfu3DE9ooCPVpICAEyRKoBQRABKgkiBWhvdGVsKCYyHhABIhqXA0RC92bT1HgWBGCkKjXp21yMNbCHdz2r2DISEAIiDmhvdGVsIGRpIGJyb21v" }
    ]
};

function updateHotelOptions() {
    const wisata = document.getElementById('wisata').value;
    const hotelSelect = document.getElementById('hotel');
    
    hotelSelect.innerHTML = '';
    
    hotelOptions[wisata].forEach(hotel => {
        const option = document.createElement('option');
        option.value = hotel.name;
        option.textContent = hotel.name;
        hotelSelect.appendChild(option);
    });
}

function processTransaction(event) {
    event.preventDefault(); 

    const nama = document.getElementById('nama').value;
    const telp = document.getElementById('telp').value;
    const tanggalLahir = document.getElementById('tanggal_lahir').value;
    const wisata = document.getElementById('wisata').value;
    const hotel = document.getElementById('hotel').value;
    const jumlahOrang = parseInt(document.getElementById('jumlah_orang').value);
    const tanggalKeberangkatan = document.getElementById('tanggal_keberangkatan').value;

    let biayaPerOrang;
    switch (wisata) {
        case 'raja_ampat':
            biayaPerOrang = 3000000;
            break;
        case 'bali':
            biayaPerOrang = 2000000;
            break;
        case 'bromo':
            biayaPerOrang = 1000000;
            break;
        default:
            biayaPerOrang = 0;
            break;
    }

    const totalBiaya = biayaPerOrang * jumlahOrang;

    const confirmationTable = document.getElementById('confirmationTable');
    confirmationTable.innerHTML = `
        <tr><th>Nama</th><td>${nama}</td></tr>
        <tr><th>No. Telepon</th><td>${telp}</td></tr>
        <tr><th>Tanggal Lahir</th><td>${tanggalLahir}</td></tr>
        <tr><th>Pilihan Wisata</th><td>${wisata}</td></tr>
        <tr><th>Pilihan Hotel</th><td>${hotel}</td></tr>
        <tr><th>Jumlah Orang</th><td>${jumlahOrang}</td></tr>
        <tr><th>Tanggal Keberangkatan</th><td>${tanggalKeberangkatan}</td></tr>
        <tr><th>Total Biaya</th><td>Rp${totalBiaya.toLocaleString()}</td></tr>
    `;

    const modal = document.getElementById('confirmationModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('confirmationModal');
    modal.style.display = 'none';
}

function printReceipt() {
    const nama = document.getElementById('nama').value;
    const telp = document.getElementById('telp').value;
    const tanggalLahir = document.getElementById('tanggal_lahir').value;
    const wisata = document.getElementById('wisata').value;
    const hotel = document.getElementById('hotel').value;
    const jumlahOrang = parseInt(document.getElementById('jumlah_orang').value);
    const tanggalKeberangkatan = document.getElementById('tanggal_keberangkatan').value;

    let biayaPerOrang;
    switch (wisata) {
        case 'raja_ampat':
            biayaPerOrang = 3000000;
            break;
        case 'bali':
            biayaPerOrang = 2000000;
            break;
        case 'bromo':
            biayaPerOrang = 1000000;
            break;
        default:
            biayaPerOrang = 0;
            break;
    }

    const totalBiaya = biayaPerOrang * jumlahOrang;

    const receiptContent = `
        <html>
            <head>
                <title>Receipt</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 2rem;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 1rem;
                    }
                    table, th, td {
                        border: 1px solid #ddd;
                        padding: 0.5rem;
                        text-align: left;
                    }
                    th {
                        background-color: #f1f1f1;
                    }
                    h2 {
                        text-align: center;
                        margin-bottom: 1rem;
                    }
                    .total {
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <h2>Receipt Transaksi</h2>
                <table>
                    <tr><th>Nama</th><td>${nama}</td></tr>
                    <tr><th>No. Telepon</th><td>${telp}</td></tr>
                    <tr><th>Tanggal Lahir</th><td>${tanggalLahir}</td></tr>
                    <tr><th>Pilihan Wisata</th><td>${wisata}</td></tr>
                    <tr><th>Pilihan Hotel</th><td>${hotel}</td></tr>
                    <tr><th>Jumlah Orang</th><td>${jumlahOrang}</td></tr>
                    <tr><th>Tanggal Keberangkatan</th><td>${tanggalKeberangkatan}</td></tr>
                    <tr class="total"><th>Total Biaya</th><td>Rp${totalBiaya.toLocaleString()}</td></tr>
                </table>
            </body>
        </html>
    `;

    const receiptWindow = window.open('', '', 'width=800,height=600');
    receiptWindow.document.write(receiptContent);
    receiptWindow.document.close();
    receiptWindow.print();
}

document.querySelector('.form-transaksi').addEventListener('submit', processTransaction);

window.onclick = function(event) {
    const modal = document.getElementById('confirmationModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
