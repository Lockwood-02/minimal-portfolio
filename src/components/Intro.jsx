import React from 'react'

function Intro() {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>Isaac</h1>
      <p className='text-base md:text-xl mb-3 font-medium'>Software Engineer & Web Developer</p>
      <p className='text-sm max-w-xl mb-6 font-bold'>
        I'm currently a student at Western Kentucky University working for my Masters in Computer Science. All projects have been developed throughout
        my time here at Western and have helped me grow as a developer. Software Development is something I am very passionate about. Creating
        applications that can help people or offer services for those who need it is something I take great pride in.
        <br />
        If you would like to learn more about me and my experiences, you can also check out my{' '}
        <a
          href='https://i.postimg.cc/hvJt17x5/Isaac-Lockwood-Resume-2023-1.jpg'
          target='_blank'
          className='text-orange-600 hover:underline underline-offset-2 decoration-2 decoration-orange-600'
          rel='noreferrer noopener'
        >
          resume
        </a>{' '}
        here.{' '}
      </p>
    </div>
  )
}

export default Intro
