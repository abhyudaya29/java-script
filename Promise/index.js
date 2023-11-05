// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task completed");
//         resolve();
//     },3000)
    
// })  

// promise.then(()=>{
//     console.log('task completed')
// })

// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("p2 completed");
//         resolve({username:"Abhyudaya"})
//     },2000)
// })

// p2.then((user)=>{
//     console.log(user)
// })

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("p3 completed");
        let error=true
        if(!error){
            resolve({username:"Dev",email:"Abhyudaya"})

        }
        else{
            reject("Error in fetching data")
        }
        
        

    },5000)
})

p3.then(()=>{
    console.log("consumed")
}).then((user)=>{
    console.log(`username: ${user.username} and email: ${user.email}`)
}).catch((error)=>{
    console.log(error)

}).finally(()=>{
    console.log("Promise is reso;ved or rejected")
})


const p5=new Promise((reject,resolve)=>{
    setTimeout(()=>{
        console.log("p3 completed");
        let error=true
        if(!error){
            resolve({username:"Dev",email:"Abhyudaya"})

        }
        else{
            reject("chai in fetching data")
        }
        
        

    },5000)

})