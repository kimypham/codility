// link to codility report: https://app.codility.com/demo/results/trainingHFGZH5-QU2/

function solution(A: number[]): number {
    let maxEnding: number = A[0];
    let maxSlice: number = A[0];

    for (let i = 1; i < A.length; i++) {
        maxEnding = Math.max(A[i], maxEnding + A[i]);
        maxSlice = Math.max(maxSlice, maxEnding);
    };

    return maxSlice;
};