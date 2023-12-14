import React, { useState } from 'react';
import Header from '../components/Header';
import Container from '../components/ui/Container';
import icone_user from '../assets/utilisateur.png'
import icone_mail from '../assets/email.png'
import icone_mdp from '../assets/mot-de-passe.png'
import '../styles/signup.css'
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <>
    
    <Header />
    <div className='flex'>
    <div className='container1'>
      
      <div className='header1'>
        <div className='header'></div>
        <div className='text'>Inscription</div>
        <div className='underline'></div>
        <div>
          <div className='inputs'>
          <div className='input'>
            <img src={icone_user} alt="icone" className='w-5 h-5'></img>
            <input type="Nom d'utilisateur" placeholder="Nom d'utilisateur"></input>
          </div>
          <div className='input'>
            <img src={icone_mail} alt="icone" className='w-5 h-5'></img>
            <input type='Adresse mail' placeholder='Adresse mail'></input>
          </div>
          <div className='input'>
            <img src={icone_mdp} alt="icone" className='w-5 h-5'></img>
            <input type='Mot de passe' placeholder='Mot de passe'></input>
          </div>
          </div>
          <div className='submit-container1 justify-center' >
            <div className='submit'>Créer un compte</div>
          
          </div>
        </div>
      
      
        
        </div>
  </div>  
  <div className='container1'>
      
      <div className='header1'>
        <div className='header'></div>
        <div className='text'>Connection</div>
        <div className='underline'></div>
        <div>
          <div className='inputs'>         
          <div className='input'>
            <img src={icone_mail} alt="icone" className='w-5 h-5'></img>
            <input type='Adresse mail' placeholder='Adresse mail'></input>
          </div>
          <div className='input'>
            <img src={icone_mdp} alt="icone" className='w-5 h-5'></img>
            <input type='Mot de passe' placeholder='Mot de passe'></input>
          </div>
          </div>
          <Link to="/" className='forgot-password'>Mot de passe oublié</Link>
          <div className='submit-container1 justify-center' >
            <div className='submit'>Se connecter</div>
          
          </div>
        </div>
      
      
        
        </div>
  </div> 
 
  </div>
    </>
    

  )
}

export default SignupPage