import { createContext, useContext,useEffect,useState } from "react";
import Button from "./Button";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";

const menusContext=createContext();

export default function Menus({children}) {
    const [openId, setOpenId] = useState('');
    const [toggleBtnPosition, setToggleButtonPosition] = useState(null);


    function close() {
        setOpenId("")
     }
    function open(id) {
        setOpenId(id)
    }
    return (
        <menusContext.Provider value={{
            openId,
            toggleBtnPosition,
            close,
            open,
            setToggleButtonPosition,
        }}>
            {children}
        </menusContext.Provider>
    )
}

function Menu({children}) {
    return (
        <div>
            {children}
        </div>
    )
}

function List({ children, id }) {
    const { openId, toggleBtnPosition, close } = useContext(menusContext);

    const ref = useOutsideClick(close, false);

    useEffect(function () {
        const media = window.matchMedia("(min-width:768px)");
        function handleChange(e) {
            if (e.matches) {
                close();
            }  
        };
        media.addEventListener("change", handleChange);

        return function () {
            media.removeEventListener("change", handleChange);
        };
        
    }, [close])
    
    if (openId !== id) return null;
    
    return (    
        createPortal(
            <ul
                className="w-50 fixed top-20 bg-gray-800 rounded-lg right-30 left-120 "
                ref={ref}
                style={{ left: toggleBtnPosition.x+90, top: toggleBtnPosition.y+20 }}
            >
             {children}
            </ul>,document.body   
        )
    )
}
function ListButton({ children, onClick }) {
    const { close } = useContext(menusContext);
    
    function handleClick() {
        onClick?.();
        close();
    }
    return(
        <li className="w-45 py-5 pl-4 text-[clamp(1rem,1vw,3rem)] ">
            <Button category='primary' styles='w-1/1 flex' onClick={handleClick} > {children} </Button>
        </li>
    )
}
function ToggleButton({ children, id}) {
    const { close, open, setToggleButtonPosition, openId } = useContext(menusContext);

    function handleClick(e) {
        e.stopPropagation();

        const rect = e.target.closest('button').getBoundingClientRect();

        setToggleButtonPosition({
            x:  rect.right- 310,
            y: rect.bottom,
        });
        open

        openId === '' || openId !== id ? open(id) : close();
    }

    return (
        <Button category='primary' onClick={handleClick} > {children} </Button>
    )
}

Menus.Menu = Menu;
Menus.List = List;
Menus.ListButton = ListButton;
Menus.ToggleButton = ToggleButton;