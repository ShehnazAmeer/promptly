import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Header from "../ui/Header";
import { MdArrowOutward } from "react-icons/md";

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <section className="border border-red-500">
                <h1 className="text-center text-[clamp(1rem,4vw,6rem)] py-[clamp(0.5rem,3vw,3rem)]">
                    Chat Smarter with Promptly
                </h1>
                <div className="text-center space-x-7 flex justify-center mb-5">
                    <Button
                        category='secondary'
                        styles='w-[clamp(7rem,13vw,12rem)] text-[clamp(0.7rem,1vw,2rem)] flex items-center gap-2 justify-center'
                        onClick={()=>navigate('/promptly')}

                    >
                        Try Now
                        <MdArrowOutward />
                    </Button>
                    <Button category='basic' styles='w-[clamp(7rem,13vw,12rem)] text-[clamp(0.7rem,1vw,2rem)] bg-gray-800 hover:bg-gray-700 rounded-full focus:ring-3 focus:ring-gray-500' >SignUp</Button>
                </div>
            </section>
        </>
    )
}