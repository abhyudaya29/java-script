function saymyname(){
    console.log("a")
    console.log("b")
    console.log("h")
    console.log("y")
    
}

// saymyname()//execution

// function add(n1,n2){
//     console.log(n1+n2)
// }
// const result=add(3,5)
// console.log(result)


function adD(n1,n2){
    let result =n1+n2
    return result
}
const result=adD(3,5)
console.log(result )




function loginuser(username){
    if(username===undefined){
        console.log("please enter username")
        return

    }
    else{
        return `${username} just logged in`

    }
    
    
}

// let detail=loginuser("Abhyudaya")
// console.log(detail)

console.log(loginuser("dubey"))