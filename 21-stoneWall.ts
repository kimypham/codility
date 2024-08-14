// link to codility report: https://app.codility.com/demo/results/trainingMYWT6V-HJN/

function solution(H: number[]): number {
    const blockStack: number[] = [];
    let blockCount: number = 0;

    for (let i = 0; i < H.length; i++) {
        while (blockStack && blockStack[blockStack.length - 1] > H[i]) { // while there are blocks in the stack that are taller than this new block.
            blockStack.pop(); // remove as we can't use these blocks anymore. should remove before doing anything else.
        };

        if (blockStack.length === 0 || blockStack[blockStack.length - 1] < H[i]) { // if can place the new block on top (new block is taller than stored block)
            blockCount++;
            blockStack.push(H[i]);
        };
    };

    return blockCount;
};