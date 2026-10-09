import { useState } from "react";
import type { BoardState, Player, GameStats } from "./types";
import Header from "./Header";
import Cell from "./Cell";
import Status from "./Status";
import Scoreboard from "./Scoreboard";

const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

export default function TicTacToe() {
    const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
    const [turn, setTurn] = useState<Player>('X');
    const [stats, setStats] = useState<GameStats>({ xWins: 0, oWins: 0, draws: 0 });
    const [winner, setWinner] = useState<Player | 'Draw' | null>(null);

    const checkWinner = (currentBoard: BoardState): Player | 'Draw' | null => {
        for (const [a, b, c] of WINNING_COMBINATIONS) {
            if (
                currentBoard[a] &&
                currentBoard[a] === currentBoard[b] &&
                currentBoard[a] === currentBoard[c]
            ) {
                return currentBoard[a];
            }
        }
        if (currentBoard.every((cell) => cell !== null)) {
            return 'Draw';
        }
        return null;
    };
    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setTurn('X');
        setWinner(null);
    };

    const handleCellClick = (index: number) => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);

        const result = checkWinner(newBoard);
        if (result) {
            setWinner(result);
            if (result === 'X') setStats((prev) => ({ ...prev, xWins: prev.xWins + 1 }));
            else if (result === 'O') setStats((prev) => ({ ...prev, oWins: prev.oWins + 1 }));
            else setStats((prev) => ({ ...prev, draws: prev.draws + 1 }));
        } else {
            setTurn(turn === 'X' ? 'O' : 'X');
        }
    };
    return (
        <>
            <main className=" flex flex-col gap-2 items-center justify-center h-full w-full bg-slate-900">
                {/**header */}
                <div className=" flex flex-col w-[40%] border  rounded-2xl bg-gray-800 gap-5">
                    <Header />

                    <div className="grid grid-cols-3 gap-5 justify-items-center my-4">
                        {board.map((cellValue, idx) => (
                            <Cell
                                key={idx}
                                value={cellValue}
                                onClick={() => handleCellClick(idx)}
                                disabled={Boolean(winner) || Boolean(cellValue)}
                            />
                        ))}

                    </div>
                    <Status stats={stats} turn={turn} winner={winner} />
                    <div className="mb-4">
                        <Scoreboard
                        
                        onClick={resetGame}
                        />

                    </div>


                </div>


            </main>
        </>
    )
}