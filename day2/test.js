function phoneticLookup(val) {
    var result = "";
  
    // Only change code below this line
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denvar",
      "echo": "Easy",
      "foxtrot": "Frank",
    };
    result = lookup[val];
    
   console.log(result);
   console.log("hello");
   lookup.hasOwnProperty("echo");
  
    // Only change code above this line
    return result;
  }
  
  // Change this value to test
  phoneticLookup("charlie");
  console.log("hello");
  


   
  