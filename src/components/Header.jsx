import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import ProfilPicture from "../assets/template.png";

const Header = () => {
  return (
    <header className="z-50 top-0 sticky w-full shadow">
      <nav className="bg-white max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex m-1">Camp'Meme</Link>
        <div className='bg-red-400 w-96 p-1 rounded-md'>Barre de recherche</div>
        <div className="flex justify-center">
          <Button title="inscription" to="/"/>
          <Button title="connexion" to="/dev"/>
          <Link to="/" className={`bg-red-400 mt-2 rounded-full w-11 h-11 text-center`}>
            <img src={ProfilPicture} alt="profil" className='bg-cover rounded-full w-full h-full'/>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header