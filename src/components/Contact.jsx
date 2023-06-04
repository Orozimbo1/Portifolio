import React from 'react'

import logo from '../assets/images/hashtech.jpeg'

const Contact = () => {
  const contact_info = [
    { logo: 'mail', link: 'mailto:matheusorozimbo5@gmail.com', text: 'matheusorozimbo5@gmail.com' },
    { logo: 'logo-whatsapp', link: 'https://wa.me/5535988658041', text: '(35) 9 8865-8041' },
    { logo: 'location', text: 'Guaratinguetá-SP' },
  ]

  return (
    <section id='contacts' className='py-10 px-3 text-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          Entre <span className='text-cyan-600'>Contato</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>Get in touch</p>
        <div className='mt-16 flex lg:flex-row flex-col gap-6 max-w-5xl bg-gray-800 lg:p-6 p-2 rounded-lg mx-auto'>
          {/* <form className='flex flex-col flex-1 gap-5'>
            <input type="text" placeholder='Your name' />
            <input type="email" placeholder='Your Email Adress' />
            <textarea placeholder='Your Message' rows={10}></textarea>
            <button className='btn-primary w-fit'>Send Message</button>
          </form> */}
          <div className='flex justify-center flex-col border-r border-cyan-600'>
            <img src={logo} alt="Logo da empresa HashTexh" className='max-w-[25rem] max-h-[30rem] rounded-full mx-14 my-8'/>
            <h3 className='text-4xl text-white'>
              Hash<span className='text-cyan-600'>Tech</span>
            </h3>
            <p className='text-gray-300 mt-3 text-md'>Software solutions</p>
          </div> 
          <div className='flex justify-center flex-col gap-6'>
            {
              contact_info?.map((contact, i) => (
                <div key={i} className="flex gap-4 w-fit items-center">
                  <div className='min-w-[3.5rem] lg:text-3xl text-2xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full'>
                    {
                      contact.link ? 
                        <a href={contact.link} className='flex items-center justify-center'><ion-icon name={contact.logo}></ion-icon></a>
                      :
                        <ion-icon name={contact.logo}></ion-icon>
                    }
                  </div>
                  <p className='lg:text-lg text-sm'>{contact.text}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact