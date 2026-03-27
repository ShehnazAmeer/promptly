import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function NavButton() {
    const navigate= useNavigate();
    return (
        <section className="flex items-center space-x-2 pr-5 border  ">
            <Button category='primary' onClick={ ()=>navigate('/signup')} >Signup</Button>
            <Button onClick={ ()=> navigate('/login')} > Login</Button>
        </section>
    )
}