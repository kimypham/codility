// link to codility report: https://app.codility.com/demo/results/training5ZDK49-YEW/

function solution(A: number[], K: number): number[] {
    const arrayLength = A.length;
    const newArray = new Array(arrayLength);

    for (let i = 0; i < arrayLength; i++) {
        newArray[(i + K) % arrayLength] = A[i];
    };

    return newArray;
};