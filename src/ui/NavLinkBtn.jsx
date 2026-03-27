import { NavLink } from "react-router-dom";

export default function NavLinkBtn({ to, children}) {
    if(to==='/') return (
        <NavLink
            end
            to={to}
            className={({isActive})=>`flex gap-3  py-2 px-5 items-center font-bold  ${isActive?"rounded-lg  bg-stone-200  dark:bg-gray-600 dark:text-gray-200 dark:border-gray-700 ":""}`}
        >
            {children}
        </NavLink>
    )
    return (
        <NavLink
            to={to}
            className={({isActive})=>`flex gap-3  py-2 px-5 items-center font-bold  ${isActive?"rounded-lg  bg-stone-200  dark:bg-gray-600 dark:text-gray-200 dark:border-gray-700 ":""}`}
        >
            {children}
        </NavLink>
    )
}