// // const name=function(){
// //     console.log("abhyudaya")
// // }
// // setTimeout(name,2000)

// // setInterval(name,1000)

// // const print=document.querySelector('.button')
// const heading=document.querySelector('.h11')
// console.log(heading)
// const change=function(){
//     const a =document.querySelector('.h11').innerHTML=
//     'dubey'
// }



// // const change_name=setTimeout(change,4000)
// // document.querySelector('.h11').addEventListener('click',function(){
// //     clearTimeout(change_name)
// //     console.log('dalla')
// // })
// // setInterval(function(){
// //     console.log("abhyudaya",Date.now())
// // },1000)


const date =function(str){
    console.log(str,Date.now())
}
// const intervalid=setInterval(date,1000,'hi')
// clearInterval(intervalid)


// console.log(stop)
const loop=function(){
    for(let i=0;i<10;i++){
        console.log("abhyudaya",Date.now())
    }
}
let intervalid;
const startname=function(){
    // let name=console.log("abhyudaya",Date.now())
    intervalid=setInterval(loop,1000)
}
const stopname=function(){
    clearInterval(intervalid)


}

document.querySelector('#start').addEventListener('click',startname)
const stop=document.querySelector('#stop').addEventListener('click',stopname)
// start.addEventListener('click',startname)