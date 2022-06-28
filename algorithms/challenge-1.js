function isAnagram(str1, str2) {
  let iA1 = str1.split("").sort().join("");
  let iA2 = str2.split("").sort().join("");
  return iA1 === iA2;
}

console.log(isAnagram("below", "elbow"));
console.log(isAnagram("meteor", "remote"));
console.log(isAnagram("hackathon", "achcthoon"));
module.exports = isAnagram;
