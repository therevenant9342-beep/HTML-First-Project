function isSameCase(str) {
    return str===str.toUpperCase()||str===str.toLowerCase();
}
//Tring testCases
console.log(isSameCase("hello"));
console.log(isSameCase("Hello"));
console.log(isSameCase("HELLO"));