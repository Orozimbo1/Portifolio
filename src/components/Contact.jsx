import React from 'react'

import logo from '../assets/images/hashtech.jpeg'

const Contact = () => {
  const contact_info = [
    { logo: 'mail', link: 'mailto:matheusorozimbo5@gmail.com', text: 'matheusorozimbo5@gmail.com' },
    { logo: 'logo-whatsapp', link: 'https://api.whatsapp.com/send?phone=5512996329510', text: '(12) 99632-9510' },
    { logo: 'location', text: 'Guaratinguetá-SP' },
  ]

  return (
    <section id='contacts' className='py-10 px-5 text-teal-700'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold text-green-500'>
          Entre em <span className='text-teal-700'>Contato</span>
        </h3>
        <div className='mt-16 max-w-6xl lg:p-6 p-2 mx-auto'>
          <div className='flex flex-col lg:flex-row justify-around gap-6'>
            {
              contact_info?.map((contact, i) => (
                <div key={i} className="flex gap-4 w-fit items-center">
                  <div className='min-w-[3.5rem] lg:text-3xl text-2xl min-h-[3.5rem] flex items-center justify-center text-white bg-green-500 rounded-full'>
                    {  
                      <a href={contact.link} className='flex items-center justify-center'>
                        <ion-icon name={contact.logo}></ion-icon>
                      </a>
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