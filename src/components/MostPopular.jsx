import React from 'react';
import Display from './ui/Display';
import { memes } from '../data/data'

const MostPopular = () => {
  const popularsMemes = memes.filter((meme) => meme.isPopular);
  return (
        <div className='m-4'>
            <p className="flex justify-center font-bold text-5xl">
            Memes Populaires
            </p>
            <div className="grid grid-cols-3 gap-x-3 gap-y-2 mt-4">
                {
                popularsMemes.map((meme) => (
                <div key={meme._id} className="flex justify-center">
                    <Display to={`/meme/${meme._id}`} tags={meme.tags} />
                </div>
                ))
                }
            </div>
        </div>
  )
}

export default MostPopular;