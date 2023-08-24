// const name=function(){
//     console.log("abhyudaya")
// }
// setTimeout(name,2000)

// setInterval(name,1000)

// const print=document.querySelector('.button')
const heading=document.querySelector('.h11')
console.log(heading)
const change=function(){
    const a =document.querySelector('.h11').innerHTML=
    'dubey'
}



const change_name=setTimeout(change,4000)
document.querySelector('.h11').addEventListener('click',function(){
    clearTimeout(change_name)
    console.log('dalla')
})