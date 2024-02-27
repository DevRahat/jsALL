// const data=[{id:1,name:'Abul',address:'Dhaka'}];
// console.log(data[0].address);

// const products={
//     count: 5000,
//     data: [
//           {id:1, name: 'lenovo laptop', price: 65000},
//           {id:2, name: 'MacBook Air', price: 165000}
//     ]
// }
// console.log(products.data[1].price);

const user={
    id: 5001,
    name: "shoriful Raj",
    address: {
        street: {
            first: '54/1 Utto side',
            second: 'poribag ar goli',
            third: 'Nodorai'
        },
        city: 'Dhaka'
    }
}
const user2={
    id: 5001,
    name: "shoriful Raj",
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

console.log(user.address.street?.second);
