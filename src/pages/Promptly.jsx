import { useNavigate} from "react-router-dom"
import Button from "../ui/Button";
import { useState } from "react";
import Header from "../ui/Header";

export default function Promptly() {
    const [userInput,setUserInput] = useState();

    const navigate = useNavigate();

    function handleClick() {
        if (!userInput) return;
        navigate(`/chatprt?promptlycom_refered=true&prompt=${userInput}`)
    }
    
    return (
        <>
            <Header/>
            <section className=" border border-gray-50 flex flex-col justify-center items-center h-screen">
                <h3 className="my-5 text-[clamp(1rem,4vw,6rem)] font-bold">What can I help with?</h3>

                <textarea
                    className="w-[clamp(6rem,65vw,90rem)] bg-gray-800 rounded-lg h-30 p-4"
                    value={userInput}
                    onChange={e => setUserInput(e.target.value)}
                    
                ></textarea>

                <Button disabled={!userInput} onClick={handleClick} category='basic' styles='rounded-full bg-gray-800 w-10 my-5 py-2' > &rarr; </Button>
            </section>
        </>
        
    )
}