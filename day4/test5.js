
function titleCase(str) {
    str = str.toLowerCase();
    var newStr = str.split(" ");
    for(var j=0; j<newStr.length; j++){
        newStr[j] = newStr[j].split("");
    }
    for(var i=0; i<newStr.length; i++){
        newStr[i][0] = newStr[i][0].toUpperCase();
        console.log(newStr[i]);
    }
    for(var k=0; k<newStr.length; k++){
        newStr[k] = newStr[k].join("") ;
    }
    console.log(newStr);
    newStr = newStr.join();
    newStr = newStr.replace(/,/g," ");
    console.log(newStr);


    return newStr;
  }
  
  titleCase("I'm a little tea pot");
  
  