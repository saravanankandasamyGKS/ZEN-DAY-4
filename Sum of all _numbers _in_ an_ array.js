const numbers = [1, 2, 3, 4, 5];
(function() {
  const sum = numbers.reduce(function(acc, num) {
    return acc + num;
  }, 0);
  console.log(sum);
})();