import { CgCircleci } from "react-icons/cg";
export default function Logo() {
    return (
        <section className="pl-5 pt-3 flex border items-center w-60 space-x-3">
           <h2 > <CgCircleci className="h-7 w-7"/> </h2>
            <h3 className="font-bold tracking-widest ">Promptly</h3>
        </section>
    )
}