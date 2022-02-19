import './Home.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import bannerInfantil from '../../media/banner-infantil.png';
import video from '../../media/video-tv.m4v';

export default () => {

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("key")){
      navigate("/profiles");
    }
  }, []);

  return(
    <div>
      <Header/>    
      <div className="home-container">
        <section className="section-1">
          <h1>Filmes, séries e muito mais. Sem limites.</h1>
          <h2>Assista onde quiser. Cancele quando quiser.</h2>
          <p>Pronto para assistir? Acesse a página de cadastro para criar sua assinatura.</p>
          <Link to="/cadastro">Começar</Link>
        </section>

        <section className="section-2">
          <div className="row-box">
            <div className="box section-2-content-left">
              <h1>Aproveite na TV.</h1>
              <p>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
            </div>
            <div className="box section-2-content-right">
              <video id="video" autoPlay muted loop>
                <source src={video} type="video/mp4"/>
              </video>
            </div>
          </div>
        </section>

        <section className="section-3">
          <div className="row-box-section-3">
            <div className="box section-3-content-left">
              <img src={bannerInfantil} alt="Banner Infantil"/>
            </div>
            <div className="box section-3-content-right">
              <h1>Crie perfis para crianças.</h1>
              <p>Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
}