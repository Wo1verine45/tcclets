import { useContext } from "react"
import { Button } from "../../components/Button"
import { DropdownMenu } from "../../components/DropdownMenu"
import { Title } from '../../components/Title'
import { TranslateContext } from "../../contexts"
import { Registration } from "../../components/Registration/Registration"
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './homescreen.css';


function HomeScreen() {

  const { language, setLanguage, translate } = useContext(TranslateContext)

    return (
      <div className='HomeScreen'>
        <header className='HomeScreenHeader'>
          <div className='Logo'>
            <img src={logo} alt='logo'/>
          </div>
          <div className='Head'>
            <Link to='/login'>
              <Button onClick={null} size={2}>{translate('sign_in')}</Button>
            </Link>
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
        <div class="bg-img" src="https://wallpapercave.com/wp/wp3327517.jpg"></div>
        <main className='HomeScreenMain'>
          <Title size={1}>{translate('main_title')}</Title>
          <Title size={2}>{translate('subtitle')}</Title>
          <Title size={3}>{translate('signin_label')}</Title>
          <Registration />
        </main>
      </div>
  )
}

export default HomeScreen;