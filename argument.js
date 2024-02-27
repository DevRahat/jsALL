function sum(a,b,c){
    // console.log(arguments);
    const args=[...arguments];
    // console.log(args);
    const result=a+b+c;
    return result;
}
console.log(sum.length);
const total=sum(12,14,20,30);
// console.log(total);