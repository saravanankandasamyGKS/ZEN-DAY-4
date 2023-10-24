const array = [1, 2, 3, 4, 5];
const k = 2;
(function() {
  const n = array.length;
  const rotatedArray = array.slice(k % n).concat(array.slice(0, k % n));
  console.log(rotatedArray);
})();