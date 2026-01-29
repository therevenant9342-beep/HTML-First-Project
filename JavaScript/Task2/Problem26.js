let numbers = [
  Number(prompt("Enter number 1:")),
  Number(prompt("Enter number 2:")),
  Number(prompt("Enter number 3:")),
  Number(prompt("Enter number 4:")),
  Number(prompt("Enter number 5:"))
];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    count++; 
  }
}

console.log(count);