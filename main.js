// 1завдання
function createArray(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

let arr = createArray(2, 9);
console.log(arr); // [2, 3, 4, 5, 6, 7, 8, 9]
// 2 завдання
 function printNumbers(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    for (let j = a; j <= i; j++) {
      arr.push(i);
    }
  }
  console.log(arr.join(","));
}
printNumbers(1, 5); // 1,2,2,3,3,3,4,4,4,4,5,5,5,5,5
//3 завдання
function randArray(k) {
  let arr = [];
  for (let i = 0; i < k; i++) {
    arr.push(Math.floor(Math.random() * 500) + 1);
  }
  return arr;
}

let result = randArray(5);
console.log(result); // [399, 310, 232, 379, 40]

