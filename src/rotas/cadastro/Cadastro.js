import './Cadastro.css';
import '../../components/inputs-style/Inputs.css';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
 
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default () => {

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("key")){
      navigate("/profiles");
    }
  }, []);

  function signUp(){
    let email = document.getElementById("email"),
        confirmemail = document.getElementById("confirmemail"),
        senha = document.getElementById("senha"),
        confirmsenha = document.getElementById("confirmsenha"),
        aviso = document.getElementById("aviso-cadastro");
    
    if(email.value.length != 0 && confirmemail.value.length != 0 && senha.value.length != 0 && confirmsenha.value.length != 0){
      if(email.value == confirmemail.value && senha.value == confirmsenha.value){
        
        auth.createUserWithEmailAndPassword(email.value, senha.value)
        .then(() =>{
          aviso.textContent = "*Conta cadastrada com sucesso";
          aviso.style.color = "var(--positiva)";

          email.value = "";
          confirmemail.value = "";
          senha.value = "";
          confirmsenha.value = "";
        })
        .catch(error => {
          aviso.textContent = "*Ocorreu um erro: " + error.message;
          aviso.style.color = "var(--primaria)";
        })

      } else{
        aviso.textContent = "*Certifique-se que o email/senha estão iguais";
        aviso.style.color = "var(--primaria)";
      }
    } else{
      aviso.textContent = "*Preencha todos os campos corretamente";
      aviso.style.color = "var(--primaria)";
    }
  }

  return(
    <>
      <Header/>    
      <div className="cadastro-container">
        <div className="bck-rgba">
          <div className="form">
            <h1>Cadastrar</h1>
            <div className="inputs-box">
              <input type="email" placeholder="Email" id="email"/>
              <input type="email" placeholder="Confirme o Email" id="confirmemail"/>
              <input type="password" placeholder="Senha" id="senha"/>
              <input type="password" placeholder="Confirme a Senha" id="confirmsenha"/>
              <p id="aviso-cadastro"></p>
            </div>
            <p>Ao se cadastrar você aceita todos os <a href="#">Termos</a> e <a href="#">Políticas de Privacidade</a></p>
            <button onClick={signUp}>Cadastrar</button>
            <Link to="/login">Já possui uma conta?</Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}