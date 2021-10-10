import React from 'react';
import './App.css'
import { Title } from './components/homeScreen/main/Title';

function App() {

  return (
    <div className="App">
      <Title size={1} /*1 = <h1>; 2 = <h2>;...*/>{/*children*/}Title</Title>
      <Title size={2}>Subtitle</Title>
      <Title size={3}>Subtitle2</Title>
      <Title size={4}>Localtitle</Title>
    </div>
  );
}

export default App;

/*
commit: adicionei o Title component, que recebe children e diferentes tamanhos como props, para múltiplos usos ao longo do projeto, primeiro 
componente da pasta homeScreen que já padronizei o seu css. Também adicionei o App.css para mudar o background-color do site.
*/