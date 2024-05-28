let name={
    firstName:"Abhyudaya",
    lastName:"Dubey",
    fullName:function(){
        console.log(this.firstName + " " + this.lastName)
    }
}
name.fullName()

let name2={
    firstName:"MS",
    lastName:"Dhone",
}

// function Borrowing
name.fullName.call(name2)