const palindromes = function (str) {
    let punctuation = ' ,.!';
    let filteredString = str
        .split('')
        .filter(letter => punctuation.indexOf(letter) === -1)
        .join('')    
        .toLowerCase();
    
    let reversedString = filteredString
        .split('')
        .reverse()
        .join('')
    for (let i = 0; i < filteredString.length; i++) {
        if (filteredString[i] !== reversedString[i]) {
            return false;
        }
    } return true;
};

// Do not edit below this line
module.exports = palindromes;
