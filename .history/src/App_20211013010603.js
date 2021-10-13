import React, { useEffect, useState } from 'react';
import Movies from './components/MovieList/Movies';
import Header  from './components/homeScreen/Header'
//import { Button } from './components/homeScreen/main/Button';
//import { Title } from './components/homeScreen/main/Title';
import InfoBase from './InfoBase';
import './App.css'

export default() => {

  const [movieList, setMovieList] = useState([]);

  useEffect (() => {
    const LoadList = async () => {
      //Pegando toda a lista
      let list = await InfoBase.getHomeList();
      setMovieList(list);
    }
    
    LoadList();
  }, [])

  return (
    <div className="page">
      <section className="lists">
        {/*O Map ira iterar sobre a lista, criando um loop e fazendo sempre que houver informações*/}
        {movieList.map((item, key) => (

          /* O Componente Movie ira receber duas props, o title, e o items, que e a requisição com o await*/
          <Movies key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <Header />    
    {/*Title size={1} /*1 = <h1>; 2 = <h2>; 3 = <h3>; 4 = <h4>*//*childrenTitle</Title>
      {/*Button onClick={null} /*function on click*/ /*/}{/*Button</Button*/
      /*Button onClick={null} size={2}>Button</Button*/}
      <footer>
        
      </footer>
    </div>
  );
}


/*
commit1: adicionei o Title component, que recebe children e diferentes tamanhos como props, para múltiplos usos ao longo do projeto, primeiro 
componente da pasta homeScreen que já padronizei o seu css. Também adicionei o App.css para mudar o background-color do site. (Pedro)
-----
commit2: adicionei o Button component, que recebe children e dois diferentes tamanhos, segundo componente da pasta homeScreen que já padronizei o 
seu css. (Pedro)
*/