// array

const myarr=[1,2,3,4,5]

// console.log(myarr.length)

for(let i=0;i<myarr.length;i++){
    console.log(myarr[i])
}
myarr.push(6)
console.log(myarr)

for(const j in myarr){
    console.log(myarr[j])
}