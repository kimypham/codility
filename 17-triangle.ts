// link to codility report: https://app.codility.com/demo/results/trainingD9KJ46-7AD/

function solution(A: number[]): number {
    A.sort((a, b) => a - b);

    for (let i = 0; i < A.length - 2; i++) {
        const P: number = A[i];
        const Q: number = A[i + 1];
        const R: number = A[i + 2];

        if ((P + Q > R) && (Q + R > P) && (R + P > Q)) {
            return 1;
        }
    };

    return 0;
};