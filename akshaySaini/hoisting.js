getName();
console.log(x)
var x=7

function getName(){
    console.log("Namagtey Baby")
}
var getName=()=>{
    console.log("Namastey Baby")
}
getName();
console.log(x)
// Hoisting in js is a phenomenon hwere we can access any variable before its initializing
// the Arrow function behaves like a normal variable,so undefined is alloted to this function in memory
// we cant access variable for hoisting in let and cont because of temporal Dead zone
// in let and var ,only decleration is hoisted,not initialization