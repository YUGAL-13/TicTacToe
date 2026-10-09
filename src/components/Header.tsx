import { Crown } from "lucide-react"

export default function Header(){
    return(
        <>
        <div className="flex flex-col justify-center gap-2">
            <div className="flex justify-center">
                <Crown className="text-amber-400 h-10 w-10"/>

            </div>
            <h1 className="text-4xl flex justify-center text-blue-500 font-bold ">
                Tic Tac Toe 
            </h1>

            <div className="flex justify-center text-lg ">
                <p>
                    A classic game of O's and X's
                </p>
            </div>
        </div>
        </>
    )
}