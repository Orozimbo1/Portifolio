import React from 'react'

import avatar from '../assets/images/avatar-5.png'

const Hero = () => {
  const social_media = [
    {logo: 'logo-github', link: 'https://www.github.com/Orozimbo1'},
    {logo: 'logo-linkedin', link: 'https://www.linkedin.com/in/matheusorozimbo'},
    {logo: 'logo-whatsapp', link: 'https://api.whatsapp.com/send?phone=5512996329510'},
    {logo: 'mail-outline', link: 'mailto:matheusorozimbo5@gmail.com'},
  ]

  return (
    <section id='home' className='min-h-screen flex py-10 lg:flex-row flex-col items-center'>
      <div className='flex-1 flex items-center justify-center h-full'>
        <img src={avatar} alt="" className='lg:w-11/12 h-full object-cover'/>
      </div>
      <div className='flex-1'>
        <div className='lg:text-left text-center'>
          <h1 className='lg:text-5xl text-2xl lg:leading-normal leading-10 text-green-500 font-bold'>
            <span className='text-teal-700 lg:text-6xl text-5xl'>
              Olá!  
              <br />
            </span>
            Meu nome é <span>Matheus Orozimbo</span>
          </h1>
          <h4 className='lg:text-2xl text-lg lg:leading-normal leading-10 mt-4 font-bold text-teal-700'>Desenvolvedor Front End</h4>
          <button className='btn-primary mt-8' disabled>Entre em contato</button>
          <div className='mt-8 text-3xl flex items-center lg:justify-start justify-center gap-5'>
            {
              social_media?.map((media, i) => (
                  <a 
                  key={i}
                  className='text-teal-700 hover:text-green-400 cursor-pointer'
                  href={media.link} 
                  target='_blank'><ion-icon name={media.logo}>
                      </ion-icon>
                  </a>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero