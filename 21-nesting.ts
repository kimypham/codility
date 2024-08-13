// link to codility report: https://app.codility.com/demo/results/trainingD4WMZA-DXD/

function solution(S: string): number {
    const stack: string[] = [];

    for (let i = 0; i < S.length; i++) {
        if (S[i] == '(') {
            stack.push(S[i]);
        } else {
            if (stack.length > 0) {
                stack.pop();
            } else {
                return 0; // if the stack was empty and we saw a ')', that means that there wasn't a '(' to match it
            };
        };
    };

    if (stack.length === 0) { // we shouldn't have any extra '(' in the stack
        return 1;
    };

    return 0;
};