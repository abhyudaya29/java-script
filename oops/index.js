// class User{
    
//     constructor(userName,email,password){
//         this.userName=userName,
//         this.email=email,
//         this.password=password
//     }
//     // when function is in class it is known as method
//     encryptPassword(){
//         return `abc${this.password}efg`;

//     }
//     changeUserName(){
//         return `${this.userName.toUpperCase()}`
//     }
//     testFunc=()=>{
//         console.log(this.userName,">>>arrow function")
//     }

// }


// const chai=new User("abhyudaya","abhyudayadev123@gmail.com","123");
// console.log(chai,">>new object");
// console.log(chai.encryptPassword(),">>>enc psw");
// console.log(chai.changeUserName(),">>>enc psw");
// console.log(chai.testFunc(),">>>enc psw")


// behind the scene if class was not present
function User(userName,email,password){
        this.userName=userName,
        this.email=email,
        this.password=password

}
User.prototype.encryptPassword=function(){
    return `abc${this.password}efg`;

}
const tea=new User("tea","tea@gmail","hey");
console.log(tea),
console.log(tea.encryptPassword(),">>>enc pswwwww")

