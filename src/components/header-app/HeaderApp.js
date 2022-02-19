import './HeaderApp.css';
import { auth } from '../../Firebase';
import { useContext } from 'react';
import { UserContext } from '../../contextAPI/UserContext';

import logo from '../../media/logo.png';

export default () => {

  const { users, espec, setEspec } = useContext(UserContext);

  //ATIVAR MENU
  function menuActive(){
    document.querySelector(".menu").classList.toggle("menu-active");
    document.querySelector(".nav-menu span ion-icon").classList.toggle("active-ion-icon");
  }

  //ANIMAÇÃO HEADER
  window.addEventListener("scroll", () => {
    let x = document.documentElement.scrollTop,
        header = document.querySelector(".header-app-container");

    if(x > 30){
      header.classList.add("active-header");
    } else{
      header.classList.remove("active-header");
    }
  });

  //MODAL USUÁRIO
  function activeModalUser(e){
    e.preventDefault();

    document.querySelector(".modal-user").classList.toggle("active-modal-user");
    document.querySelector(".profile-box-header ion-icon").classList.toggle("active-icon");
  }

  //TROCAR USUÁRIO
  function espectadorHeader(val){
    setEspec(val)
    document.querySelector(".modal-user").classList.remove("active-modal-user");
  }

  //DESLOGAR
  function logOut(e){
    e.preventDefault();

    auth.signOut()
    .then(() => {
      localStorage.removeItem("key");
      window.location.href = "/login";
    })
  }

  return(
    <div className="header-app-container">
      <div className="left-header">
        <div className="logo-box-header-app">
          <img src={logo} alt="Logo Netflix"/>
        </div>

        <div className="nav-menu" onClick={menuActive}>
          <span>Navegar <ion-icon name="caret-down-outline"></ion-icon></span>
        </div>

        <ul className="menu">
          <li><a href="#">Início</a></li>
          <li><a href="#">Séries</a></li>
          <li><a href="#">Filmes</a></li>
          <li><a href="#">Bombando</a></li>
          <li><a href="#">Minha Lista</a></li>
        </ul>
      </div>

      <div className="right-header">
        <div className="notification-box">
          <span>0</span>
          <ion-icon name="notifications"></ion-icon>
        </div>
        <div className="profile-box-header">
          {
            espec &&
              <img onClick={activeModalUser} src={espec}/>
          }
          <ion-icon onClick={activeModalUser} name="caret-down"></ion-icon>

          <ul className="modal-user">
            {
              users.map(val => (
                <li className="profile-menu" onClick={() => espectadorHeader(val.photoURL)}>
                  <img src={val.photoURL}/>
                  <h1>{val.name}</h1>
                </li>
              ))
            }
            <li><a href="#"><ion-icon name="person-outline"></ion-icon> Conta</a></li>
            <li><a href="/profiles"><ion-icon name="create-outline"></ion-icon> Gerenciar conta</a></li>
            <li><a href="#"><ion-icon name="help-circle-outline"></ion-icon> Central de ajuda</a></li>
            <li onClick={logOut}><a href="#"><ion-icon name="log-out-outline"></ion-icon> Terminar sessão</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}