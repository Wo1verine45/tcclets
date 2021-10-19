import React, { /*useEffect, useState*/ } from 'react';
//import Movies from './components/MovieList/Movies';
//import Header  from './components/homeScreen/Header'
import { Button } from './components/homeScreen/main/Button';
//import { Title } from './components/homeScreen/main/Title';
//import InfoBase from './InfoBase';
import './App.css'
//import { DropdownMenu } from './components/homeScreen/HomeScreenHeader/DropdownMenu/DropdownMenu';
import { Input } from './components/homeScreen/main/Input/Input';
//import { Title } from './components/homeScreen/main/Title/Title';

export default() => {

  /*const [language, setLanguage] = useState('portuguese')

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
  */

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
      {/*<DropdownMenu id='language' initialValue={language} options={[
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
    )*/}
    <Input size={1} type='email' id='email' placeholder='Email'/>
    <Input size={2} type='text' id='name' placeholder='Name'/>
    <Input size={3} type='password' id='password' placeholder='Password'/>
    <Button onClick={null} size={1}>Vamos lá</Button>
    </div>
  )
}


/*
commit1: adicionei o Title component, que recebe children e diferentes tamanhos como props, para múltiplos usos ao longo do projeto, primeiro 
componente da pasta homeScreen que já padronizei o seu css. Também adicionei o App.css para mudar o background-color do site. (Pedro)
-----
commit2: adicionei o Button component, que recebe children e dois diferentes tamanhos, segundo componente da pasta homeScreen que já padronizei o 
seu css. (Pedro)
-----
commit3: adicionei o DropdownMenu component, que recebe id que vai ser usado como id e name, recebe o initialValue que é o valor padrão, recebe 
options que é uma lista com objetos dentro, cada objeto tem label e value que são o children e o valor respectivamente, por último recebe o 
setLanguage, a função pra mudar o estado. Para adicionar mais línguas é só adicionar mais objetos na lista options. Junto com esse component que
usei para o cliente selecionar a língua, tem a função translate que serve para traduzir cada parte do site, que tem que adicionar a tradução para
cada coisa nova colocada no site
*/