// JavaScript TestJob: 119
var fruitsDB = ["apple", "banana", "orange", "pineapple", "grapes", "avacado", "strawberry"];

function filterFruits(arr) {
  const fruits = [];
  arr.forEach((isFruit) => {
    fruitsDB.forEach((fruit) => {
      if (isFruit === fruit) {
        fruits.push(isFruit);
      }
    });
  });
  console.log(fruits);
}

var mixFruits = ["grapes", "cabbage", "tomato", "banana"];
filterFruits(mixFruits);
