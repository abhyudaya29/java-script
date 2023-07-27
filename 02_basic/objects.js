//singleton

//object literals
// Object.create// constructor method // it forms singleton

const mysym=Symbol("Key1")
console.log(mysym)
const jsuser={
    name:"Abhyudaya",
    Age:21,
    email:"abhyudayadev123@gmail.com",
    // mysym:"mykey1",
    [mysym]:"mykey",
    lastloggin:["Monday","sunday"],
    "full name":"Abhyudaya Dubey"
}
console.log(jsuser.Age)
console.log(jsuser['email'])

console.log(jsuser["full name"])

// console.log(typeof(jsuser.mysym))
console.log(typeof(jsuser[mysym]))

jsuser.email="devdubey@gmail.com"
console.log(jsuser.email)
// Object.freeze(jsuser)
jsuser.email="devdubey@@@gmail.com"
console.log(jsuser.email)


jsuser.greeting=function(){
    console.log("HEy js user")
}
console.log(jsuser.greeting)

jsuser.greeting2=function(){
    console.log(`Hello js user ,${this.name}`)
}

console.log(jsuser.greeting2())