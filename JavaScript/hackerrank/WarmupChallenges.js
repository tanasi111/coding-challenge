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

    let maxTotalPrile = -1;

    keyboards.forEach(function (keyboard) {
        drives.forEach(function (drive) {
            let price = keyboard + drive;
            if (price === b) {
                maxTotalPrile = price;
                return;
            }
            if (price < b && price > maxTotalPrile) {
                maxTotalPrile = price;
            }
        });
    });
    return maxTotalPrile;

}
console.log('Max total price is ' + getMoneySpent([3, 1], [5, 2, 8], 9));

//#endregion

//#endregion
