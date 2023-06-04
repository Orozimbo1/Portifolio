import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "SOBRE", link: "#about" },
    { name: "HABILIDADES", link: "#skills" },
    { name: "PROJETOS", link: "#projects" },
    { name: "CONTATO", link: "#contacts" },
  ]

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector('nav')
      window.scrollY > 0 ? setSticky(true) : setSticky(false)
    })
  })

  return (
    <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? 'bg-white/80 text-gray-900' : 'text-white '}`}>
      <div className='flex justify-between'>
        <div className='mx-7'>
          <h4 className='text-4xl uppercase font-bold lg:m-1 m-5'>
            Ma<span className='text-cyan-600'>the</span>us
          </h4>
        </div>
        <div className={`${sticky ? 'bg-white/0' : 'bg-white'} text-gray-900 lg:block hidden px-7 py-2 font-medium rounded-bl-full`}>
          <ul className='flex items-center gap-1 py-2 text-lg'>
            {
              menuLinks?.map((menu, i) => (
                <li key={i} className='px-6 hover:text-cyan-600'>
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
        <div onClick={() => setOpen(!open)}
        className={`z-[999] ${open ? 'text-gray-900' : (sticky ? 'text-gray-900' : 'text-gray-100')} cursor-pointer text-4xl lg:hidden m-5`}>
          <ion-icon name='menu'></ion-icon>
        </div>
        <div className={`text-gray-900 lg:hidden absolute w-2/4 h-screen px-7 py-2 font-medium bg-white top-0 ${open ? 'right-0' : 'right-[-100%]'} duration-300`}>
          <ul className='flex flex-col justify-center h-full gap-10 py-2 text-lg'>
            {
              menuLinks.map((menu, i) => (
                <li onClick={() => setOpen(false)} key={i} className='px-6 hover:text-cyan-600'>
                  <a href={menu.link}>{menu.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar