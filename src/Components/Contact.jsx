import React from 'react'
import { motion } from 'framer-motion';
import '../index.css'

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
                staggerChildren: 0.2
            }
        }
    }
    return (
        <div className='px-4 py-16 mx-auto w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl font-primary'>
        <div id='contacto' className="relative">
            <img src="https://image-tc.galaxy.tf/wijpeg-dv8srpmt3cly1788dz2kma2mg/shutterstock-595325795_standard.jpg?crop=108%2C0%2C1704%2C1278" className="absolute inset-0 object-cover w-full h-full " alt="" />
            <div className="relative bg-gray-900 bg-opacity-75">
                <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <motion.div variants={container} initial="hidden"
                        whileInView="visible" className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 text-4xl tracking-tight text-white sm:text-4xl sm:leading-none">
                                Notaria<br className="hidden md:block" />
                                <span className="text-teal-500 text-2xl">Alfredo Fonseca Mihovilovic</span>
                            </h2>
                            <h3 className='max-w-xl mb-2 text-lg sm:text-xl text-black font-bold'>Informacion de contacto</h3>
                            <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                                61 2 223230
                            </p>
                            <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                                +56 9 9649 0830
                            </p>
                            <p className='max-w-xl mb-4 text-base text-white md:text-lg'>
                                alfredofonseca@notariointerino.com
                            </p>
                        </motion.div>
                        <motion.div variants={container} initial="hidden" whileInView="visible" className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-gray-100 rounded-3xl shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-bold sm:text-center sm:mb-6 sm:text-2xl">
                                Contacto
                                </h3>
                                <form>
                                <div className="mb-1 sm:mb-2">
                                    <label className="inline-block mb-1 font-medium text-teal-500">Nombre completo</label>
                                    <input placeholder="Nombre completo" required type="text" className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"/>
                                </div>
                                <div className="mb-1 sm:mb-2">
                                    <label className="inline-block mb-1 font-medium text-teal-500">E-mail</label>
                                    <input placeholder="Correo@gmail.com" required type="email" className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"/>
                                </div>
                                <div className="mb-1 sm:mb-2">
                                    <label className="inline-block mb-1 font-medium text-teal-500">Telefono</label>
                                    <input placeholder="912341234" required type="number" className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"/>
                                </div>
                                <div className="mb-1 sm:mb-2">
                                    <label className="inline-block mb-1 font-medium text-teal-500">Consulta</label>
                                    <textarea placeholder="Consulta" required className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline">
                                    </textarea>
                                </div>
                                <div className="mt-4 mb-2 sm:mb-4">
                                    <button type="submit" className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-500 hover:bg-red-600 focus:shadow-outline focus:outline-none">
                                    Enviar
                                    </button>
                                </div>
                                <p className="text-xs text-gray-600 sm:text-sm">
                                    Notaria Alfredo Fonseca
                                </p>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                    <div className='mt-16 border-xl'>
                    {/* Mapa */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2392.023364725136!2d-70.91014878416841!3d-53.163620079941104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdb26344f9de9f9b%3A0x341656d2cc37809a!2sNotar%C3%ADa%20Alfredo%20Fonseca%20Mihovilovic!5e0!3m2!1ses!2scl!4v1686708410707!5m2!1ses!2scl"
                        width='100%'
                        height='400'
                        frameBorder='0'
                        style={{ border: 0 }}
                        allowFullScreen=''
                        title='Mapa'>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact
