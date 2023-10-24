const printOddNumbers = (arr) => {
    arr.forEach((num) => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  
  // Example usage:
  printOddNumbers([1, 2, 3, 4, 5, 6]);