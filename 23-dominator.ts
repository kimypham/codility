// my original solution using hash maps
// link to codility report: https://app.codility.com/demo/results/trainingFN5XU6-UD3/

function solution(A: number[]): number {
    const hashMap: Map<number, number> = new Map();

    if (A.length === 1) {
        return 0; // if only 1 element, it is dominant
    };

    for (let i = 0; i < A.length; i++) {
        if (hashMap.get(A[i]) === undefined) {
            hashMap.set(A[i], 1);
        } else {
            const newValue: number = (hashMap.get(A[i]) ?? 0) + 1;
            if (newValue > A.length / 2) {
                return i;
            };
            hashMap.set(A[i], newValue);
        };
    };

    return -1;
};


// the reccomended solution using the leader algo
// link to codility report: https://app.codility.com/demo/results/trainingFN5XU6-UD3/

function solution2(A: number[]): number {
    let currentValue: number = -1;
    let size: number = 0;

    for (let i = 0; i < A.length; i++) {
        if (size == 0) {
            size += 1;
            currentValue = A[i];
        } else {
            if (A[i] !== currentValue) {
                size -= 1;
            } else {
                size += 1; // no need to update currentValue as it is the same
            };
        };
    };

    let candidate: number = 0;
    if (size > 0) {
        candidate = currentValue;
    };

    // check if candidate actually occurs more than half of the time (there is a case where numbers could occur the same number of times)
    let count: number = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] == candidate) {
            count++;
            if (count > A.length / 2) {
                return i;
            };
        };
    };
    return -1;
};