// link to codility report: https://app.codility.com/demo/results/trainingJTTCPC-BRY/

function solution(S: string): number {
    if (S.length % 2 !== 0) {
        return 0;
    };

    const dictionary: Map<string, string> = new Map([
        ['{', '}'],
        ['(', ')'],
        ['[', ']']
    ]);
    const stack: string[] = [];

    for (let i = 0; i < S.length; i++) {
        if (dictionary.get(S[i])) { // if it is a left bracket
            stack.push(S[i]);
        } else { // if it is a right bracket
            const toCheck: string = stack.pop() ?? '';
            if (dictionary.get(toCheck) !== S[i]) { // check if the left bracket in the stack matches with S[i]
                return 0;
            };
        };
    };

    if (stack.length !== 0) {
        return 0;
    };

    return 1;
};