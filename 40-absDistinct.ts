// link to codility report: https://app.codility.com/demo/results/trainingMQS8CV-V2W/

function solution(A: number[]): number {
    const set: Set<number> = new Set();

    for (let i = 0; i < A.length; i++) {
        set.add(Math.abs(A[i]));
    };

    return set.size;
};