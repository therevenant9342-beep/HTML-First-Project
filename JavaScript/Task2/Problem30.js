let values = [
  prompt("Enter value 1:"),
  prompt("Enter value 2:"),
  prompt("Enter value 3:"),
  prompt("Enter value 4:"),
  prompt("Enter value 5:")
];

for (let i = 0; i < values.length; i++) {
  if (isNaN(values[i])) {
    console.log(values[i]);
  }
}