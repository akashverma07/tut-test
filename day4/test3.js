
function palindrome(str) {
    str = str.replace(/[\W_]/g, "");
    str = str.toLowerCase();
    var newString = str.split("");
    str = str.split("");
    newString = newString.reverse();
    newString = newString.join();
    if(newString==str){
        return true;
    }
    else{
        return newString;
    }
  }
  
  
  
  console.log(palindrome("eye"));
  
  