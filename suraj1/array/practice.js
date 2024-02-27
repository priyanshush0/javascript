// var a=prompt()
// document.write(a);
   
// if(a==="The Sky is Blue"){
//     document.write("Blue is The Sky");
// }
// else{
//     document.write("Please Check Your Stetment");
// }


// let arr='The Sky is Blue';

// document.write(arr[-1]);

// function reversestring(str){

// }

// function reverseString(str) {
//     let newString = "";
//     for (let i = str.lenght - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }    
// reverseString('The Sky is Blue')
// document.write(reverseString());

// let arr='The Sky is Blue';
// let res=arr.split(' ').reverse().join(' ');

// let str=arr.split(' ');
// let op="";
// for(let item of str){
//     op+=(item.split('').reverse().join(''))
//     op+=" ";
// }
// console.log(res);
// console.log(op);


// JavaScript code for hollow rectangle
	// Function to print hollow rectangle
	function print_rectangle(n, m) 
	{
		var i, j;
		for (i = 1; i <= n; i++)
		{
		for (j = 1; j <= m; j++) 
		{
			if (i == 1 || i == n || j == 1 || j == m) 
				document.write("*");
			else
				document.write("");
		}
		document.write("<br>");
		}
	}

	// Driver Code
	var rows = 6,
		columns = 20;
	print_rectangle(rows, columns);
