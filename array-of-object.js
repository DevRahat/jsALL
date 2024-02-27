const products=[
    {id:1, name: 'lenovo', price:65000},
    {id:2, name: 'Dell', price:45000},
    {id:3, name: 'Hp', price:55000},
    {id:4, name: 'Mac', price:165000}

]

//map

const names=products.map(product =>product.name);
console.log(names);
//output: [ 'lenovo', 'Dell', 'Hp', 'Mac' ]
const prices=products.map(product =>product.price);
console.log(prices);
//output: [ 65000, 45000, 55000, 165000 ]


//forEach()
products.forEach(p => console.log(p.id));
//output:
1
2
3
4
//

//filter
const expensive=products.filter(p =>p.price>50000);
console.log(expensive);
//output: 
// [
//     { id: 1, name: 'lenovo', price: 65000 },
//     { id: 3, name: 'Hp', price: 55000 },
//     { id: 4, name: 'Mac', price: 165000 }
//   ]

//find()
const affordable=products.find(p =>p.price<50000);
console.log(affordable);
//output: { id: 2, name: 'Dell', price: 45000 }

//reduce

const total =products.reduce((acum, current) =>acum+current.price,0);
console.log(total);

//output 330000