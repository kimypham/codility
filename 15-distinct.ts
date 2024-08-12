// link to codility report: https://app.codility.com/demo/results/trainingRDJN4T-FE3/

function solution(A: number[]): number {
    const hashMap: Map<number, boolean> = new Map();

    for (let i = 0; i < A.length; i++) {
        if (hashMap.get(A[i]) == undefined) {
            hashMap.set(A[i], true)
        }
    };

    return hashMap.size;
};