import React from 'react';
import Button from './ui/Button';

const Sidebar = () => { 
  return (
    <div className={`w-56 min-h-screen h-auto bg-[#FCFCFC] border-r-2 border-neutral-200`}>
        <div className='flex justify-center'>
            <Button to="/upload" title="Déposer un meme" bg="#A3D1C5" />
        </div>
        <div className='m-2'>
          <p>Tendances</p>
          <p>Récent</p>
        </div>
    </div>
  )
}

export default Sidebar;