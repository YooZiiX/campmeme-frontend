import React, { useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import icon_user from '../assets/utilisateur.png'
import icon_mail from '../assets/email.png'
import icon_mdp from '../assets/mot-de-passe.png'
import '../styles/signup.css'
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [signUsername, setSignUsername] = useState("");
  const [signEmail, setSignEmail] = useState("");
  const [signPassword, setSignPassword] = useState("");

  const submitSignHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`http://25.53.196.55:8080/auth/register`,
      {
        signUsername,
        signEmail,
        signPassword
      },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    )
  };

  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");

  const submitLogHandler = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(`http://25.53.196.55:8080/auth/login`,
      {
        logEmail,
        logPassword
      },
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    )
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
          <div className='submit-container1 justify-center' onClick={submitSignHandler}>
            <div className='submit'>Créer un compte</div>
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
          <div className='submit-container1 justify-center' onClick={submitLogHandler}>
            <div className='submit'>Se connecter</div>
          </div>
        </div>
      </div>
  </div> 
  </div>
    </div>
  )
}

export default SignupPage;