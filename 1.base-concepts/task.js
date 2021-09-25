function solveEquation(a, b, c) {
  'use strict';
  let arr;
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    arr = [];
    return arr;
  } else if (d === 0) {
    let x = -b / (2 * a);
    arr = [x];
    return arr;
  } else if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  'use strict';
  let totalAmount;

  
  return totalAmount;
}
