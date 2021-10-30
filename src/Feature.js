import React from 'react'
import './Feature.css'


export default ({ item }) => {
  console.log(item)

  let FirstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push (item.genres[i].name);
  }

  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition:'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
    <div className="featured--2">
      <div className="featured--3">
        <div className="name-f">{item.original_name}</div>
          <div className="info-f">
            <div className="points-f">{item.vote_average} Pontos</div>
              <div className="year-f">{FirstDate.getFullYear()}</div>
                <div className="season-f">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                </div>
                  <div className="description-f" >{item.overview}</div>
                    <div className="buttons-f">
                      <a href={`/watch/${item.id}`} className="watch">Assistir</a>
                      <a href={`/list/add/${item.id}`} className="myList">Minha Lista</a>
                    </div>
                      <div className="genres-f"><strong>Gêneros: </strong>{genres.join(', ')}</div>
   
      </div>
    </div>
   
    </section>

  )
}

