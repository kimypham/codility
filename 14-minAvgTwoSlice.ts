// link to codility report: https://app.codility.com/demo/results/trainingE7X25U-Z7S/

function solution(A: number[]): number {
    // need to know math property --> only slices of 2 or 3 will be tested (slices of 4 or above will never be smaller)

    let minimalAverage: number = Infinity;
    let minimalPosition: number = -1;

    for (let i = 0; i < A.length - 1; i++) {
        let currAverage: number = -1;
        const twoSliceAverage: number = (A[i] + A[i + 1]) / 2;

        if (i == A.length - 2) {
            currAverage = twoSliceAverage; // at this position, can only test twoSlice (threeSlice will go out of bounds)
        } else {
            currAverage = Math.min(twoSliceAverage, (A[i] + A[i + 1] + A[i + 2]) / 3);
        };

        if (currAverage < minimalAverage) {
            minimalAverage = currAverage;
            minimalPosition = i;
        };
    };

    return minimalPosition;
};