import React from 'react';
import Header from '../components/Header';
import Container from '../components/ui/Container';
import icone_user from '../assets/utilisateur.png'
import icone_mail from '../assets/email.png'
import icone_mdp from '../assets/mot-de-passe.png'

const SignupPage = () => {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className='w-screen h-screen flex flex-col items-center mt-20'>
        <div className='mb-10 text-2xl'>Créer un compte</div>
        <div className='underline'></div>
        
        <div className='inputs'>
          <div className='input flex flex-col items-center mb-10'>
            <div className='flex items-center'>
              <img src={icone_user} alt="img" className='m-2 w-5 h-5' />
              <span className='ml-2'>Nom d'utilisateur</span>
            </div>
            <input type='email'></input>
          </div>
          <div className='input flex flex-col items-center mb-10'>
            <div className='flex items-center'>
              <img src={icone_mail} alt="img" className='m-2 w-5 h-5' />
              <span className='ml-2'>Adresse mail</span>
            </div>
            <input type='email'></input>
          </div>
          <div className='input flex flex-col items-center mb-10'>
            <div className='flex items-center'>
              <img src={icone_mdp} alt="img" className='m-2 w-5 h-5' />
              <span className='ml-2'>Mot de passe</span>
            </div>
             <input type='email'></input>
          </div>
        </div>
        <div className='submit-container'>
          <div className='submit mb-5'>Créer un compte</div>       
        </div>

      </div>
  </div>  
  )
}

export default SignupPage