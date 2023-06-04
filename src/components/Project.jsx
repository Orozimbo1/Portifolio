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
import project6 from '../assets/images/secret-word.jpg'
import project7 from '../assets/images/youtube-clone.jpg'

const Project = () => {
  const projects = [
    {img: project1, name: 'MR-OS', link_github: 'https://github.com/Orozimbo1/MR-OS', live_demo: 'https://mr-os.vercel.app/'},
    {img: project2, name: 'React Ecommerce', link_github: 'https://github.com/Orozimbo1/React-Ecommerce', live_demo: 'http://react-ecommerce-livid.vercel.app'},
    {img: project3, name: 'PokeNext', link_github: 'https://github.com/Orozimbo1/PokeNext', live_demo: 'https://poke-next-taupe.vercel.app/'},
    {img: project4, name: 'MiniBlog', link_github: 'https://github.com/Orozimbo1/React-miniblog', live_demo: 'https://react-miniblog-blond.vercel.app/'},
    {img: project5, name: 'Online Shop', link_github: 'https://github.com/Orozimbo1/OnlineShop', live_demo: 'https://online-shop-marketplace.vercel.app/'},
    {img: project6, name: 'Secret Word', link_github: 'https://github.com/Orozimbo1/Secret_Word', live_demo: 'https://react-secretword.netlify.app'},
    {img: project7, name: 'Youtube Clone', link_github: 'https://github.com/Orozimbo1/YouTube_Clone', live_demo: 'https://youtubeclone-mo.netlify.app'}
  ]

  return (
    <section id='projects' className='py-10 text-white'>
      <div className='text-center mb-4'>
        <h3 className='text-4xl font-semibold'>
          Meus <span className='text-cyan-600'>Projetos</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>Meus incríveis trabalhos</p>
      </div>
      <div className='lg:w-11/12 w-full mx-auto'>
        <Swiper 
          slidesPerView={3} 
          spaceBetween={20} 
          breakpoints={{
            768: {
              slidesPerView: 3,
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
    </section>
  )
}

export default Project