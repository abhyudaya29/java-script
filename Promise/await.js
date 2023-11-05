const p5=new Promise((reject,resolve)=>{
    setTimeout(()=>{
        console.log("p3 completed");
        let error=false
        if(!error){
            resolve({username:"Dev",email:"Abhyudaya"})

        }
        else{
            reject("chai in fetching data")
        }
        
        

    },5000)

})


async function p5cosumed(){
    try{
        const wait=await p5
        console.log(wait)
    } catch(error){
        console.log(error)

    }
}