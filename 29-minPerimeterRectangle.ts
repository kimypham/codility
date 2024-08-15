// link to codility report: https://app.codility.com/demo/results/training2H23M8-GRQ/

function solution(N: number): number {
    let minPerimeter: number = Infinity;

    for (let i = 0; i * i <= N; i++) {
        if (N % i == 0) {
            const currentPerimeter = 2 * (i + N / i);
            minPerimeter = Math.min(minPerimeter, currentPerimeter);
        };
    };

    return minPerimeter;
};