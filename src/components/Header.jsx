import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import ProfilPicture from "../assets/template.png";
import campmeme from "../assets/campmeme.png"
import logo from "../assets/logo.png"

const Header = () => {
  const userConnected = window.localStorage.getItem("userId");
  return (
    <header className="z-50 top-0 sticky w-full bg-[#FDFDFD]  border-b-2 border-neutral-200 shadow">
      <nav className="bg-[#FDFDFD] max-w-6xl mx-auto flex items-center justify-between p-1">
        <Link to="/" className="flex m-1 items-center">
          <img src={logo} alt='icon' className='m-2 mr-30 w-12 h-10' />
          <img src={campmeme} alt='icon' className='m-2 mr-50 w-23 h-7' /> 
        </Link>
        <input type="text" className='bg-[#FFFFFF] w-96 ml-40 mr-10 p-1 rounded-md border-2' placeholder='Barre de recherche' />
        <div className="flex justify-center items-center">
          {
            userConnected ? (
              <>
                <p className='m-2 text-left font-bold'>
                  {window.localStorage.getItem("userName")}
                </p>
                <Link to={`/profil/${userConnected}`} className={`bg-red-400 rounded-full w-12 h-12 text-center`}>
                  <img src={ProfilPicture} alt="profil" className='bg-cover rounded-full w-full h-full' />
                </Link>
              </>
            ) : (
              <>
                <Button title="connexion" to="/connexion" bg="#64BEB6" />
              </>
            )
          }
        </div>
      </nav>
    </header>
  )
}

export default Header;