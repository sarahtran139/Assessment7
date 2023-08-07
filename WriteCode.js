// This function checks if any two numbers in the array sum to 0. It uses a Set to store encountered numbers and has a linear runtime complexity O(n),

function hasZeroSumPair(nums) {
    const numSet = new Set();

    for (const num of nums) {
        // Check if the negative of the current number is present in the set
        if (numSet.has(-num)) {
            return true;
        }
        // Add the current number to the set
        numSet.add(num);
    }

    return false;
}
const array2 = [1, 2, 3, 4];
console.log(hasZeroSumPair(array2));  // Output: false

const array3 = [2, -2, 3, 1];
console.log(hasZeroSumPair(array3)); // Output: true



// This function checks if a word contains only unique characters. It uses a Set to store encountered characters and has a linear runtime complexity O(n),
function hasUniqueCharacters(word) {
    const charSet = new Set();

    for (const char of word) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }

    return true;
}
console.log(hasUniqueCharacters("hello"));  
console.log(hasUniqueCharacters("world"));


// It uses a Set to store encountered characters and has a linear runtime complexity O(n), where n is the length of the input sentence.
function isPangram(sentence) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const charSet = new Set();

    for (const char of sentence.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            charSet.add(char);
        }
    }

    return charSet.size === alphabet.length;
}

const sentence1 = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(sentence1));  // Output: true

const sentence2 = "Hello, world!";
console.log(isPangram(sentence2));  // Output: false


// It iterates through the words once and performs constant-time operations (length comparison), resulting in a linear runtime complexity of O(n), where n is the number of words in the array.
function findLongestWord(words) {
    let maxLength = 0;

    for (const word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    return maxLength;
}
const wordArray = ["apple", "banana", "grape", "watermelon", "kiwi"];
console.log(findLongestWord(wordArray));
//The space complexity of this solution is O(1) (constant) for the function's internal variables and O(n) for the input array, where n is the number of words in the array.







