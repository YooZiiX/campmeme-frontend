import React from 'react';
import { useParams } from 'react-router-dom';

// Matthieur Sfeir

const MemePage = () => {
    const { id } = useParams();
  return (
    <div>
        <p>Meme n°{id}</p>
    </div>
  )
}

export default MemePage;