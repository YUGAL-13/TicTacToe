import type { Player } from "./types"

interface CellProps {
    value: Player;
    onClick: () => void;
    disabled: boolean;
}

export default function Cell({ value, onClick, disabled }: CellProps) {

    return (
        <>

            <button className={` h-30 w-30 bg-[#181a29]/90 border border-slate-700/50 rounded-2xl
             flex items-center justify-center transition-all duration-200 hover:border-slate-500 hover:scale-[1.02]
              active:scale-95 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500/50`}
                onClick={onClick}
                disabled={disabled || value !== null}
            >
                {value == "X" && (
                    <svg
                        className="w-14 h-14 text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.85)] stroke-current"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                )
                }
                {value == "O" && (
                    <svg
                        className="w-14 h-14 text-pink-500 drop-shadow-[0_0_12px_rgba(244,63,94,0.85)] stroke-current"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="8" />
                    </svg>
                )}
            </button>
        </>
    )
}