let numbers = [
  Number(prompt("Enter number 1:")),
  Number(prompt("Enter number 2:")),
  Number(prompt("Enter number 3:")),
  Number(prompt("Enter number 4:")),
  Number(prompt("Enter number 5:"))
];

let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log(max);
console.log(min);