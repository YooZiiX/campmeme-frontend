import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import ProfilPicture from "../assets/template.png";

const Header = () => {
  var isConnected = false;
  return (
    <header className="z-50 top-0 sticky w-full bg-white shadow">
      <nav className="bg-white max-w-6xl mx-auto flex items-center justify-between p-1">
        <Link to="/" className="flex m-1">
          <p>Camp'Meme</p>
        </Link>
        <div className='bg-red-400 w-96 p-1 rounded-md'>Barre de recherche</div>
        <div className="flex justify-center items-center">
          {
            isConnected ? (
              <>
                <Link to="/" className={`bg-red-400 rounded-full w-10 h-10 text-center`}>
                  <img src={ProfilPicture} alt="profil" className='bg-cover rounded-full w-full h-full' />
                </Link>
              </>
            ) : (
              <>
                <Button title="connexion" to="/connexion" bg="#427AA1" />
              </>
            )
          }
        </div>
      </nav>
    </header>
  )
}

export default Header