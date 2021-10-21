import { useContext } from "react"
import { Button } from "../components/Button/Button"
import { DropdownMenu } from "../components/DropdownMenu/DropdownMenu"
import { Title } from '../components/Title'
import { TranslateContext } from "../contexts"
import { Registration } from "../components/Registration/Registration"
import logo from '../assets/logo.png'

export function HomeScreen() {

  const { language, setLanguage, translate } = useContext(TranslateContext)

    return (
      <div className='HomeScreen'>
        <header className='HomeScreenHeader'>
          <div className='Logo'>
            <img src={logo} alt='logo'/>
          </div>
          <div className='Head'>
            <Button onClick={null} size={2}>{translate('sign_in')}</Button>
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
          </div>
        </header>
        <main className='HomeScreenMain'>
          <Title size={1}>{translate('main_title')}</Title>
          <Title size={2}>{translate('subtitle')}</Title>
          <Title size={3}>{translate('signin_label')}</Title>
          <Registration />
        </main>
      </div>
  )
}