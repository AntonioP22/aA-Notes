/**
 *
 * Conditionals
 *
 */

let instructor = "something else";

if (instructor === "james") {
  console.log("true inside if block");
} else {
  console.log("inside else block");
}
if ("") {
  console.log("true inside if block");
} else if (instructor === "crystal") {
  console.log("inside else if block");
} else {
  console.log("inside else block");
}

/**
 *
 * WHILE LOOPS
 *
 */

let myName = "James";

let i = 0;
while (i < myName.length) {
  let char = myName[i];
  console.log(char, i);
  i++;
}

/**
 *
 * For Loops
 *
 */

myName = "James";
//  index       condition         step
for (let i = 0; i < myName.length; i++) {
  let char = myName[i];
  console.log(char, i);
}

/**
 *
 * Arrays
 *
 */

let myArray = [1, "string", true, [1, 2, "string"]];

for (let i = 0; i < myArray.length; i++) {
  let ele = myArray[i];
  console.log(ele);
}

/**
 *
 * Indexing
 *
 */

console.log(myArray[2]); // true
console.log(myArray[myArray.length - 1][1]); // [1,2,'string']
console.log(myArray[3][1]); // true
/**
 * IndexOf
 */

console.log(myArray.indexOf(false));

/**
 *
 * Is 5
 *
 */

function isFive(num) {
  if (num === 5) {
    return true;
  }
  return false;
}

console.log(isFive(5)); // => true
console.log(isFive(13)); // => false

/**
 *
 * isOdd
 *
 */

function isOdd(number) {
  return number % 2 !== 0;
}

function isOddConditional(number) {
  if (number % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true

/**
 *
 * LogBetween
 *
 */

function logBetween(lowNum, highNum) {
  for (let i = lowNum; i <= highNum; i += 1) {
    console.log(i);
  }
}

function logBetweenWhile(lowNum, highNum) {
  let i = lowNum;
  while (i <= highNum) {
    console.log(i);
    i++;
  }
}
logBetween(-1, 2);

/**
 *
 *
 * Print 5's
 *
 *
 */

function printFives1For(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}

function printFives1(max) {
  let i = 0;
  while (i < max) {
    if (i % 5 === 0) {
      console.log(i);
    }
    i++;
  }
}

function printFives2(max) {
  for (let i = 0; i < max; i += 5) {
    console.log(i);
  }
}

function printFives2While(max) {
  let i = 0;
  while (i < max) {
    console.log(i);
    i += 5;
  }
}

/**
 *
 * Logbetweenstepper
 *
 */

function logBetweenStepperFor(min, max, step) {
  for (let i = min; i <= max; i += step) {
    console.log(i);
  }
}

function logBetweenStepper(min, max, step) {
  let i = min;
  while (i <= max) {
    console.log(i);
    i += step;
  }
}

logBetweenStepper(5, 9, 1);

logBetweenStepper(-10, 15, 5);

/**
 *
 * THREE OR SEVEN
 * Write a function that returns true if the number is divisible by 3 or 7, but not both.
 *
 */

function threeOrSeven(num) {
  // your code here...
  if (num % 3 === 0 || num % 7 === 0) {
    return true;
  }
  return false;
}

function threeOrSeven(num) {
  return num % 3 === 0 || num % 7 === 0;
}

console.log(threeOrSeven(3)); // => true
console.log(threeOrSeven(42)); // => true
console.log(threeOrSeven(8)); // => false

/**
 *
 * SUM ARRAY
 * Write a function that takes in an array of numbers and returns the sum of all the numbers in the array.
 *
 */

function sumArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {
    let num = array[i];
    sum += num;
  }

  return sum;
}

function sumArrayWhile(array) {
  let sum = 0;
  let i = 0;

  while (i < array.length) {
    let num = array[i];
    sum += num;
    i += 1;
  }

  return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30

/**
 * COMBINE ARRAY
 * Write a function that takes in two arrays of numbers and returns a new array of the sums of the corresponding numbers.
 *
 * For example, given the following input:
 * [1, 2, 3], [4, 5, 6]
 * Your function should return the following output:
 * [5, 7, 9]
 *
 *
 * Hint: You may need to use the `concat` method to combine the two arrays.
 *
 * Hint: You may need to use the `slice` method to access the elements of the arrays.
 *
 * Hint: You may need to use the `push` method to add elements to the new array.
 *
 * Hint: You may need to use the `unshift` method to add elements to the beginning of the new array.
 *
 * Hint: You may need to use the `indexOf` method to find the index of an element in an array.
 *
 * Hint: You may need to use the `splice` method to remove elements from an array.
 *
 * Hint: You may need to use the `pop` method to remove the last element from an array.
 *
 * Hint: You may need to use the `shift` method to remove the first element from an array.
 *
 * Hint: You may need to use the `reverse` method to reverse the order of an array.
 *
 * Hint: You may need to use the `sort` method to sort the elements of an array.
 *
 * Hint: You may need to use the `join` method to join the elements of an array into a string.
 *
 * Hint: You may need to use the `split` method to split a string into an array.
 *
 * Hint: You may need to use the `map` method to transform the elements of an array.
 *
 * Hint: You may need to use the `filter` method to filter the elements of an array.
 *
 * Hint: You may need to use the `reduce` method to reduce the elements of an array.
 *
 * Hint: You may need to use the `forEach` method to iterate over the elements of an array.
 *
 * Hint: You may need to use the `every` method to test whether all elements in an array pass a test.
 *
 * Hint: You may need to use the `some` method to test whether some elements in an array pass a test.
 *
 * Hint: You may need to use the `reduceRight` method to reduce the elements of an array in reverse order.
 *
 * Hint: You may need to use the `forEachRight` method to iterate over the elements of an array in
 * reverse order.
 *
 * Hint: You may need to use the `lastIndexOf` method to find the last index of an element in an array.
 */

function combineArray(array1, array2) {
  return array1.concat(array2);
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7])); // => [17, 5, 6, 7]

/**
 *
 *
 * Labeling your code with comments is a great way to help you remember what you wrote.
 *
 *
 */

function stringChanger(word, operation) {
  if (operation === "reverse") {
    return word.split("").reverse().join("");
  } else if (operation === "upper") {
    return word.toUpperCase();
  } else if (operation === "double") {
    return word + word;
  } else if (operation === "capitalize") {
    return word.charAt(0).toUpperCase() + word.slice(1);
  } else if (operation === "unknown") {
    return word;
  }
}

console.log(stringChanger("Hello", "reverse"));
console.log(stringChanger("Hello", "upper"));
console.log(stringChanger("Hello", "double"));
console.log(stringChanger("Hello", "capitalize"));

console.log(1 == "3-2");

function range(min, max) {
  return Array.from({ length: max - min + 1 }, (_, i) => min + i);
}

function logBetweenStepper(min, max, step) {
  for (let i = min; i <= max; i += step) {
    console.log(i);
  }
}

function myIncludes(arr, searchElement) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) {
      return true;
    }
  }
  return false;
}

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function factorsOf(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

function myIndexOf(arr, searchElement) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) {
      return i;
    }
  }
  return -1;
}

function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

function hasVowel(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      return true;
    }
  }
  return false;
}

function fizzBuzz(max) {
  let arr = [];
  for (let i = 1; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("fizzbuzz");
    } else if (i % 3 === 0) {
      arr.push("fizz");
    } else if (i % 5 === 0) {
      arr.push("buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}

function firstVowel(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      return str[i];
    }
  }
  return "";
}

function evenNumbers(max) {
  let arr = [];
  for (let i = 0; i <= max; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

function lastVowel(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = str.length - 1; i >= 0; i--) {
    if (vowels.includes(str[i])) {
      return str[i];
    }
  }
  return "";
}

function pitPat(max) {
  let arr = [];
  for (let i = 1; i <= max; i++) {
    if (i % 4 === 0 && i % 6 === 0) {
      arr.push(i);
    } else if (i % 4 === 0) {
      arr.push(i);
    } else if (i % 6 === 0) {
      arr.push(i);
    } else {
      arr.push();
    }
  }
  return arr;
}

function removeLastVowel(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = str.length - 1; i >= 0; i--) {
    if (vowels.includes(str[i])) {
      return str.slice(0, i);
    }
  }
  return str;
}

function pairsMaker(arr) {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]]);
    }
  }
  return pairs;
}

function minValue(nums) {
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  return min;
}

function pigLatinWord(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(word[0])) {
    return word + "ay";
  } else {
    return word.slice(1) + word[0] + "ay";
  }
}

function leastCommonMultiple(num1, num2) {
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);
  let lcm = max;
  while (lcm % min !== 0) {
    lcm += max;
  }
  return lcm;
}
