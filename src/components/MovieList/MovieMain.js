import React, { useEffect,useState } from 'react';
import Movies from './Movies'
import Feature from '../../Feature'
import InfoBase from '../../InfoBase'
import HeaderLogin from '../Header/HeaderLogin';

export default () => {
    const [movieList, setMovieList] = useState([]);
    const [featuredData, setfeaturedData] = useState(null)
    const [bgColor, setbgColor] = useState(false);
  
    useEffect (() => {
    const LoadList = async () => {
      //Pegando toda a lista
      let list = await InfoBase.getHomeList();
      setMovieList(list);
  
  
      let documentary = list.filter(i=>i.slug === 'documentary');
      let random = Math.floor(Math.random() *(documentary[0].items.results.length - 1));
      let chose = documentary[0].items.results[random];
      let choseInfo = await InfoBase.getMovieInfo(chose.id, 'tv');
      setfeaturedData(choseInfo);
      console.log(choseInfo)
    }
    
    LoadList();
  }, [])
  
  useEffect (() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setbgColor(true);
      } else {
        setbgColor (false)
      }
    }
      window.addEventListener('scroll', scrollListener)
  
      return () => {
        window.removeEventListener('scroll',scrollListener)
      }
  
  },[])
  return (
    <div>
           <HeaderLogin bg={bgColor}/>
      {featuredData &&
      <Feature item={featuredData}/>  
      }
      <section className="list">
      {/*O Map ira iterar sobre a lista, criando um loop e fazendo sempre que houver informações*/}
      {movieList.map((item, key) => (

    /*O Componente Movie ira receber duas props, o title, e o items, que e a requisição com o await*/
    <Movies key={key} title={item.title} items={item.items}/>
    ))}
  </section>
    </div>
  )
}
