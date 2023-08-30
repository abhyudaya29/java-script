const promise1=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task");
        resolve()
    },1000)
})

promise1.then(function(){
    console.log('Promise resolved');
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task two")
        resolve()
    },1000)
}).then(function(){
    console.log("Async2 resolved")
})


const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"chai",email:"chai@example.com"})

    },1000)
})

promise3.then(function(user){
    console.log(user)

})


const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({user:"abhyudaya",pass:"123"})
        }else{
            reject('ERROR:Something went wrong')
        }

    },1000)
})

promise4.then((user)=>{
    

})