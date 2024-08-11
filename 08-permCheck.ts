// link to codility report: https://app.codility.com/demo/results/trainingJXF7T8-H3J/

function solution(A: number[]): number {
    const arrayLength: number = A.length;
    const idealTotal: number = arrayLength * (arrayLength + 1) / 2;
    const actualTotal: number = A.reduce((acc, curr) => acc + curr);

    if (actualTotal !== idealTotal) {
        return 0;
    };

    // check if all elements are unique
    const hashMap: Map<number, boolean> = new Map();
    for (let i = 0; i < A.length; i++) {
        if (hashMap.get(A[i]) === undefined) {
            hashMap.set(A[i], true);
        } else {
            return 0;
        };
    };

    return 1;
};