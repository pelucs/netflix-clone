import './Login.css';
import '../../components/inputs-style/Inputs.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default () => {

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("key")){
      navigate("/profiles");
    }
  }, []);

  //FUNÇÃO DE LOGIN
  function signIn(){
    let email = document.getElementById("email"),
        senha = document.getElementById("senha"),
        aviso = document.getElementById("aviso-login");

    if(email.value.length != 0 && senha.value.length != 0){
      auth.signInWithEmailAndPassword(email.value, senha.value)
      .then(() => {
        localStorage.setItem("key", Math.floor(Math.random() * 2000));
        navigate("/profiles");
      })
      .catch(error => {
        aviso.textContent = "*Ocorreu um erro: " + error.message;
        aviso.style.color = "var(--primaria)";
      })
    } else{
      aviso.textContent = "*Preencha todos os campos corretamente";
      aviso.style.color = "var(--primaria)";
    }
  }

  return(
    <div>
      <Header/>
      <div className="login-container">
        <div className="bck-rgba">
            <div className="form">
              <h1>Entrar</h1>
              <div className="inputs-box">
                <input type="email" placeholder="Email" id="email"/>
                <input type="password" placeholder="Senha" id="senha"/>
                <p id="aviso-login"></p>
              </div>
              <p>Ao fazer login você aceita todos os <a href="#">Termos</a> e <a href="#">Políticas de Privacidade</a></p>
              <button onClick={signIn}>Entrar</button>
              <Link to="/cadastro">Ainda não possui uma conta?</Link>
            </div>
          </div>
      </div>
      <Footer/>
    </div>
  );
}