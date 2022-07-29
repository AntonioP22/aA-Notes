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
