import './AppNet.css';
import { useContext, useState } from 'react';
import { MovieContext } from './../../contextAPI/MovieContext';

import Tmdb from '../../Tmdb';
import HeaderApp from '../../components/header-app/HeaderApp';
import Footer from '../../components/footer/Footer';
import FilmeDestaque from '../../components/filme-destaque/FilmeDestaque';
import ListaFilmes from '../../components/lista-filmes/ListaFilmes';

export default () => {

  const [ load, setLoad ] = useState();
  const { movieList } = useContext(MovieContext);

  let getList = async () => {
    let list = await Tmdb.getHomeList();
    setLoad(list);
  }
  
  window.addEventListener("load", getList());

  return(
    <div>
      <HeaderApp/>
        {
          load ?
            <div className="app-container">  
              <FilmeDestaque/>
              <div className="list-movie-container">
                {             
                  movieList.map((item, key) => <ListaFilmes key={key} title={item.title} items={item.items}/>)
                }
              </div>
            </div>
          :
            <div className="load-container">
              <h1>Carregando...</h1>
            </div>
        }
      <Footer/>
    </div>
  );
}