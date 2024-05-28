// this in global space represent the global object
// "use strict"
// console.log(this) 

// function x(){
//     // the vlaue will be undefined if the engine is in strict mode
//     console.log(this)
// }
// x() 

const obj={
    a:10,
    name:"Abhyudaya",
    x:function(){
        console.log(this.a)
        // here this represent the object :obj
    },
    print:function(){
        console.log(`hey from ${this.name}`)

    }

}
obj.x()

const obj2={
    a:20,
    name:"Dev",
    x:function(){
        const func=()=>{
            console.log(this,">>>>")
        }
        return func()

    }
    


}
obj.print.call(obj2)




obj2.x()