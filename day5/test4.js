
function mutation(arr) {
    var des;
    var arr1 = arr.slice(0,1);
    arr1 = arr1[0].replace(/""/g, " ");
    var arr2 = arr.slice(1,2);
    var a = arr2[0];
    var newArr = a.split("");
    console.log(newArr);
    console.log(arr1);
    
    for(var i=0 ; i<arr2.length ; i++){
        console.log(arr2[i])
        des = arr1.indexOf(newArr[i],0);
        console.log(newArr[i]);
        if(des !== -1){
            
        }
        else{
            return false;
        }
    }
    return true;
  }
  
 console.log(mutation(['hello', 'hel']));
  
  