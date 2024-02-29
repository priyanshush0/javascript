// toggle--------

// let words="ajhgjaADX";
// console.log(words);
// let res="";
// // let word=words.split('');
// // str2=str1.length;
// // console.log(str1);
//  for(let word of words){
//      if(word===word.toLowerCase()){
//         res+=word.toUpperCase();
//     }
//     else{
//         res+=word.toLowerCase();
//     }
// }
// console.log(res);



// area--- parameter -----vol--

// let radius=[1,2,3,4,5,6];
// let len=str.length
// console.log(str);
// let r;
// let area=[];
// let parameter=[];
// let vol=[];
// for(let i=0;i<6;i++){
//     //  r=str[i];
//     str[i]=3.14*str[i]*str[i];
//     console.log(str[i]);

//     // parameter=3.14*2*str[i];
//     str[i]=3.14*2*str[i];

//     console.log(str[i]);

//     str[i]=4/3*3.14*str[i]*str[i]*str[i];
//     console.log(str[i]);

// }
// function calculate(logic){
//     let res=[];
//     for(let radi of radius){
//         res.push(logic(radi));
//     }
//     return res;
// }

// function area(r){
//     return Math.PI*r*r;
// }
// function parameter(r){
//     return 2*Math.PI*r;
// }
// function vol(r){
//     return 4/3*(Math.PI*r*r*r);
// }
// function hemi(r){
//     return 2/3*(Math.PI*r*r*r);
// }
// console.log(calculate(area));
// console.log(calculate(parameter));
// console.log(calculate(vol));
// console.log(calculate(hemi));



// // ---------genarate otp--

// function getOpt(length){
//     let otp='';
//     for(let i=0;i<length;i++){
//         otp+=Math.floor(Math.random()*10).toString();
//     }
//     return otp;
// }

// getOpt(6);

// // -----prototype--
// let person=
// {
//     name:"suraj",
//     rollno : 454,
//     fun:function(){
//         console.log("hello bachho");
//     }
// }

// let a=Object.create(person);
// let b=Object.create(a);
// console.log(a.__proto__===person);
// console.log(b.__proto__===person);
// console.log(b.__proto__===a);

// let suraj=true;
// let num=10;
// let str="syraj";
// let arr=[1,3,4]
// console.log(typeof(suraj));
// console.log(typeof(num));
// console.log(typeof(str));
// console.log(typeof(arr));
// console.log(suraj.__proto__===Boolean.prototype);
// console.log(suraj.__proto__===Boolean);
// console.log(num.__proto__===Number.prototype);
// console.log(num.__proto__===Number);
// console.log(str.__proto__===String.prototype);
// console.log(Number.prototype.__proto__===Object.prototype);
// console.log(String.prototype.__proto__===Object.prototype);
// console.log(Boolean.prototype.__proto__===Object.prototype);
// // console.log(Number.prototype.__proto__===Object);
// console.log(arr.__proto__===Array.prototype);
// console.log(Array.prototype.__proto__===Object.prototype);
// console.log(Number);
// console.log(String);
// console.log(Boolean);

// ---dom-----

// let h1=document.querySelectorAll('h1');
// // let h1=document.getElementsByTagName('h1');
// let data=Array.from(h1);
// for(let item of data){
//     item.style.border="2px solid black";
//     item.style.color='skyblue';
//     item.style.height='100px';
//     item.style.width='300px';
//     item.style.borderRadius="5px";
//     item.style.background="gray";
//     console.log(item);
// }


// ------frequenchy---- check---
let str="this is data data this is data ! ! @ 1 2 0";
//  str="Aa2!23";
let data=str.split(" ");
console.log(data);
let count={};
for(let word of data){
    if(count[word]){
        count[word]++;
    }
    else{
        count[word]=1;
    }
}
console.log(count);
for(let item in count){

    console.log(`${item}  => ${count[item]}`  );
}


// -----toggle ----
let para=document.getElementById('para1');
console.log(para);
console.log(para.classList.toggle("btn"));
console.log(para.classList.toggle("btn"));
console.log(para.classList.toggle("btn"));
console.log(para.classList.toggle("btn"));

