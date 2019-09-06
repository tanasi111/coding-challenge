//#region Cats and a Mouse

function catAndMouse(x, y, z) {

    let catA = Math.abs(x - z);
    let catB = Math.abs(y - z);

    if (catA == catB) {
        return 'Mouse C';
    } else if (catA < catB) {
        return 'Cat A';
    } else {
        return 'Cat B';
    }

}
console.log(catAndMouse(1, 2, 3));

//#endregion

//#region Sock Merchant
function sockMerchant(n, ar) {

    const uniqueSocks = [...new Set(ar)];

    let matchingPairs = 0;
    uniqueSocks.forEach(function (uniqueSock) {
        let counter = 0;
        ar.forEach(function (sock) {
            if (uniqueSock === sock) {
                counter++;
            }
        });
        matchingPairs += Math.floor(counter / 2);
    });

    console.log(matchingPairs);

}
// sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
//#endregion

//#region Counting Valleys

//#endregion

//#region Simple Array Sum

function simpleArraySum(ar) {

    let sum = 0;
    ar.forEach(function (a) {
        sum += a;
    });
    return sum;

}

//#endregion

//#region Electronics Shop

function getMoneySpent(keyboards, drives, b) {

    let maxTotalPrice = -1;

    keyboards.forEach(function (keyboard) {
        drives.forEach(function (drive) {
            let price = keyboard + drive;
            if (price === b) {
                maxTotalPrice = price;
                return;
            }
            if (price < b && price > maxTotalPrice) {
                maxTotalPrice = price;
            }
        });
    });
    return maxTotalPrice;

}
// console.log('Max total price is ' + getMoneySpent([3, 1], [5, 2, 8], 9));

//#endregion

//#region Drawing Book

function pageCount(n, p) {

    let total = Math.floor(n / 2);
    let right = Math.floor(p / 2);
    let left = total - right;
    if (right < left) {
        return right;
    } else {
        return left;
    }

}
// console.log('number of pages Brie turned ' + pageCount(63, 61));
//#endregion

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
    } else {
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
// console.log(longestSubsequence(x, y));

//#endregion
