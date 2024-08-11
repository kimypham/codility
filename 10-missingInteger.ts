// link to codility report: https://app.codility.com/demo/results/trainingQW529W-4DW/

function solution(A: number[]): number {
    const hashMap: Map<number, boolean> = new Map();
    let smallestInt: number = 1;

    for (let i = 0; i < A.length; i++) {
        hashMap.set(A[i], true); // add all values to hashMap

        if (A[i] >= 1 && A[i] == smallestInt) {
            smallestInt = A[i] + 1;
        };
    };

    while (true) {
        if (hashMap.get(smallestInt)) { // check if all values are in already in hashMap incrementally
            smallestInt += 1;
        } else {
            return smallestInt; // return if not in the hashMap
        };
    };
};