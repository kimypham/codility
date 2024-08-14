// link to codility report: https://app.codility.com/demo/results/trainingN3TH5Q-Z44/

function solution(A: number[]): number {
    let minPurchase: number = Infinity;
    let maxProfit: number = 0;

    for (let i = 0; i < A.length; i++) {
        minPurchase = Math.min(A[i], minPurchase); // we want to find a low purchase price
        maxProfit = Math.max(A[i] - minPurchase, maxProfit); // either its this new slice or the previous
    }

    return maxProfit;
};
