import { useEffect, useRef, useState } from 'react';
import './MovieApp.css';

function getMovies(url) {
  return fetch(url)
    .then(res => res.json())
    .then(res => res.results)
}

export default function MovieApp() {
  useEffect(() => {
    document.title = 'Movie App';
  }, []);

  const [data, setData] = useState();
  const search = useRef();

  const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
  const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

  useEffect(() => {
    fetchData(API_URL);
  }, []);

  const fetchData = async (url) => {
    try {
      const movies = await getMovies(url);
      setData(movies);
    } catch {
      alert('Erro ao obter os filmes.');
    }
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const inputSearch = search.current.value.trim();
      fetchData(SEARCH_API + inputSearch);
      search.current.value = '';
    }
  };

  const home = () => {
    fetchData(API_URL);
  };

  return (
    <div className="body-17">
      <header className='header-17'>
        <button onClick={home}>Home</button>
        <input type="search" placeholder='Buscar' ref={search} onKeyUpCapture={handleSearch} />
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
              <div className="overview-17">
                {movie.overview && <h3>Overview</h3>}
                {movie.overview}
              </div>
            </div>)
        })}
      </main>
    </div >
  );
}