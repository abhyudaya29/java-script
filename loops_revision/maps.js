 const map=new Map()
 map.set('in','india')
 map.set('am','america')

//  console.log(map)

// for(const [key,value] of map){
//     console.log(key)
// }

const myobj={'game':'nfs',
'game2':'spiderman'



}

// for(const [key,value] of myobj){
//     console.log(value)
// }

// for(const key in myobj){
//     console.log(myobj)

// }

let varray=[1,2,3,4,5];
//  for in print index of array in array ds
// for(let array in varray){
//     console.log(varray[array])
// }


//  for each

const arrayy=['js','py,','c++']


// arrayy.forEach((value,index,array)=>{
//     console.log(value,index,array)
// })

const mycoding=[{
    langname:'java script',
    filename:'js',

},
{
    langname:'java ',
    filename:'ja',
},
{
    langname:'python',
    filename:'py',
}
]

mycoding.forEach((value)=>{
    console.log(value.langname)
})