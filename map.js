const numbers=[4,5,2,8,10];

const double=[];
for(const num of numbers){
    const dbl=num*2;
    double.push(dbl);
}
console.log(double);

// const numbers=[4,5,2,8,10];
function doubleIt(num){
    return num*2;
}
// const result=numbers.map(doubleIt); //we can set a callback function here 
// console.log(result);

const double2 =n =>n*2;
const result=numbers.map(n =>n*2); //we can set a callback function here 
// console.log(result);