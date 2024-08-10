// link to codility report: https://app.codility.com/demo/results/trainingD3F4K2-2JW/

function solution(A: number[]): number {
    const arrayLength: number = A.length;
    const N: number = arrayLength + 1;
    let arraySum: number = 0;

    for (let i = 0; i < arrayLength; i++) {
        arraySum += A[i];
    };

    return N * (N + 1) / 2 - arraySum;
}