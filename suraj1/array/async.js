// async function add(a,b){
//     // let c=a+b;
//     // console.log(`sum of two no.= ${c}`);
// }

// add();
// console.log(add());
//reject--------


// async function add(a,b){

//     return new Promise(function(resolve,reject){
//         reject();
//     })
// }

// // add();
// console.log(add());

// let rand=Math.floor(Math.random()*10+11);
//  console.log(rand);


//  function p1(){
//     return new Promise(function(resolve,reject){
//         if(rand%2===0){
//             resolve();
//         }

//         else{
//             reject();
//         }
//     })
// }

// console.log(p1()); 



function pizza(){
        return new Promise(function(resolve,reject){
            console.log('Base is ready for pizaa');
            setTimeout(()=>{
                const cheese='🧈';
                resolve(cheese);
            },1000);
        })

}

function pizzacheese(){
    return new Promise(function(resolve,reject){
        console.log('we our adding cheese in pizza');
        setTimeout(()=>{
            const toppiny= '🧆';
            resolve(toppiny);
        },2000);
    })

}function readypizza(topping){
    return new Promise(function(resolve,reject){
        console.log('we our adding topping');
        setTimeout(()=>{
            resolve(topping);
        },5000);
    })

}

// pizza('Worlds best is ready')
// .then(pizzacheese)
// .then(readypizza)
// .then((toppiny)=>{
//     console.log('make your payment sir ');
// })

// async function makePizza(){
//     const cheese= await pizza();
//     console.log(cheese);
//     const Base= await pizzacheese();
//     console.log(Base);
//     const topping= await readypizza();
//     console.log(topping);


// }

// makePizza();


// let row=5;
// for(let i=1; i<=row;i++){
//     let str ="";
//     // console.log(str);
//     for(j=0;j<i;j++){
//         str+="*";

//     }
//     console.log(str);
// }

// let n=5;
// for(let i=1; i<=n;i++)
// {
//     let str="";
//     for(let j=1; j<=n;j++)
//     {
//         if (i===1 || j===n || j===1 || j===n)
//         {
//             str+="*";

//         }
//         else{
//             str+=" ";
//         }
//     }
//     document.write(str+"</br>")
// }

// let n=5;
// for(let i=1; i<=n;i++)
// {
//     let str="";
//     for(let j=1; j<=n;j++)
//     {
//         if (i===1 || i===n  || j===1 || j==n)
//         {
//             str+=" * ";

//         }
//         else{
//             str+="";
//         }
//     }
//     // console.log(str);
//     document.write(str+"</br>")
// }

// function countWords(str) {
//     const arr = str.split(' ');
//   for(let i=0; i<=arr;i++){
//     if(str===arr[i] ){
//         return arr.length;
//     }
// }
//     // return arr.filter(word => word !== '').length;
//   }
  
//   console.log(countWords('bobby hadz com')); 
//   console.log(countWords('This   is   a long string is This')); 
  
//    let str="this is dummy data data dummy dummy";
//   const map=new Map();
//     let words=str.split(' ');
//     for(let word of words)
//       {
//         if(map.has(word)){
//             map.set(word,map.get(word)+1);
//         }

//         else{
//             map.set(word,1);
//         }
//       }
  
    //   console.log(map);

    //   function count(str){
    //       const map= new Map();
    //       let words=str.split(' ');
    //     for(let word of words){
    //         if(map.has(word)){
    //             map.set(word,map.get(word)+1);

    //         }

    //         else{
    //             map.set(word,1);
    //         }
    //     } 
    //     return map;
    //   }

    //   console.log(count('is this so is this yummy'));


    //   function sets(){
    //     // let words=arr.split(',');
    //     let arr=[1,2,3,4,2,1,25];
    //     let set = new Set();

    //     for (let elem of arr){
    //         set.add(elem);
    //     }
    //     return set;
    //   }

    //   sets('is this so is this yummy');
    //   console.log(sets('1,2,2,3,2,1,2,1,4'));


// let row=5;
// for(let i=1;i<=row;i++)
// {
//     let str="";
//     for(let j=0;j<row-i;j++)
//     {
//         str+=" ";
//     }
//     for(let k=0;k<i;k++)
//     {
//         str+="*";
//     }
//     console.log(str);
// }

// let row=5;
// for(let i=1; i<=row;i++){
//     let str ="";

//     for(let j=0;j<row-i;j++){
//         str+=" ";
//     }   
    
//     for(let k=0; k<i;k++);
//     {
//         str+="*";
//     }
//     console.log(str);
// }


// async function apicall()
// {
//     const data= await fetch('https://fakestoreapi.com/products/categories');
//     console.log(data);
// }

// apicall()
for(let i=0;i<10;i++){
    setTimeout(()=>{
        console.log(i);

    },100)
    // console.log(i);
}