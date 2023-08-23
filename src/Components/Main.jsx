import React from 'react'
import logo1 from '../assets/logo1.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../index.css';

const Main = () => {

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

    const item = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    };
    
    return (
        <section className="bg-black text-gray-200 font-primary">
            <div className="container mx-auto flex px-5 py-5 sm:py-12 md:flex-row flex-col items-center">
                <motion.div variants={container} initial="hidden" whileInView="visible" className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <motion.h1 className="title-font text-5xl mb-4 font-medium text-teal-500" variants={item} initial="hidden" whileInView="visible">
                        NOTARIA
                        <br className="hidden lg:inline-block" />
                    </motion.h1>
                    <motion.h2 className="text-4xl mb-4" variants={item}>
                        Alfredo Fonseca Mihovilovic
                    </motion.h2>
                    <motion.p className="mb-8 leading-relaxed text-xl" variants={item}>
                        Donde la excelencia y el compromiso se unen para brindarte tranquilidad y confianza en cada trámite legal. Tu notaría de confianza en la región.
                    </motion.p>
                    <motion.div className="flex justify-center" variants={item}>
                        <a href="#servicios" className="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">Servicios</a>
                        <Link to="/Contacto" className="ml-4 inline-flex text-white bg-teal-900 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">Contacto</Link>
                    </motion.div>
                </motion.div>
                <motion.div variants={container} initial="hidden" whileInView="visible" 
                transition={{
                    delayChildren: 0.5,
                    staggerChildren: 0.2,
                    delay: 0.5, // Agregar un retraso adicional al segundo div
                }} className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <motion.img className="object-cover object-center rounded-3xl" alt="hero" src={logo1} variants={item} />
                </motion.div>
            </div>
        </section>
    );
};

export default Main;