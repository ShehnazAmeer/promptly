import TextareaInput from '../../ui/TextareaInput';
import { useGetChatResult } from './useGetChatResult';
export default function ChatPrt() {
    const {chatResult,error,isLoadingChat}= useGetChatResult();
    return (
        <div className="flex flex-col justify-center border border-red-500 h-screen w-full items-center">
            <h3 className='my-5 text-[clamp(1rem,4vw,6rem)] font-bold'>Where do we start</h3>
            <TextareaInput onClick= {chatResult} />
        </div> )  
}