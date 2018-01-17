function chunkArrayInGroups(arr, size) {
    var ar = [];
    var b = arr.length % size;
    var temp;
    for(var i=0 ; i<arr.length-b ; i+=size){
        ar.push(arr.slice(i,i+size));
    }
    if(b != 0){
        console.log(b);
        ar.push(arr.slice(arr.length-b,arr.length));
    } 
  console.log(ar);
   
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
  