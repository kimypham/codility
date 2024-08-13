// link to codility report: https://app.codility.com/demo/results/trainingSB5SCM-EXA/

function solution(A: number[]): number {
    // get the number of disc that start, at the position
    const numberOfDiscsStarting: number[] = new Array(A.length).fill(0);

    for (let i = 0; i < A.length; i++) {
        const startPosition: number = Math.max(i - A[i], 0) // where the disc starts. we cut off at 0 since negative numbers won't really matter
        numberOfDiscsStarting[startPosition] += 1; // if starting, increment the position it starts at
    };
    // [ 4, 0, 1, 0, 0, 1 ]

    // at the position, how many discs have started in total?
    for (let i = 1; i < numberOfDiscsStarting.length; i++) {
        numberOfDiscsStarting[i] += numberOfDiscsStarting[i - 1]
    };
    // [ 4, 4, 5, 5, 5, 6 ]

    let totalIntersections: number = 0;
    const maxIntersections: number = 10000000;
    for (let i = 0; i < A.length; i++) {
        const endPosition: number = Math.min(i + A[i], A.length - 1) // we cut off at A.length - 1 since number greater than it will surely intersect same as if we cut it off

        const numberCountedAlready: number = i + 1; // in order to exclude the disc and any discs already
        const numberStartingAtEndPosition: number = numberOfDiscsStarting[endPosition];

        totalIntersections += numberStartingAtEndPosition - numberCountedAlready;
        if (totalIntersections > maxIntersections) {
            return -1;
        };
    }

    return totalIntersections;
};