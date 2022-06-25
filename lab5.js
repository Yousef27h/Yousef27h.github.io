function sum(nums) {
    return nums
        .filter(num => num > 20)
        .reduce(
            (prev,curr) => prev+curr,
            0
            );
}

let arr = [20,23,24,23]
console.log(sum(arr));

let getNewArray = (strings) => {
    return strings
        .filter(string => string.length>=5 && string.includes(`a`));
}

let str = ["Yousef","ahmad","eman"];
console.log(getNewArray(str));
