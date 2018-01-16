
var a,b;
function ourTrueOrFalse(isItTrue) {
    if (isItTrue=="true") { 
        console.log(isItTrue);
        b = true;
        return "Yes, it's true";
    
    }
    else{
        console.log(isItTrue);
        b = false;
        return "No, it's false";
    }
  }
a = ourTrueOrFalse("false");
console.log(a);
console.log(b);  
  