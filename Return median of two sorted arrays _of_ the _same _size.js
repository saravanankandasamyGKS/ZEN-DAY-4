(function() {
    function findMedian(arr1, arr2) {
      const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
      const length = mergedArray.length;
      if (length % 2 === 0) {
        const mid1 = mergedArray[length / 2];
        const mid2 = mergedArray[length / 2 - 1];
        return (mid1 + mid2) / 2;
      } else {
        return mergedArray[Math.floor(length / 2)];
      }
    }
  
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const median = findMedian(arr1, arr2);
    console.log(median);
  })();