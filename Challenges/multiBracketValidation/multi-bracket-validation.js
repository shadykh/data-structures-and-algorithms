'use strict';
function multiBracketValidation(input) {

    if( !input ){return '⚠️The passing value is not valid.⚠️'};

    if( typeof(input) !== 'string' ){return '⚠️The passing value is not string.⚠️'};

    let startingString = '';
    let closingString = '';

    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
            startingString = startingString + input[i];
        }  else if (input[i] === ')' || input[i] === ']' || input[i] === '}') {
            closingString = closingString + input[i];
        }
    }
    if (startingString.length === closingString.length) {
        return true;
    } else {
        return false
    }

}


module.exports = multiBracketValidation;