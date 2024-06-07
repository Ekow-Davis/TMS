import React from 'react'
import SignUpForm from '../Components/SignUpForm'

const SignUpPage = () => {
  return (
    <>
    <div className='flex w-full h-screen'>
        <div className='w-full flex items-center justify-center border-2 border-x-custom-blue lg:w-1/2'>
            <SignUpForm/>
        </div>

        <div className='hidden relative lg:flex h-full items-center w-1/2 justify-center'>
        <div className='flex relative'>
          Logo
        </div>
          <div className='w-60 h-60 bg-gradient-to-tr to-violet-500 from-custom-blue animate-bounce rounded-full' />
          <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg'/>
        </div>
        
    </div>
    </>
  )
}

export default SignUpPage