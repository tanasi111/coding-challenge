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
        // i is length to trim. that why i start with number 1
        for (let i = 1; i <= x.length - 1; i++) {
            // j is position from where to trim
            for (let j = 0; j <= x.length - i; j++) {
                if (j === 0) {
                    subsequence = x.slice(j + i, x.length);
                } else {
                    subsequence = x.slice(0, j) + x.slice(j + i, x.length);
                }
                if (y.includes(subsequence)) {
                    console.log("subsequence of string x is " + subsequence);
                    return subsequence.length;
                }
                console.log(subsequence);
            }
        }
    }

}
let x = 'hackerranks';
let y = 'hackers';
console.log(longestSubsequence(x, y));

//#endregion
