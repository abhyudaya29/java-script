const array=[1,2,3,4,5];
// console.log(array.map((num)=>{
//     return num*3

// }))
// create Our own map
function triple(e){
    return e*3

}
Array.prototype.myMap=function(fun){
    let output=[]
    for(let i=0;i<this.length;i++){
        output.push(fun(this[i]))
    }
    return output
}

console.log(array.myMap(triple))