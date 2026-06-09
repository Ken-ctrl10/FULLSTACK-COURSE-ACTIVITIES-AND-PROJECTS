//Map, Filter, Reduce, Find, FindIndex
var nums = [2, 3, 4, 5, 6, 7];

//Map - Create a new array by doing something with each item in an array.

  /* let newNums = nums.map((item) => {
    return item * 2;
  });

  console.log(newNums); // [4, 6, 8, 10, 12, 14] - new array with doubled values
  console.log(nums); // [2, 3, 4, 5, 6, 7] - original array is not changed
  */

//Filter - Create a nnew array by keeping the items that return true.

  /* let filteredNums = nums.filter((num) => {
    return num > 4;
  });

  console.log(filteredNums); // [5, 6, 7] - new array with numbers greater than 4 */

//Reduce - Accumulate a value by doing something to each item in an array.

  /* const sum = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
 */

//Find - find the first item that matches from an array.
  /* const foundNum = nums.find((num) => {
    return num > 4;
  });

  console.log(foundNum); // 5 - first number greater than 4 */

//FindIndex - find the index of the first item that matches from an array.