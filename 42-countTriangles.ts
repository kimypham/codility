// link to codility report: https://app.codility.com/demo/results/training5E7UB7-8AY/

function solution(A: number[]): number {
    A.sort((a, b) => a - b);
    let count: number = 0;

    for (let i = 0; i < A.length - 2; i++) {
        let tail = i + 1;
        let head = i + 2;

        while (tail < A.length) {
            const P: number = A[i];
            const Q: number = A[tail];
            const R: number = A[head];

            if ((P + Q > R) && (Q + R > P) && (R + P > Q)) {
                head++;
            } else {
                tail++;
                count += head - tail;
            }

        }
    }
    return count;
}