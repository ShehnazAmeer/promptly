import { useEffect, useRef } from "react";

export function useOutsideClick(onClick, listenCapturingType=true) {
    const ref = useRef();
    useEffect(function () {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) onClick();
        }
        document.addEventListener('click', handleClick, listenCapturingType);
       
    }, [onClick, listenCapturingType]);

    return ref;
}