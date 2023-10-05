import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt options={{max: 45, scale: 1, speed: 450 }} className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Visão Geral</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Minha formação em joalheria me ensinou a ter um olhar aguçado para os detalhes e a trabalhar com objetos delicados, habilidades que foram transferidas com sucesso para a minha carreira em programação. Com habilidades em Frontend e Backend, sou capaz de desenvolver aplicações web de alta qualidade e performance. Além disso, trago uma perspectiva única para cada produto, onde posso aplicar minhas habilidades para criar soluções precisas e detalhadas. Como programador, estou em constante aprendizado e me desenvolvendo para continuar aprimorando minhas habilidades. Sou um colaborador comprometido e proativo que sempre busca maneiras de melhorar a eficiência e a qualidade dos produtos. Se você está procurando um programador altamente habilidoso e criativo, estou à disposição.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index} {...service}
          />
        ))}
      </div>
    </>
  )
}

const AboutSection = SectionWrapper(About, 'about');
export default AboutSection;
