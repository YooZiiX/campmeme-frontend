import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import MemePage from './pages/MemePage';
import TestPage from './pages/TestPage';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/meme/:id' element={<MemePage />} />
            <Route path='/dev' element={<TestPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;