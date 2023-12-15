import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage';
import Meme from './pages/MemePage';
import Signup from './pages/SignupPage';
import Upload from './pages/UploadPage';
import Profil from './pages/ProfilPage';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/meme/:id' element={<Meme />} />
            <Route path='/connexion' element={<Signup />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/profil/:id' element={<Profil />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;