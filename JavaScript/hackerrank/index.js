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
sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
//#endregion

//#region Counting Valleys

//#endregion

//#endregion
