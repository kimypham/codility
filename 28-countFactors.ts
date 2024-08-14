// link to codility report: https://app.codility.com/demo/results/trainingNV6C8U-QAT/

function solution(N: number): number {
    let i: number = 0;
    let numberOfDivisors: number = 0;

    while (i * i < N) {
        if (N % i == 0) {
            numberOfDivisors += 2;
        };
        i++;
    };

    if (i * i == N) {
        numberOfDivisors++;
    };

    return numberOfDivisors;
};