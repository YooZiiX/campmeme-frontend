import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import MemePage from './pages/MemePage';
import TestPage from './pages/TestPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import Upload from './pages/Upload';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/meme/:id' element={<MemePage />} />
            <Route path='/connexion' element={<SigninPage />} />
            <Route path='/inscription' element={<SignupPage />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/dev' element={<TestPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;