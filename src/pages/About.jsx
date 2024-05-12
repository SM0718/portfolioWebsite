import React from 'react'

function About() {


  return (
    <div className='w-full font-sans mt-16 z-30'>
      <div className='w-full z-30 flex justify-center items-center gap-2 pb-8'>
        <span>
          <img className='size-8' src='./user.png'/>
        </span>
        <h1 className='font-bold text-4xl'>About <span className='text-[#7303a7]'>Me</span></h1>
      </div>

      <div className='flex lg:flex-row flex-col items-center justify-between gap-24'>
        <div className='w-full md:w-5/6 lg:w-1/2 flex justify-end'>
          <img className='h-[400px] w-full' src='./myAvatar2.webp'/>
        </div>

        <div className='w-full md:w-5/6 lg:w-1/2 px-8  flex flex-col justify-end items-center gap-4'>
          <div className='w-full flex flex-col  gap-1'>
            <h1 className='font-bold text-2xl'>I'm Sagnik</h1>
            <p className='font-semibold'>Full Stack Developer</p>
          </div>
          <div className='mr-auto w-2/3'>
            <p className='text-sm'>
            I am a Full-Stack Developer situated in Kolkata, India. I am an Information Technology undergraduate at Techno Main Salt Lake. I am highly interested about honing my coding abilities and creating applications and websites. I use MERN Stack to build websites. I work for myself to enhance my talents. I enjoy building full-stack projects.
            </p>
          </div>
          <div className='flex flex-col items-start  mr-auto gap-4'>
            <p>
              <span className='text-[#152cff]'>Email : </span>sagnikofficial734@gmail.com
            </p>
            <p>
              <span className='text-[#152cff]'>Place : </span>Kolkata, India - 700092
            </p>
          </div>
          <div className='mt-2 mr-auto'>
          <a
      href='./SagnikMajumder_Resume.pdf'
      className='text-xl font-meduim hover:font-semibold py-2 px-4 text-white group bg-[#2506ad] text-center
           rounded-full shadow-md shadow-[#a5adf6] cursor-pointer'
      onClick={() => click()}
      download = 'SagnikMajumder_Resume.pdf'
    >
      Resume
      </a>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default About