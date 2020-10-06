/*
    Rest and Spread Operator
*/

//Rest Parameter
// const foo = (...params) => {
//     console.log(params);
// };
  
// foo("A", "B", "C"); // Output: ["A", "B", "C"]

//Rest Parameter sebagai akhiran
// const bar = (param1, param2, ...params) => {
//     console.log("Argument pertama ", param1);
//     console.log("Argument pertama ", param2);
//     console.log("Sisa argument ", params);
// }

// bar("A", "B", "C", "D", "E");
  
//Rest tidak bisa dipakai ditengah-tengah
//contoh
// Tempatkan rest parameter di tengah-tengah parameter lainnya
// const buzz = (param1, ...params, param2) => {
//     console.log(param1);
//     console.log(params);
//     console.log(param2);
//   }
// Outputnya akan error - SyntaxError: Rest parameter must be last formal parameter
  

//Spread Operator dengan Array

// let arrayBilangan = [1, 2, 3, 4, 5];

// tanpa spread operator
// console.log(arrayBilangan);

// kalau pakai spread operator
// console.log(...arrayBilangan);

//membuat array duplikat
// let arrayAsli = [1, 2, 3];

// let arrayDuplikat = [...arrayAsli];


// menggabungkan array (concatenate)

// let array1 = ["foo", "bar"];
// let array2 = ["fizz", "buzz"];

// menggunakan spread operator
// array1 = [...array1, ...array2];

// console.log(array1);


//Spread Operator dengan Objek

//Menambah Properti
// let orang = {
//     nama: "Yudistya",
//     umur: 32
// };

// orang.pekerjaan = "arsitek";
// orang.pendidikan = "S1";
    
//Menambah properti dengan Spread Operator
// orang = {...orang, pekerjaan: "arsitek", pendidikan: "S1"};


//mengabungkan objek dengan spread
// const objek1 = {a: 1, b: 2};
// const objek2 = {c: 3, d: 4};
// const objekGabungan = {...objek1, ...objek2};

// console.log(objekGabungan);






