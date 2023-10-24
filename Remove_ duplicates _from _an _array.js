const array = [1, 2, 2, 3, 4, 4, 5];
(function() {
  const uniqueArray = array.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
  console.log(uniqueArray);
})();