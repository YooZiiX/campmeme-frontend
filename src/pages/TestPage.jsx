import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Display from '../components/ui/Display';
import Tag from '../components/ui/Tag';
import {memes} from "../data/data";

const HomePage = () => {
  return (
    <div>
        <div className='flex align-middle items-center'>
          <div className='justify-center'>
            <Button title={"Home Page"} to="/" type="danger"/>
            <Button title="Partie Dev" to="/dev"/>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {
              memes.map((meme) => (
                <div key={meme._id}>
                  <Link to={`/meme/${meme._id}`} >
                    <Display />
                  </Link>
                  <div className='flex justify-center'>
                  {
                  meme.tags.map((tag)=>(
                    <div key={tag._id} className='my-1 mx-1'>
                      <Link to="/">
                        <Tag title={tag.label} color={tag.color}/>
                      </Link>
                    </div>
                  ))
                  }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default HomePage;