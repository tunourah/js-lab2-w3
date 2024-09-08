// q1

let eatsPlants = false;
let eatsAnimals = true;


// if (eatsPlants === true) {
//   console.log("herbivore");
// } else if (eatsAnimals === true) {
//   console.log("carnivore");
// } else if (eatsPlants === true && eatsAnimals === true) {
//   console.log("omnivore");
// } else {    
//   console.log("undefined");
// }

let category = eatsPlants && eatsAnimals ? "omnivore" : ( eatsAnimals ? "carnivore" : ( eatsPlants ? "herbivore" : undefined ) );
console.log(category);

// q2
let numberOfMembers = 1;   

if (numberOfMembers === 1) {
  console.log("solo");
}   else if (numberOfMembers <= 0) {        
  console.log("not a group");
}       else if (numberOfMembers === 2) {       
  console.log("duet");
} else if (numberOfMembers === 3) {
  console.log("trio");

}   else if (numberOfMembers === 4) {    
  console.log("quartet");
}   else if (numberOfMembers > 4) {   
  console.log("this is a large group");
}
 

// q3

let room = "billiards room";
let suspect = "Mr. Parkes"; 
let weapon = "";
let solved = false;

if (room === "ballroom" && suspect === "Mrs. Sparr" ) {
   weapon = "poison"; solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve" ) {
   weapon = "trophy"; solved = true;
    }
    else if (room === "billiards room" && suspect === "Mr. Kalehoff" ) {
        weapon = "pool stick"; solved = true;
    }
    else  if (room === "dining room" && suspect === "Mr. Parkes") {
        weapon = "knife"; solved = true;
    } else {
        console.log("No match");
    } 

    if (solved === true) {
        console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
    } 
    
    
 //q4 
  let balance = -325;
 let checkBalance = true;
 let isActive = true; 

 if (checkBalance === true && isActive === true && balance > 0 ){
        console.log("Your balance is $" + balance + ".");

    } else if (checkBalance === true && isActive ===true && balance <0){
        console.log(" Your balance is $" + balance + " is negative. Please contact bank.");
    } else if (checkBalance === true && isActive === false){    
        console.log("Your account is no longer active.");
    } else {
        console.log(" your balance is $0");

    }

// q5

let flavor = "vanilla";
let vessel = "cone";
let toppings = "sprinkles"; 

if (flavor === "vanilla" || flavor === "chocolate" && vessel === "cone" || vessel === "bowl" && toppings === "sprinkles" || toppings === "peanuts") { 
    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`);
} else {
    console.log("No match");
}
   

// challenge

//1 

let word = " Tuwaiq ";

if (word.length <3) {
    console.log("The word is too short!");
} else if (word.length >= 3) {
    console.log(word.split("").reverse().join(""));   
}


//2

let sentence = "I am a software engineer";
if (sentence.includes("engineer")) {
     console.log(" the word is found and you are a software engineer");
} else {
    console.log(" the word is not found");
}

//3 

let str = " no one is perfect "; 
if (str.startsWith("no")) {
    console.log("The string starts with 'no'");
} else {    
    console.log("The string does not start with 'no'");
}


// 4 
  let sentenceTow = "I am a web developer trying to learn new things and improve my skills";
if (sentenceTow.length > 10) { 
    console.log(sentenceTow.toUpperCase());
} else{
    console.log("The sentence is not long enough");
}
