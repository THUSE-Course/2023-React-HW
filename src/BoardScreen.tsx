import React, { useRef, useState } from "react";
import { BLANK_BOARD, Board, BOARD_LENGTH, stepBoard, flipCell, badFlipCell } from "./utils/logic";

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

interface BoardUIProps {
    board: Board;
    flip: (i: number, j: number) => void;
}

const BoardUI = (props: BoardUIProps) => {
    /**
     * @todo [Step 2] 请在下述两处代码缺失部分为 push 方法传入合适的参数以正确显示一个灰色边框的 50x50 棋盘
     * @todo [Step 3] 请在下述一处代码缺失部分填写合适的代码，使得细胞可以根据其所处的状态显示不同的颜色
     * @note 这里两处将类型声明为 any[] 是为了在填入缺失代码前也不至于触发 ESLint Error
     */
    const squareList: any[] = [];

    for (let i = 0; i < BOARD_LENGTH; ++i) {
        const squareInnerList: any[] = [];

        for (let j = 0; j < BOARD_LENGTH; ++j) {
            squareInnerList.push(
                <div onClick={() => props.flip(i, j)}>
                    {/* Step 2 & 3 BEGIN */}
                    <Square color={props.board[i][j] ? "red" : "white"} />
                    {/* Step 2 & 3 END */}
                </div>
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
        <div style={{ display: "flex", flexDirection: "column" }}>
            {squareList}
        </div>
    );
};

const BoardScreen = () => {
    /**
     * @todo [Step 3] 请在下述一处代码缺失部分填写合适的代码，使得组件可以调用 logic.ts 中的代码处理点击棋盘事件
     * @todo [Step 4] 请在下述两处代码缺失部分填写合适的代码，使得按钮的行为符合预期且计时器资源分配、释放合理
     */
    const [board, setBoard] = useState<Board>(BLANK_BOARD);
    const [autoPlay, setAutoPlay] = useState<boolean>(false);
    const timerRef = useRef<undefined | NodeJS.Timer>(undefined);

    const step = () => {
        setBoard((board) => stepBoard(board));
    };
    const flip = (i: number, j: number) => {
        // Step 3 BEGIN
        setBoard(flipCell(board, i, j));
        // Step 3 END
    };

    const startAutoPlay = () => {
        // Step 4 BEGIN
        setAutoPlay(true);
        timerRef.current = setInterval(step, 300);
        // Step 4 END
    };
    const stopAutoPlay = () => {
        // Step 4 BEGIN
        setAutoPlay(false);
        if (timerRef.current !== undefined) {
            clearInterval(timerRef.current);
        }
        // Step 4 END
    };

    return (
        <div>
            <BoardUI board={board} flip={flip} />
            <button onClick={step} disabled={autoPlay}>
                Step the board
            </button>
            <button onClick={() => setBoard(BLANK_BOARD)} disabled={autoPlay}>
                Reset the board
            </button>
            <button onClick={startAutoPlay} disabled={autoPlay}>
                Start auto play
            </button>
            <button onClick={stopAutoPlay} disabled={!autoPlay}>
                Stop auto play
            </button>
        </div>
    );
};

export default BoardScreen;