console.log(findEgocentrics(3)) // returns all numbers from 100 to 999, following the rule: firstNum^1, secondNum^2, thirdNum^3, (the more the bigger the param is)  & the resulting name is the same as the iteration number. 

function findEgocentrics(length) {
  let biggestNumber = "";
  let smallestNumber = "";
  for (let i = 0; i < length; ++i) {
    biggestNumber += "9";
    if (i === 0) {
      smallestNumber += "1";
    } else {
      smallestNumber += "0";
    }
  }
  smallestNumber = parseInt(smallestNumber);
  biggestNumber = parseInt(biggestNumber);

  let res = [];
  for (let i = smallestNumber; i <= biggestNumber; ++i) { // could declare known exceptions
    let strNum = String(i);
    let numList = [];
    let appendants = [];
    for (let i = 0; i < strNum.length; ++i) {
      let num = parseInt(strNum[i]);
      appendants.push(Math.pow(num, i + 1));
    }
    if (i === sumList(appendants)) {
      res.push(i);
    }
  }
  return res;
}

function sumList(array) {
  let fullSum = 0;
  for (let i = 0; i < array.length; ++i) {
    fullSum += array[i];
  }
  return fullSum;
}
