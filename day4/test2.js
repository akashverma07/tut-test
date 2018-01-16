
var oldArray = [1,2,3,4,5];

var newArray = oldArray.map(function(val){  // map is use to itterate the value of array
  return val *4;

});
console.log(newArray);


var array = [4,5,6,7,8];
var singleVal = 0;
singleVal = array.reduce(function(previousVal, currentVal){   // reduce is use to cnvert the array into a single number
  return previousVal + currentVal;
});
console.log(singleVal);



var oldArray = [1,2,3,4,5,6,7,8,9,10];
var newArray = oldArray.filter(function(val){    // filter is use to filter perticular elements from array
  return val < 6;
});
console.log(newArray);




var array = [1, 12, 21, 2];
array.sort(function(a,b){   // sort is use t sort the elements in the array
  return b - a; // b-a for decending, a-b for assending
});
console.log(array);

revArray = array.reverse();   // reverse is use to reverse the array
console.log(revArray);

var string = "Split me into an array";
var array = [];
array = string.split(" ");    // split is use to split the string
console.log(array);




var joinMe = ["Split","me","into","an","array"];
var joinedString = '';
joinedString = joinMe.join(" ");   // join is use to convert the array into a string
console.log(joinedString); 








