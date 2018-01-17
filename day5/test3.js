function slasher(arr, howMany) {
    var newArr;
    if(arr.length>howMany){
        newArr = arr.slice(howMany,arr.length);
        return newArr;
    }
    else{
        newArr = [];
        return newArr;
  
    }
}

  
  console.log(slasher([1, 2, 3], 1));
  
  