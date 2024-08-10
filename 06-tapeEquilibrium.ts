// link to codility results: https://app.codility.com/demo/results/trainingPWGX2T-AC8/

function solution(A: number[]): number {
    let firstSum: number = A[0];
    let secondSum: number = A.reduce((acc, curr) => acc + curr, 0) - A[0]; // skips first elem

    let currentDiff: number = Math.abs(firstSum - secondSum);
    let minimalDiff: number = currentDiff;

    for (let i = 1; i < A.length - 1; i++) {
        firstSum += A[i];
        secondSum -= A[i];

        currentDiff = Math.abs(firstSum - secondSum);

        if (currentDiff < minimalDiff) {
            minimalDiff = currentDiff;
        };
    };

    return minimalDiff;
};