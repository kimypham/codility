// link to codility report: https://app.codility.com/demo/results/trainingSP2RQK-RK3/

function solution(N: number): number {
    const binary: string = N.toString(2);

    let longestBinaryGapLength: number = 0;
    let currentBinaryGapLength: number = 0;

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == '0') {
            currentBinaryGapLength += 1;
        } else {
            if (currentBinaryGapLength > longestBinaryGapLength) {
                longestBinaryGapLength = currentBinaryGapLength;
            };
            currentBinaryGapLength = 0;
        };
    };

    return longestBinaryGapLength;
};
