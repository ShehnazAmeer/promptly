import Logo from "./Logo";
import Menubar from "./Menubar";
import Navbar from "./Navbar";
import UserAvatar from '../features/Authentication/UserAvatar';
import Button from "./Button";
import { useNavigate } from "react-router-dom";
export default function Header() {
    const navigate= useNavigate();
    function handleClick() {
        navigate('/login')
    }
    return (
        <header
            className="flex border justify-between w-full"
        >  
            <span className="border border-blue-600 flex w-full items-center justify-between max-md:hidden">
                <Logo />
                <Navbar />
                <Button
                    category='secondary'
                    styles='mr-5 w-[clamp(7rem,13vw,12rem)] text-[clamp(0.7rem,1vw,2rem)] flex items-center gap-2 justify-center'
                    onClick={handleClick}
                >
                    Login
                </Button>
                {/* <UserAvatar/> */}
            </span>
            <span className="hidden border border-red-600 max-md:flex w-full justify-between  items-center pr-5">
                <Logo />
                <Menubar/>
            </span>
        </header>
    )
};


