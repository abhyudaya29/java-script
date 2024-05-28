function main(){
    let a=20

    if(true){
        let a =10
        console.log("inside scope")
        console.log(a)
    }
    console.log("Outside scope")
    console.log(a)
}
// main()
function abc(){
    console.log(a,b,c)
    var a=20
    let c=20
    const b=30
    console.log(a,b,c,"Second")
}
abc()
