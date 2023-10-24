const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  };
  
  const getPalindromes = (arr) => arr.filter((str) => isPalindrome(str));
  
  // Example usage:
  const words = ["level", "deified", "hello", "world", "racecar"];
  const palindromes = getPalindromes(words);
  console.log(palindromes);