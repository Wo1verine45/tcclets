import './Button.css'

export function Button ({ children, onClick, size, type }) {
    if (size === 1) {
        return (
            <button className='Button-button-1' onClick={onClick} type={type}>{children}</button>
        )
    } else if (size === 2) {
        return (
            <button className='Button-button-2' onClick={onClick} type={type}>{children}</button>
        )
    } else {
        return (
            <button className='Button-button-3' onClick={onClick} type={type}>{children}</button>
        )
    }
}