import './Footer.css';

import logo from '../../media/logo.png';

export default () => {
  return(
    <div className="footer-container">
      <div className="footer-top">
        <div className="logo-footer">
          <img src={logo} alt="Logo Netflix"/>
        </div>

        <ul className="links">
          <h1>Empresa</h1>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Empregos</a></li>
        </ul>
        <ul className="links">
          <h1>Comunidade</h1>
          <li><a href="#">Desenvolvedores</a></li>
          <li><a href="#">Publicidade</a></li>
          <li><a href="#">Investidores</a></li>
          <li><a href="#">Fornecedores</a></li>
        </ul>
        <ul className="links">
          <h1>Links úteis</h1>
          <li><a href="#">Perguntas frequentes</a></li>
          <li><a href="#">Formas de assistir</a></li>
          <li><a href="#">Só na Netflix</a></li>
          <li><a href="#">Avisos legais</a></li>
        </ul>

        <ul className="sociais-box">
          <li><a target="_blank" href="https://instagram.com/pe.lucs"><ion-icon name="logo-instagram"></ion-icon></a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/pedro-lucas-083/"><ion-icon name="logo-linkedin"></ion-icon></a></li>
          <li><a target="_blank" href="https://github.com/pelucs"><ion-icon name="logo-github"></ion-icon></a></li>
          <li><a href="mailto:pedro.lucs0089@gmail.com"><ion-icon name="mail-outline"></ion-icon></a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy;Netflix 2022 - Todos os direitos reservados</p>
      </div>
    </div>
  );
}