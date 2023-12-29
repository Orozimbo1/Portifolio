import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const skills = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div>
      <div className='nav'>
        <p>(12) 99999-9999</p>
        <p>email@email.com</p>
      </div>
      <div className='intro'>
        <p className='text'>
          <span>" </span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, laudantium dignissimos? Officia, debitis a nisi odit est et qui, laborum tempora eos minima illo voluptatibus quam nemo quia, nesciunt neque. 
          <span> "</span>
        </p>
        <div className='image'></div>
        <div className='info'>
          <h1>Matheus Orozimbo</h1>
          <h2>Desenvolvedor Front end</h2>
          <p>Toda caminhada começa com o primeiro passo</p>
        </div>
        <div className='skills'>
          {skills.map((el) => (
            <span key={el} className='skill'></span>
          ))}
        </div>
      </div>
    </div>
  )
}
