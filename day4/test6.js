
function largestOfFour(arr) {
    var large = 0;
    var result = [];
    console.log(arr.length);
    console.log(arr[2][3]);
    for(var i=0; i<arr.length; i++){
      large = arr[i][0];
      for(var j=0; j<arr[i].length; j++){
        if(arr[i][j]>large){
          large = arr[i][j];
        }
      }
      result[i] = large;
    }
    return result;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  
  