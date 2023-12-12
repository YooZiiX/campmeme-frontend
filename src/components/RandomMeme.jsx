import React from 'react';
import Display from '../components/ui/Display';
import { memes } from '../data/data';

const RandomMeme = () => {
  return (
    <div className='m-4'>
        <p className='flex justify-center text-5xl font-bold'>
            Random Memes
        </p>
        <div className="grid grid-cols-3 gap-x-3 gap-y-2 mt-4">
            {
            memes.map((meme) => (
              <div key={meme._id} className="flex justify-center">
                <Display to={`/meme/${meme._id}`} tags={meme.tags} />
              </div>
            ))
            }
          </div>
    </div>
  )
}

export default RandomMeme;