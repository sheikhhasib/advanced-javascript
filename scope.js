let bonus = 20;
function sum(first,second){
    let result = first + second + bonus;
    // console.log(result);
    if(result > 9){
        const mood = "happy";
        console.log(mood);
    }
    return result;
}

let output = sum(10,20);
console.log(output);
