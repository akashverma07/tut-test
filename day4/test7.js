function confirmEnding(str, target) {
    var sub;
    sub = str.substr((str.length - target.length),target.length);
    console.log(sub);
    if(sub==target){
        console.log('true');
        return true;
    }
    else{
        console.log('false');
        return false;
    }
    
  }
  
  confirmEnding("console", "e");