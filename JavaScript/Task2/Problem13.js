let numbers = [
  Number(prompt("Enter decimal number 1:")),
  Number(prompt("Enter decimal number 2:")),
  Number(prompt("Enter decimal number 3:")),
  Number(prompt("Enter decimal number 4:"))
];

for (let i = 0; i < numbers.length; i++) {
  if (Math.round(numbers[i]) >= 8) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}