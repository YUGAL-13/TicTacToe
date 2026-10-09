
import { RotateCcw, ChartNoAxesCombined, UsersRound } from "lucide-react";
interface ScoreboardProps{
    
    onClick:()=>void;
}

export default function Scoreboard({onClick}:ScoreboardProps){

    return(
        <>
        <div className="flex justify-around text-white">
            <div className="flex gap-2 h-10 w-25 justify-center items-center cursor-pointer bg-slate-700 rounded-xl"
            onClick={onClick}>
                <RotateCcw width={18}/>
                <p className="text-sm">Reset Game</p>
            </div>
             <div className="flex gap-2 h-10 w-25 justify-center items-center cursor-pointer bg-slate-700 rounded-xl ">
                <UsersRound width={15}/>
                <p className="text-sm">Play vs AI</p>
            </div>
             <div className="flex gap-2 h-10 w-25 justify-center items-center cursor-pointer bg-slate-700 rounded-xl ">
                <ChartNoAxesCombined width={15} />
                <p className="text-sm">View stats</p>
            </div>

        </div>
        </>
    )

}