// let merapromiese=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Babe i'm inside promise")
//     },5000)
    
//     // resolve(1998)
//     reject(new Error("Baby error aya hai"))
    
// })

// merapromiese.then((value)=>{
//     console.log(value)
// })
// merapromiese.catch((error)=>{
//     console.log("received an error")
// })
// // merapromiese


// // let merapromiese2=new Promise(function(resolve,reject){
// //     setTimeout(function(){
// //         console.log(" i'm inside promise2")
// //     },3000)
// //     // resolve(1998)
// //     // reject(new Error("Baby error aya hai2"))
    
// // })

// console.log("Phela ")



// let wadda1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("set time out1 started")
//     },2000)
//     resolve()
// })

// wadda1.then(function(){
//     let wadda2=new Promise(function(resolve,reject){
//         resolve("Wadda2 resolved")
//     })
//     return wadda2
// }).then((function(value){
//     console.log(value)
// }))



// async function utility(){
//     let mh=new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("mh is hot")
//         },5000)
//     })
    
//     let dl=new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("cool")
//         },6000)
//     })
//     let mumbai=await mh
//     let delhi=await dl
//     return[mh,dl]
// }

// async function utility(){
//     let content=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let output= await content.json()
//     console.log(output)
// }
// utility()


async function helper(){
    let option={
        method: "POST",
    body: JSON.stringify({
        userId: 1,
        title: "Taggadi",
        completed: false
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
    let content=await fetch("https://jsonplaceholder.typicode.com/todos",option)
    let response=content.json()
    return response

}
async function utility(){
    let ans=await helper()
    console.log(ans)
}
utility()
