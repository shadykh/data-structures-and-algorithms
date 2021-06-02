'use strict';

function multiBracketValidation(input) {

    
    if( !input ){return '⚠️The passing value is not valid.⚠️'};

    if( typeof(input) !== 'string' ){return '⚠️The passing value is not string.⚠️'};

    let roundBrackets = 0;
    let squareBrackets = 0;
    let curlyBrackets = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(') {
            roundBrackets++;
        } else if (input[i] === '[') {
            squareBrackets++;
        } else if (input[i] === '{') {
            curlyBrackets++;
        } else if (input[i] === ')') {
            roundBrackets--;
        } else if (input[i] === ']') {
            squareBrackets--;
        } else if (input[i] === '}') {
            curlyBrackets--;
        }
    }
    if (roundBrackets === 0 && squareBrackets === 0 && curlyBrackets === 0) {
        return true;
    } else {
        return false
    }

}

module.exports = multiBracketValidation;