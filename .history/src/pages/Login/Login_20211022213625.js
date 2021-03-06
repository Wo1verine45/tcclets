import logo from '../../assets/LETSFLIX.png'
import { Title } from '../../components/Title'
import { Input } from '../../components/Input'
import { useContext, useState } from "react"
import { TranslateContext } from "../../contexts"
//import { DropdownMenu } from "../components/DropdownMenu"
import { Button } from "../../components/Button"
import { Link } from 'react-router-dom'

function Login() {

    const { /*language, setLanguage,*/ translate } = useContext(TranslateContext)
    const [ type, setType ] = useState('password')

    function handleOnSubmit(evt) {
        evt.preventDefault()

        console.log('Formulário enviado com sucesso!')
    }

    return (
        <div className='Login'>
            <header>
                <div className='Logo'>
                    <img src={logo} alt='logo' />
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
                        <Input size={2} type='email' id='email' placeholder={translate('login-input')}/>
                        <Input size={2} type={type} id='email' placeholder={translate('password')}/>
                        <p className='show_button' onClick={() => {if (type === 'password') {
                            setType('text')
                        } else {
                            setType('password')
                        }}}>{type === 'password' ? translate('show') : translate('hide')}</p>
                        <Button onClick={null} size={3} type='submit'>{translate('sign_in')}</Button>
                        <p className='first_time'>{translate('first_time')} 
                            <Link to='/'> <mark>{translate('sigmudn_freud')}</mark></Link>.
                        </p>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Login;