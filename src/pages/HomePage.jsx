import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const HomePage = () => {
  return (
    <div>
        <div className='flex align-middle items-center'>
            <Link to='/meme/5'><Button title={"To meme"}/></Link>
        </div>
    </div>
  )
}

export default HomePage