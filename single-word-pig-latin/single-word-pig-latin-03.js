function pigLatin(word){
    // if character isn't a letter in string, return null
    for (let letter of word.toLowerCase()) {
        if (!(letter.match(/[a-zA-Z]/g))) {
            return null;
        }
    }
    let letterWord = word.split('');
    let emptyArr = [];
    for (letter of letterWord) {
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            emptyArr.push(letterWord.slice(0, letterWord.indexOf(letter))); // made copy of "rd"
            // make a copy of this // unshift = beginning
            emptyArr.unshift(letterWord.splice(letterWord.indexOf(letter), letterWord.length-1)); // the copy of the beginning of the word
        let vowelWord = word + "way";
            return vowelWord.toLowerCase();
        } else {
            // TODO: slice from first vowel, not first index
            let consonantWord = word.slice(1) + word[0] + "ay"
            return consonantWord.toLowerCase();
        }
    }
    return [].concat(...emptyArr).join('').toLowerCase()+"ay";
    // return emptyArr.flat().join('') + "ay";
}

console.log(pigLatin("map")); //, "apmay");
console.log(pigLatin("egg")); //, "eggway");
console.log(pigLatin("tes3t5")); //, null);
console.log(pigLatin("rdedjacc")); //edjaccrday


// (letter === "b" || letter === "c" || letter === "d" || letter === "f" || letter === "g" || letter === "h" || letter === "j" || letter === "k" || letter === "l" || letter === "m" || letter === "n" || letter === "p" || letter === "q" || letter === "r" || letter === "s" || letter === "t" || letter === "v" || letter === "w" || letter === "x" || letter === "y" || letter === "z")