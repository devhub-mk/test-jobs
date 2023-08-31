// JavaScript TestJob: 118
var array1 = [1, 3, 6, 2, 4];
var array2 = [2, 0, 4, 1, 2];
var array3 = [];

for (let i = 0; i < array1.length; i++) {
  sum = array1[i] + array2[i];
  array3.push(sum);
}
// remove duplicate values
for (let i = 0; i < array3.length; i++) {
  for (let j = i + 1; j < array3.length; j++) {
    if (array3[i] === array3[j]) {
      array3.splice(j, 1);
      j -= 1;
    }
  }
}
console.log(array3);
