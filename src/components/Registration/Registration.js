import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import './Registration.css'
import { useContext, useState} from "react";
import { TranslateContext } from "../../contexts";
import { Link } from "react-router-dom";

export function Registration() {

    const { translate, emailValue, setEmailValue } = useContext(TranslateContext)
    const [errorMessage, setErrorMessage] = useState('')

    function OnChangeEmailValue(evt) {
        
        setEmailValue(evt.target.value)
    }

    function handleOnSubmit(evt) {
        evt.preventDefault()

        if (emailValue === '') {
            setErrorMessage(translate('email-require'))
        } else {
            console.log('certo')
        }
    }

    return (
        <form className='Registration' onSubmit={handleOnSubmit}>
            <div className='Registration-form'>
                <Input size={1} type='email' id='email' placeholder='Email' onChange={OnChangeEmailValue} value={emailValue} showButton={0}/>
                {emailValue ? 
                <Link to='/registration' className='Link'>
                    <Button onClick={null} size={1} type='submit'>{translate('signup-bottom')}</Button>
                </Link> : <Button onClick={null} size={1} type='submit'>{translate('signup-bottom')}</Button>}
            </div>
            <div className='Registration-errorMessage'>
                {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
            </div>
        </form>
    )
}