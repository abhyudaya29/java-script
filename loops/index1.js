const coding=['pu','js','cpp',];
coding.forEach( (item,index,array)=>{
    // console.log(item,index,array)

})

const mycoding=[{
    langname:'java script',
    filename:'js',

},
{
    langname:'java ',
    filename:'ja',
},
{
    langname:'python',
    filename:'py',
}
]
// console.log(mycoding.filename)
mycoding.forEach((item)=>{
    console.log(`${item.langname} has shortcut ${item.filename}`)

})

let myArray=[1,2,3,4,5,5,6];
let print=myArray.filter((num)=>num>4);
console.log(print)

let newarray=[];
myArray.forEach((num)=>{
    if(num>4){
        newarray.push(num);
    }
    
})
// console.log(newarray)

const yo=[1,2,3,4,5,6,7];
const newyo=yo.map((num)=>num+10)
// console.log(newyo)


// Reduce is mainly use for summation or adding the things
const data=[1,2,3,4,5,6]
const initialvalue=0;
const newdata=data.reduce((acc,curval)=>{
    return acc+curval
},initialvalue)
console.log(newdata)


const shopping=[{
    Name:"apple",
    price:2000},
    {
        Name:"orange",
        price:3000
    },
    {
        Name:"Banana",
        price:3000
    }



]
const cost=shopping.reduce((acc,cur)=>{
    return acc+cur.price
},0)
console.log(cost);