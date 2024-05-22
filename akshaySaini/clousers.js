// function x(){
//     var a=10
//     console.log("X is executed")
//     function y(){
//         console.log(a)
//         console.log("y is executed")
//     }
//     return y;
// }
// var z=x()

// console.log(z,"Z is executed")
// z()

function makefun(){
    const name="Mozila"
    function displayName(){
        console.log(name)
    }
    return displayName
}
const myFun=makefun()
console.log(myFun)
myFun()