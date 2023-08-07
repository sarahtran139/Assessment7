const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }
    return new_nums;

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }
    return new_nums;

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array;
}


const arraySizes = {
    tinyArray: getSizedArray(10),
    smallArray: getSizedArray(100),
    mediumArray: getSizedArray(1000),
    largeArray: getSizedArray(10000),
    extraLargeArray: getSizedArray(100000)
};

const results = {};

for (const arrayName in arraySizes) {
    const array = arraySizes[arrayName];

    perf.start();
    doublerAppend(array);
    results[arrayName + "_append"] = perf.stop();

    perf.start();
    doublerInsert(array);
    results[arrayName + "_insert"] = perf.stop();
}

console.log("Results for different array sizes:");
console.table(results);




