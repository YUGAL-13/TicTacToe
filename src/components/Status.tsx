import { X, Trophy, Circle } from "lucide-react"
import type{ GameStats, Player } from "./types";
interface StatusProps{
    stats:GameStats;
    turn: Player;
  winner: Player | 'Draw' | null;
}

export default function Status({stats, turn,winner}:StatusProps){
    const getStatusMessage = () => {
    if (winner === 'Draw') return { title: "It's a Draw!", sub: 'Game Over' };
    if (winner) return { title: `Player ${winner} Wins!`, sub: 'Congratulations 🎉' };
    return { title: `Player ${turn}'s Turn`, sub: 'Make your move!' };
  };

  const { title, sub } = getStatusMessage();

    return(
        <>
        <div className="flex flex-col  justify-center gap-3 ">
            <div className="flex justify-center ">
                <div className="flex flex-col items-center bg-[#181a29]/90 p-4 w-60 rounded-2xl">
                    <h2 className="text-xl font-bold text-white">
                    {title}
                </h2>
                <p className="text-gray-400">{sub}</p>
                </div>
                
            </div>

            <div className="flex justify-between bg-[#181a29]/90 rounded-2xl h-25 mx-10 px-2 py-1 ">
                <div className="flex flex-col items-center">
                    <X className="text-blue-600 h-10"/>
                    <p className="text-white">{stats.xWins}</p>
                    <p className="text-white">Player X</p>

                </div>
                <div className="flex flex-col items-center">
                    <Trophy className="text-amber-500 h-10" />
                    <p className="text-white">{stats.draws}</p>
                    <p className="text-white">Draws</p>

                </div>
                <div className="flex flex-col items-center">
                    <Circle className="text-red-500 h-10" />
                    <p className="text-white">{stats.oWins}</p>
                    <p className="text-white">Player O</p>

                </div>

            </div>

        </div>
        </>
    )
}