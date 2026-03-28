export default function Button({ category, onClick, disabled, children, styles }) {

    const base='cursor-pointer focus:outline-none focus:ring focus:ring-offset-2 tracking-wide'
    const style = {
        primary: base,
        secondary: `${base} bg-gray-100 text-gray-800 font-bold px-4 py-3 rounded-full`,
        basic:`${base}`
    }
    return (
        <button className={`${style[category]} ${styles}`} onClick={onClick} disabled={disabled} > {children} </button>
    )
}