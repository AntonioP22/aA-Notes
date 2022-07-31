console.log("-----------------------------------------------------");
console.log("-----------        CostOfGroceries         ----------");
console.log("-----------------------------------------------------");

//You are compiling a price checker for a grocery store. The grocery prices are as follows: butter: $1, eggs: $2, milk: $3, bread: $4, cheese: $5. First, create a function called costOfGroceries(groceries) which takes a single array of grocery items and returns the total cost. Then, write a function mostExpensiveGroceries(groceriesList) that takes in a 2-dimensional array of grocery items and returns the index of the sub-array with the highest cost.

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

//Write a function `isSorted` which checks if an array of numbers is sorted in order from lowest to highest.

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

//Write a function `doubleSequence` that accepts a base and a length as arguments. The function should return an array representing a sequence that contains "length" elements. The first element of the sequence should be the base number. The second element should be the base number times 2.

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

//Write a function `dynamicFizzBuzz` that accepts three arguments (max, num1, and num2). The function should return an array containing positive numbers less than max that are divisible by num1 or num2, but not both.

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

//Write a function `reverb` that accepts a word as an argument. The function should return a new word where all letters that come after the last vowel (including the vowel itself) are repeated at the end of the word. If the value passed in is not a string, say someone passes in a number as an argument, then return null.

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

//Write a function `pairProduct` that accepts an array of numbers and a product as arguments. The function should return a boolean indicating whether or not a pair of distinct elements in the array result in the product when multiplied together. You may assume that the input array contains unique elements.

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

//Write a function snakeToCamel that takes in a snake_cased string and returns a PascalCased version of the string. snakecase is where each word is separated with underscores (``). PascalCase is a string where the first char of each word is capital, all other chars lowercase.

// function snakeToCamel(string) {
//     let newString = "";
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === "_") {
//             newString += string[i + 1].toUpperCase();
//             i++;
//         } else {
//             newString += string[i];
//         }
//     }
//     return newString;
// }

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

//Write a function `strangeSums` that accepts an array of numbers as an argument. The method should return a count of the number of distinct pairs of elements that have a sum of zero. You may assume that the input array contains unique elements.

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

//Write a function `tripletTrue` that accepts a string as an argument. The function should return a boolean indicating whether or not the the string contains three of the same character consecutively.

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

//Write a function `threeIncreasing` that accepts an array of numbers as an argument. The function should return a boolean indicating whether or not the array contains three consecutive numbers in consecutive increasing order, like 7, 8, 9.

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

//Write a function `uncompress(str)` that takes in a "compressed" string as an arg. A compressed string consists of a character immediately followed by the number of times it appears in the "uncompressed" form. The function should return the uncompressed version of the string. See the examples. Hint: you can use the built-in Number function should convert a numeric string into the number type. For example. Number("4") // => 4.

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

//Write a function `zip` that accepts two arrays as arguments. The function should return a two dimensional array with subarrays of length 2 that contain elements at corresponding indices from the input arrays. You may assume that the input arrays have the same length.

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

//Write a function `unique` that accepts an array as an argument. The function should return a new array containing elements of the input array, without duplicates.

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

//Write a function `hipsterfy(sentence)` that takes in a sentence string and returns the sentence where every word is missing its last vowel.

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

//Write a function `zanyZip` that accepts two arrays as arguments. The function should return a two dimensional array with subarrays of length 2 that contain elements at corresponding indices from the input arrays. If one of the arrays is shorter than the other, then substitute null for the missing elements.

// console.log(zanyZip([1, 2], ["eins", "zwei", "drei", "vier"]));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

// console.log(zanyZip([1, 2, 3, 4], ["eins", "zwei", "drei"]));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

// console.log(zanyZip(["alef", "bet"], ["alpha", "beta"]));
// // [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

// //Write a function `sillyString` that accepts a word as an argument. The functions should return a new word where every vowel of the original word is followed by 'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

// console.log(sillyString("stop")); // stobop
// console.log(sillyString("that")); // thabat
// console.log(sillyString("can")); // caban
// console.log(sillyString("cats")); // cabats
// console.log(sillyString("italy")); // ibitabaly
// console.log(sillyString("scooter")); // scobooboteber

console.log("-----------------------------------------------------");
console.log("-----------        MoreDotLessDash         ----------");
console.log("-----------------------------------------------------");

//Write a function `moreDotLessDash` that accepts a string as an argument. The function should return a boolean indicating whether or not the string contains more dots (.) than dashes (-).
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
