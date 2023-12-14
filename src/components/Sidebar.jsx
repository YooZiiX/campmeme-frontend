import React from 'react';
import Button from './ui/Button';

const Sidebar = () => {
  return (
    <div className={`w-56 h-auto bg-red-500 p-2`}>
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