const student = [
    {id : 1 , name : 'hasib'},
    {id : 2 , name : 'santo'},
    {id : 3 , name : 'shiekh'},
    {id : 4 , name : 'siam'},
    {id : 5 , name : 'masum'}
]
// let output = [];
// for(let i = 0; i<student.length;i++){
//     output.push(student[i].name)
// }

const names = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id>3);
const biggerOne = student.find(s => s.id>3);
console.log(biggerOne);