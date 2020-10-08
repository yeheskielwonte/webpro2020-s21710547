//Destructuring
//----------------------------

//Memecah item atau property pada array atau object ke adalam variable yang berbeda

//1. Array

// const colors = ["merah" , "kuning" , "hijau"];
// let satu = colors [0];
// let dua = colors[1];
// let tiga = colors[2];

// let [satu,dua,tiga]= colors;
// console.log(satu,dua,tiga);

// let [satu, ,tiga] = colors;
// console.log(satu,tiga);

// let[satu,dua,tiga,empat="biru"] = colors;
// console.log(satu,dua,tiga,empat);

//2. Object
const user = {
  name: "John",
  genders: "male",
  age: 23,
};

// let name = user.name;
// let genders = user.genders;
// let age = user.age;

// let {name, gender, age} = user;

// console.log(name, gender, age);

// let{name, gender, age, born="Manado"}=user;
// console.log(name, gender, age, born);

// let {name, age} = user;
// console.log(name, age);

// let {name:nama, age:umur,} = user;
// console.log(nama,umur);

// const display = ({name,age}) => {
//   console.log(`Nama saya adalah ${name}. Umur saya adalah ${age}`);
// }

// display(user);

//3. Array Object

// const users = [
//   {
//     id:1,
//     name:"John"
//   },
//   {
//     id:2,
//     name:"Mike"
//   },
//   {
//     id:3
//     name:"Bob"
//   },
// ];

// let [user1,user2,user3] = users;
// console.log(user1, user2, user3);

// let [{id: idUser1, name:nameUser1}, {id: idUser2 , name: nameUser2}, {id: idUser3, name: nameUser3}]=users;
// console.log(idUser1 , nameUser1);


//4. Kombinasi dengan Rest Operator

const colors = ["merah","kuning","hijau","biru"];

let [warna, ...lainnya] = colors;
console.log(warna, lainnya);











