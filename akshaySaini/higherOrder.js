const radius=[1,2,3,4,5];

const double=function(x){
    const ans=x*2
    return ans;
}
console.log(radius.map(double))
// Pollfill of map
Array.prototype.main=function(func){
    let output=[];
    for(let i=0;i<this.length;i++){
        output.push(func(this[i]))

    }
    return output
}
// console.log(main(radius,double))
console.log(radius.main(double))
