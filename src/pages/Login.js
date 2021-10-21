import logo from '../assets/logo.png'
import { Title } from '../components/Title'
import { Input } from '../components/Input'
import { useContext } from "react"
import { TranslateContext } from "../contexts"
import { DropdownMenu } from "../components/DropdownMenu"

export function Login() {

    const { language, setLanguage, translate } = useContext(TranslateContext)

    return (
        <div className='Login'>
            <header>
                <img src={logo} alt='logo' />
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
                onSelect={setLanguage}/>
            </header>
            <main className='Login-main'>
                <div className='Login-box'>
                    <Title size={4}>{translate('sign_in')}</Title>
                    <Input size={2} type='email' id='email' placeholder={translate('login-input')}/>
                    <Input size={2} type='password' id='email' placeholder={translate('password')}/>
                </div>
            </main>
        </div>
    )
}