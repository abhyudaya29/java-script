// num()
// function num(){
//     console.log(a)
//     var a=10
//     console.log("Hey")
// }

function main(){
    var brwoser="Mozila"
    function displayName(num){
        console.log(brwoser,num)
    }
    return displayName;
}
main()(10)