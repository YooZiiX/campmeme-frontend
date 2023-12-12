import React from 'react';
import Header from '../components/Header';
import Container from '../components/ui/Container';

const SigninPage = () => {
  return (
    <div className="w-screen h-screen">
        <Header />
        <Container>
        <form className='flex justify-center'>
            <div className='p-2'>
                <label htmlFor='username' className='m-1'>
                    Username
                </label>
                <input type='text' name='username' id='username' autoComplete='off' placeholder='John Doe' className='m-1' />
            </div>
            <div className='p-2'>
                <label htmlFor='password' className='m-1'>
                    Password
                </label>
                <input type='password' name='password' id='password' autoComplete='off' placeholder='Password' className='m-1' />
            </div>
            <div className='border-black'>
                <input type='submit'>Se connecter</input>
            </div>
        </form>
        </Container>
    </div>
  )
}

export default SigninPage