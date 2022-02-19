import './Header.css';
import { Link } from 'react-router-dom';

import logo from '../../media/logo.png';

export default () => {
  return(
    <div className="header-container">
      <div className="logo-box">
        <Link to="/">
          <img src={logo} alt="Logo Netflix"/> 
        </Link>
      </div>
      <ul className="buttons-menu">
        <li><Link to="/login">Entrar</Link></li>
      </ul>
    </div>
  )
}