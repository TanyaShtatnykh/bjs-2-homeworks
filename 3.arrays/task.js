function compareArrays(arr1, arr2) {
  let result = arr1.length === arr2.length && arr1.every((v, i) => arr2[i] === v);
  return result;
}

function advancedFilter(arr) {
  let resultArr = arr.filter(item => item > 0)
  .filter(item => item % 3 === 0)
  .map(item => item * 10);
  return resultArr;
}
