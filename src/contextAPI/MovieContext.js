import React, { useState, useEffect } from 'react';
import Tmdb from '../Tmdb';

export const MovieContext = React.createContext();

export const MovieContextProvider = props => {

  const [ featuredMovie, setFeaturedMovie ] = useState();
  const [ movieList, setMovieList ] = useState([]);

  useEffect(() => {
    let windowLoad = async () => {
      //TODOS OS FILMES
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //FILMES EM DESTAQUE
      let trending = list.filter(val => val.slug == "trending"),
      randomFilm = Math.floor(Math.random() * (trending[0].items.results.length - 1)),
      chosen = trending[0].items.results[randomFilm];
      setFeaturedMovie(chosen);
    }
    windowLoad();
  }, []);

  return(
    <MovieContext.Provider value={{ featuredMovie, movieList }}>
      {props.children}
    </MovieContext.Provider>
  )
}