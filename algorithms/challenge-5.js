function isPalindrome(line) {
  // for (let i=0; i<line.length; i++)
  // if (line[i] !== line[line.length]){
  //   return false
  // } 

  return  line === line.split('').reverse().join('');
}

console.log (isPalindrome("anna")) 
   console.log (isPalindrome("walter")) 
   console.log (isPalindrome(12321))  
   console.log (isPalindrome(123456)) 
module.exports = isPalindrome