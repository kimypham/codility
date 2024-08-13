// link to codility report: https://app.codility.com/demo/results/training4KUXCX-X9A/

function solution(A: number[], B: number[]): number {
    const totalFish: number = A.length;
    let deadFishCount: number = 0;
    const downstreamFishStack: number[] = [];

    for (let i = 0; i < totalFish; i++) {
        const opponentDirection = B[i];
        const opponentSize = A[i];
        if (opponentDirection == 1) { // if fish is going downstream
            downstreamFishStack.push(i)
        } else {
            while (downstreamFishStack.length > 0) { // opponent needs to fight all downstream fish
                const attackingFish: number = downstreamFishStack.pop() ?? -1;
                const attackingFishSize: number = A[attackingFish];

                deadFishCount++; // since unique sizes, there will be at least one death
                if (attackingFishSize > opponentSize) { // if downstream attacking fish wins
                    downstreamFishStack.push(attackingFish); // add the attacking fish back
                    break; // battle only ends when opponent (upstream) fish dies (we need to break to look at the next fish in array), or if there are no more downstream fish for the opponent fish to fight
                };
            };
        };
    };

    return totalFish - deadFishCount;
};
