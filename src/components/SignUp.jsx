import React from 'react'
import user from '../assets/user.png'
import email from '../assets/email.png'
import password from '../assets/password.png'

function SignUp() {
  return (
    <div className='bg-white px-10 py-10 w-96 rounded-3xl mt-14 mb-10'>
      <div>
        <h1><span className='font-semibold text-slate-600 text-5xl'>Welcome </span> <span className='font-bold text-slate-800 text-4xl' > Back!</span></h1>
        <p className='font-medium mt-6 text-slate-600 text-lg'>Enter your details below!</p>
      </div>

      <form className='mt-7'>
      <div>
        <label className='font-medium text-base ml-10 '>Name</label>
        <div className='flex items-center justify-center'>
        <img src={user} alt='user' className='w-6 h-6 inline-block mr-3' />
        <input className='w-full bg-transparent border-2 px-2 py-1 mt-1 border-slate-300 rounded-xl' type='text' id='name' placeholder='Enter your Name' />
        </div>
      </div>
        <div className='mt-4'>
          <label className='font-medium text-base ml-10 ' htmlFor='email'>Email</label>
          <div className='flex items-center justify-center'>
          <img src={email} alt='email' className='w-6 h-6 inline-block mr-3' />
          <input className='w-full bg-transparent border-2 px-2 py-1 mt-1 border-slate-300 rounded-xl' type='email' id='email' placeholder='Enter your Email' />
          </div>
        </div>

        <div className='mt-4'>
          <label className='font-medium text-base ml-10  ' htmlFor='password'>Password</label>
          <div className='flex items-center justify-center'>
          <img src={password} alt='password' className='w-6 h-6 inline-block mr-3' />
          <input className='w-full bg-transparent border-2 px-2 py-1 mt-1 border-slate-300 rounded-xl' type='password' id='password' placeholder='Enter your password' />
          </div>
        </div>
        <div className='mt-5 flex justify-between items-center'>
        <div>
          <input className='font-medium text-base ml-1 ' type='checkbox' id='terms' />
          <label className='ml-3' htmlFor='terms'>Remember me</label>
        </div>
        <div>
          <p className='text-slate-500 cursor-pointer'>Forgot password</p>
        </div>

        </div>
        <p className='mt-5 text-center'>Already have an account? <span className='text-slate-500 cursor-pointer'>Sign In</span></p>
        <div className='flex justify-center'>
        <button className='bg-slate-500 text-white text-lg font-semibold px-5 py-3 rounded-3xl mt-7 hover:scale-[1.02] ease-in-out active:scale-[0.98]'>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp