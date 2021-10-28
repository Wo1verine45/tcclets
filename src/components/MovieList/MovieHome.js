import { useState, useEffect} from 'react';
import React from 'react'
import Movies from '../../components/MovieList/Movies'
import InfoBase from '../../InfoBase'

function MovieHome() {
    const [movieList, setMovieList] = useState([]);

    useEffect (() => {
    const LoadList = async () => {
      //Pegando toda a lista
      let list = await InfoBase.getHomeList();
      setMovieList(list);


      /*let trending = list.filter(i=>i.slug = 'trending');
      let random = Math.floor(Math.random() *(originals[0].items.result.length - 1));
      let chose = trending[0].items.results[random]
      let choseinfo = await InfoBase.Info(chose.id, 'tv') */
    }
    
    LoadList();
  }, [])
  return (
    <div>
      {/*O Map ira iterar sobre a lista, criando um loop e fazendo sempre que houver informações*/}
      {movieList.map((item, key) => (

    /*O Componente Movie ira receber duas props, o title, e o items, que e a requisição com o await*/
    <Movies key={key} title={item.title} items={item.items}/>
))}
    </div>
  )
}

export default MovieHome
