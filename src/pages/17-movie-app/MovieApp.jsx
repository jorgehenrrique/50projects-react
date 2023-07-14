import { useEffect, useState } from 'react';
import './MovieApp.css';

export default function MovieApp() {
  useEffect(() => {
    document.title = 'Movie App';
  }, []);

  const [data, setData] = useState();

  const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
  const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(res => setData(res.results))
  }, []);
  console.log(data)

  return (
    <div className="body-17">
      <header className='header-17'>
        <input type="search" placeholder='Buscar' />
      </header>

      <main className='main-17'>
        {data && data.map((movie, idx) => {
          return (
            <div key={idx} className="movie-17">
              <img src={`${IMG_PATH + movie.poster_path}`} alt={movie.title} />
              <div className="movie-info-17">
                <h3>{movie.title}</h3>
                <span className={`${movie.vote_average < 5 ? 'red-17' : ''} 
                  ${movie.vote_average >= 5 && movie.vote_average < 8 ? 'orange-17' : ''}
                  ${movie.vote_average >= 8 ? 'green-17' : ''}`}
                >{movie.vote_average}</span>
              </div>
              <div className="visao-geral-17">
                <h3>Visão geral</h3>
                {movie.overview}
              </div>
            </div>
          )
        })}

      </main>
    </div >
  );
}