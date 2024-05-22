setTimeout(()=>{
    console.log("Aur Kya haal hai")

},5000)

function x(y){
    console.log("x")
    y()
}
x(function y(){
    console.log("y")
})
function attachevent(){
    let count=0

document.getElementById("clickbaby").addEventListener("click",function ayx(){
    console.log("Print hogaya",count++)
})
}
attachevent()
// Event Listners are heavy,takes memory 