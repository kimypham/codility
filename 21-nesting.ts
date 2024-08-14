// link to codility report: https://app.codility.com/demo/results/trainingSPDAN2-4JY/

function solution(S: string): number {
    const stack: string[] = [];

    for (let i = 0; i < S.length; i++) {
        if (S[i] == '(') {
            stack.push('(');
        } else {
            if (stack.length === 0) { // if stack is empty, that means there wasn't a left bracket '(' to match the right bracket / there was an extra right bracket 
                return 0;
            } else {
                stack.pop();
            };
        };
    };

    if (stack.length !== 0) { // if stack is not empty, that means there was an extra left bracket '('
        return 0;
    }

    return 1;
};