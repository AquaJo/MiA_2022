let input = "0,6,9,12.5,15,15,19,21,24,25,36,35,40,53.5,52,54,57.5,62,62,72,74";
let list = input.split(",");
let numBef = 0;
let resChangeRates = [];
for (let i = 0; i < list.length; ++i) {
  let num = parseFloat(list[i]);

  let changeRate = num - numBef;
  resChangeRates.push(changeRate);
  numBef = num;
}

let avgChangeRate = addEachItemFromList(resChangeRates) / list.length;
console.log("circa resultating changes of sea level in mm: " + resChangeRates);
console.log("circa calculated average change rate in mm: " + avgChangeRate);

function addEachItemFromList(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; ++i) {
    res += arr[i];
  }
  return res;
}
