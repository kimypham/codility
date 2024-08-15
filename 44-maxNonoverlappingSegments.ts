// link to codility report: https://app.codility.com/demo/results/trainingT3Q3N9-MES/

function solution(A: number[], B: number[]): number {
    let count: number = 0;
    let current: number = -1; // so that we always include the first section

    for (let i = 0; i < A.length; i++) {
        if (A[i] > current) { // if start is past the last end
            current = B[i]; // set to the next end
            count++;
        }
    }

    return count;
}