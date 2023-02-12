import React from 'react'

import aboutImg from '../assets/images/about.png'

const About = () => {
  const info = [
    {text: 'Years experience', count: '01'},
    {text: 'Completed projects', count: '04'}
  ]

  return (
    <section id='about' className='py-10 text-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          About <span className='text-cyan-600'>Me</span>
        </h3>
        <p className='text-gray-400 my-3 text-lg'>My introduction</p>
        <div className='flex lg:flex-row flex-col-reverse items-center lg:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
          <div className='p-2'>
            <div className='text-gray-300 my-3'>
              <p className='text-justify leading-7 w-11/12 mx-auto'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, ipsam architecto repellat debitis molestias nihil et magni, fugit, ea dignissimos inventore doloremque accusamus eos rerum incidunt. Veniam reprehenderit asperiores dolores
              </p>
            </div>
            <div className='flex items-center mt-10 gap-7'>
              {
                  info.map((content, i) => (     
                    <div key={i}>
                      <h3 className='lg:text-4xl text-2xl font-semibold text-white'>{content.count}<span>+</span></h3>
                      <span className='text-cyan-600 lg:text-base text-xs'>{content.text}</span>
                    </div>
                  ))
              }
            </div>
            <a href="./src/assets/Curriculo_MatheusOrozimbo.pdf" download>
              <button className='btn-primary mt-7'>
                Download CV
              </button>
            </a>
          </div>
          <div className='flex-1 lg:mt-0 mt-6 flex justify-center items-center'>
              <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg'>
                <img src={aboutImg} alt="" className='w-full object-cover bg-cyan-600 rounded-xl' />
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About