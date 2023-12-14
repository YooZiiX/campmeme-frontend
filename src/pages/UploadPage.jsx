import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Tag from '../components/ui/Tag';

const Upload = () => {
    const [memeLink, setMemeLink] = useState();
    const [memeInput, setMemeInput] = useState();
    const [tagList, setTagList] = useState([]);

    const handleAddTag = () => {
        if (memeInput.trim() !== '') {
            setTagList([...tagList, memeInput]);
            setMemeInput('');
        }
    }

    const handleUploadMeme = async (e) => {
        e.preventDefault();

        if (window.localStorage.getItem("userId")!= null) {
            const userId = window.localStorage.getItem("userId");
            if (tagList.length !== 0 && memeLink){
                await axios.post(`http://25.53.196.55:8080/meme/post`,
                {
                    file_path:memeLink,
                    tags:tagList,
                    contributor:userId
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
                ).then((response) => {
                    console.log(response);
                    // window.location.href = "/upload";
                });
            } else {
                alert("Vous devez renseigner au minimum un Tag et un Lien");
            }
        } else {
            alert("Vous devez être connecté pour déposer un meme");
        }
    };

  return (
    <div className='w-screen h-screen'>
      <Header />
        <div className='flex justify-center m-5'>
        <div className='flex flex-col items-center mt-8'>
            <div>
                <input 
                    className=' w-96 p-1 rounded-md border-2 text-black'
                    type='text'
                    placeholder='Copier le lien du meme'
                    value={memeLink}
                    onChange={(e) => setMemeLink(e.target.value)}
                />
            </div>
            <div className='mt-2 flex'>
                <input
                    type='text'
                    placeholder='Ajouter un tag'
                    value={memeInput}
                    className='text-center uppercase rounded-md border-2'
                    onChange={(e) => setMemeInput(e.target.value)}
                />
                <button
                    className='ml-2 bg-[#64BEB6] px-2 py-1 text-white rounded-md'
                    onClick={handleAddTag}
                >
                    Ajouter
                </button>
                
            </div>
            <button
                    className='m-2 bg-[#64BEB6] px-2 py-1 mt-10 text-white rounded-md'
                    onClick={handleUploadMeme}
                >
                    Déposer
                </button>
                <div className='grid grid-cols-5 gap-2 mt-2'>
                    {tagList.map((meme, index) => (
                        <div key={index} className='mx-1'>
                            <Tag title={meme} to="/" color={'#4ecdc4'}/>                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
  )
}

export default Upload