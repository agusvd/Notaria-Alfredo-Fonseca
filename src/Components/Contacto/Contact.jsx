import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../../index.css';
import fondo from '../../assets/fondo1.jpeg';
import Map from '../Map'
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from "react-helmet";

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await emailjs.sendForm('service_cl2umrl', 'template_jp3qv7l', form.current, 'aNJBfEH2ziRMCyAYF');
            console.log(result.text);
            toast.success('Correo enviado exitosamente');
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } catch (error) {
            console.error(error.text);
            toast.error('Hubo un error al enviar el correo');
            setIsSubmitting(false);
        }
    };

    const container = {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <motion.div className='bg-cover bg-center min-h-screen flex items-center justify-center font-primary' style={{ backgroundImage: `url(${fondo})` }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contacto</title>
                <meta name="description" content="Contacto Notaria Alfredo Fonseca" />
                <link rel="canonical" href="http://notariafonseca.cl/Contacto" />
            </Helmet>
            <motion.div className='bg-white bg-opacity-90 sm:rounded-xl p-2 sm:p-6 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 sm:m-10'
                initial="hidden"
                animate="visible"
                variants={container}
            >
                <motion.div className='text-center'
                    variants={item}
                >
                    <h1 className='text-4xl md:text-6xl mb-4'>Contacto</h1>
                    <h2 className='text-xl md:text-2xl mb-6'>Notaria Alfredo Fonseca Mihovilovic</h2>
                </motion.div>
                <div className='flex flex-col md:flex-row justify-center text-center'>
                    {/* Left Column */}
                    <motion.div className='bg-teal-500 text-white p-4 m-2 rounded-xl hover:bg-black duration-300 transition-all ease-out'
                        variants={item}
                    >
                        <h3 className='text-2xl md:text-xl mb-2'>Horario de Atención</h3>
                        <p className='text-xl'>Lunes a Viernes</p>
                        <ul className='my-2 text-xl'>
                            <li>9:00 - 13:00</li>
                            <li>15:30 - 18:00</li>
                        </ul>
                        <p className='text-lg'>Mas informacion <Link to='/Nosotros' className='text-red-500 hover:text-teal-500 text-lg duration-200 transition-all ease-in-out'>aqui</Link></p>
                    </motion.div>
                </div>
                {/* Form */}
                <motion.div className='bg-gray-100 rounded-xl mt-4 mb-4'
                    variants={item}
                >
                    <h3 className='text-xl mb-4'>Envíanos un mensaje</h3>
                    <form className='space-y-4' ref={form} onSubmit={sendEmail}>
                        <div className='mb-4'>
                            <input
                                type='text'
                                className='py-2.5 px-4 rounded-lg bg-white focus:shadow focus:outline-none w-full'
                                id='nombre'
                                name="user_name"
                                placeholder='Nombre Completo'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <input
                                type='email'
                                className='py-2.5 px-4 rounded-lg bg-white focus:shadow focus:outline-none w-full'
                                id='email'
                                name="user_email"
                                placeholder='Correo'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <textarea
                                className='py-2.5 px-4 rounded-lg bg-white focus:shadow focus:outline-none w-full'
                                id='mensaje'
                                name="message"
                                placeholder='Mensaje'
                                rows='4'
                                required
                            />
                        </div>
                        <motion.button type="submit" value="Send" className='bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-green-500 duration-300 transition-all ease-out w-full'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar'}
                        </motion.button>
                    </form>
                </motion.div>
                <Map />
                <Toaster position="top-center" />
            </motion.div>
        </motion.div>
    );
};

export default Contact;
