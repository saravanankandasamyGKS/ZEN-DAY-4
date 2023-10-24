function rotateArray(arr, k) {
    const n = arr.length;
    const rotatedArray = arr.slice(k % n).concat(arr.slice(0, k % n));
    return rotatedArray;
  }
  
  const array = [1, 2, 3, 4, 5];
  const k = 2;
  const rotated = rotateArray(array, k);
  console.log(rotated);