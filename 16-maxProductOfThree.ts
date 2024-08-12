// link to codility report: https://app.codility.com/demo/results/training24GCPC-HA9/

function solution(A: number[]): number {
    const arrayLength: number = A.length;
    A.sort((a, b) => b - a); // sort in descending order

    return Math.max(A[0] * A[1] * A[2], A[0] * A[arrayLength - 2] * A[arrayLength - 1]); // max of either the three largest numbers, or the largest positive number and two of the largest negative numbers (the negatives will turn into a positive, and it might be the case that the negative numbers are greater than the positive!)
};