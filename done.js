/* Var, Prompt and Alert Katas */

/* COLOR KATAS */

/* No Prompt */


/* Prompt */

/* Prompt with Conditional */


/* AGE */

/* No Prompt */


/* Prompt */


/* Prompt with Conditional */


/* ICE CREAM */

/* ICE CREAM CONE KATAS */

/* Var Alert Prompt */
// make a string variable for favorite ice cream flavor, prompt user for it
var flavor = prompt("What flavor?");
// make an integer variable for number of scoops on the cone, prompt user for it
var scoops = prompt("How many scoops?");
// alert "You want " scoops "scoops of " flavor
alert("You want " + scoops + " scoops of " + flavor );

/* Var Alert Prompt Conditional */
// make a string variable for favorite ice cream flavor, prompt user for it
var flavor = prompt("What is your favorite flavor?");
// make an integer variable for number of scoops on the cone, prompt user for it
var scoops = prompt("Number of scoops?");
// if scoosp is creater than three, alert ("Max 3 scoops!")
if (scoops >3) alert("Max 3 scoops!");
// otherwise alert "You want " scoops " scoops of " flavor
else alert("You want " + scoops + " scoops of " +  flavor );


/* Prompt with Conditional */


/* PET */

/* No Prompt */


/* Prompt */


/* Prompt with Conditional */
/* Var Alert Prompt */
// make a variable for a pet type, prompt user for it 
var petType = prompt("what pet type?");
// make a variable for a pet name, prompt user for it
var petName = prompt("what pet name?");
// alert "You have a pet type named pet name 
alert("You have a " + petType + " named " + petName );

/* Var Alert Prompt Conditionals */
// make a variable for pet type, prompt user for it 
var petType = prompt("What pet type?")
// make a variable for pet name, prompt user for it
var PetName = prompt("What pet name?")
// alert "You have a pet type named pet name 
alert("You have a " + PetType + " named " + petName );
// if pet is a dog, say "I like dogs, too!"
if (petType == "dog") alert("I like dogs");
// if it is a cat, say "I'm allergic to cats"
else if (petType == "cat") alert("I am allergic to cats");
// If it is not a dog or a cat, say "what an interesting pet!"
else alert("what an interesting pet!");
