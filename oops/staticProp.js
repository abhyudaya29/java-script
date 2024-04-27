class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`user name is ${this.username}`)
    }
    // prevent the usage of this property
    static createId(){
        return `123`

    }
}
const hitesh=new User("hitesh")
console.log(hitesh)
// console.log(hitesh.createId())


class Teacher extends User{
    constructor(email,username){
        super(username)
        this.email=email
    }

}
const iphone=new Teacher("Iphone","i@p.com");
console.log(iphone.createId())