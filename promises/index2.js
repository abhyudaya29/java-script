const promise1=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Abhyudaya")
        resolve()
    },1000)
})
promise1.then(function(){
    console.log("Promise consumed")
})

let Promise22=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task2")
        resolve()
    },1000)
})

Promise22.then(function(){
    console.log("Sab CHnaga Ji")
})


const promise3 =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@mmail.com"})

    },1000)
})
promise3.then(function(user){
    console.log(user)
})


const promisenew=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"dev",email:"abhyu"})
        }
        else{
            reject('Error: SOmethinf went wrong')
        }
    })
})

const username=promisenew.then((user)=>{
    console.log(user)
    return user.username


}).then((username)=>{
    console.log(username)

}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("The promise is either ")
})
// console.log(username)