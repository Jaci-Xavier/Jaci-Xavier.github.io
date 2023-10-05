import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailJs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailJs
      .send(
        'service_x7tm87y',
        'service_x7tm87y',
        {
          from_name: form.name,
          to_name: "Xavier",
          from_email: form.email,
          to_email: "devxvr@gmail.com",
          message: form.message,
        },
        'UjsY1Cxqxy0w9QraE'
      )
      .then(
        () => {
          setLoading(false);
          alert("Email enviado com sucesso! Retornarei em breve.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ocorreu um erro ao enviar o email, por favor tente novamente.");
        }
      );
  };


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Envie seu email</p>
        <h3 className={styles.sectionHeadText}>Contato</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Nome:</span>
            <input
              type="text" 
              name="name"
              onChange={handleChange}
              value={form.name} 
              placeholder='Digite seu nome' 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-1g outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email:</span>
            <input
              type="email" 
              name="email" 
              value={form.email} 
              placeholder='Digite seu email' 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-1g outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Mensagem</span>
            <textarea
              rows='7'
              name="message" 
              value={form.message} 
              placeholder='Digite sua mensagem' 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-1g outlined-none border-none font-medium'
            />
          </label>
          <button 
            type="button"
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}


const ContactSection = SectionWrapper(Contact, 'Contact')
export default ContactSection