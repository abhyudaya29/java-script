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


function calculatecartprice(...num1){
    return num1

}
// let a=calculatecartprice(200,400,500)

// for(cart in a){
//     console.log(a)
// }

function calculatecartprice2(val1,val2,...num1){
    return num1


}
console.log(calculatecartprice2(200,300,400,4000))

const user={
    username:"dev",
    age:21
}


function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`)

    
}
handleobject(user)

handleobject({
    user:"dubey",
    price:200
})

const array=[1,2,3,4,56]

function returnsecondvalue(get_Array){
    return get_Array[1]

}
console.log(returnsecondvalue(array))