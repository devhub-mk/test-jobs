var empList = [
  {
    name: "John Doe",
    dept: "php",
    empId: 5,
  },
  {
    name: "Paul Smith",
    dept: "MERN",
    empId: 4,
  },
  {
    name: "Tom Smith",
    dept: "SEO",
    empId: 7,
  },
];

function sortWithLoops(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i].empId > arr[j].empId) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

const sortedList = sortWithLoops(empList);
console.log(sortedList);