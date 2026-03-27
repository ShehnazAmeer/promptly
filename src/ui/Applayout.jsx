import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

export default function Applayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet/>
            </main>
            
        </>
    )
}