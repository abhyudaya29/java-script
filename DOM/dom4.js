console.log(document.querySelector('li'))
// console.log('h')
function addlang(langname){
    let li=document.createElement('li')
    li.innerHTML=`${langname}`
    document.querySelector('.name')
    appendChild(li)
}
addlang('dubey')



// function addp(pname){
//     let p=document.createElement('p')
//     p.innerHTML=`${pname}`
//     document.querySelector('.name')
//     appendChild(p)
// }

// addp('baby')