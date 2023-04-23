// 1завдання
/*
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
// 4 завдання
function compact(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
const arr = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr);
console.log(arr2); // [5, 3, 4, 6, 7]
// 5 завдання
function funcName(arr) {
  let numArr = [];
  let strArr = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      funcName(item).forEach((nestedItem) => {
        if (typeof nestedItem === "number") {
          numArr.push(nestedItem);
        } else {
          strArr.push(nestedItem);
        }
      });
    } else {
      if (typeof item === "number") {
        numArr.push(item);
      } else {
        strArr.push(item);
      }
    }
  });

  return [numArr, strArr];
}

let arr = [
  5,
  "Limit",
  12,
  "a",
  "3",
  99,
  2,
  [2, 4, 3, "33", "a", "text"],
  "strong",
  "broun",
];
let arrNew = funcName(arr);
console.log(arrNew); 
*/
//6 завдання
/*function calc(a, b, op) {
  switch (op) {
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return a / b;
    default:
      return a + b;
  }
}
console.log(calc(10, 3, 1)); // віднімання: 10 - 3 = 7
console.log(calc(10, 3, 2)); // добуток: 10 * 3 = 30
console.log(calc(10, 3, 3)); // ділення: 10 / 3 = 3.3333...
console.log(calc(10, 3, 4)); // додавання: 10 + 3 = 13*/

//7 завдання
/*function findUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false; // Є дубль, повертаємо false
      }
    }
  }
  return true; // Усі елементи унікальні, повертаємо true
}
console.log(findUnique([1, 2, 3, 5, 3])); // false
console.log(findUnique([1, 2, 3, 5, 11])); // true*/

//додаткове
function create(password) {
  return function(input) {
    return input === password;
  };
}

const tom = create("pass_for_Tom");
console.log(tom("pass_for_Tom")); // поверне true
console.log(tom("pass_for_tom")); // поверне false



