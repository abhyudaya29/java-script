const array=[1,2,3,4,5,6];

// const morethanTwo=array.filter((element)=>{
//     return element>2

// })
// console.log(morethanTwo)

// const sum=array.reduce((acc,curr,index)=>{
//     console.log(acc,curr)
//     return acc+curr

// },0)
// console.log(sum)

function myfilterfunc(e){
    return e>2

}

Array.prototype.myfilter=function(func){
    let output=[];
    for(let i=0;i<this.length;i++){
        if(func(this[i])){
            output.push(this[i])
        }

    }
    return output
}
console.log(array.myfilter(myfilterfunc))