export default function Logo() {
    return (
        <section className="pl-5 pt-3 flex border items-center w-60 space-x-3">
            <img
                src='/logo.jpg'
                alt="promptly logo"
                className="h-20 w-20 rounded-full "
            />   
            <h3 className="font-bold tracking-widest ">Promptly</h3>
        </section>
    )
}