import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Button from "./Button";
import { FiAlignJustify } from "react-icons/fi";

export default function Applayout() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(open=>!open)
    }

    return (
        <section className="border border-red-600 ">
             <Header />
            <main className="border flex items-start space-x-5 border-blue-500 h-screen ">
                {
                    !isOpen && (
                        <Button onClick={handleClick}>
                         <FiAlignJustify className="w-7 h-7" />
                        </Button>
                    ) 
                }
                {
                    isOpen && <Sidebar handleClick={handleClick} />
                }
                <Outlet/>
            </main>
        </section>
    )
} 