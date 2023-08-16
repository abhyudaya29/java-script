// event target-->interface -->to level entity
// 3 methods 1) add event listner()
//            2)remove event listner()
//            3) dispatch event()
// listner means what action need to be taken after the specific event
// 




// add event listner
// document.addEventListener('click',function(){console.log('hey baby')})
let a=document.querySelector('h1')
a.addEventListener('click',function(){
    a.style.background='green'
})