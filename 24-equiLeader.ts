// link to codility report: https://app.codility.com/demo/results/trainingMH88KQ-M45/

function solution(A: number[]): number {
    const stack: number[] = [];

    // find original leader of array
    for (let i = 0; i < A.length; i++) {
        if (stack.length === 0 || stack[stack.length - 1] == A[i]) {
            stack.push(A[i]);
        } else {
            stack.pop();
        }
    }
    // if no candidates
    if (stack.length === 0) {
        return 0;
    }

    // count the number of times candidate appears in total
    const candidate: number = stack.pop() ?? -1;
    let totalCount: number = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] == candidate) {
            totalCount++;
        }
    }

    // check if candidate appears enough times to be a leader
    let leader: number = -1;
    if (totalCount > A.length / 2) {
        leader = candidate;
    } else {
        return 0;
    }

    // find the equis
    let numberOfEqui: number = 0;
    let numOfLeaderInLeft: number = 0;
    let numOfLeaderInRight: number = totalCount;
    let lengthOfLeft: number = 1;
    let lengthOfRight: number = A.length - lengthOfLeft;
    for (let i = 0; i < A.length; i++) {
        // check for new occurences of leader in section
        if (A[i] == leader) {
            numOfLeaderInLeft++;
            numOfLeaderInRight--;
        };

        // check if each section has a leader
        if (numOfLeaderInLeft > lengthOfLeft / 2 && numOfLeaderInRight > lengthOfRight / 2) {
            numberOfEqui++;
        };

        // increase left section, decrease right section
        lengthOfLeft++;
        lengthOfRight--;
    };

    return numberOfEqui;
};
