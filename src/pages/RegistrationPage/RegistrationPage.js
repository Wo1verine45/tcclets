import logo from '../../assets/LETSFLIX.png'
import './RegistrationPage.css'
import { Button } from "../../components/Button"
import { useContext, useState } from 'react'
import { TranslateContext } from '../../contexts'
import { Link } from "react-router-dom";
import { Title } from '../../components/Title'
import { Input } from "../../components/Input"

function RegistrationPage() {

    const { translate, emailValue, passwordValue, setPasswordValue } = useContext(TranslateContext)

    const [errorMessage, setErrorMessage] = useState('')

    function OnChangePasswordValue(evt) {
        
        setPasswordValue(evt.target.value)
    }

    function handleOnSubmit(evt) {
        evt.preventDefault()

        if (passwordValue === '') {
            setErrorMessage(translate('password-required'))
        } else {
            console.log('certo')
        }
    }

    return (
        <div className='RegistrationPage'>
            <header className='RegistrationPageHeader'>
                <div className='Logo'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='RegistrationPageHead'>
                    <Link to='/login' className='Registration-'>
                        <Button onClick={null} size={2}>{translate('sign_in')}</Button>
                    </Link>
                </div>
            </header>
            <main className='RegistrationPage-main'>
                <div className='RegistrationPage-password'>
                    <Title  className='RegistrationPage-title' size={3}>{translate('registration-title')}</Title>
                    <p className='email'>Email</p>
                    <p className='emailValue'>{emailValue}</p>
                    <form className='RegistrationPage-form' onSubmit={handleOnSubmit}>
                        <Input className='RegistrationPage-input' size={3} type='password' id='registration_password' placeholder={translate('enter_password')} value={passwordValue} onChange={OnChangePasswordValue} showButton={1}/>
                        <div className='Registration-errorMessage'>
                            {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
                        </div>
                        {passwordValue ? 
                        <Link to='/login' className='Link'>
                            <Button onClick={null} size={4} type='submit'>{translate('confirm')}</Button>
                        </Link> : <Button onClick={null} size={4} type='submit'>{translate('confirm')}</Button>}
                    </form>
                </div>
            </main>
        </div>
    )

}

export default RegistrationPage;