import { NavLink } from "react-router-dom";
import NavLinkBtn from "./NavLinkBtn";

export default function Navbar() {
    return (
        <ul
            className="flex border border-gray-500 rounded-full py-3 px-6 items-center"
        > 
            <li className="px-4">
                <NavLinkBtn to='/'> Home </NavLinkBtn>
            </li>
            <li className="px-4">
                <NavLinkBtn to='/notes'> Notes </NavLinkBtn>
            </li>
            <li className="px-4">
                <NavLinkBtn to='/settings'> Settings </NavLinkBtn>
            </li>
        </ul>
    )
}