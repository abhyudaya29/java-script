const tinderuser={}
console.log(tinderuser)


tinderuser.id="1234"
tinderuser.name="Abhyudaya"
// console.log(tinderuser)

const regular={
    email:"abhyudayadev123@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Balle Balle",
            lastname:"Dubey"
        }
    }
}

console.log(regular.fullname.userfullname.firstname)

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)


const obj3={...obj1,...obj2}
console.log(obj3)


const user=[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },

]

user[1].email
console.log(Object.keys(regular))

console.log(tinderuser.hasOwnProperty('isloggedin'))

//  has own property=> identifies that whether the object is present or not
