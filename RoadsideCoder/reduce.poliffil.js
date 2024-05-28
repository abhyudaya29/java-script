const array=[1,2,3,4,5]
function myReuceMethod(acc,curr){
    return acc+curr
}
Array.prototype.myReduce=function(func,initialValue){
    let accumulator=initialValue
    if(accumulator===undefined){
        accumulator=this[0]
    } 
    for(let i=0;i<this.length;i++){
        accumulator=func(accumulator,this[i])
    }
    return accumulator

}
// console.log(array.myReduce(myReuceMethod,0))
// array.forEach((e)=>{
//     console.log(e+2)
// })

array.forEach(function(item){
    item=item+3
    console.log(item)

})