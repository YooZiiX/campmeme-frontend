import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <Link to={props.to} style={{background: `${props.bg}`}} className={`flex rounded-md w-fit m-2 px-2 py-1 text-black text-center text-lg font-bold uppercase ${props.className} hover:shadow-md duration-100`}>
        <p className='text-black'>
          {props.title}
        </p>
    </Link>
    
  )
}

export default Button;