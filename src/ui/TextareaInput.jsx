import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function TextareaInput() {
    const [userInput,setUserInput] = useState();

    const navigate = useNavigate();

    function handleClick() {
        if (!userInput) return;
        navigate(`/chatprt?promptlycom_refered=true&prompt=${userInput}`)
    }
    return (
        <>
           <textarea
            className="w-[clamp(6rem,65vw,90rem)] bg-gray-800 rounded-lg focus:outline-none h-30 p-4"
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            
            ></textarea>

            <Button disabled={!userInput} onClick={handleClick} category='basic' styles='rounded-full bg-gray-800 w-10 my-5 py-2' > &rarr; </Button> 
        </>
        
    )
}