/*
    1. Object
*/

// const mhs1 = {
//     namaDepan: "John",
//     namaBelakang: "Doe",
//     umur: 31,
//     sudahLulus: true,
//     alamat:{
//         jalan: "Sario Tumpaan",
//         kecamatan: "Sario",
//         kabupaten: "Sulawesi Utara"
//     },
//     IPsmester: [3.05, 3.25, 3.0, 3.4],
//     hitungIPK: function () {
//         let total=0;
//         this.IPsmester.forEach(function (el) {
//             total=total+el;
//         });
//         this.IPKumulatif = total/4;
//     }
// };

//2. Kata kunci new
// const mhs2= new Object();
// mhs2.namaDepan = "Jane";
// mhs2.namaBelakang = "Smith";

//Mengakses Properti Objek
//1. Dot notation
// console.log(mhs1.umur);
//2. Bracket notation
// console.log(mhs1("namaBelakang"));

// console.log(mhs1.alamat.jalan);
// console.log(mhs1.IPsmester[2]);
// mhs1.hitungIPK(); //untuk memanggil fungsi agar IPKumulatifnya muncul
// console.log(mhs1);

//3. Array Object
const mahasiswa = [
    {
        nim: "001",
        namaDepan: "Kevin",
        namaBelakang: "Ara",
    },
    {
        nim: "002",
        namaDepan: "Rick",
        namaBelakang: "Ranz",
    },
    {
        nim: "003",
        namaDepan: "Junior",
        namaBelakang: "Potensi",
    },
];

mahasiswa.forEach(function (el) {
    console.log(el);
})