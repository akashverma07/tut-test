var testString = "There are 3 cats but 4 dogs.";
var expression = /\d+/g; // counts the number of digits in the string. \s+ for white spaces. \S for non-white spaces as charecter. \S+ for non-white spaces as word. 
var digitCount = testString.match(expression).length; 
console.log(digitCount);
