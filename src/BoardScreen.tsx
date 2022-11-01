import React, { useState } from "react";
import { BLANK_BOARD, Board, BOARD_LENGTH, stepBoard, flipCell } from "./utils/logic";

interface SquareProps {
    color: string;
}

const Square = (props: SquareProps) => {
    return (
        <div style={{
            height: 16,
            width: 16,
            borderWidth: 1,
            borderColor: "gray",
            borderStyle: "solid",
            backgroundColor: props.color
        }} />
    );
};

const BoardUI = () => {
    /**
     * @todo [Step 2] 请在下述两处代码缺失部分为 push 方法传入合适的参数以正确显示一个灰色边框的 50x50 棋盘
     * @todo [Step 3] 请在下述两处代码缺失部分填写合适的代码，使得组件可以处理点击棋盘和点击按钮事件
     * @note 这里两处将类型声明为 any[] 是为了在填入缺失代码前也不至于触发 ESLint Error
     */
    const [board, setBoard] = useState<Board>(BLANK_BOARD); // 该语句在 Step 2 中可以暂且忽视
    const step = () => {
        // Step 3 BEGIN
        setBoard(stepBoard(board));
        // Step 3 END
    };

    const squareList: any[] = [];

    for (let i = 0; i < BOARD_LENGTH; ++i) {
        const squareInnerList: any[] = [];

        for (let j = 0; j < BOARD_LENGTH; ++j) {
            squareInnerList.push(
                // Step 2 & 3 BEGIN
                <div onClick={() => setBoard(flipCell(board, i, j))}>
                    <Square color={board[i][j] ? "red" : "white"} />
                </div>
                // Step 2 & 3 END
            );
        }

        squareList.push(
            // Step 2 BEGIN
            <div style={{ display: "flex", flexDirection: "row" }}>
                {squareInnerList}
            </div>
            // Step 2 END
        );
    }

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {squareList}
            </div>
            <button onClick={step}>
                Step the board
            </button>
            <button onClick={() => setBoard(BLANK_BOARD)}>
                Reset the board
            </button>
        </div>
    );
};

const BoardScreen = () => {
    return (
        <BoardUI />
    );
};

export default BoardScreen;