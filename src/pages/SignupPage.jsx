import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import icon_user from '../assets/utilisateur.png'
import icon_mail from '../assets/email.png'
import icon_mdp from '../assets/mot-de-passe.png'
import '../styles/signup.css'
import { Link } from 'react-router-dom';
// import generateToken from '../utils/generateToken';
import isValidEmail from '../utils/isValidEmail';

const SignupPage = () => {
  const [signUsername, setSignUsername] = useState("");
  const [signEmail, setSignEmail] = useState("");
  const [signPassword, setSignPassword] = useState("");

  const PASSWORD_LENGTH = 6;

  const submitSignHandler = async (e) => {
    e.preventDefault();
    
    if (signUsername.length <= 0) {
      alert("Renseigner un Nom d'utilisateur contenant + d'un caractère.");
    } else if (!isValidEmail(signEmail)) {
      setSignEmail();
      setSignPassword();
      alert("Insert a real mail adress");
    } else if (signPassword.length <= PASSWORD_LENGTH) {
      setSignPassword();
      alert("Password rules : 8 charaters min");
    } else {

      await axios.post(`http://25.53.196.55:8080/auth/register`,
      { username: signUsername, email: signEmail, password: signPassword },
      {
        headers: {
          "Content-type": "application/json",
        },
      }).then((response) => {
        if (response.data.success) {
            // window.localStorage.setItem("userToken", generateToken(response.data.id));
            window.localStorage.setItem("userId",response.data.id);
            window.localStorage.setItem("userName", response.data.username);
            window.location.href('/');
        } else {
          console.log(response.data.reason);
        }
      });
    }
  };

  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");

  const submitLogHandler = async (e) => {
    e.preventDefault();
    if (!isValidEmail(logEmail)) {
      setLogEmail();
      setLogPassword();
      alert("Insert a real mail adress");
    } else if (logPassword.length < PASSWORD_LENGTH){
      setLogPassword();
      alert("Password rules : 8 charaters min");
    } else {
      await axios.post(`http://25.53.196.55:8080/auth/login`,
              { email:logEmail, password:logPassword},
              {
                headers: {
                  "Content-type": "application/json",
                },
              }).then((response) => {
                if (response.data.success) {
                  // window.localStorage.setItem("userToken", generateToken(response.data.id));
                  window.localStorage.setItem("userName", response.data.username);
                  window.localStorage.setItem("userId", response.data.id);
                  window.location.href = "/";
              } else {
                console.log(response.data.reason);
              }
            });
    };
  };

  return (
    <div className='w-screen h-screen'>
    <Header />
    <div className='flex'>
    <div className='container1 rounded-md'>
      <div className='header1'>
        <div className='header'></div>
        <div className='text'>Inscription</div>
        <div className='underline'></div>
        <div>
          <form className='inputs' onSubmit={submitSignHandler}>
            <div className='input'>
              <img src={icon_user} alt="icon" className='w-5 h-5' />
              <input type="text" placeholder="Nom d'utilisateur" onChange={(e) => setSignUsername(e.target.value)} />
            </div>
            <div className='input'>
              <img src={icon_mail} alt="icon" className='w-5 h-5' />
              <input type='email' placeholder='Adresse mail' onChange={(e) => setSignEmail(e.target.value)} />
            </div>
            <div className='input'>
              <img src={icon_mdp} alt="icon" className='w-5 h-5' />
              <input type='password' placeholder='Mot de passe' onChange={(e) => setSignPassword(e.target.value)} />
            </div>
          </form>
          <div className='submit-container1 justify-center'>
            <div className='submit' onClick={submitSignHandler}>Créer un compte</div>
          </div>
        </div>
      </div>
  </div>  
  <div className='container1 rounded-md'>
      <div className='header1'>
        <div className='header'></div>
        <div className='text'>Connexion</div>
        <div className='underline'></div>
        <div>
          <form className='inputs' onSubmit={submitLogHandler} >         
            <div className='input'>
              <img src={icon_mail} alt="icon" className='w-5 h-5' />
              <input type='email' placeholder='Adresse mail' onChange={(e) => setLogEmail(e.target.value) }/>
            </div>
            <div className='input'>
              <img src={icon_mdp} alt="icon" className='w-5 h-5' />
              <input type='password' placeholder='Mot de passe' onChange={(e) => setLogPassword(e.target.value)} />
            </div>
          </form>
          <Link to="/" className='forgot-password'>Mot de passe oublié</Link>
          <div className='submit-container1 justify-center'>
            <div className='submit' onClick={submitLogHandler}>Se connecter</div>
          </div>
        </div>
      </div>
  </div> 
  </div>
    </div>
  )
}

export default SignupPage;