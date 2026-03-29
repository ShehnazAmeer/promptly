import { CgPushLeft } from "react-icons/cg";
import Button from "./Button";

export default function Sidebar({handleClick}) {
    return (
        <aside className="w-40 border border-yellow-600 h-dvh">
            <div className="border border-purple-700 flex justify-end" >
                <Button
                    onClick={handleClick}
                >
                    <CgPushLeft />
                </Button>
               
            </div>
        </aside>
    )
}