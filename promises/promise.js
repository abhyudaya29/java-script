const promeiseone=new Promise((resolve,reject)=>{
   setTimeout(()=>{
    console.log("Abhyudaya's asycn task is completed")
    resolve()
   },1000)
}).then(()=>{
    console.log('Promise consumed')
})

promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({udername:"Abhyudaya"})

    },1000)
}).then((user)=>{
    console.log(user);
})
