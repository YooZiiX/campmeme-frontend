import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Container from '../components/ui/Container';
import Tag from '../components/ui/Tag';

const Upload = () => {

    const [memeInput, setMemeInput] = useState('');
    const [memeList, setMemeList] = useState([]);

    const handleAddMeme = () => {
        if (memeInput.trim() !== '') {
            setMemeList([...memeList, memeInput]);
            setMemeInput('');
        }
    }

  return (
    <>
      <Header />
    <div className='flex items-center justify-center h-screen'>
    <div className='flex flex-col items-center mt-8'>
        <div className=''>
            <input 
                className='bg-red-400 w-96 p-1 rounded-md'
                type='text'
                placeholder='Copier le lien du meme' 
            />
        </div>
        <div className='mt-2 flex'>
            <input
                type='text'
                placeholder='Ajouter un meme'
                value={memeInput}
                onChange={(e) => setMemeInput(e.target.value)}
            />
            <button
                className='ml-2 bg-blue-500 px-2 py-1 text-white rounded-md'
                onClick={handleAddMeme}
            >
                Ajouter
            </button>
            </div>
                <div className='grid grid-cols-2 gap-4 mt-4'>
                    {memeList.map((meme, index) => (
                        <div key={index} className='mx-1'>
                            <Tag title={meme} to="/" color={'#4ecdc4'}/>                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
  )
}

export default Upload