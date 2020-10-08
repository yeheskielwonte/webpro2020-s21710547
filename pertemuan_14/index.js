/*
    Destrukturisasi/Destructuring
*/  


/* 
    1. Distrukturisasi Array
*/
// ES5
// let buah = ["mangga", "pisang", "anggur"];

// let buah1 = buah[0];
// let buah2 = buah[1];
// let buah3 = buah[2];

// console.log(buah1); 
// console.log(buah2); 
// console.log(buah3); 

// ES6
// let buah = ["mangga", "pisang", "anggur"];

// let [buah1, buah2, buah3] = buah;

// console.log(buah1);
// console.log(buah2); 
// console.log(buah3); 

//gunakan koma kosong untuk melewati element kedua dan keempat
// let [namaDepan, , namaBelakang, , buku] = ["Joanne", "K", "Rowling", "pengarang", "Harry Potter"];

// console.log(namaDepan);
// console.log(namaBelakang); 
// console.log(buku);

// Menukar isi nilai dari dua variabel tanpa harus menggunakan variable baru
// ES5
// let a = 10;
// let b = 15;

// variabel tambahan sementara
// let temp = a;
// a = b; // nilai a sekarang adalah 15
// b = temp; // nilai b sekarang adalah 10

// ES6
// let a = 10;
// let b = 15

// [a,b] = [b,a];
// nilai a sekarang adalah 15, dan nilai b adalah 10

/* 
    2. Distrukturisasi Objek
*/

// ES5
// let orang = {
//     nama: "Joko",
//     umur: 18,
//     sudahMenikah: false
// };
  
// let nama = orang.nama;
// let umur = orang.umur;
// let sudahMenikah = orang.sudahMenikah;
  
// console.log(nama);
// console.log(umur);
// console.log(sudahMenikah);

// let orang = {
//     nama: "Joko",
//     umur: 22,
//     sudahMenikah: false
// };
  
// Destrukturisasi Objek
// let { nama, umur, statusMenikah } = orang;
  
// console.log(nama);
// console.log(umur);
// console.log(statusMenikah); // Output: undefined karena nama variabel dan properti berbeda
  
// ES6
// let orang = {
//     name: "Joko",
//     age: 22,
// };
  
// let { name: nama, age: umur } = orang;
  
// console.log(nama); // Output: Joko
// console.log(umur); // Output: 22

// Destrukturisasi Objek Bertingkat (didalam objek ada objek)

let murid = {
    kelas: "12a",
    nama: ["ani", "yahya", "sinto"],
    prestasi: {
      olahraga: "juara 1",
      akademik: "juara 2"
    }
  };
  
  let {
    prestasi: { olahraga }
  } = murid;
  
  console.log(olahraga);
  







