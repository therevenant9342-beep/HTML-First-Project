let numbers = [
  Number(prompt("Enter number 1:")),
  Number(prompt("Enter number 2:")),
  Number(prompt("Enter number 3:")),
  Number(prompt("Enter number 4:")),
  Number(prompt("Enter number 5:"))
];

let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  newNumbers.push(numbers[i] * 2);
}

console.log(newNumbers);