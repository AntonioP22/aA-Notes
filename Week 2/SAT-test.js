console.log("-----------------------------------------------------");
console.log("-----------        CostOfGroceries         ----------");
console.log("-----------------------------------------------------");

//?You are compiling a price checker for a grocery store. The grocery prices are as follows: butter: $1, eggs: $2, milk: $3, bread: $4, cheese: $5. First, create a function called costOfGroceries(groceries) which takes a single array of grocery items and returns the total cost. Then, write a function mostExpensiveGroceries(groceriesList) that takes in a 2-dimensional array of grocery items and returns the index of the sub-array with the highest cost.

let butter = 1;
let eggs = 2;
let milk = 3;
let bread = 4;
let cheese = 5;

function costOfGroceries(groceries) {
    let total = 0;
    for (let i = 0; i < groceries.length; i++) {
        if (groceries[i] === "butter") {
            total += butter;
        } else if (groceries[i] === "eggs") {
            total += eggs;
        } else if (groceries[i] === "milk") {
            total += milk;
        } else if (groceries[i] === "bread") {
            total += bread;
        } else if (groceries[i] === "cheese") {
            total += cheese;
        }
    }
    return total;
}

function mostExpensiveGroceries(groceriesList) {
    let highest = 0;
    for (let i = 0; i < groceriesList.length; i++) {
        if (costOfGroceries(groceriesList[i]) > highest) {
            highest = i;
        }
    }
    return highest;
}

const groceriesA = ["cheese", "butter", "eggs"];
const groceriesB = ["eggs", "milk", "bread", "bread"];
const groceriesC = ["cheese", "bread"];
const groceriesD = ["eggs", "butter"];

costOfGroceries(groceriesA); // 8
costOfGroceries(groceriesB); // 13
costOfGroceries(groceriesC); // 9
costOfGroceries(groceriesD); // 3

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (
    mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) ===
    1
)
    score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");

console.log("-----------------------------------------------------");
console.log("--------------        IsSorted         --------------");
console.log("-----------------------------------------------------");

//?Write a function `isSorted` which checks if an array of numbers is sorted in order from lowest to highest.

function isSorted(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([4, 2, 3, 1])); // false

console.log("-----------------------------------------------------");
console.log("-----------        DoubleSequence         -----------");
console.log("-----------------------------------------------------");

//?Write a function `doubleSequence` that accepts a base and a length as arguments. The function should return an array representing a sequence that contains "length" elements. The first element of the sequence should be the base number. The second element should be the base number times 2.

function doubleSequence(base, length) {
    let sequence = [];
    for (let i = 0; i < length; i++) {
        sequence.push(base);
        base *= 2;
    }
    return sequence;
}

console.log(doubleSequence(7, 3)); // [7, 14, 28]
console.log(doubleSequence(3, 5)); // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3)); // [5, 10, 20]
console.log(doubleSequence(5, 4)); // [5, 10, 20, 40]
console.log(doubleSequence(5, 0)); // [ ]

console.log("-----------------------------------------------------");
console.log("------------       DynamicFizzBuzz        -----------");
console.log("-----------------------------------------------------");

//?Write a function `dynamicFizzBuzz` that accepts three arguments (max, num1, and num2). The function should return an array containing positive numbers less than max that are divisible by num1 or num2, but not both.

function dynamicFizzBuzz(max, num1, num2) {
    let newArr = [];
    for (let i = 0; i < max; i++) {
        if (i % num1 === 0 && i % num2 !== 0) {
            newArr.push(i);
        } else if (i % num2 === 0 && i % num1 !== 0) {
            newArr.push(i);
        } else {
            continue;
        }
    }
    return newArr;
}

console.log(dynamicFizzBuzz(20, 3, 5)); // [ 3, 5, 6, 9, 10, 12, 18 ]
console.log(dynamicFizzBuzz(24, 4, 6)); // [ 4, 6, 8, 16, 18, 20 ]

console.log("-----------------------------------------------------");
console.log("--------------         Reverb         ---------------");
console.log("-----------------------------------------------------");

//?Write a function `reverb` that accepts a word as an argument. The function should return a new word where all letters that come after the last vowel (including the vowel itself) are repeated at the end of the word. If the value passed in is not a string, say someone passes in a number as an argument, then return null.

function reverb(word) {
    let newWord = "";
    let vowels = "aeiouAEIOU";
    if (typeof word !== "string") {
        return null;
    }
    for (let i = word.length - 1; i >= 0; i--) {
        let letter = word[i];
        if (vowels.includes(letter)) {
            return (newWord = word + word.slice(i));
        }
    }
}

console.log(reverb("hello")); // "helloo"
console.log(reverb("good")); // "goodod"
console.log(reverb("bad")); // "badad"

console.log("-----------------------------------------------------");
console.log("-------------        PairProduct         ------------");
console.log("-----------------------------------------------------");

//?Write a function `pairProduct` that accepts an array of numbers and a product as arguments. The function should return a boolean indicating whether or not a pair of distinct elements in the array result in the product when multiplied together. You may assume that the input array contains unique elements.

function pairProduct(array, product) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] * array[j] === product) {
                return true;
            } else {
                continue;
            }
        }
    }
    return false;
}

console.log(pairProduct([4, 2, 5, 8], 16)); // true
console.log(pairProduct([8, 1, 9, 3], 8)); // true
console.log(pairProduct([3, 4], 12)); // true
console.log(pairProduct([3, 4, 6, 2, 5], 12)); // true
console.log(pairProduct([4, 2, 5, 7], 16)); // false
console.log(pairProduct([8, 4, 9, 3], 8)); // false
console.log(pairProduct([3], 12)); // false

console.log("-----------------------------------------------------");
console.log("------------        SnakeToCamel         ------------");
console.log("-----------------------------------------------------");

//?Write a function snakeToCamel that takes in a snake_cased string and returns a PascalCased version of the string. snakecase is where each word is separated with underscores (``). PascalCase is a string where the first char of each word is capital, all other chars lowercase.

//! function snakeToCamel(string) {
//!     let newString = "";
//!     for (let i = 0; i < string.length; i++) {
//!         if (string[i] === "_") {
//!             newString += string[i + 1].toUpperCase();
//!             i++;
//!         } else {
//!             newString += string[i];
//!         }
//!     }
//!     return newString;
//! }

function snakeToCamel(str) {
    let wordArr = str.split("_");
    let newArr = [];
    for (let i = 0; i < wordArr.length; i++) {
        newArr.push(
            wordArr[i][0].toUpperCase() + wordArr[i].slice(1).toLowerCase()
        );
    }
    return newArr.join("");
}

console.log(snakeToCamel("snakes_go_hiss")); // 'SnakesGoHiss'
console.log(snakeToCamel("say_hello_world")); // 'SayHelloWorld'
console.log(snakeToCamel("app_academy_is_cool")); // 'AppAcademyIsCool'
console.log(snakeToCamel("APp_ACADEMY_iS_cOol")); // 'AppAcademyIsCool'

console.log("-----------------------------------------------------");
console.log("-------------        StrangeSums         ------------");
console.log("-----------------------------------------------------");

//?Write a function `strangeSums` that accepts an array of numbers as an argument. The method should return a count of the number of distinct pairs of elements that have a sum of zero. You may assume that the input array contains unique elements.

function strangeSums(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === 0) {
                count++;
            } else {
                continue;
            }
        }
    }
    return count;
}

console.log(strangeSums([2, -3, 3, 4, -2])); // 2
console.log(strangeSums([42, 3, -1, -42])); // 1
console.log(strangeSums([-5, 5])); // 1
console.log(strangeSums([19, 6, -3, -20])); // 0
console.log(strangeSums([9])); // 0

console.log("-----------------------------------------------------");
console.log("------------        TripletTrue         -------------");
console.log("-----------------------------------------------------");

//?Write a function `tripletTrue` that accepts a string as an argument. The function should return a boolean indicating whether or not the the string contains three of the same character consecutively.

function tripletTrue(string) {
    for (let i = 0; i < string.length - 2; i++) {
        if (string[i] === string[i + 1] && string[i] === string[i + 2]) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}

console.log(tripletTrue("caaabb")); // true
console.log(tripletTrue("terrrrrible")); // true
console.log(tripletTrue("runninggg")); // true
console.log(tripletTrue("bootcamp")); // false
console.log(tripletTrue("e")); // false

console.log("-----------------------------------------------------");
console.log("-----------        ThreeIncreasing         ----------");
console.log("-----------------------------------------------------");

//?Write a function `threeIncreasing` that accepts an array of numbers as an argument. The function should return a boolean indicating whether or not the array contains three consecutive numbers in consecutive increasing order, like 7, 8, 9.

function threeIncreasing(array) {
    for (let i = 0; i < array.length - 2; i++) {
        if (
            array[i] + 1 === array[i + 1] &&
            array[i + 1] + 1 === array[i + 2]
        ) {
            return true;
        }
    }
    return false;
}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4])); // true
console.log(threeIncreasing([2, 7, 8, 9])); // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6])); // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8])); // false

console.log("-----------------------------------------------------");
console.log("------------        Uncompressed          -----------");
console.log("-----------------------------------------------------");

//?Write a function `uncompress(str)` that takes in a "compressed" string as an arg. A compressed string consists of a character immediately followed by the number of times it appears in the "uncompressed" form. The function should return the uncompressed version of the string. See the examples. Hint: you can use the built-in Number function should convert a numeric string into the number type. For example. Number("4") // => 4.

function uncompress(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i += 2) {
        let letter = str[i];
        let num = Number(str[i + 1]);
        for (let j = 0; j < num; j++) {
            newStr += letter;
        }
    }
    return newStr;
}

console.log(uncompress("x3y4z2")); // 'xxxyyyyzz'
console.log(uncompress("a5b2c4z1")); // 'aaaaabbccccz'
console.log(uncompress("b1o2t1")); // 'boot'

console.log("-----------------------------------------------------");
console.log("-----------------        Zip         ----------------");
console.log("-----------------------------------------------------");

//?Write a function `zip` that accepts two arrays as arguments. The function should return a two dimensional array with subarrays of length 2 that contain elements at corresponding indices from the input arrays. You may assume that the input arrays have the same length.

function zip(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        newArr.push([arr1[i], arr2[i]]);
    }
    return newArr;
}

console.log(zip([1, 2, 3, 4], ["eins", "zwei", "drei", "vier"]));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(["eins", "zwei", "drei"], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

console.log(zip(["alef", "bet"], ["alpha", "beta"]));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

console.log("-----------------------------------------------------");
console.log("---------------        Unique         ---------------");
console.log("-----------------------------------------------------");

//?Write a function `unique` that accepts an array as an argument. The function should return a new array containing elements of the input array, without duplicates.

function unique(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (!newArr.includes(array[i])) {
            newArr.push(array[i]);
        } else {
            continue;
        }
    }
    return newArr;
}

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(["a", "b", "c", "b"])); // ['a', 'b', 'c']

console.log("-----------------------------------------------------");
console.log("-------------        Hipsterfy         --------------");
console.log("-----------------------------------------------------");

//?Write a function `hipsterfy(sentence)` that takes in a sentence string and returns the sentence where every word is missing its last vowel.

function removeLastVowel(word) {
    let vowels = "aeiouAEIOU";
    let i = word.length - 1;
    while (i >= 0) {
        if (vowels.includes(word[i])) {
            return word.slice(0, i) + word.slice(i + 1);
        }
        i--;
    }
    return word;
}

function hipsterfy(sentence) {
    let words = sentence.split(" ");
    let newSentence = "";
    for (let i = 0; i < words.length; i++) {
        newSentence += removeLastVowel(words[i]) + " ";
    }
    return newSentence;
}

console.log(hipsterfy("When should everyone wake up?")); // 'Whn shold everyon wak p?'
console.log(hipsterfy("get ready for our bootcamp")); // 'gt redy fr or bootcmp'
console.log(hipsterfy("panthers are great animals")); // 'panthrs ar gret animls'

//?Write a function `zanyZip` that accepts two arrays as arguments. The function should return a two dimensional array with subarrays of length 2 that contain elements at corresponding indices from the input arrays. If one of the arrays is shorter than the other, then substitute null for the missing elements.

//! console.log(zanyZip([1, 2], ["eins", "zwei", "drei", "vier"]));
//! // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

//! console.log(zanyZip([1, 2, 3, 4], ["eins", "zwei", "drei"]));
//! // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

//! console.log(zanyZip(["alef", "bet"], ["alpha", "beta"]));
//! // [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

//! //Write a function `sillyString` that accepts a word as an argument. The functions should return a new word where every vowel of the original word is followed by 'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

//! console.log(sillyString("stop")); // stobop
//! console.log(sillyString("that")); // thabat
//! console.log(sillyString("can")); // caban
//! console.log(sillyString("cats")); // cabats
//! console.log(sillyString("italy")); // ibitabaly
//! console.log(sillyString("scooter")); // scobooboteber

console.log("-----------------------------------------------------");
console.log("-----------        MoreDotLessDash         ----------");
console.log("-----------------------------------------------------");

//?Write a function `moreDotLessDash` that accepts a string as an argument. The function should return a boolean indicating whether or not the string contains more dots (.) than dashes (-).

function moreDotLessDash(str) {
    let dotCount = 0;
    let dashCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ".") {
            dotCount++;
        } else if (str[i] === "-") {
            dashCount++;
        }
    }
    return dotCount > dashCount;
}

console.log(moreDotLessDash("2-D arrays are fun. I think.")); // true
console.log(moreDotLessDash("Morse code is great.")); // true
console.log(moreDotLessDash(".... . -.--")); // true
console.log(moreDotLessDash(".--. .-. --- --. .-. .- -- -- . .-.")); // false
console.log(moreDotLessDash("high-flying acrobat.")); // false

console.log("-----------------------------------------------------");
console.log("-------------        ShortestWord         -----------");
console.log("-----------------------------------------------------");

//?Write a function `shortestWord` that accepts a sentence as an argument. The function should return the shortest word in the sentence. If there is a tie, return the word that appears later in the sentence.

function shortestWord(sentence) {
    let words = sentence.split(" ");
    let shortest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        } else if (words[i].length === shortest.length) {
            shortest = words[i];
        }
    }
    return shortest;
}

console.log(shortestWord("what a wonderful life")); // 'a'
console.log(shortestWord("the quick brown fox jumps")); // 'fox'
console.log(shortestWord("do what you enjoy")); // 'do'

console.log("-----------------------------------------------------");
console.log("-----------           NextPrime           -----------");
console.log("-----------------------------------------------------");

//?Write a function `nextPrime` that accepts a number as an argument. The function should return the nearest prime number that is greater than the given number.

function nextPrime(num) {
    let prime = num + 1;
    while (!isPrime(prime)) {
        prime++;
    }
    return prime;
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101

console.log("-----------------------------------------------------");
console.log("-----------        MatrixAddition         -----------");
console.log("-----------------------------------------------------");

//?A 2-dimensional array is also known as a "matrix". Write a function `matrixAddition` that accepts two matrices as arguments. The two matrices are guaranteed to have the same "height" and "width". The function should return a new matrix representing the sum of the two arguments. To add matrices, we add the values at the same positions.

function matrixAddition(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        newArr.push([]);
        for (let j = 0; j < arr1[i].length; j++) {
            newArr[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    return newArr;
}

let matrixA = [
    [2, 5],
    [4, 7],
];
let matrixB = [
    [9, 1],
    [3, 0],
];
let matrixC = [
    [-1, 0],
    [0, -1],
];
let matrixD = [
    [2, -5],
    [7, 10],
    [0, 1],
];
let matrixE = [
    [0, 0],
    [12, 4],
    [6, 3],
];

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]

console.log("-----------------------------------------------------");
console.log("--------        MatrixMultiplication         --------");
console.log("-----------------------------------------------------");

//?Write a function `matrixMultiplication` that accepts two matrices as arguments. The two matrices are guaranteed to have the same "height" and "width". The function should return a new matrix representing the product of the two arguments. To multiply matrices, we multiply the values at the same positions.

function matrixMultiplication(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        newArr.push([]);
        for (let j = 0; j < arr1[i].length; j++) {
            newArr[i].push(arr1[i][j] * arr2[i][j]);
        }
    }
    return newArr;
}

console.log(matrixMultiplication(matrixA, matrixB)); // [[7, 10], [14, 15]]
console.log(matrixMultiplication(matrixA, matrixC)); // [[-5, -5], [4, -5]]
console.log(matrixMultiplication(matrixB, matrixC)); // [[-1, -1], [-1, -1]]
console.log(matrixMultiplication(matrixD, matrixE)); // [[0, 0], [0, 0], [0, 0]]

console.log("-----------------------------------------------------");
console.log("-------------          AvgVal          --------------");
console.log("-----------------------------------------------------");

//?Write a function `avgVal(arr)` that accepts an array as an arg. The function should return the average of all values in the array. If the array is empty, it should return null.

function avgVal(arr) {
    if (arr.length === 0) {
        return null;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null

console.log("-----------------------------------------------------");
console.log("-----------        IsPerfectSquare         ----------");
console.log("-----------------------------------------------------");

//?Write a function `isPerfectSquare` that accepts a number as an argument. The method should return a boolean indicating whether or not the argument is a perfect square. A perfect square is a number that is the product of some number multiplied by itself. For example, since 64 = 8 * 8 and 144 = 12 * 12, 64 and 144 are perfect squares; 35 is not a perfect square.

function isPerfectSquare(num) {
    let sqrt = Math.sqrt(num);
    return Math.floor(sqrt) === sqrt;
}

console.log(isPerfectSquare(1)); // true
console.log(isPerfectSquare(4)); // true
console.log(isPerfectSquare(64)); // true
console.log(isPerfectSquare(100)); // true
console.log(isPerfectSquare(169)); // true
console.log(isPerfectSquare(2)); // false
console.log(isPerfectSquare(40)); // false
console.log(isPerfectSquare(32)); // false
console.log(isPerfectSquare(50)); // false

console.log("-----------------------------------------------------");
console.log("-----------         PrimeFactors          -----------");
console.log("-----------------------------------------------------");

//?Write a function `primeFactors` that accepts a number as an argument. The function should return an array containing all of the prime numbers that can divide the given number.

function primeFactors(num) {
    let factors = [];
    for (let i = 2; i <= num; i++) {
        if (isPrime2(i) && num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

function isPrime2(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(primeFactors(12)); // [2, 3]
console.log(primeFactors(7)); // [7]
console.log(primeFactors(16)); // [2]
console.log(primeFactors(30)); // [2, 3, 5]
console.log(primeFactors(35)); // [5, 7]
console.log(primeFactors(49)); // [7]
console.log(primeFactors(128)); // [2]

console.log("-----------------------------------------------------");
console.log("-------------         PrevPrime         -------------");
console.log("-----------------------------------------------------");

//?Write a function `prevPrime` that accepts a number as an argument. The function should return the nearest prime number that is smaller than the given argument. Since 2 is the smallest prime number, return null if no number can be returned.

function prevPrime(num) {
    for (let i = num - 1; i > 1; i--) {
        if (isPrime3(i)) {
            return i;
        }
    }
    return null;
}

function isPrime3(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7)); // 5
console.log(prevPrime(4)); // 3
console.log(prevPrime(2)); // null
console.log(prevPrime(1)); // null

console.log("-----------------------------------------------------");
console.log("----------         HasThreeVowels         -----------");
console.log("-----------------------------------------------------");

//?Write a function `hasThreeVowels` that accepts a string as an argument. The function should return a boolean indicating whether or not the string contains at least three different vowels.

function hasThreeVowels(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count > 3;
}

console.log(hasThreeVowels("delicious")); //  true
console.log(hasThreeVowels("bootcamp prep")); //  true
console.log(hasThreeVowels("bootcamp")); //  false
console.log(hasThreeVowels("dog")); //  false
console.log(hasThreeVowels("go home")); //  false

console.log("-----------------------------------------------------");
console.log("----------       FibonacciSequence         ----------");
console.log("-----------------------------------------------------");

//?Write a function `fibonacciSequence` that accepts a number as an argument. The function should return an array representing the fibonacci sequence up to the given length. The first and second numbers of the sequence are 1 and 1. To generate subsequent numbers of the sequence, we take the sum of the previous two numbers of the sequence.

function fibonacciSequence(num) {
    let arr = [1, 1];
    if (num === 1) {
        return arr.slice(0, 1);
    } else if (num === 0) {
        return [];
    }
    for (let i = 2; i < num; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
}

console.log(fibonacciSequence(4)); // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5)); // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8)); // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0)); // [ ]
console.log(fibonacciSequence(1)); // [ 1 ]
console.log(fibonacciSequence(2)); // [ 1, 1 ]

console.log("-----------------------------------------------------");
console.log("-----------          IsAntiPrime          -----------");
console.log("-----------------------------------------------------");

//?Write a function `isAntiPrime` that accepts a number as an argument. The method should return true if the given number has more divisors than all positive numbers less than the given number. For example, 24 is an anti-prime because it has more divisors than any positive number less than 24.

let isAntiPrime = function (n) {
    let factorsOfN = numFactors(n);

    for (let i = 1; i < n; i++) {
        if (factorsOfN <= numFactors(i)) {
            return false;
        }
    }

    return true;
};

let numFactors = function (n) {
    let count = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
};

console.log(isAntiPrime(24)); // true
console.log(isAntiPrime(36)); // true
console.log(isAntiPrime(48)); // true
console.log(isAntiPrime(360)); // true
console.log(isAntiPrime(1260)); // true
console.log(isAntiPrime(27)); // false
console.log(isAntiPrime(5)); // false
console.log(isAntiPrime(100)); // false
console.log(isAntiPrime(136)); // false
console.log(isAntiPrime(1024)); // false

console.log("-----------------------------------------------------");
console.log("-------------           PigIt           -------------");
console.log("-----------------------------------------------------");

//?Write a function `pigIt` that accepts a string and moves the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (!/[a-zA-Z]/.test(arr[i])) {
            continue;
        } else {
            let temp = arr[i].slice(1);
            arr[i] = temp + arr[i][0] + "ay";
        }
    }
    return arr.join(" ");
}

console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("Hello world !")); // elloHay orldway !

console.log("-----------------------------------------------------");
console.log("-------------           PigIt           -------------");
console.log("-----------------------------------------------------");

console.log("-----------------------------------------------------");
console.log("-------------           PigIt           -------------");
console.log("-----------------------------------------------------");

console.log("-----------------------------------------------------");
console.log("-------------           PigIt           -------------");
console.log("-----------------------------------------------------");

console.log("-----------------------------------------------------");
console.log("-------------           PigIt           -------------");
console.log("-----------------------------------------------------");
