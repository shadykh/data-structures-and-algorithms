'use strict';


function leftJoin(leftHashMap, rightHashMap) {

    if (!leftHashMap || !rightHashMap) {
        throw new Error('⚠️You did not pass a valid HashMap !!!⚠️');
    }

    if (!leftHashMap.keys || !rightHashMap.keys) {
        throw new Error('⚠️You pass one or both HashMaps as an empty HashMaps !!!⚠️');
    }

    let leftJoinValues = leftHashMap.keys.map(key => {

        let valuesArr = [key];

        valuesArr.push(leftHashMap.get(key)[1]);
        valuesArr.push(rightHashMap.contains(key) ? (rightHashMap.get(key) ? rightHashMap.get(key)[1]: rightHashMap.get(key)) : null);

        return valuesArr;

    })

    return leftJoinValues;

};

module.exports = leftJoin;