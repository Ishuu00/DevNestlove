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
let Age =99
if(Age<=18){
   console.log("is junior")
} else if (Age>18 ,Age<40){
   console.log("is yougster")
} else{
   console.log("is senior citizen")
}