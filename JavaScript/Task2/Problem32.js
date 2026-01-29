function reverseArray(arr) {
    let newArray=[];
    for(let i = arr.length - 1; i >= 0; i--){
        newArray.push(arr[i]);
    }
return newArray;
}

//tring testCases
let input=[1, 2, 3, 4];
console.log(reverseArray(input));

let input2=["a", "b", "c"];
console.log(reverseArray(input2));