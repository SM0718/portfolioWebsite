import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Social from '../components/Social';

function Home() {
  return (
    <div className='w-full flex items-center justify-evenly '>
      <div className=' flex flex-col gap-4'>
        <div className='font-bold text-5xl leading-normal'>
          <h1>Hi There,</h1>
          <h1>I'm Sagnik <span className='text-[#ff7b00]'>Majumder</span></h1>
        </div>
        <div className='leading-normal'>
          <h1 className='text-2xl leading-normalz'>
            I am a <TypeAnimation
      sequence={[
        'Frontend Developer',
        'Backend Developer',
        1000,
        'Web Designer',
        1000,
        'Computer Engineer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ color: '#940808', display: 'inline-block', fontWeight: 'bold' }}
      repeat={Infinity}
    />
          </h1>
        
        </div>
        <div className='flex flex-col gap-6 pt-8 '>
          <p className='text-xl font-meduim hover:font-semibold py-2 text-white group bg-[#2506ad] text-center
           rounded-full w-[200px] shadow-md shadow-[#a5adf6] cursor-pointer'>Follow Me On</p>
          <Social />
        </div>
        
      </div>
      <div className='rounded-full'>
          <img className='' src='./myAvatar.webp'/>
      </div>
      
    </div>
  )
}

export default Home