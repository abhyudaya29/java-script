class User{
    constructor(userName){
        this.userName=userName;
    }
    logMe(){
        console.log(`User name is: ${this.userName}`)
    }
}


class Teacher extends User{
    constructor(userName,email,password){
        // we use super in child class when want to access the method or any object in child class
        // from parent class
        super(userName)
        this.email=email,
        this.password=password
    }
    addcourse(){
        console.log(`course was added by ${this.userName}`)
    }
}

const chai=new Teacher("chai","Chaidot@gmail.com","naagoriye");
chai.addcourse()

const masalachai=new User("masala");
masalachai.logMe();
console.log(chai==masalachai);
console.log(chai instanceof Teacher)