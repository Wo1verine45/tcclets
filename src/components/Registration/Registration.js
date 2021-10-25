import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import './Registration.css'
import { useContext, useState } from "react";
import { TranslateContext } from "../../contexts";

export function Registration() {

    const { translate } = useContext(TranslateContext)
    const [value, setValue] = useState('')
    const [ errorMessage, setErrorMessage ] = useState('')

    function OnChange(evt) {
        
        setValue(evt.target.value)
    }

    function handleOnSubmit(evt) {
        evt.preventDefault()

        if (value === '') {
            setErrorMessage(translate('email-require'))
        } else {
            console.log('Formulário enviado com sucesso')
            console.log('Email:', value) 
        }
    }

    return (
        <form className='Registration' onSubmit={handleOnSubmit}>
            <div className='Registration-form'>
                <Input size={1} type='email' id='email' placeholder='Email' onChange={OnChange} value={value}/>
                <Button onClick={null} size={1} type='submit'>{translate('signup-bottom')}</Button>
            </div>
            <div className='Registration-errorMessage'>
                {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
            </div>
        </form>
    )
}