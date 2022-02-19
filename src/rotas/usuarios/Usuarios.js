import './Usuarios.css';
import { useContext } from 'react';
import { UserContext } from '../../contextAPI/UserContext';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../media/logo.png';

export default () => {

  const { users, setEspec } = useContext(UserContext);
  const navigate = useNavigate();

  //SETAR UM ESPECTADOR
  function espectador(url){
    setEspec(url);
    navigate("/app");
  }

  return(
    <div className="usuarios-container">
      <div className="header-profile">
        <img src={logo} alt="Logo Netflix"/>
      </div>
      {
        users &&
          <div className="row-profiles-container">
            <div className="row-profile-box">
              <h1>Quem está assistindo?</h1>
              <div className="row-profile">
                {
                  users.map(val => (
                    <div className="profile" onClick={() => espectador(val.photoURL)}>
                      <img src={val.photoURL} alt="Profile"/>
                      <h1>{val.name}</h1>
                    </div>
                  ))
                }
              </div>
              <Link to="manager-profile"><ion-icon name="add-outline"></ion-icon></Link>
            </div>
          </div>
      }
    </div>
  );
}