// if you're curious, this is my original attempt (it was 100% but the code was very clunky) --> https://app.codility.com/demo/results/trainingF39VSG-5VB/

// the below is my new attempt which improves the code (offsets the arrays by 1 so we can easily check P queries)
// link to codility report: https://app.codility.com/demo/results/trainingXEU9UX-EDA/

function solution(S: string, P: number[], Q: number[]): number[] {
    let aSeen: number[] = [0];
    let cSeen: number[] = [0];
    let gSeen: number[] = [0];
    let tSeen: number[] = [0];

    for (let i = 0; i < S.length; i++) {
        // these arrays keep track of the number of occurrences for a particular letter at i+1 position (not i!)
        // we add an offset by pushing to the array (i+1) so that we can check P queries
        // make next value to be the same as previous, add 1 if we see an occurrence
        aSeen.push(S[i] === 'A' ? aSeen[i] + 1 : aSeen[i]);
        cSeen.push(S[i] === 'C' ? cSeen[i] + 1 : cSeen[i]);
        gSeen.push(S[i] === 'G' ? gSeen[i] + 1 : gSeen[i]);
        tSeen.push(S[i] === 'T' ? tSeen[i] + 1 : tSeen[i]);
    };

    const minImpact: number[] = [];

    for (let i = 0; i < P.length + 1; i++) {
        if (P[i] == Q[i] + 1) { // in the case of only one letter
            switch (S[P[i]]) { // find the value of the letter
                case 'A':
                    minImpact.push(1);
                    break;
                case 'C':
                    minImpact.push(2);
                    break;
                case 'G':
                    minImpact.push(3);
                    break;
                case 'T':
                    minImpact.push(4)
                    break;
            };
        } else {
            // check in order of priority (A, C, G then T)
            // remember to check Q[i] + 1 and not Q[i] because we added an offset earlier. if we didn't add an offset, we wouldn't be able to include P[i] in our comparision (instead it would compare P[i]+1)
            // check the position inside each array. if P[i] < Q[i]+1, then this implies that there has been a new occurrence of the letter!
            if (aSeen[P[i]] < aSeen[Q[i] + 1]) {
                minImpact.push(1);
            } else if (cSeen[P[i]] < cSeen[Q[i] + 1]) {
                minImpact.push(2);
            } else if (gSeen[P[i]] < gSeen[Q[i] + 1]) {
                minImpact.push(3);
            } else if (tSeen[P[i]] < tSeen[Q[i] + 1]) {
                minImpact.push(4);
            };
        };
    };

    return minImpact;

    /*
               [C, A, G, C, C, T, A]
    lastA = [0, 0, 1, 1, 1, 1, 1, 2]
    lastC = [0, 1, 1, 1, 2, 3, 3, 3]
    lastG = [0, 0, 0, 1, 1, 1, 1, 1]
    lastT = [0, 0, 0, 0, 0, 0, 1, 1]
    */
};