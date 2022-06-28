function checkPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(checkPrime(8));
console.log(checkPrime(13));
console.log(checkPrime(127));
console.log(checkPrime(150));
module.exports = checkPrime;
