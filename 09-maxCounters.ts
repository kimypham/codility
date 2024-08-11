// link to codility report: https://app.codility.com/demo/results/trainingXJBVAD-MPP/

function solution(N: number, A: number[]): number[] {
    const newArray: number[] = new Array(N).fill(0);
    let currentMax: number = 0;
    let maximumValue: number = 0;

    for (let i = 0; i < A.length; i++) {
        const newArrayPosition: number = A[i] - 1; // the question uses 1-indexing

        if (A[i] == N + 1) {
            maximumValue = currentMax; // use this value when setting max counter
        } else {
            newArray[newArrayPosition] = Math.max(maximumValue + 1, newArray[newArrayPosition] + 1); // either set to the max value or count up like normal

            if (newArray[newArrayPosition] > currentMax) {
                currentMax = newArray[newArrayPosition];
            };
        };
    };

    for (let i = 0; i < newArray.length; i++) { // replace any value below max with the max val (these numbers were not visited again after setting the max value)
        if (newArray[i] < maximumValue) {
            newArray[i] = maximumValue;
        };
    };

    return newArray;
};