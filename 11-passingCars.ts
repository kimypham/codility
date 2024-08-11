// link to codility report: https://app.codility.com/demo/results/trainingGS37S5-GEZ/

function solution(A: number[]): number {
    let numberOfPairs: number = 0;
    let numberOfCarsTravelingEast: number = 0;
    const maxPairs: number = 1000000000;

    for (let i = 0; i < A.length; i++) {
        if (A[i] == 0) {
            numberOfCarsTravelingEast++;
        } else {
            numberOfPairs += numberOfCarsTravelingEast;
            if (numberOfPairs > maxPairs) {
                return -1;
            }
        }
    };
    return numberOfPairs;
};