//for loop

// for (let count=1; count<=10; count++){
//     console.log("Shawon");
// }

// console.log ("loop has end");



// let n= prompt('type a number');

// for (let count=1; count<=n; count++){
//     console.log("Shawon");
// }




// let sum=0;
// for (let i=1; i<=5; i++){
//     sum=sum+i;
//     //console.log (sum);
// }   
//     console.log ("sum=",sum);



// let n=prompt('type a number');
// let sum=0;

// for (let i=1; i<=n; i++){
//     sum=sum+i;
//     //console.log (sum);
// }   
//     console.log ("sum=",sum);




// let n=prompt('type a number');
// let sum=0;

// for (let i=0; i<=n; i+=2){
//     sum=sum+i;
//     console.log (i);
// }
// //2,4,6,8,...




// let n=prompt('type a number');

// for (let i=0; i<=n; i++){
//     if (i%2===0){
//     console.log (i);
//     }
// }
// //0,2,4,6,8,10....



// let n=prompt('type a number');

// for (let i=0; i<=n; i++){
//     if (i%2!==0){
//         console.log (i);
//     }
// }
// //1,3,5,7,9,11...



// let n=prompt('type a number');
// let sum=0;

// for (let i=1; i<=n; i+=2){
//     sum=sum+i;
//     console.log (i);
// }   
// //1,3,5,7..,



// // logic of while loop
// let n=prompt('guess a number:');
// let gameNum=25;

// while (n!= gameNum){
//     n=prompt('guess another number');
// }
// console.log("You are right, thank you");




// //for of loop

// let str= "Intesar Shawon";

// for (let i of str){
//     console.log('i=',i);
// }   




// let str= "Intesar Shawon";
// let size=0;

// for (let i of str){
//     console.log('i=',i);
//     size++;
// }   

// console.log('size=',size);
// // string theke print koranor jonno for of loop




//for in loop

// let student = {
//     name: "Shawon",
//     age: 30,
//     cgpa: 3.5,
//     isPass: true,
// };

// for (let key in student){
//     console.log('key=', key, 'value=', student[key]);
// }

// object theke print koranor jonno for in loop





// string

// let str="shawon";
// let str2="nawshin";
// // console a str likhle naam print hobe 

// console.log(str[1]);
// console.log(str2[3]);


// string interpolation

// let obj = {
//     color:'Blue',
//     item:'Pen',
//     price: 10,
// };

// let output= `the cost of this ${obj.color} ${obj.item} is ${obj.price} taka, not ${1+1} taka`;
// console.log(output);

// `` ei sign ta hoy, normal quote unquote er sign na
// /n new line
// /t new tab- egula dile duita sgn mile ekta string count hobe




// //str method in javascript


// let str="shawon";
// console.log (str.length);
// //str.length eta length print kore




// let str="Shawon";
// let newStr = str.toUpperCase();
// console.log(newStr);
// //str.toUpperCase() str.toLowerCase() era main string a change ane na, sekhan theke value niye notun arekta create kore
// // puran string a kokhonoi change ashe na, possible na 



// let str="SHAWOn";
// str = str.toLowerCase();
// console.log(str);
// // // ekhane str er moddhe notun value assign kora hoise, tai oi str tai print hoise




// let str="  shawon    married nawshin  ";
// str = str.trim();
// console.log(str);
// str.trim() er kaj hocche rmove all the whitespaces
// str.trimRight(), str.trimLeft(), str.trimStart(), str.trimEnd()-- ei 4 ta ache, majher space roye jay



// let str="shawon";
// console.log(str.slice(2,5));  
// //starting value obossoi dite hoy, end na dileo hoy, eta string slice kore dekhay
// let str="shawon";
// console.log(str.slice(2));

// concat
// let str1="Shawon ";
// let str2= 'Nawshin ';
// let newStr=str1.concat (str2);
// console.log(newStr);
// let anotherNewStr=str2.concat (str1);
// console.log(anotherNewStr);
// // str1.concat (str2) eta use na kore + sign diyeo kaj sara jay, aajaira jinish eta, onkgula str a + dilei jog hoye jay
// let result= str1+ "married"  + str2;
// console.log(result);



//str.replace
// let str= "hello";
// console.log(str.replace("lo", "p"));
// //replace koraer kaj kore, prthome ja ashbe sudhu oitai replace kore, pore eki jinish thakleo replace kore na


// // pore eki jinish thakle str.replaceAll() use korte hoy
// let str= "hellololololo";
// console.log(str.replaceAll("lo", "p"));



// let str= "shawon";
// console.log(str.charAt(2)); //a
let str= "shawon";
console.log(str[2]); //a








