import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper'

import 'swiper/css';
import 'swiper/css/pagination'

import project1 from '../assets/images/mr-os.jpg'
import project2 from '../assets/images/React-Ecommerce.jpg'
import project3 from '../assets/images/pokenext.jpg'
import project4 from '../assets/images/react-miniblog.jpg'
import project5 from '../assets/images/onlineshop.jpg'
import project6 from '../assets/images/InvestFacil.png'
import project7 from '../assets/images/youtube-clone.jpg'
import project8 from '../assets/images/ageCalculator.jpg'
import project9 from '../assets/images/electrum.png'

const Project = () => {
  const projects = [
    {img: project1, name: 'MR-OS', link_github: 'https://github.com/Orozimbo1/MR-OS', live_demo: 'https://mr-os.vercel.app/'},
    {img: project2, name: 'React Ecommerce', link_github: 'https://github.com/Orozimbo1/React-Ecommerce', live_demo: 'http://react-ecommerce-livid.vercel.app'},
    {img: project3, name: 'PokeNext', link_github: 'https://github.com/Orozimbo1/PokeNext', live_demo: 'https://poke-next-taupe.vercel.app/'},
    {img: project4, name: 'MiniBlog', link_github: 'https://github.com/Orozimbo1/React-miniblog', live_demo: 'https://react-miniblog-blond.vercel.app/'},
    {img: project5, name: 'Online Shop', link_github: 'https://github.com/Orozimbo1/OnlineShop', live_demo: 'https://online-shop-marketplace.vercel.app/'},
    {img: project6, name: 'InvestFacil', link_github: 'https://github.com/Orozimbo1/InvestFacil', live_demo: 'https://investfacil.vercel.app/'},
    {img: project7, name: 'Youtube Clone', link_github: 'https://github.com/Orozimbo1/YouTube_Clone', live_demo: 'https://youtubeclone-mo.netlify.app'},
    {img: project8, name: 'Age Calculator', link_github: 'https://github.com/Orozimbo1/ageCaculator', live_demo: 'orozimbo1.github.io/ageCaculator/'},
    {img: project9, name: 'Electrum Ecommerce', link_github: 'https://github.com/Orozimbo1/electrum', live_demo: 'https://orozimbo1.github.io/electrum/'}
  ]

  return (
    <section id='projects' className='py-10 text-teal-700'>
      <div className='text-center mb-4'>
        <h3 className='text-4xl font-semibold text-green-500'>
          Meus <span className='text-teal-700'>Projetos</span>
        </h3>
        <p className='text-teal-700 mt-3 text-lg'>Meus incríveis trabalhos</p>
      </div>
      <div className='lg:w-11/12 w-10/12 mx-auto'>
        <Swiper 
          slidesPerView={3} 
          spaceBetween={20} 
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40
            },
            550: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            2560: {
              slidesPerView: 5,
              spaceBetween: 40
            },
          }} 
          loop={true} 
          autoplay={{
            delay: 3000,
          }} 
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          {projects?.map((project, i) => (
            <SwiperSlide key={i}>
              <div className=' w-full p-4 bg-white shadow-md rounded-xl'>
                <img src={project.img} alt={project.name} className='rounded-lg h-48 w-full' />
                <h3 className='text-xl my-4'>{project.name}</h3>
                <div className='flex gap-3'>
                  <a href={project.link_github} className='text-white bg-green-500 p-2 inline-block' target='_blank'>Link Github</a>
                  <a href={project.live_demo} className='text-teal-700 bg-gray-100 border border-teal-700 p-2 inline-block rounded-md' target='_blank'>Live Demo</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Project