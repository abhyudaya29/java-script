const clock=document.getElementById('clock')
console.log(clock)

let date=new Date()

setInterval(function(){
    clock.innerHTML=date.toLocaleTimeString()

},1000)