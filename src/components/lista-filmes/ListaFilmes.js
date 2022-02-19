import './ListaFilmes.css';
import { useContext, useState } from 'react';
import { MovieContext } from '../../contextAPI/MovieContext';

export default props => {
  
  const [ scrollX, setScrollX ] = useState(0);

  //MOVER PARA A ESQUERDA (VOLTAR)
  function leftMove(){
    let scroll = scrollX + Math.round(document.documentElement.scrollWidth / 2);

    if(scroll > 0){
      scroll = 0;
    }

    setScrollX(scroll);
  }

  //MOVER PARA A DIREITA (AVANÇAR)
  function rightMove(){
    let scroll = scrollX - Math.round(document.documentElement.scrollWidth / 2),
        widthList = props.items.results.length * 163;

    if((document.documentElement.scrollWidth - widthList) > scroll){
      scroll = (document.documentElement.scrollWidth - widthList) - 40;
    }

    setScrollX(scroll);
  }

  return(
    <div className="list-container">
      <h1>{props.title}</h1>

      <ul className="arrow-buttons">
        <li onClick={leftMove} className="button-back"><ion-icon name="chevron-back-outline"></ion-icon></li>
        <li onClick={rightMove} className="button-next"><ion-icon name="chevron-forward-outline"></ion-icon></li>
      </ul>

      <div className="list-box">
        <div className="list" style={{
          width: props.items.results.length * 163,
          marginLeft: scrollX
        }}>
          {
            props.items.results.map(item => (
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}