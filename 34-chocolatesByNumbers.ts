// limk to codility report: https://app.codility.com/demo/results/trainingKDV2YK-9QX/

function solution(N: number, M: number): number {
    const gcd = (a: number, b: number): number => {
        if (a % b == 0) {
            return b;
        } else {
            return gcd(b, a % b);
        };
    };

    const lcd: number = (N * M) / gcd(N, M);

    return lcd / M;
};