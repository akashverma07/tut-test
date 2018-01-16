
// Example
function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
  }
  
  ourRandomRange(1, 9);
  
  
  
  function randomRange(myMin, myMax) {
  
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin ; // to generate a number between two given ranges
  
  }
  
  
  var myRandom = randomRange(1, 3);
  console.log("random number between given range: ", myRandom);


  // next lesson

  var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";

// Example
var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length;  // counts the perticular pattern in given string
console.log("number of software counts: ", softwareCount);
  
  