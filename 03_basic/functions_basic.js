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

// Constructor function

function Rectangle(){
    this.length=1;
    this.width=2;
    this.draw=function(){
        console.log('drawing');
    }
}

let Rec=new Rectangle();
Rec.color="Red";
delete Rec.color;
console.log(Rec)

console.log(Rec.constructor)

console.log(Rectangle.constructor)


let rc1=new Rectangle()


let Rectangle=new Function(`
    this.length=1;
    this.width=2;
    this.draw=function(){
        console.log('drawing');
    }
`)

console.log(Rectangle);
console.log(Rectangle.constructor)

let obj1=new Rectangle
console.log(obj1)
console.log(obj1.constructor)