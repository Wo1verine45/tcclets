import { Title } from '../../components/Title'
import { Input } from '../../components/Input'
import { useContext, useState } from "react"
//import { DropdownMenu } from "../components/DropdownMenu"
import { TranslateContext } from '../../contexts'
import { Button } from "../../components/Button"
import { Link } from 'react-router-dom'
import './Login.css'
import logo from '../../assets/LETSFLIX.png'
import MovieMain from '../../components/MovieList/MovieMain'
import Routes from '../../routes/routes'
import { Router } from 'react-router'



function Login() {

    const [emailValueLogin, setEmailValueLogin] = useState('')
    const [passwordValueLogin, setPasswordValueLogin] = useState('')

    const { translate, emailValue, passwordValue } = useContext(TranslateContext)

    function OnChangeEmailValueLogin(evt) {
        
        setEmailValueLogin(evt.target.value)
    }

    function OnChangePasswordValueLogin(evt) {
        
        setPasswordValueLogin(evt.target.value)
    }

    function handleOnSubmit(evt) {
        evt.preventDefault()
        
     
    }  

    return (
        <div className='Login'>
            <header>
                <div className='Logo'>
                    <img src={logo} alt='logo'/>
                </div>
                {/*esse dropdown menu vai estar no footer no final
                <DropdownMenu id='language'
                initialValue={language} 
                options={
                    [
                {
                    label: 'Português',
                    value: 'portuguese'
                },
                {
                    label: 'English',
                    value: 'english'
                }
                    ]
                } 
            onSelect={setLanguage}/>*/}
            </header>
            <main className='Login-main'>
                <div className='Login-box'>
                    <Title size={4}>{translate('sign_in')}</Title>
                    <form className='Login-form' onSubmit={handleOnSubmit}>
                        <Input size={2} type='email' id='email' placeholder={translate('login-input')} value={emailValueLogin} onChange={OnChangeEmailValueLogin} showButton={0}/>
                       <Input size={2} type='password' id='email' placeholder={translate('password')} value={passwordValueLogin} onChange={OnChangePasswordValueLogin} showButton={1}/>
                       <Button onClick={() => {if (emailValueLogin === emailValue && passwordValueLogin === passwordValue ) {
                            
                        }}} size={3} type='submit'>{translate('sign_in')}</Button>
                        <p className='first_time'>{translate('first_time')} 
                            <Link to='/registration'> <mark className="mark-t1">{translate('sigmudn_freud')}</mark></Link>.
                        </p>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Login;