const array=[1,2,3,4,5,6];
 for(let i=0;i<array.length;i++){
    console.log(array[i]);
 }


 const array2=["Apple","Mango","Pineapple"];

 for(let i=0;i<array2.length;i++){
    if(array2[i]=="Mango"){
        continue;
    }
    // console.log(array2[i]);
 }

 const array3=["Apple","Mango","Pineapple"];

 for(let i=0;i<array3.length;i++){
    if(array2[i]=="Mango"){
        break;
    }
    console.log(array3[i]);
 }