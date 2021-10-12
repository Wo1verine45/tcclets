import React from 'react';
import './styles.css';

export  default({title, items}) => {
  return (
      <div className="movie--container">
          <h2>{title}</h2>
          <div className="movie--area">
            <div className="movie--list">
              {items.results.length > 0 && items.results.map((item, key) => (
                <div key={key} className="movie--row">
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                </div>
              ))}
            </div>
          </div>
      </div>

  );
}
