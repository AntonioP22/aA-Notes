function stringChanger(word, operation) {
  if (operation === 'reverse') {
    return word.split('').reverse().join('');
  } else if (operation === 'upper') {
    return word.toUpperCase();
  } else if (operation === 'double') {
    return word + word;
  } else if (operation === 'capitalize') {
    return word.charAt(0).toUpperCase() + word.slice(1);
  } else if (operation === 'unknown') {
    return word;
  }
}

console.log(stringChanger('Hello', 'reverse'));
console.log(stringChanger('Hello', 'upper'));
console.log(stringChanger('Hello', 'double'));
console.log(stringChanger('Hello', 'capitalize'));

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
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

function hasVowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
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
      arr.push('fizzbuzz');
    } else if (i % 3 === 0) {
      arr.push('fizz');
    } else if (i % 5 === 0) {
      arr.push('buzz');
    } else {
      arr.push(i);
    }
  }
  return arr;
}

function firstVowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      return str[i];
    }
  }
  return '';
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
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = str.length - 1; i >= 0; i--) {
    if (vowels.includes(str[i])) {
      return str[i];
    }
  }
  return '';
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
  let vowels = ['a', 'e', 'i', 'o', 'u'];
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
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(word[0])) {
    return word + 'ay';
  } else {
    return word.slice(1) + word[0] + 'ay';
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
