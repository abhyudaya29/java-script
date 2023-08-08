// factory functions

function CreateRectange(len,wid){
    let rectangle={
        length:len,
        width:wid,
        area:len*wid,

        draw:function(){
            console.log("Drawing a Rectangle");
        }
    }
    return rectangle
}

let rectangleobj1=CreateRectange(2,2);
console.log(rectangleobj1.area)