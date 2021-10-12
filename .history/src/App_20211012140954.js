import React, { useEffect } from 'react';
import './App.css'
import { Button } from './components/homeScreen/main/Button';
import { Title } from './components/homeScreen/main/Title';
import InfoBase from './InfoBase';

function App() {

  useEffect (() => {
    
  }, [])

  return (
    <div className="App">
    {/*Title size={1} /*1 = <h1>; 2 = <h2>; 3 = <h3>; 4 = <h4>*//*childrenTitle</Title>
      {/*Button onClick={null} /*function on click*/ /*/}{/*Button</Button*/
      /*Button onClick={null} size={2}>Button</Button*/}
    </div>
  );
}

export default App;

/*
commit1: adicionei o Title component, que recebe children e diferentes tamanhos como props, para múltiplos usos ao longo do projeto, primeiro 
componente da pasta homeScreen que já padronizei o seu css. Também adicionei o App.css para mudar o background-color do site. (Pedro)
-----
commit2: adicionei o Button component, que recebe children e dois diferentes tamanhos, segundo componente da pasta homeScreen que já padronizei o 
seu css. (Pedro)
*/