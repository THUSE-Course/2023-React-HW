export const BOARD_LENGTH = 50;
export type Board = (0 | 1)[][];

export const BLANK_BOARD: Board = Array(BOARD_LENGTH).fill(Array(BOARD_LENGTH).fill(0));

export const stepBoard = (board: Board): Board => {
    const newBoard: Board = [];

    /**
     * @todo [Step 1] 请在下面两条注释之间的区域填写你的代码完成该游戏的核心逻辑
     * @note 你可以使用命令 yarn test step 来运行我们编写的单元测试与我们提供的参考实现对拍
     */
    // Step 1 BEGIN
    for (let i = 0; i < BOARD_LENGTH; ++i) {
        newBoard.push([]);

        for (let j = 0; j < BOARD_LENGTH; ++j) {
            let aliveCounter = 0;
            
            const left = (j - 1 + BOARD_LENGTH) % BOARD_LENGTH;
            const right = (j + 1) % BOARD_LENGTH;
            const up = (i - 1 + BOARD_LENGTH) % BOARD_LENGTH;
            const down = (i + 1) % BOARD_LENGTH;
            const checkList = [
                [up, left], [up, j], [up, right],
                [i, left], [i, right],
                [down, left], [down, j], [down, right],
            ];

            checkList.forEach((ord) => {
                if (board[ord[0]][ord[1]] === 1) {
                    ++aliveCounter;
                }
            });

            const nowState = board[i][j];
            if (nowState === 0) {
                if (aliveCounter === 3) {
                    newBoard[i].push(1);
                } else {
                    newBoard[i].push(0);
                }
            } else {
                if (aliveCounter === 2 || aliveCounter === 3) {
                    newBoard[i].push(1);
                } else {
                    newBoard[i].push(0);
                }
            }
        }
    }
    // Step 1 END

    return newBoard;
};

export const flipCell = (board: Board, i: number, j: number): Board => {
    /**
     * @todo [Step 3] 请在下面两条注释之间的区域填写你的代码完成切换细胞状态的任务
     * @note 你可以使用命令 yarn test flip 来运行我们编写的单元测试以检验自己的实现
     */
    // Step 3 BEGIN
    const newBoard: Board = [];
    for (let _i = 0; _i < BOARD_LENGTH; ++_i) {
        newBoard.push([]);

        for (let _j = 0; _j < BOARD_LENGTH; ++_j) {
            newBoard[_i].push(i === _i && j === _j ? (board[_i][_j] ^ 1) as (0 | 1) : board[_i][_j]);
        }
    }
    
    return newBoard;
    // Step 3 END

    /**
     * @note 该 return 语句是为了在填入缺失代码前也不至于触发 ESLint Error
     */
    throw new Error("This line should be unreachable.");
    return board;
};

export const badFlipCell = (board: Board, i: number, j: number): Board => {
    board[i][j] = board[i][j] === 0 ? 1 : 0;
    return board;
};
