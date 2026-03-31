import Header from "../ui/Header";
import TextareaInput from "../ui/TextareaInput";

export default function Promptly() {
    
    return (
        <>
            <Header/>
            <section className=" border border-gray-50 flex flex-col justify-center items-center h-screen">
                <h3 className="my-5 text-[clamp(1rem,4vw,6rem)] font-bold">What can I help with?</h3>

                <TextareaInput/>
            </section>
        </>
        
    )
}