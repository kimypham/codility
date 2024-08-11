// link to codility report: https://app.codility.com/demo/results/trainingXWUUFR-9NN/

function solution(A: number, B: number, K: number): number {
    // assume A=6, B=11, K=2

    // B/K (eg. 11/2) will give us the number of divisibles between 1 and 11 (inclusive)
    // 1, [2], 3, [4], 5, [6], 7, [8], 9, [10], 11 = 5

    // A/K (eg. 6/2) will give us the number of divisibles between 1 and 6 (inclusive)
    // 1, [2], 3, [4], 5, [6] = 3

    // so B/K - A/K will give us the number of divisibles between A and B
    // Math.floor since we don't care about the decimals
    let numberOfDivisibles: number = Math.floor(B / K) - Math.floor(A / K);

    // should also count the same number too!
    // in our example 6 is counted in both B/K and A/K calculations, but if we subtract them, 6 won't be counted anymore :( so have to add it back :D
    // or if A === 0, we should include that 0 too!
    if (A % K === 0) {
        numberOfDivisibles++;
    }

    // final answer according to our example should be 3 (since 6, 8, 10 are divisible by 2)
    return numberOfDivisibles;
};