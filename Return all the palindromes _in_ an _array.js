function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  const words = ["radar", "hello", "civic", "world"];
  const palindromes = words.filter(function(word) {
    return isPalindrome(word);
  });
  console.log(palindromes);