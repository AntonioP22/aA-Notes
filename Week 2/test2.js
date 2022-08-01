function twoDimensionalSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
}

function avgVal(arr) {
    let sum = 0;
    if (arr.length === 0) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

function myIndexOf(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

function tripler(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 3);
    }
    return newArr;
}

function longWords(words) {
    let newArr = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 5) {
            newArr.push(words[i]);
        }
    }
    return newArr;
}

function maxValue(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}

function removeWordsThatStartWithE(words) {
    let newStr = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i][0] !== "e") {
            newStr += words[i] + " ";
        }
    }
    return newStr;
}

function removeEWords(sentence) {
    let words = sentence.split(" ");
    let filtered = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (!word.toLowerCase().includes("e")) {
            filtered.push(word);
        }
    }
    return filtered.join(" ");
}

function fizzbuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

let twoSumRecall = function (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let first = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let second = arr[j];
            if (first + second === target) {
                return true;
            }
        }
    }
    return false;
};

let reverseSentence = function (sentence) {
    let words = sentence.split(" ");
    let reversed = [];
    for (let i = words.length - 1; i >= 0; i--) {
        reversed.push(words[i]);
    }
    return reversed.join(" ");
};

let initials = function (name) {
    let names = name.split(" ");
    let initials = "";
    for (let i = 0; i < names.length; i++) {
        initials += names[i][0];
    }
    return initials.toUpperCase();
};

let twoDimensionalProduct = function (arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
};

let popper = function (arr, num) {
    let removed = [];
    for (let i = 0; i < num; i++) {
        removed.push(arr.pop());
    }
    return removed;
};

let isPrime = function (num) {
    if (num === 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

let choosePrimes = function (nums) {
    let primes = [];
    for (let i = 0; i < nums.length; i++) {
        if (isPrime(nums[i])) {
            primes.push(nums[i]);
        }
    }
    return primes;
};

let longestWord = function (sentence) {
    let words = sentence.split(" ");
    let longest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
};

let abbreviateRemoveVowels = function (word) {
    let vowels = "aeiou";
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            newWord += "";
        } else {
            newWord += word[i];
        }
    }
    return newWord;
};

let productWithReduce = function (nums) {
    return nums.reduce((acc, curr) => acc * curr);
};

let abbreviateWords = function (sentence) {
    let words = sentence.split(" ");
    let newSentence = "";
    for (let i = 0; i < words.length; i++) {
        newSentence += abbreviateRemoveVowels(words[i]) + " ";
    }
    return newSentence;
};

let missingLastVowel = function (sentence) {
    let words = sentence.split(" ");
    let newSentence = "";
    for (let i = 0; i < words.length; i++) {
        newSentence += abbreviateRemoveVowels(words[i]) + " ";
    }
    return newSentence;
};

let leastCommonMultiple = function (num1, num2) {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    let lcm = max;
    while (lcm % min !== 0) {
        lcm += max;
    }
    return lcm;
};

let additionMutator = function (arr, num) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += num;
    }
    return arr;
};

function alternatingWords(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            newArr.push(arr[i].toLowerCase());
        } else {
            newArr.push(arr[i].toUpperCase());
        }
    }
    return newArr;
}

function rotateRight(array, num) {
    let copy = array.slice();

    for (let i = 0; i < num; i++) {
        let el = copy.pop();
        copy.unshift(el);
    }

    return copy;
}

function mutateAlternatingWords(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr[i] = arr[i].toUpperCase();
        } else {
            arr[i] = arr[i].toLowerCase();
        }
    }
    return arr;
}

// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

// Your code here

let repeatingTranslate = function (sentence) {
    let words = sentence.split(" ");
    let newWords = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length < 3) {
            newWords.push(word);
        } else {
            newWords.push(translateWord(word));
        }
    }
    return newWords.join(" ");
};

let translateWord = function (word) {
    let vowels = "aeiou";
    let lastChar = word[word.length - 1];
    if (vowels.includes(lastChar)) {
        return word + word;
    }

    let i = word.length - 1;
    while (i >= 0) {
        if (vowels.includes(word[i])) {
            return word + word.slice(i);
        }
        i--;
    }
};

// Write a function `maxInMatrix` that accepts a matrix (array of arrays) and returns the largest number in the matrix.

function maxInMatrix(matrix) {
    let newArr = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            newArr.push(matrix[i][j]);
        }
    }
    return Math.max(...newArr);
}

function maxInMatrix(matrix) {
    let max = matrix[0][0];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > max) {
                max = matrix[i][j];
            }
        }
    }
    return max;
}

//Write a function `maxColumn` that accepts a matrix (array of arrays). And returns an array containing the largest number in each column.

function maxColumn(matrix) {
    let maxes = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let max = matrix[0][i];
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][i] > max) {
                max = matrix[j][i];
            }
        }
        maxes.push(max);
    }
    return maxes;
}

function betterThanAverage(classPoints, yourPoints) {
    let total = 0;
    for (let i = 0; i < classPoints.length; i++) {
        total += classPoints[i];
    }
    let average = total / classPoints.length;
    if (yourPoints > average) {
        return true;
    } else {
        return false;
    }
}

//Write a function `getMiddle` that accepts a string. The function should return the middle character of the string. If the length of the string is odd, it should return the middle character. If the length of the string is even, it should return the middle two characters.

function getMiddle(str) {
    let middle = "";
    if (str.length % 2 === 0) {
        middle = str.slice(str.length / 2 - 1, str.length / 2 + 1);
    } else {
        middle = str.slice(str.length / 2, str.length / 2 + 1);
    }
    return middle;
}

//Write a function `commonFactors` that accepts two numbers as arguments. The function should return an array containing positive numbers that are able to divide both numbers.

function commonFactors(num1, num2) {
    let factors = [];
    for (let i = 1; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

//Write a function `luckyNumbers` that takes in a 2-dimensional array (matrix) and returns all lucky numbers in any order. A lucky numer is the minimum element in its row and the maximum in its column.

function luckyNumbers(arr) {
    let luckyNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i][0];
        let max = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] < min) {
                min = arr[i][j];
            }
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
        if (min === max) {
            luckyNumbers.push(min);
        }
    }
    return luckyNumbers;
}

//Write a function `checkForFactor` that accepts a number and a potential factor. The function should return true if the factor is a factor of the number, otherwise it should return false.

function checkForFactor(number, factor) {
    if (number % factor === 0) {
        return true;
    } else {
        return false;
    }
}

//Write a function `getGrade`. Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.Numerical Score	Letter Grade 90 <= score <= 100	'A' 80 <= score < 90	'B' 70 <= score < 80	'C' 60 <= score < 70	'D' 0 <= score < 60	'F' Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade(score1, score2, score3) {
    let average = (score1 + score2 + score3) / 3;
    if (average >= 90) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else if (average >= 60) {
        return "D";
    } else {
        return "F";
    }
}

//Write a function `humanReadable` which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS) HH = hours, padded to 2 digits, range: 00 - 99 MM = minutes, padded to 2 digits, range: 00 - 59 SS = seconds, padded to 2 digits, range: 00 - 59 The maximum time never exceeds 359999 (99:59:59).

function humanReadable(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secondsLeft = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${secondsLeft.toString().padStart(2, "0")}`;
}

//Write a function `isPangram`. A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant). Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let strArr = str.toLowerCase().split("");
    for (let i = 0; i < alphabet.length; i++) {
        if (!strArr.includes(alphabet[i])) {
            return false;
        }
    }
    return true;
}

//Write a function `solution` that accepts a string and returns a new string that breaks up camel casing using a space between words. For example, if passed the string "helloWorld", the function should return "hello World".

function solution(str) {
    let strArr = str.split("");
    let newStr = "";
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === strArr[i].toUpperCase()) {
            newStr += strArr[i] + " ";
        } else {
            newStr += strArr[i];
        }
    }
    return newStr;
}

//Write a function `generateHashtag` that accepts a string. Here's the deal: It must start with a hashtag (#). All words must have their first letter capitalized. If the final result is longer than 140 chars it must return false. If the input or the result is an empty string it must return false.

function generateHashtag(str) {
    if (str.length === 0) {
        return false;
    }
    let strArr = str.split(" ");
    let newStr = "#";
    for (let i = 0; i < strArr.length; i++) {
        newStr += strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }
    if (newStr.length > 140) {
        return false;
    } else if (newStr.length === 1) {
        return false;
    }
    return newStr;
}

//Write a function `arrUpperCase` that accepts an array of strings and mutates the original array with all the strings capitalized.

function arrUpperCase(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }
    return arr;
}

//Write a function `hasDoubleLetter` that accepts a string. The function should return true if the string contains two consecutive letters. Else return null.

function hasDoubleLetter(str) {
    let strArr = str.split("");
    for (let i = 0; i < strArr.length - 1; i++) {
        if (strArr[i] === strArr[i + 1]) {
            return true;
        } else if (str !== typeof string) {
            return null;
        }
    }
    return false;
}

//Write a function `luckyNumbers(matrix)` that takes in a 2D array and returns all lucky numbers in any order. A lucky number is the minimum element in its row and the maximum element in its column.

function luckyNumbers(matrix) {
    let luckyNumbers = [];
    for (let i = 0; i < matrix.length; i++) {
        let min = matrix[i][0];
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) {
                min = matrix[i][j];
            }
        }
        let max = matrix[i][0];
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > max) {
                max = matrix[i][j];
            }
        }
        if (min === max) {
            luckyNumbers.push(min);
        } else {
            continue;
        }
    }
    return luckyNumbers;
}

matrix = [
    [5, 9, 21],
    [9, 19, 6],
    [12, 14, 15],
];

console.log(luckyNumbers(matrix)); // [12]

matrix = [
    [5, 10, 8, 6],
    [10, 2, 7, 9],
    [21, 15, 19, 10],
];

console.log(luckyNumbers(matrix)); //

//Write a function `firstAndLast` that accepts an array of numbers and returns the sum of the first and last element if there is an even number of elements in the array. If there is an odd number of elements in the array, then the function should return the difference between the first and last element. If the array is empty, the function should return 0.

function firstAndLast(arr) {
    if (arr.length === 0) {
        return 0;
    } else if (arr.length % 2 === 0) {
        return arr[0] + arr[arr.length - 1];
    } else {
        return arr[0] - arr[arr.length - 1];
    }
}

//Write a function `adjacentSums` that accepts an array of numbers as an argument. The function should return a new array containing the sum of each pair of elements in the input array.

function adjacentSums(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        newArr.push(arr[i] + arr[i + 1]);
    }
    return newArr;
}

//Write a function choosePrimes(nums) that takes in an array of numbers as args. The function should return a new array containing the primes from the original array. A prime number is a number that is only divisible by 1 and itself. Hint: consider creating a helper function to check if a number is prime!

function choosePrimes2(nums) {
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (isPrime2(nums[i])) {
            newArr.push(nums[i]);
        }
    }
    return newArr;
}

function isPrime2(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

//Write a function spiralOrder(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the elements in spiral order.

function spiralOrder(matrix) {
    let newArr = [];
    let row = 0;
    let col = 0;
    let maxRow = matrix.length - 1;
    let maxCol = matrix[0].length - 1;
    while (row <= maxRow && col <= maxCol) {
        for (let i = col; i <= maxCol; i++) {
            newArr.push(matrix[row][i]);
        }
        row++;
        for (let i = row; i <= maxRow; i++) {
            newArr.push(matrix[i][maxCol]);
        }
        maxCol--;
        if (row <= maxRow) {
            for (let i = maxCol; i >= col; i--) {
                newArr.push(matrix[maxRow][i]);
            }
            maxRow--;
        }
        if (col <= maxCol) {
            for (let i = maxRow; i >= row; i--) {
                newArr.push(matrix[i][col]);
            }
            col++;
        }
    }
    return newArr;
}

//?Write a function `moveZeroes` that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeroes(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            newArr.push(arr[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
