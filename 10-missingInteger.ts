// link to codility report: https://app.codility.com/demo/results/training24USKA-X23/

function solution(A: number[]): number {
    const hashMap: Map<number, boolean> = new Map();
    let smallestPosInt: number = 1;

    for (let i = 0; i < A.length; i++) {
        hashMap.set(A[i], true); // add all values to hashMap

        if (A[i] >= 1 && A[i] == smallestPosInt) {
            smallestPosInt = A[i] + 1;
        };
    };

    while (hashMap.get(smallestPosInt)) { // check if smallest number exists in hashmap incrementally
        smallestPosInt++;
    };

    return smallestPosInt;
};