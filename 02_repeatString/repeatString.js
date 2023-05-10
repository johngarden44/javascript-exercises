const repeatString = function(string, num) {

let copiedWord = "";

    if (num > 0) { 
for ( let i =0; i < num; i++) {
    copiedWord = copiedWord + string;
}
return copiedWord;
}

else if (num === 0) {
    copiedWord = "";
return copiedWord;
}

else {
return "ERROR";
}
}
// Do not edit below this line
module.exports = repeatString;