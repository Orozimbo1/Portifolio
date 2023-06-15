import React from 'react'

import avatar from '../assets/images/avatar-2.png'

const About = () => {
  const info = [
    {text: 'Anos de experiência', count: '02'},
    {text: 'Projetos completos', count: '07'}
  ]

  return (
    <section id='about' className='py-10 text-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          Sobre <span className='text-cyan-600'>mim</span>
        </h3>
        <p className='text-gray-400 my-3 text-lg'>Introdução</p>
        <div className='flex lg:flex-row flex-col-reverse items-center lg:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
          <div className='p-2'>
            <div className='text-gray-300 my-3'>
              <p className='text-justify leading-7 w-11/12 mx-auto'>
                Desenvolvedor Full Statck com mais de 2 anos de experiência em desenvolvimento Web: Front-end e back-end. Utilizando de tecnologias como Javascript, React.js, Next.js, Tailwind, Bootstrap, Node.js, Python, Flask, Django , Firebase(Google) e os bancos de dados MongoDb, PostgreSQL, MySQL.
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
            <a href="../../src/assets/Curriculo_MatheusOrozimbo.pdf" download>
              <button className='btn-primary mt-7'>
                Download CV
              </button>
            </a>
          </div>
          <div className='flex-1 lg:mt-0 mt-6 flex justify-center items-center'>
              <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg'>
                <img src={avatar} alt="" className='w-full object-cover bg-cyan-600 rounded-xl' />
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About