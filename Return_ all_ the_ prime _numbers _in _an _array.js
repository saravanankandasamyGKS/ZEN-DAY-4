const numbers = [2, 3, 5, 7, 9, 11, 15];

(function() {
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  const primeNumbers = numbers.filter(function(num) {
    return isPrime(num);
  });

  console.log(primeNumbers);
})();