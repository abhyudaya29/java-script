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


const array=['apple','mosmi','aam'];
console.log(array.length);
for(let i=0;i<array.length;i++){
    if(array[i]=='mosmi'){
        continue;
    }
    // console.log("hii");
    console.log(array[i]);
}
