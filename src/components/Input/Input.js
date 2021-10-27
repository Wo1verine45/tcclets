import { useState, useContext } from 'react'
import { TranslateContext } from '../../contexts'
import './Input.css'

export function Input({ size, type, id, placeholder, value, onChange, showButton, inputMessage, message, typeMessage }) {

    const { translate } = useContext(TranslateContext)

    const [ typeState, setTypeState ] = useState(type)

    function handleOnChange(evt) {
        onChange(evt)
    }

   if (size === 1) {
       if (showButton === 0) {
           return (
                <input className='Input-input-1' type={typeState} id={id} name={id} placeholder={placeholder} value={value} onChange={handleOnChange}/>
            )
        } else {
            return (
                <div className='input-div'>
                    <input className='Input-input-1' type={typeState} id={id} name={id} placeholder={placeholder} value={value} onChange={handleOnChange}/>
                    <p className='show_button-1' onClick={() => {if (typeState === 'password') {
                        setTypeState('text')
                    } else {
                        setTypeState('password')
                    }}}>{typeState === 'password' ? translate('show') : translate('hide')}</p>
                </div>
            )
        } 
   } else if (size === 2) {
        if (showButton === 0) {
            return (
                <input className='Input-input-2' type={typeState} id={id} name={id} placeholder={placeholder} value={value} onChange={handleOnChange}/>
            )
        } else {
            return (
                <div className='input-div'>
                    <input className='Input-input-2' type={typeState} id={id} name={id} placeholder={placeholder} value={value} onChange={handleOnChange}/>
                    <p className='show_button-2' onClick={() => {if (typeState === 'password') {
                        setTypeState('text')
                    } else {
                        setTypeState('password')
                    }}}>{typeState === 'password' ? translate('show') : translate('hide')}</p>
                </div>
            )
        } 
   } else {
        if (showButton === 0) {
            return (
                <input className='Input-input-3' type={typeState} id={id} name={id} placeholder={placeholder} value={value} onChange={handleOnChange}/>
            )
        } else {
            return (
                <div className='input-div'>
                    <input className='Input-input-3' type={typeState} id={id} name={id} placeholder={placeholder} value={value} onChange={handleOnChange}/>
                    <p className='show_button-3' onClick={() => {if (typeState === 'password') {
                        setTypeState('text')
                    } else {
                        setTypeState('password')
                     }}}>{typeState === 'password' ? translate('show') : translate('hide')}</p>
                </div>
            )
        } 
   }
}