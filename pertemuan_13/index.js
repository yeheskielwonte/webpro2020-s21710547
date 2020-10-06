/*
    Rest and Spread Operator
*/

//Rest Parameter
// const foo = (...params) => {
//     console.log(params);
// };
  
// foo("A", "B", "C"); // Output: ["A", "B", "C"]

//Rest Parameter sebagai akhiran
const bar = (param1, param2, ...params) => {
    console.log("Argument pertama ", param1);
    console.log("Argument pertama ", param2);
    console.log("Sisa argument ", params);
}

bar("A", "B", "C", "D", "E");
  



