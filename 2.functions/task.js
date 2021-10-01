function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (max < arr[i]) {
      max = arr[i]
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  avg = sum / arr.length;
  return {min: min, max: max, avg: +avg.toFixed(2)};
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    let sum = func(arrOfArr[i]);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  let diff = 0;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i]
    }
    if (min > arr[i]) {
      min = arr[i];
    }
    diff = max - min;
  }
  return diff;
}
