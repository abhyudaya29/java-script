function add(a,b,c){
    return a+b+c
}

// Here we will not exectire add function until we get all the paramaters
// console.log(add(2,3,4))

// To Solve this we Use curry
function badd(a){
    return function (b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(badd(2)(3)(5))


function sendEmail(to){
    return function(sunject){
        return function(body){
            console.log(`Email sent ${to} and the subject is ${sunject} with body ${body}`)
        }
    }
}
// let result =sendEmail("abhyudaya@gmail.com");
// let result2=result("Dekh le mail bsdk")
// result2("Its imp please reviews it")
// console.log("abhyudaya@gmail.com","Dekh le mail bsdk","Its imp please reviews it")

const sendAutoEmil=(to)=>(subject)=>(body)=>`Email sent ${to} and the subject is ${subject} with body ${body}`
let result =sendAutoEmil("abhyudaya@gmail.com");
let result2=result("Dekh le mail bsdk")
result2("Its imp please reviews it")
console.log(result2("Its imp please reviews it"))