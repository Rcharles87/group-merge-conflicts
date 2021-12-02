function addNumbers(...inputs) {
    if (!inputs.every((firstVal) => Number.isNumber(firstVal)))
      throw "All arguments must be numbers.";
    return inputs.reduce((firstVal, secondVal) => firstVal + secondVal);
  }
  
  addNumbers(1, 2, 3); //> 6
  addNumbers(10, "B", 20); //> error All arguments must be numbers.
  