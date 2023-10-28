// let array=[1,2,3,4,5];
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }
// for(let i=0;i<=10;i++){
//     // console.log(`${i}`);

//     for(let j=0;j<=10;j++){
//         // console.log(`${j}`);
//         console.log(i +'*'+j +'='+ i*j);
//     }
// }

// for loop is executed for the iteration
const array=['apple','mosmi','aam'];
console.log(array.length);
for(let i=0;i<array.length;i++){
    if(array[i]=='mosmi'){
        continue;
    }
    // console.log("hii");
    console.log(array[i]);
}

const myarray=[1,2,3,4,5];
let i=0;
// while llop is executed till the condition is true;
while(i<myarray.length){
    console.log(`vale is : ${myarray[i]}`);
    i++;
}

// first code is executed and then condition is checked
let score=1;
do {
    console.log(`vale is: ${score}`);
    score++;
    
} while (score<=10);