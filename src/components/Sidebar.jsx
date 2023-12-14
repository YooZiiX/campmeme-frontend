import React from 'react';
import Button from './ui/Button';

const Sidebar = () => { 
  return (
    <div className={`w-56 min-h-screen h-auto bg-[#FCFCFC] border-r-2 border-neutral-200`}>
        <div className='flex justify-center'>
            <Button to="/upload" title="Déposer un meme" bg="#0FEAD4"/>
        </div>
        <div className='m-4 mt-20 justify-center space-y-8'>
        <Button to="/upload" title="Tendances" bg="#45B6AA" />
        <Button to="/upload" title="Récent" bg="#45B6AA" />
        </div>
    </div>
  )
}

export default Sidebar;