import { useState } from 'react';
import { useGetChatResult } from './useGetChatResult';
import Button from '../../ui/Button';
export default function ChatPrt() {
    const [userInput, setUserInput] = useState();
    const { chatResult, error, isLoadingChat } = useGetChatResult();

    function handleClick(e) {
        e.preventDefault();
        if (!userInput) return;
        chatResult(userInput);
    }
    
    return (
        <form onSubmit={handleClick} className="flex flex-col justify-center border border-red-500 h-screen w-full items-center">
            <h3 className='my-5 text-[clamp(1rem,4vw,6rem)] font-bold'>Where do we start</h3>
            
            <textarea
                className="w-[clamp(6rem,65vw,90rem)] bg-gray-800 rounded-lg focus:outline-none h-30 p-4"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                
            ></textarea>

            <Button disabled={!userInput} onClick={handleClick} category='basic' styles='rounded-full bg-gray-800 w-10 my-5 py-2' > &rarr; </Button> 
        </form> )  
}