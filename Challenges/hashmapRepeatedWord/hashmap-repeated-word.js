'use strict';

function hashmapRepeatedWord(string) {

    if(!string){
        throw new Error('⚠️You did not pass a valid string !!!⚠️');
    }

    let words = string.split(' ');

    let localWords = [];

    for (let i = 0; i < words.length; i++) {

        for (let j = 0; j < localWords.length; j++) {

            if (words[i].toLowerCase() === localWords[j].toLowerCase()) {
                return words[i];
            }
        }

        localWords.push(words[i]);
    }
    return 'There is not any repeated words';
}

module.exports = hashmapRepeatedWord;