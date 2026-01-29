let values = [
  prompt("Enter first value (js):"),
  prompt("Enter second value ('15'):"),
  prompt("Enter third value ('8.5'):"),
  prompt("Enter fourth value (true):"),
  prompt("Enter fifth value (false):"),
  prompt("Enter sixth value (null):")
];

console.log(Number(values[0])); // NaN
console.log(Number(values[1])); // 15
console.log(Number(values[2])); // 8.5
console.log(Number(values[3])); // NaN
console.log(Number(values[4])); // NaN
console.log(Number(values[5])); // NaN
//مع برومبت الترو والفولس بتطله نان 
//لكن لو كنا كتبناها مباشرة بدون برومبت كانت الترو هتطلع بواحد والفولس بزيرو والنل كمان بزيرو