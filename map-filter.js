let numbers = [1,2,3,4,5,6,7,8,9];
// let output = [];
// for(let i = 0;i<numbers.length;i++){
//     let element = numbers[i];
//     let square = element * element ;
//     output.push(square);
// }
// console.log(output);

// let result =  numbers.map(function(element){
//     return element * element;
// });


let result =  numbers.map(x => x*x);
// console.log(result);



let  even = numbers.filter(x => x % 2 == 0);
console.log(even);

let isThere = numbers.find(x => x == 6);
console.log(isThere);