import React, { useEffect, useState } from 'react';
import Movies from './components/MovieList/Movies';
import Header  from './components/homeScreen/Header'
//import { Button } from './components/homeScreen/main/Button';
//import { Title } from './components/homeScreen/main/Title';
import InfoBase from './InfoBase';
import './App.css'
import { DropdownMenu } from './components/homeScreen/HomeScreenHeader/DropdownMenu/DropdownMenu';
import { Title } from './components/homeScreen/main/Title/Title';

export default() => {

  const [language, setLanguage] = useState('portuguese')

  function translate(textId) {
    if (language === 'english') {
      if (textId === 'welcome_message') {
        return 'Welcome'
      }
    } else if (language === 'portuguese') {
      if (textId === 'welcome_message') {
        return 'Bem-Vindo'
      }
    }
  }

  function welcomeMessage() {
    if (language === 'english') {
      return 'Welcome'
    } else if (language === 'portuguese') {
      return 'Bem-vindo'
    }
  }

  /*
  const [movieList, setMovieList] = useState([]);

  useEffect (() => {
    const LoadList = async () => {
      //Pegando toda a lista
      let list = await InfoBase.getHomeList();
      setMovieList(list);
    }
    
    LoadList();
  }, [])
  */

  return (
    <div className="page">
      {//<section className="lists">
        //{/*O Map ira iterar sobre a lista, criando um loop e fazendo sempre que houver informações*/}
        //{movieList.map((item, key) => (

          /* O Componente Movie ira receber duas props, o title, e o items, que e a requisição com o await*/
          //<Movies key={key} title={item.title} items={item.items}/>
        //))}
      //</section>
      //<Header />    
      //<footer>
        //Aqui vai as informações referente ao projeto
      //</footer>
    //</div>
  //);
}
      <DropdownMenu id='language' initialValue={language} options={[
        {
          label: 'Português',
          value: 'portuguese'
        },
        {
          label: 'English',
          value: 'english'
        }
      ]} setLanguage={setLanguage}/>
      <Title size={1}>{translate('welcome_message')}</Title>
    </div>
  )
}


/*
commit1: adicionei o Title component, que recebe children e diferentes tamanhos como props, para múltiplos usos ao longo do projeto, primeiro 
componente da pasta homeScreen que já padronizei o seu css. Também adicionei o App.css para mudar o background-color do site. (Pedro)
-----
commit2: adicionei o Button component, que recebe children e dois diferentes tamanhos, segundo componente da pasta homeScreen que já padronizei o 
seu css. (Pedro)
*/