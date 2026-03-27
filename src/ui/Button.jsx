export default function Button({ category, onClick, disabled, children,styles }) {
    const base='cursor-pointer'
    const style = {
        primary:base,
    }
    return (
        <button className={`${style[category]} ${styles}`} onClick={onClick} disabled={disabled} > {children} </button>
    )
}