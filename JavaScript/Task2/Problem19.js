let numbers = [
  Number(prompt("Enter number 1:")),
  Number(prompt("Enter number 2:")),
  Number(prompt("Enter number 3:")),
  Number(prompt("Enter number 4:")),
  Number(prompt("Enter number 5:"))
];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; // بنزود الرقم الحالي على الحصالة
}

console.log(sum);