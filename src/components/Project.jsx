import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper'

import 'swiper/css';
import 'swiper/css/pagination'

import project1 from '../assets/images/project-1.png'
import project2 from '../assets/images/project-2.jpg'
import project3 from '../assets/images/project-3.jpg'
import project4 from '../assets/images/project-4.jpg'
import project5 from '../assets/images/project-5.png'
import project_person from '../assets/images/project_person1.png'

const Project = () => {
  const projects = [
    {img: project1, name: 'Movie App', link_github: 'www.github.com/Orozimbo1', live_demo: 'http://www.localhost:8001'},
    {img: project2, name: 'Job Search Web App', link_github: 'www.github.com/Orozimbo1', live_demo: 'http://www.localhost:8001'},
    {img: project3, name: 'Highking', link_github: 'www.github.com/Orozimbo1', live_demo: 'http://www.localhost:8001'},
    {img: project4, name: 'React Nav', link_github: 'www.github.com/Orozimbo1', live_demo: 'http://www.localhost:8001'},
    {img: project5, name: 'Vue Country', link_github: 'www.github.com/Orozimbo1', live_demo: 'http://www.localhost:8001'}
  ]

  return (
    <section id='projects' className='py-10 text-white'>
      <div className='text-center mb-4'>
        <h3 className='text-4xl font-semibold'>
          My <span className='text-cyan-600'>Projects</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>My awesome works</p>
      </div>
      <div className='flex max-w-6xl px-5 mx-auto items-center relative'>
        <div className='lg:w-2/3 w-full mx-4'>
          <Swiper 
            slidesPerView={1.2} 
            spaceBetween={20} 
            breakpoints={{
              768: {
                slidesPerView: 2,
              }
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
                <div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
                  <img src={project.img} alt="" className='rounded-lg' />
                  <h3 className='text-xl my-4'>{project.name}</h3>
                  <div className='flex gap-3'>
                    <a href={project.link_github} className='text-cyan-600 bg-gray-800 p-2 inline-block' target='_blank'>Link Github</a>
                    <a href={project.live_demo} className='text-cyan-600 bg-gray-800 p-2 inline-block' target='_blank'>Live Demo</a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='lg:block hidden'>
          <img src={project_person} alt="" className='h-96' />
        </div>
      </div>
    </section>
  )
}

export default Project