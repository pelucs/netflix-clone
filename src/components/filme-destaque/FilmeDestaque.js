import './FilmeDestaque.css';
import { useContext } from 'react';
import { MovieContext } from '../../contextAPI/MovieContext';

export default () => {

  const { featuredMovie } = useContext(MovieContext);
  
  return(
    <>
      {
        featuredMovie &&
        <div className="destaque-container"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover" }}>

          <div className="shadow-box shadow-box-top">
            <div className="shadow-box shadow-box-left">
              <div className="info-film">
                <h1>{featuredMovie.title || featuredMovie.original_title}</h1>
                <p>{featuredMovie.overview}</p>
                <span><ion-icon name="checkbox"></ion-icon> Média de votos <strong>{featuredMovie.vote_average}</strong></span>
                <div className="inputs-box-destaque">
                  <button><ion-icon name="play"></ion-icon>Assistir</button>
                  <button><ion-icon name="add"></ion-icon>Assistir mais tarde</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      }    
    </>
  )
}