// link to codility report: https://app.codility.com/demo/results/trainingNZEPKU-V7Z/

function solution(X: number, A: number[]): number {
    const hashMap: Map<number, boolean> = new Map();

    let numberSeen: number = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] <= X && hashMap.get(A[i]) === undefined) {
            hashMap.set(A[i], true);
            numberSeen++;
        };

        if (numberSeen === X) {
            return i;
        };
    };

    return -1;
};