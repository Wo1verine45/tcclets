import logo from '../../assets/LETSFLIX.png'
import './RegistrationPage.css'
import { Button } from "../../components/Button"
import { useContext } from 'react'
import { TranslateContext } from '../../contexts'

function RegistrationPage() {

    const { translate } = useContext(TranslateContext)

    return (
        <div className='RegistrationPage'>
            <header className='RegistrationPageHeader'>
                <div className='Logo'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='RegistrationPageHead'>
                    <Button onClick={null} size={2}>{translate('sign_in')}</Button>
                </div>
            </header>
            <main className='RegistrationPage-main'>

            </main>
        </div>
    )

}

export default RegistrationPage;