// link to codility report: https://app.codility.com/demo/results/trainingXABVZ4-573/

function solution(A: number[]): number {
    const hashMap: Map<number, boolean> = new Map();

    for (let i = 0; i < A.length; i++) {
        if (hashMap.get(A[i])) {
            hashMap.delete(A[i]);
        } else {
            hashMap.set(A[i], true);
        };
    };
    return hashMap.keys().next().value;
};