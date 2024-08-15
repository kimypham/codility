// link to codility report: https://app.codility.com/demo/results/trainingBDP4UZ-EHN/

function solution(M: number, A: number[]): number {
    const set: Set<number> = new Set();

    let tail: number = 0;
    let head: number = 0;

    let count: number = 0;

    while (tail < A.length && head < A.length) {
        if (count > 1000000000) {
            return 1000000000;
        };

        if (set.has(A[head]) == false) {
            set.add(A[head]);
            head++;
            count += set.size;
        } else {
            set.delete(A[tail]);
            tail++
        };
    };

    return count;
};