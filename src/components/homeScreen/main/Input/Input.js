import { useState } from "react"
import './Input.css'

export function Input({ size, type, id, placeholder }) {

    const [value, setValue] = useState('')

    function handleOnChange(evt) {
        setValue(evt.target.value)
    }

   if (size === 1) {
       return (
           <input className='Input-input-1' type={type} id={id} name={id} placeholder={placeholder} value={value} onChange={handleOnChange}/>
       )
   } else if (size === 2) {
        return (
            <input className='Input-input-2' type={type} id={id} name={id} placeholder={placeholder} value={value} onChange={handleOnChange}/>
        )
   } else {
        return (
            <input className='Input-input-3' type={type} id={id} name={id} placeholder={placeholder} value={value} onChange={handleOnChange}/>
        )
   }
}