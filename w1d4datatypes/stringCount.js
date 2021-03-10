/* eslint-disable */

{
function stringCount(str) {


    /* split string into an array */
    splitArray = str.split(" ");
    //  alert(splitArray);

    /* initialize array of 0 to be proper size */
    const countArray = initArray(splitArray);

    /* go through array and add 1 to approp index for every element */
    for (word of splitArray) {
        const count = word.length;
        countArray[count] += 1;

    }
    // alert(countArray);
    return countArray;

}

function findMax(arr) {
    let max = 0;
    for (const word of arr) {
        if (max < word.length) {
            max = word.length;
        }
    }
    return max;
}

function initArray(arr) {
    const size = findMax(arr);
    const zeroArr = [];
    for (i = 0; i <= size; i++) {
        zeroArr.push(0);
    };
    return zeroArr;
}


describe("stringCount", function () {
    it("Today is a great day ", function () {
        assert.deepEqual(stringCount("Today is a great day"), [0, 1, 1, 1, 0, 2]);
    });


    it("Today is a great day for programmers ", function () {
        assert.deepEqual(stringCount("Today is a great day for programmers"), [0, 1, 1, 2, 0, 2, 0, 0, 0, 0, 0, 1]);
    });

    it("Today is a great day for golf ", function () {
        assert.deepEqual(stringCount("Today is a great day for golf"), [0, 1, 1, 2, 1, 2]);
    });

});

}

