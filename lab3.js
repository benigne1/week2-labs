// Lab C: Grade checker
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter a score (0-100): ", function(input) {
  var score = Number(input);

  if (score >= 90) {
    console.log("Grade: A");
  } else if (score >= 80) {
    console.log("Grade: B");
  } else if (score >= 70) {
    console.log("Grade: C");
  } else if (score >= 50) {
    console.log("Grade: D");
  } else {
    console.log("Grade: F");
  }

  readline.close();
});