//create score1, score2, score3 variables and assign values (0-100)
const score1 = 1;
const score2 = 5;
const score3 = 10;
//calculate total score and average score and assign to variables
const total = score1 + score2 + score3;
const average = total / 3;
console.log("Total:", total, "Average:", average);
//create plates variable and assign 20
const plates = 20;
//create people variable and assign 7
const people = 7;
//calculate remaining plates and assign to variable
let remainingPlates = plates % 7;
console.log(remainingPlates);
// add one to remaining plates
remainingPlates += 1;
console.log(remainingPlates);
// create message variable and display
console.log("There are " + remainingPlates + " plates available ");
