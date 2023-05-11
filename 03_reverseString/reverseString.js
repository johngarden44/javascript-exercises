const reverseString = function(word) {
let wordLength = word.length;
let newWord = "";

while (wordLength > 0) {
newWord = newWord + word.substring(wordLength, wordLength - 1)
wordLength--;
}
return newWord
};

// Do not edit below this line
module.exports = reverseString;
