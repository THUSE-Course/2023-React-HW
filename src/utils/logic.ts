export const BOARD_LENGTH = 50;
export type Board = (0 | 1)[][];

export const BLANK_BOARD: Board = Array(BOARD_LENGTH).fill(Array(BOARD_LENGTH).fill(0));

export const stepBoard = (board: Board): Board => {
    const newBoard: Board = [];

    /**
     * @todo [Step 1] 请在下面两条注释之间的区域填写你的代码完成该游戏的核心逻辑
     * @note 你可以使用命令 yarn test logic 来运行我们编写的单元测试与我们提供的参考实现对拍
     */
    // Step 1 BEGIN

    // Step 1 END

    return newBoard;
};

export const flipCell = (board: Board, i: number, j: number): Board => {
    const newBoard: Board = [];
    for (let _i = 0; _i < BOARD_LENGTH; ++_i) {
        newBoard.push([]);

        for (let _j = 0; _j < BOARD_LENGTH; ++_j) {
            newBoard[_i].push(i == _i && j == _j ? (board[_i][_j] ^ 1) as (0 | 1) : board[_i][_j]);
        }
    }
    
    return newBoard;
};
