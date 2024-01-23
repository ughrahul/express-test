//write a js function to compare using callback

const arrA = ["pasta", "pizza", "Icecream"];
const arrB = ["pasta", "cake", "Icecream"];

const result = (solution) => {
  return solution;
};
const itemFinder = (arr1, arr2, result) => {
  const answer = arr1.filter((food) => arr2.includes(food));
  return result(answer);
};
const response = itemFinder(arrA, arrB, result);
console.log({ response });
