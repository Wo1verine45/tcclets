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
                <Title size={3}>{translate('registration-title')}</Title>
                <p>Email</p>
                <p>{emailValue}</p>
                <form className='Registration-password' onSubmit={handleOnSubmit}>
                    <Input size={2} type='password' id='registration_password' placeholder={translate('enter_password')} value={passwordValue} onChange={OnChangePasswordValue} showButton={1}/>
                    <div className='Registration-errorMessage'>
                        {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
                    </div>
                    <Button onClick={null} size={3} type='submit'>{translate('confirm')}</Button>
                </form>
            </main>
        </div>
    )

}

export default RegistrationPage;