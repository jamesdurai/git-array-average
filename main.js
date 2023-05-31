var numElements = parseInt(prompt("Input the number of elements in the array:"));
var array = [];

for (var i = 0; i < numElements; i++) {
  var value = parseInt(prompt("Input element - " + i + " :"));
  array.push(value);
}

var sum = 0;
for (var j = 0; j < array.length; j++) {
  sum += array[j];
}

var average = sum / array.length;

document.write("Average of all elements in the array is: " + average.toFixed(2));