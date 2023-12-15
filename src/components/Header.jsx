import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import ProfilPicture from "../assets/template.png";
import campmeme from "../assets/campmeme.png";
import logo from "../assets/logo.png";

const Header = () => {
  const userConnected = window.localStorage.getItem("userId");
  const [searchbar, setSearchbar] = useState("");

  const handleEnter = () => {
    window.location.href = `/result/` + encodeURIComponent(searchbar);
  };

  return (
    <header className="fixed z-50 top-0 w-full max-w-[100%] bg-[#FDFDFD] border-b-2 border-neutral-200 shadow">
      <nav className="bg-[#FDFDFD] max-w-[99%] mx-auto flex items-center justify-between p-1 h-16">
        <Link to="/" className="flex items-center">
          <img src={logo} alt='icon' className='m-2 mr-30 w-16' />
          <img src={campmeme} alt='icon' className='m-2 mr-50 w-56' /> 
        </Link>
        <input type="text" className='bg-[#FFFFFF] w-[40%] px-4 p-1 rounded-[50px] border-2 text-xl  text-black' placeholder='Barre de recherche'
          value={searchbar} onChange={(e) => setSearchbar(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleEnter()}/>
        <div className="flex justify-center items-center w-[10%]">
          {
            userConnected ? (
              <>
                <p className='m-2 text-left font-bold'>
                  {window.localStorage.getItem("userName")}
                </p>
                <Link to={`/profil/${userConnected}`} className={`rounded-full w-[50px] h-[50px] text-center`}>
                  <img src={ProfilPicture} alt="profil" className='bg-cover rounded-full w-full h-full border-2 border-[#042137]' />
                </Link>
              </>
            ) : (
                <Button title="connexion" to="/connexion" bg="#64BEB6" />
            )
          }
        </div>
      </nav>
    </header>
  )
}

export default Header;