const myarray=[1,2,3,4,5,6];

// const foreach=myarray.forEach((item)=>{
//     return item>4
// })
// console.log(foreach)

// const filter=myarray.filter((value)=>{
//     return value>2}
// )

// console.log(filter)
const initialvalue=0;
const total=myarray.reduce((accumulator,currentvalue)=>{
    console.log(`acc: ${accumulator}, curr: ${currentvalue}`)
    return accumulator+currentvalue
},initialvalue)

console.log(total)