//#region hackerrank test

function findNumber(arr, k) {

    let res = 'NO';
    arr.forEach(element => {
        if (element === k) {
            res = 'YES';
        }
    });

    return res;

}
arr = [1, 2, 3, 4, 5];
k = 5;
// console.log(findNumber(arr, k));

// Complete the oddNumbers function below.
function oddNumbers(l, r) {

    let res = [];
    for (let n = l; n <= r; n++) {
        if (n % 2) {
            res.push(n);
        }
    }
    return res;

}
// console.log(oddNumbers(3, 9));

//#endregion



function longestSubsequence(x, y) {
    // Write your code here
    let lonSub = '';

    // 1. first generate all subsequence of string x
    // start with whole string and then removing first one char from first to last position
    // than two chars until only letters reamins
    let xSubsequenceList = [];
    xSubsequenceList.push(x);

    for (let i = 1; i <= x.length - 1; i++) {
        for (let j = x.length - 1; j >= 1; j--) {

        }
    }


    // 2. sort subsequence list of string x from longest to shortest

    // 3. return fist find subsequence.length


    console.log(xSubsequenceList);

}
let x = 'hackerranks';
let y = 'hackers';
console.log(longestSubsequence(x, y));


