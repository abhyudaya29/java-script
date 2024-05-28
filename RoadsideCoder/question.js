const students = [
    { name: "Alice", rollNo: 1, marks: 85 },
    { name: "Bob", rollNo: 2, marks: 92 },
    { name: "Charlie", rollNo: 3, marks: 78 },
    { name: "David", rollNo: 4, marks: 90 },
    { name: "Eve", rollNo: 5, marks: 88 }
];

// accessing name with forloop
// let namee=[];
// for(let i=0;i<students.length;i++){
//     namee.push(students[i].name.toUpperCase())
// }
// console.log(namee)

// // using map
// const AlphaName=students.map((item)=>{
//     return item.name.toUpperCase()
// })
// console.log(AlphaName)
// Return who scored more than 60
const data=students.filter((item)=>{
    return item.marks>80
})
// console.log(data)
const data2=students.filter((items)=>{
    return items.marks>70 &&items.rollNo>2
})
console.log(data2)
// sum all the marks

const sum=students.reduce((acc,curr)=>{
    return acc+curr.marks
},0)

console.log(sum)

// name of student who scored more than 90
const maal=students.filter((items)=>{
    return items.marks>88
}).map((item)=>{
    return item.name
})
console.log(maal)