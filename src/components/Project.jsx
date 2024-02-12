import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper'

import 'swiper/css';
import 'swiper/css/pagination'

import { projects } from '../utils'; 

const Project = () => {

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