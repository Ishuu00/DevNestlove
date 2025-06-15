value = 5 ; //this caled assigning value to variable
console.log(value); // this used for print in console
console.log(value * 5);

let  a= 6;
let  b= a +11;
console.log(b);

  a= 10 // re-assigning value to variable 
  // while re-assigning no need to add let cause we can't add two value to same variable but we can update without ussing let
console.log(a)

let convo = "a great china wall" ;let song = 3
console.log(convo);
convo = "statue of liberty"
console.log(convo)

 // amazon cart project 
let y ; //undefined 
const z =56; // number 
isadd = true // boolean
isnotadd = false // boolean
let vika ; // undefined
let ishu = null // object somehting should be there but not sure what

let employee = {
    name : "ishhuu",
    age : 19,
    tenurityPeriod : 1 ,
    process : "myntra",
    isSelected : true,
    company : "Ey"
};
console.log(employee["company"]);
console.log(employee.name)
 //object is collection of data
const friend = {
   circleSize : 5,
   city : "delhi",
   isintouch : true,
   nottouch : 1,
}

const product = {
   title : "ballpen",
   rating : 4,
   isdeal : true,
   price : 250,
}
const profile ={
   name : "ishu",
   post : 195,
   isfollow : false,
   followers : 284,
   following : 44,
   discription : "Enterprenuer"
};
profile.name = "ishu kashyap" // update keys
profile.discription = "Devloper | student"
console.log(typeof profile.isfollow); //can ask type 

// operators
let q = 5
let p = 3
console.log("q + p =", q+p)
console.log("q - p =", q-p)
console.log("q * p =", q*p)
console.log("q / p =", q/p)
console.log("q % p =", q%p) //modulas
console.log("q ** p =", q**p) // exponention

// Uniary operators - which does not need 2 components to do arthmetic operations
// q = q - 1 _q++ , q = q +1 _q++
console.log(q++)
console.log(q)

// Asignment operators
let e = 5
e **=4 // e = e**4 , 
console.log(e)
// Comparison operators
let f = 5 
let g = 8
console.log(g!=f)
console.log(f<=g)

// logical operators 
console.log(f>g || g<f)
console.log(!(f>g))

//conditonal statements 
let age = 9;
// if ( age >= 18 ){
//    console.log("can drive");
// }else{
//    console.log("can't drive");
// }
let driveEligiblity;
if(age>=18){
   driveEligiblity = "can drive"
}else{ 
   driveEligiblity= "can't drive"
}
console.log(`driveEligiblity : ${driveEligiblity}`)

let mode = "white";
let colour;
if(mode ==="dark"){
   colour = "black";
}else{
   colour = "white";
}
console.log(colour);

// even and odd number condinatonal statement 
let numType;
let num =17452
if(num%2 ==0){
   console.log(num, "is even")
}else{
   console.log(num, "is odd")
}

// else-if statement
let Age =9;
if(Age<=18){
   console.log("is Junior")
} else if (Age>18 ,Age<40){
   console.log("is Adult")
} else{
   console.log("is senior citizen")
}

// Tenary statements (a? "b":"c")
tenurity = Age<=18 ? "junior" : "adult";
console.log(tenurity);
console.log(Age<=18 ? "junior" : "adult");

// another example
let workTime = "morning"
console.log(workTime =="evening" ? "go to shop" : "stay home");

// let user = prompt("Enter the number");
// multiple = user%3==0 ? "is multiple of 3 " : "is not multiple of 3";
// console.log(user , multiple);

let score =2
if(score<=100 && score>=90){
   grade = "A"
}else if( score<=89 && score>=80 ){
   grade ="B"
}else if( score<=79 && score>=70 ){
   grade ="C";
}else if( score<=69 && score>=60 ){
   grade ="D"
}else if( score<=59 && score>=50 ){
   grade ="E"
}else if( score<=49 && score>=0 ){
   grade ="F"
}
console.log(grade);

// loops  
for (i = 1 ; i <2 ;i++){
   console.log("Ishu");
}
let total = 0;
for (i = 1; i<=2 ;i++){
   total = total + i 
}
console.log(total);
// infinite loop should never you write
// for ( i = 1; i>0 ;i++){
//    console.log(i);
// }

// while loop
let I=1;
while(I<=2) {
   I++;
   console.log("Chrome")
}
// do while
do {
   console.log("SIA")
   I++;
}while (I<5)
// for of loop
let Sia = "ISHU" 
for (let words of Sia){ //its  used for arrays and strings 
   console.log(words);
}
// for-in 
let household ={
   name : "vika",
   age :18,
   isstudent :true,
}
for (let sam in household){
   console.log(sam)
   console.log(household[sam]);
}
// o to 1 print all even numbers
for(i=0;i<=10;i++){
   if(i%2==0){
      console.log(i)
   }
}
let str=  "Ishi"
console.log(str.length) //string length
console.log(str[0])  // string indices
// let gamenum =prompt("Enter your number to start your game")
// while(gamenum<50 || gamenum>60){
//    gamenum = prompt ("Your wrong try again");
// }
// alert("you win")
// console.log("hurry you win")
let fruit ="papaya"
console.log(`${household.name} is good girl\ther age is ${age} and \nshe likes to eat ${fruit}`) //backtick and escape characters

// methods in js
let ab = "avikasharma";
ab= ab.toLocaleLowerCase();
ab= ab.toUpperCase();
ab =ab.trim();
ab = ab.slice(0,5)
console.log(ab); 
let str1 = "ishu"
let str2 = "kashyap"
console.log(str1.concat(str2))
let st3 = "Ishu kashyap"
console.log(st3.replace("Ishu", "avika"));