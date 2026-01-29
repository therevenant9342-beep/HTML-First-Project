let ages = [
  Number(prompt("Enter age 1:")),
  Number(prompt("Enter age 2:")),
  Number(prompt("Enter age 3:")),
  Number(prompt("Enter age 4:")),
  Number(prompt("Enter age 5:"))
];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    console.log(ages[i]);
  }
}