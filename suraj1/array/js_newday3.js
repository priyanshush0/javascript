// let str="this id some dummy data data some";
// let str2="The Sky is Blue";
// let str3=str2.split(' ');


// function reverseString(str) {
//    let arr = str.split(' ');
//     let newString = "";
//     for (let i = arr.lenght - 1; i >= 0; i--) {
//         newString += arr[i];
//     }
//     return newString;
// }    
// reverseString('The Sky is Blue');
// console.log(reverseString('The Sky is Blue'));

let arr='The Sky is Blue';
let res=arr.split(' ').reverse().join(' ');

let str=arr.split(' ');
let op="";
for(let item of str){
    op+=(item.split('').reverse().join(''))
    op+=" ";
}
console.log(res);
console.log(str);
console.log(op);



let str4="this is some dummy data data some";
//  str="Aa2!23";
let data=str4.split(" ");
console.log(data);
let count={};
for(let word of data){
    if(count[word]){
        count[word];
    }
    else{
        count[word]=1;
    }
}
console.log(count);


let arr1=[1,2,3,1,2,3,2,1,1,1,2,2];
const set=new Set();
for(let elem of arr1)
{
    set.add(elem);
}
console.log(set);

// let str5="this is some dummy data data dummy dummy this some is"
// let words=str5.split(' ');
// const set1=new Set();

// for(let word of words)
// {
//     set1.add(word);
// }
// console.log(set1)

// for(let item of set1)
// {
//     console.log(item);
// }


let str6="this is data is data some dummy";
let res1=new Set(str6.split(" "));
console.log(res1);

// let res3=true;
// setTimeout(()=>{
//     res3=false;
// },0);
// let count1=0;
// while(res3){
//     console.log(count1++);
// }
