let names = [
  prompt("Enter first name:"),
  prompt("Enter second name:"),
  prompt("Enter third name:")
];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}