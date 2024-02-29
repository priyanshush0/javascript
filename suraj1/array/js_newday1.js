//arrow function

// function sum(a,b){
//     return a+b;

// }

// sum(2,5);
// console.log(sum(5,7));


// let add=(a,b)=>{
//     return a+b;
// }
// console.log(add(9,9));

//---------sum of n natural no.---
// let sum=0
// function sumOfNaturalno(a){
//     for(let i=1;i<=a;i++){
//         sum+=i;
//     }
//     console.log(sum);
    
// }
// console.log(sumOfNaturalno(20));


//-------fcatorial---------
// function factorial(n){
//     fact=1
//     for(let i=1;i<=n;i++){
//         fact*=i;

//     }
//     return fact;
//     // console.log(fact);
// }

// let ans=factorial(5);
// let ans2=factorial(5-2);
// console.log(ans/ans2);

// console.log(factorial(5));


// ---------ncr

// function ncr(n,r){
//     res=0;
//     fact1=1;
//     a=n-r;
//     fact=1;
//     for(let i=1;i<=n;i++){
//         fact*=i;
        
//     }
//     for(let j=1;j<=a;j++){
//         fact1*=j;
//     }
//     // console.log(fact1);
//     res=fact/(fact1);
//     console.log(res);
// }
// console.log(ncr(5,3));



// ----high-order-function----

// function a(){
    
//     console.log("zamato delivery");
//     function b() {

//         console.log("swwigy delevery");
//     }
//     return b;
// }
// let ans=a();
// ans();

// function a(c){
//     c();
//     console.log("zamato delivery");
    
// }
// function b() {

//     console.log("swwigy delevery");
// }
// // return b;

// a(b);




// ------promises----- !!

// function promise1(){
//     return new Promise((resolve,reject)=>{
//         // resolve();
//         // reject();
//     })
// }
// console.log(promise1());

function downloadfile(url){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            const img=url.split("/").pop();
            console.log("file downloaded successfully",img);
            
            reslove(img);
        },2000);
    })
}

function compressfile(img){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            const zipfile=img.split(".")[0]+".ZIP";
            console.log("file compress seccessfully",zipfile);
            reslove(zipfile);
        },3000);
    })
}

function uploadfile(zipfile){
    return new Promise((reslove,reject)=>{
        console.log("file  upload starting");
        setTimeout(()=>{
            const upl="local storage" + zipfile;
            console.log("file uploaded successfully");
            reslove(upl);
        },5000);
    })

}

// downloadfile("https://www.facebook.com/profile.jpg")
// .then(compressfile)
// .then(uploadfile)
// .then((upl)=>{
//     console.log(upl);
// })


// let row=5;
// for(let i=1; i<=row;i++){
//     let str ="";
//     // console.log(str);
//     for(j=0;j<i;j++){
//         str+=" *";

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
//     // console.log(str);
// }


let n=5;
for(let i=1; i<=n;i++)
{
    let str="";
    for(let j=1; j<=n;j++)
    {
        if (i===1 || i===n  || j===1 || j==n)
        {
            str+=" * ";

        }
        else{
            str+="   ";
        }
    }
    console.log(str);
    // document.write(str+"</br>");
}


 row=5;
for(let i=1; i<=row;i++){
    let str="";
    // console.log(str);
    // str++;
    for(j=1;j<=i;j++){
        str+=j+" ";
        // str=+1;
        

    }
    console.log(str);
    
}


let row1=5;
for(let i=0; i<=row1;i++){
    let str =" ";
    let count=i;
    // console.log(str);
    for(j=1;j<=i;j++){
        str+=count;
        count++;
    }
    console.log(str);
    // document.write(str);

}


let row2=5;
for(let i=1; i<=row2;i++){
    let str ="";
    // console.log(str);
    for(j=row2;j>i;j--){
        str+=" *";

    }
    console.log(str);

}