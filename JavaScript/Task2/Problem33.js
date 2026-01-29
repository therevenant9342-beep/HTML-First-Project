function dailyTemperatures(temperatures) {
    let result=[];
    for(let i=0;i<temperatures.length;i++) {
        let daysUntilWarmer=0;

        for(let j=i+1;j<temperatures.length;j++){
            if(temperatures[j]>temperatures[i]){
                daysUntilWarmer=j-i;
                break;
            }
        }
    result.push(daysUntilWarmer);
}
  return result;
}
//tring testCases
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
console.log(dailyTemperatures([30,40,50,60]));