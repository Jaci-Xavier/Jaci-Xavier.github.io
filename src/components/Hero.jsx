import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#00b56e]' />
          <div className='w-1 sm:h-80 h-40 green-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Olá, eu sou o <span className='text-[#00b56e]'>Xavier</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Desenvolvedor Web Fullstack <br className='sm:block hidden'/>apaixonado por criar soluções inovadoras e criativas para problemas complexos.</p>
        </div>
      </div>
        <ComputersCanvas />
    </section>
  )
}

export default Hero


//Olá, meu nome é Xavier e sou um programador apaixonado por criar soluções inovadoras e criativas para problemas complexos.