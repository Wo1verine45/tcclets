import logo from '../assets/logo.png'
import { Title } from '../components/Title'
import { Input } from '../components/Input'
import { useContext, useState } from "react"
import { TranslateContext } from "../contexts"
import { DropdownMenu } from "../components/DropdownMenu"
import { Button } from "../components/Button"

export function Login() {

    const { language, setLanguage, translate } = useContext(TranslateContext)
    const [ type, setType ] = useState('password')

    function handleOnSubmit(evt) {
        evt.preventDefault()

        console.log('Formulário enviado com sucesso!')
    }

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
                    <form className='Login-form' onSubmit={handleOnSubmit}>
                        <Input size={2} type='email' id='email' placeholder={translate('login-input')}/>
                        <Input size={2} type={type} id='email' placeholder={translate('password')}/>
                        <p onClick={() => {if (type === 'password') {
                            setType('text')
                        } else {
                            setType('password')
                        }}}>{type === 'password' ? translate('show') : translate('hide')}</p>
                        <Button onClick={null} size={3} type='submit'>{translate('sign_in')}</Button>
                        <p>{translate('first_time')} <a href='#'>{translate('sigmudn_freud')}</a>.</p>
                    </form>
                </div>
            </main>
        </div>
    )
}