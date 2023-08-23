const buttons=document.querySelector('.b')
console.log(buttons)

buttons.addEventListener('click',function(e){
    console.log(e)
    buttons.style.border='2px solid red'

},false)

const beta=document.querySelector('.bb')
console.log(beta)
beta.addEventListener('click',function(e){
    console.log('google click')
    // e.defaultPrevented()
    e.preventDefault()

})

let body=document.querySelector('body')
console.log(body)

body=document.addEventListener('click',function(e){
        // alert("hello")
        console.log(e.target.parentNode)
        let remove=e.target.parentNode
        remove.remove()
        
},false)