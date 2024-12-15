import React from 'react'
import SignUp from './components/SignUp'
import background from './assets/background.jpeg'


function App() {
  return (
    <div className='flex h-screen w-full'>
    <div className='bg-slate-200 w-full items-center flex justify-center lg:w-1/2'>
      <SignUp />
    </div>
    <div className='hidden lg:flex justify-center items-center w-1/2'>
      
    <img src={background} alt='background' className='h-full w-full object-cover' />

    </div>

    </div>
  )
}

export default App 