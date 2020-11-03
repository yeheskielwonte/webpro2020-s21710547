//Arrow function dari penjelasan sir

// Single arguments
// const calcAge = (year) => {
//     return 2020 - year;
// }


//No argument with implicit return value
// const calcAge = () => 2020 - 1992;
// console.log(calcAge());

const years = [1990, 1992 , 2001, 2005];

const calcAge5 = years.map(function (el) {
    return 2020 - el;
});

// const calcAge6 = years.map((el)=> 2020-el);

console.log(calcAge5);


//Default Parameter

// const calcAge = (birthYear , currentYear = 2020) => currentYear-birthYear;

// console.log(calcAge(1991, 2021));
// console.log(calcAge(1991));

//Exercise 3
//Convert to ES6 Syntax

//ES5
// function yearUntilRetirement(year, firstName) {
//     var age = 28;
//     var retirement = 65-age;
//     if (retirement >0) {
//         console.log(firstName +" retired in "+ retirement + "years");
//     }else{
//         console.log(firstName + "is already retired.");
//     }
// }

//ES6
// const yearUntilRetirement=(age,firstName)=>{
//     let retirement = 65-age;
//     if(retirement>0){
//         console.log(`${firstName} retired in ${retirement} years`);
//     }else{
//         console.log(`${firstName} is already retired.`);
//     }
// }
// yearUntilRetirement(28,"Owen");

