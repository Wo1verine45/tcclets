import './Button.css'

export function Button ({ children, onClick, size }) {
    if (size === 1) {
        return (
            <button className='Button-button-1' onClick={onClick}>{children}</button>
        )
    } else {
        return (
            <button className='Button-button-2' onClick={onClick}>{children}</button>
        )
    }
}