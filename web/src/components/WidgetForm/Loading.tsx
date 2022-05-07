import { CircleNotch } from "phosphor-react";

export function Loading(){
    return (
        <div className="mexeaqui w-6 h-6 flex justify-center items-center overflow-hidden">
            <CircleNotch weight="bold" className="h-4 w-4 animate-spin"/>
        </div>
    )
}