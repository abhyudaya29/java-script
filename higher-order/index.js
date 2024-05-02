const fruits = [
    { name: "Apple", price: 1.00 },
    { name: "Banana", price: 0.50 },
    { name: "Orange", price: 0.75 },
    { name: "Grapes", price: 2.00 },
    { name: "Mango", price: 1.50 },
    { name: "Pineapple", price: 2.50 },
    { name: "Strawberry", price: 3.00 },
    { name: "Watermelon", price: 4.00 },
    { name: "Blueberry", price: 2.50 },
    { name: "Peach", price: 1.75 }
  ];
  
const mapArray=fruits.map((items)=>{
    return items.name
})

// console.log(mapArray,"maparray")
const filterArray=fruits.filter((items)=>{
    return items.price>2.50;
})

const findIndex=fruits.findIndex((items)=>{
    return items.name==="Apple"
})
const forEach=fruits.forEach((items)=>{
    return items.name
})
// The Op comes to be undefined because forEach dosent return any value 
const someMethod=fruits.some((items)=>{
    return items.price<4.00;
})
console.log(someMethod);
if(someMethod){
    console.log("Items are yo yo")
}