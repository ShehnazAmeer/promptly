import Logo from "./Logo";
import Menubar from "./Menubar";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header
            className="flex border justify-between w-full"
        >  
            <span className="border border-blue-600 flex w-full items-center justify-between max-md:hidden">
                <Logo />
                <Navbar />
                <span className="pr-5">User</span>
            </span>
            <span className="hidden border border-red-600 max-md:flex w-full justify-between  items-center pr-5">
                <Logo />
                <Menubar/>
            </span>
        </header>
    )
}