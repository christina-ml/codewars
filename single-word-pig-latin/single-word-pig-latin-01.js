function pigLatin(word){
// console.log('orig', word)
// if character isn't a letter in string, return null
for (let letter of word) {
    if (!(letter.match(/[a-zA-Z]/g))) {
    return null;
    }
}
    // if word starts with a vowel, return original string plus "way".
    if (word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" || word[0] === "u") {
    let vowelWord = word + "way";
    return vowelWord.toLowerCase();
    } else {
    // if word starts with a consonant      
    let newWord = word.slice(1) + word[0] + "ay"
     return newWord.toLowerCase();
    }

    let letterWord = word.split('');
    let emptyArr = [];

    for (letter of letterWord) {
        if (letter === "e") {
            emptyArr.push(letterWord.slice(0, letterWord.indexOf(letter))); // made copy of "rd"
                // make a copy of this // unshift = beginning
                emptyArr.unshift(letterWord.splice(letterWord.indexOf(letter), letterWord.length-1)); // the copy of the beginning of the word
        }
    }
    return emptyArr.flat().join('') + "ay";

}

console.log(pigLatin("map")); //, "apmay");
console.log(pigLatin("egg")); //, "eggway");
console.log(pigLatin("tes3t5")); //, null);
console.log(pigLatin("rdedjacc")); //edjaccrday