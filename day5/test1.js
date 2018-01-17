
function truncateString(str, num) {
    var str1;
    if(num<3 && str.length<=3){
        str1 = str1 = str.slice(0,1);
        return str1 + '...';
    }
    else if(num>=str.length) {
        var str1 = str;
        return str1;
    }
    else{
        if(num<=3){
            var str1 = str.slice(0,num);
        }
        else{
            var str1 = str.slice(0,num-3);
        }
        return str1 + '...';
    }
    
  }
  
  console.log(truncateString("Absolutely Longer", 2));

  
  