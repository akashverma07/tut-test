function findLongestWord(str) {
    var long;
    var newStr = str.split(" ");
    var count = newStr.length;
    console.log(newStr[2].length);
    long = newStr[0];
    for(var i=0; i<count-1; i++){
        console.log(newStr[i].length," length: ",newStr[i+1].length);
        if(newStr[i+1].length>long.length){
            long = newStr[i+1];
            console.log(long);
        }
        
    }
    return long;
  }
  
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
  
  