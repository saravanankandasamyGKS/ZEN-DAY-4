const strArray = ["hello", "world", "javascript"];
(function() {
  const titleCasedArray = strArray.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  console.log(titleCasedArray);
})();