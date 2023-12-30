import React from 'react'

const Skills = () => {
  const skills = [
    {logo: 'logo-html5', name: 'HTML5', level: 'Avançado', count: 26},
    {logo: 'logo-css3', name: 'CSS3', level: 'Avançado', count: 40},
    {logo: 'logo-sass', name: 'Sass', level: 'Básico', count: 45},
    {logo: 'logo-javascript', name: 'JavaScript', level: 'Avançado', count: 80},
    {logo: 'logo-react', name: 'React', level: 'Avançado', count: 80},
    {logo: 'logo-nodejs', name: 'NodeJs', level: 'Intermediário', count: 70},
    {logo: 'logo-python', name: 'Python', level: 'Básico', count: 15},
  ]

  return (
    <section id='skills' className='py-10 b-gray-800 relative'>
      <div className='mt-10 text-gray-100 text-center'>
        <h3 className='text-4xl font-semibold'>Minhas <span className='text-cyan-600'>Habilidades</span></h3>
        <p className='text-gray-400 mt-3 text-lg'>Meus conhecimentos</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills.map((skill, i) => (
            <div key={i} className='border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
              <div style={{
                background: `conic-gradient(rgb(8, 145, 170) ${skill.count}%, #ddd ${skill.count}%)`
              }} className='w-32 h-32 flex items-center justify-center rounded-full'>
                <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600'>
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className='text-lg mt-3'>{skill.name}</p>
              <p className='text-xl mt-3'>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills