import './Gerenciador.css';
import { useContext } from 'react';
import { AuthContext } from './../../contextAPI/AuthContext';
import { UserContext } from './../../contextAPI/UserContext';
import { Link } from 'react-router-dom';
import { db, firebase } from '../../Firebase';

import logo from '../../media/logo.png';

export default () => {

  const { user } = useContext(AuthContext);
  const { setUsers } = useContext(UserContext);

  //MODAL USER
  function modalPhotoUser(){
    document.querySelector(".modal-photo-user-container").classList.add("active-modal-photo-user");
  }

  function closeModalPhotoUser(){
    document.querySelector(".modal-photo-user-container").classList.remove("active-modal-photo-user");
  }

  //CRIAR USUÁRIO
  function criarUser(){
    let nome = document.getElementById("name").value,
        img = document.getElementById("img").src,
        modalAviso = document.querySelector(".modal-aviso"),
        modalAvisoH1 = document.querySelector(".modal-aviso h1");

    let uid = user.uid,
        id = uid.substring(0, 17) + Math.floor(Math.random() * 999)

    if(id.length < 19){
      id = id + "67";
    } else if(id.length == 19){
      id = id + "0";
    }

    if(nome.length != 0){
      db.collection("user").doc(id).set({
        id: id,
        name: nome,
        photoURL: img
      })
      .then(() => {
        window.location.href = "/profiles";
      })
      .catch(error => {
        modalAviso.classList.add("active-modal-aviso");
        modalAvisoH1.textContent = "*Ocorreu um erro: " + error.message;
  
        setTimeout(() => {
          modalAviso.classList.remove("active-modal-aviso");
        }, 2000);
      })
    } else{
      modalAviso.classList.add("active-modal-aviso");
      modalAvisoH1.textContent = "*Informe um nome";

      setTimeout(() => {
        modalAviso.classList.remove("active-modal-aviso");
      }, 2000);
    }
  }

  function urlPhoto(url){
    document.getElementById("img").src = url;
    document.querySelector(".modal-photo-user-container").classList.remove("active-modal-photo-user");
  }

  return(
    <div className="gerenciador-usuarios-container">
      <div className="modal-aviso">
        <h1></h1>
      </div>

      <div className="header-profile">
        <img src={logo} alt="Logo Netflix"/>
      </div>

      <div className="create-user-box">
        <h1>Crie um usuário</h1>
        <div className="info-user-box">
          <div className="photo-user">
            <img id="img" src="https://occ-0-507-1380.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABX_cjFqekMWlVv9AS6vI54p7W5uxkdnDz0RZ_BWg2XRBOMNYXnJRhtOnpMappsaT2-4TP8mjyaBTNLX-mLEJHl8GIfn_.png?r=fcc"/>
            <span onClick={modalPhotoUser}><ion-icon name="pencil"></ion-icon></span>

            <div className="modal-photo-user-container">
              <div onClick={closeModalPhotoUser} className="background-modal"></div>
              <div className="modal-photo-user">
                <img onClick={() => urlPhoto("https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png")} src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
                <img onClick={() => urlPhoto("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Qou3wNk2Qfs7AN49-mULhwGRomERYXuu_fO3qYsTVkrON8-S67AMUwOTlccNYZhYyvU&usqp=CAU")} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Qou3wNk2Qfs7AN49-mULhwGRomERYXuu_fO3qYsTVkrON8-S67AMUwOTlccNYZhYyvU&usqp=CAU"/>
                <img onClick={() => urlPhoto("https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png")} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"/>
                <img onClick={() => urlPhoto("https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png")} src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"/>
                <img onClick={() => urlPhoto("https://mir-s3-cdn-cf.behance.net/project_modules/disp/c7906d33850498.56ba69ac353e1.png")} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c7906d33850498.56ba69ac353e1.png"/>
                <img onClick={() => urlPhoto("https://ih0.redbubble.net/image.618410871.2644/flat,1000x1000,075,f.u2.jpg")} src="https://ih0.redbubble.net/image.618410871.2644/flat,1000x1000,075,f.u2.jpg"/>
              </div>
            </div>
          </div>
          <div className="info-user">
            <label htmlFor="name">Nome</label>
            <input type="text" placeholder="Informe seu nome" id="name" autoComplete="off"/>
            <button onClick={criarUser}>Avançar</button>
          </div>
        </div>
        <Link to="/profiles">Voltar</Link>
      </div>
    </div>
  )
}