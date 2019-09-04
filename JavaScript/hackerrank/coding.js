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


//#region Longest Subsequence Matching a Substring

function longestSubsequence(x, y) {
    // Write your code here
    let lonSub = '';

    // find subsequence of string x
    // start with whole string and then removing one char from first to last position
    // than two chars until only letters reamins. 
    // every time compare current subsequence of string x if it is substring of y

    let subsequence = x;
    console.log(subsequence);

    if (y.includes(subsequence)) {
        return subsequence.length;
    }
    else {

        for (let i = 1; i <= x.length - 1; i++) {
            for (let j = x.length - 1; j >= 1; j--) {

            }
        }

    }

}
let x = 'hackerranks';
let y = 'hackers';
console.log(longestSubsequence(x, y));

//#endregion
