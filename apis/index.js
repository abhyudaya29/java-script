const request='https://randomuser.me/api/'

const xhr=new XMLHttpRequest();
xhr.open('GET',request)
xhr.onreadystatechange=function(){
    console.log(xhr.readyState)
    if(xhr.readyState===4){
        const data=JSON.parse(this.responseText)
        console.log(typeof data)
        console.log(data.results)

    }
}
xhr.send()
console.log(xhr.readyState)
console.log("here")