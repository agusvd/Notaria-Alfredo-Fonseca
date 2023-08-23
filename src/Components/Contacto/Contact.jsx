import React from 'react';
import { motion } from 'framer-motion';
import '../../index.css';
import fondo from '../../assets/fondo1.jpeg';

const Contact = () => {
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

    return (
        <div className='bg-cover bg-center min-h-screen flex items-center justify-center' style={{ backgroundImage: `url(${fondo})` }}>
            <div className='bg-white bg-opacity-90 rounded-xl p-6 w-full md:w-3/4 lg:w-2/3 xl:w-1/2'>
                <div className='text-center'>
                    <h1 className='text-4xl md:text-6xl mb-4'>Informacion de contacto</h1>
                    <h2 className='text-xl md:text-2xl mb-6'>Notaria Alfredo Fonseca Mihovilovic</h2>
                </div>
                <div className='flex flex-col md:flex-row justify-center'>
                    {/* Left Column */}
                    <motion.div className='bg-teal-500 text-white p-4 m-2 rounded-xl' initial='hidden' animate='visible' variants={container}>
                        <h3 className='text-lg md:text-xl mb-2'>Horario de Atención</h3>
                        <p clas>Lunes a Viernes</p>
                        <ul className='my-2 text-start'>
                            <li>9:00 - 13:00</li>
                            <li>15:30 - 18:00</li>
                        </ul>
                    </motion.div>
                    <motion.div className='bg-teal-500 text-white p-4 m-2 rounded-xl' initial='hidden' animate='visible' variants={container}>
                        <h3 className='text-lg md:text-xl mb-2'>Numeros de contacto</h3>
                        <ul className='my-2 text-start'>
                            <li>61 2 223230</li>
                            <li>+56 9 9649 0830</li>
                        </ul>
                    </motion.div>
                </div>
                {/* Form */}
                <div className='bg-gray-100 rounded-xl mt-4'>
                    <h3 className='text-xl mb-4'>Envíanos un mensaje</h3>
                    <form className='space-y-4'>
                        <div className='mb-4'>
                            <input
                                type='text'
                                className='py-2.5 px-4 rounded-lg bg-white focus:shadow focus:outline-none w-full'
                                id='nombre'
                                name='nombre'
                                placeholder='Nombre Completo'
                            />
                        </div>
                        <div className='mb-4'>
                            <input
                                type='text'
                                className='py-2.5 px-4 rounded-lg bg-white focus:shadow focus:outline-none w-full'
                                id='email'
                                name='email'
                                placeholder='Email'
                            />
                        </div>
                        <div className='mb-4'>
                            <textarea
                                className='py-2.5 px-4 rounded-lg bg-white focus:shadow focus:outline-none w-full'
                                id='mensaje'
                                name='mensaje'
                                placeholder='Mensaje'
                                rows='4'
                            ></textarea>
                        </div>
                        <button
                            type='submit'
                            className='bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition w-full'
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
