// let count=0;
// function getData(){
//     console.log("Fethcing......",count++)
// }
// function myDebounce(call,d){
//         let timer;

//         return function(...args){
//             // console.log(...args,">>>>")
//             if(timer){
//                 clearTimeout(timer)
//             }
//             timer=setTimeout(()=>{
//                 call()

//             },d)

//         }

// }

// const betterFunc=myDebounce(getData,1000)

function myThrottle(func,delay){
    return function(...args){
        document.getElementById("button").disabled=true; 
        setTimeout(()=>{
            func()
        },delay)
    }

}
function execute(){
    document.getElementById("button").disabled=false
    console.log("User registered.....")
}
const newThrotle=myThrottle(execute,5000)