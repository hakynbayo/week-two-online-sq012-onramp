function missingNumber(numArr) {
  let missingArray = [];

  let minNum = Math.min(...numArr);
  let maxNum = Math.max(...numArr);

  for (let i = minNum; i < maxNum; i++) {
    if (numArr.indexOf(i) < 0) {
      missingArray.push(i);
      return missingArray;
    }
  }
  return false;
}

console.log(missingNumber([1, 2, 3, 4, 6, 7, 8, 9]));
console.log(missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(missingNumber([1, 2, 3, 4, 5, 6, 8]));
