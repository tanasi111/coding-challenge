//#region Warm-up Challenges

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

    let halfBook = Math.floor(n / 2);
    let turnedPage = 0;

    if (p == 1 || p == n || (((n % 2) != 0) && n - p == 1)) {
        turnedPage = 0;
    } else {
        if (p < halfBook) {
            turnedPage = Math.floor(p / 2);
        } else {
            turnedPage = Math.floor((n - p) / 2);
        }
    }

    return turnedPage;
}
console.log('number of pages Brie turned ' + pageCount(6, 2));
//#endregion

//#endregion
