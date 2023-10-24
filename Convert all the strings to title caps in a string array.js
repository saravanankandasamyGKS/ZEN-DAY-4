const convertToTitleCaps = (strArray) => {
    return strArray.map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  };
  
  // Example usage:
  const inputArray = ["hello", "world", "javascript"];
  const titleCapsArray = convertToTitleCaps(inputArray);
  console.log(titleCapsArray);