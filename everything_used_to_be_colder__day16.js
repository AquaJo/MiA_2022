let firstGraphDataTemperature = [-36, -27, -25, -18, -16, -5, 0, 2, -10, -5, -26.5, -36];
let secondGraphDataTemperature = [-17.5, -20, -14, -14, -5, -2, 2, 0, -3, -4, -7, -12];

console.group("a");
console.log("avg. temp. 1997: " + averageArr(firstGraphDataTemperature) + " Celsius");
console.log("avg temp. 2022: " + averageArr(secondGraphDataTemperature) + " Celsius");
console.log("difference (comparison to 2022): " + (averageArr(secondGraphDataTemperature) - averageArr(firstGraphDataTemperature)) + " Celsius"); // didn't save them as seperate variables, ... no big operations using This values ...

let firstGraphDataPrecipitation = [16, 20, 24, 20, 16, 1.5, 5, 3, 10, 17.5, 40, 45];
let secondGraphDataPrecipitation = [34, 11, 14.5, 7.5, 21.7, 11.7, 10.5, 20, 7.2, 17.5, 10.4, 5]
console.group("c");
console.log("precipitation overall 1997: " + addAll(firstGraphDataPrecipitation) + " mm");
console.log("precipitation overall 2022: " + addAll(secondGraphDataPrecipitation) + " mm");
console.log("difference (comparison to 2022): " + (addAll(secondGraphDataPrecipitation) - addAll(firstGraphDataPrecipitation)) + " mm");


function averageArr(arr) {
  let num = addAll(arr);
  return num / arr.length;
}

function addAll(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; ++i) {
    count += arr[i]
  }
  return count;
}
