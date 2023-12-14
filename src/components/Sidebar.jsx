import React from 'react';
import Button from './ui/Button';

const Sidebar = () => {
  return (
    <div className={`w-72 duration-150 h-screen bg-red-500`}>
        <div className='flex justify-center'>
            <Button to="/upload" title="Déposer un meme" bg="#427AA1" />
        </div>
        <div className='m-2'>
          <p>Tendances</p>
          <p>Récent</p>
        </div>
    </div>
  )
}

export default Sidebar