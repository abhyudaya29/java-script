const name="abhyudaya"
const repocount=50

console.log(`hello my name is ${name } and my repo count is ${repocount}`)
// String intropolation

const game_name=new String("Abhyudayaaa")
console.log(typeof game_name)

console.log(game_name.__proto__)  // we get an object
console.log(game_name.length)
console.log(game_name.indexOf("d"))
console.log(game_name.toUpperCase())
console.log(game_name.charAt(2))
console.log(game_name.split(2))
const newstring =game_name.substring(0,5)
// split the srting in 2 halfs
// console.log(newstring)

const another_string=game_name.slice(-8,4)
console.log(another_string)

const newstringone=" dev "
console.log(newstringone)
console.log(newstringone.trim())


const url="http://abhyudaya.com/abhyudaya%20dubey"
console.log(url.replace("%20","-"))

// replaces the value

