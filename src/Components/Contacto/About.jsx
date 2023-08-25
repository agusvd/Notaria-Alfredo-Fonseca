import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md'
import { IoLocationSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 }
    }
  };

  const teamVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.5 }
    }
  };

  const contactVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.5 }
    }
  };

  return (
    <div className="bg-white text-black">
      <div className="mx-auto px-4 py-8">
        <motion.h2 className="text-3xl font-bold text-teal-500 mb-4 lg:pl-24 lg:pr-24" initial="hidden" animate="visible" variants={containerVariants}>Nosotros</motion.h2>
        <motion.div className="mb-8 lg:pl-24 lg:pr-24" initial="hidden" animate="visible" variants={containerVariants}>
          <div className='text-justify'>
            <p className="text-lg">
              La Notaría Alfredo Fonseca Mihovilovic ha sido parte de la comunidad desde hace más de 2 años.
            </p>
            <p className="text-lg mt-4">
              Durante todos estos años, hemos sido testigos de numerosos momentos importantes en la vida de las personas. Desde la firma de contratos de compraventa de propiedades hasta la redacción de testamentos, nuestra notaría ha estado presente en cada paso del camino.
            </p>
            <p className="text-lg mt-4">
              Nos enorgullece decir que nuestro equipo de profesionales altamente capacitados se ha ganado la confianza de la comunidad gracias a su experiencia y profesionalismo. Nuestro compromiso con la atención personalizada, la honestidad y la transparencia nos distingue como una notaría confiable y de calidad.
            </p></div>
        </motion.div>

        <motion.div className="mb-8 lg:mb-16 lg:pl-24 lg:pr-24" initial="hidden" animate="visible" variants={containerVariants}>
          <h3 className="text-2xl font-bold mb-2 text-teal-500">Por qué elegirnos</h3>
          <ul className=" list-none">
            <li className="text-lg">
              <BsStarFill className="text-teal-500 inline mr-2" />
              Experiencia y profesionalismo
            </li>
            <li className="text-lg">
              <BsStarFill className="text-teal-500 inline mr-2" />
              Atención personalizada
            </li>
            <li className="text-lg">
              <BsStarFill className="text-teal-500 inline mr-2" />
              Calidad en nuestros servicios
            </li>
            <li className="text-lg">
              <BsStarFill className="text-teal-500 inline mr-2" />
              Honestidad y transparencia
            </li>
          </ul>
          <h3 className="text-2xl font-bold mb-2 mt-2 text-teal-500">Información</h3>
          <p className="text-lg mb-2">
            Si tienes alguna pregunta o necesitas nuestros servicios, no dudes en contactarnos.
          </p>
          <div className="flex items-center">
            <FaPhoneAlt className="text-teal-500 mr-2" />
            <span className="text-lg">2223101</span>
          </div>
          <div className="flex items-center">
            <IoLocationSharp className="text-teal-500 mr-2" />
            <p className="text-lg">21 de Mayo 1123, 6201066 Punta Arenas, Region de Magallanes y Antartica Chilena</p>
          </div>
        </motion.div>

        <motion.div className="mb-8 lg:mb-16" initial="hidden" animate="visible" variants={teamVariants}>
          <h3 className="text-5xl font-bold text-center pb-10 text-teal-500">Contactanos</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:pl-24 lg:pr-24">
            <motion.div className="bg-white border border-gray-200 rounded-lg shadow p-4 hover:bg-black hover:text-white duration-300 transition-all ease-out" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="flex flex-col items-center mb-4 text-3xl gap-4">
                <div className='text-center'>
                  <h4 className="text-xl font-bold">Alfredo Fonseca Mihovilovic</h4>
                  <p className="text-lg text-teal-500">Notario</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <MdMail size={30} className="text-teal-500 mr-2" />
                <p className="text-lg">alfredofonseca@notariointerino.com</p>
              </div>
            </motion.div>
            <motion.div className="bg-white border border-gray-200 rounded-lg shadow p-4 hover:bg-black hover:text-white duration-300 transition-all ease-out" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="flex flex-col items-center mb-4 text-3xl gap-4">
                <div className='text-center'>
                  <h4 className="text-xl font-bold">Roberto Barria Pozo</h4>
                  <p className="text-lg text-teal-500">Escrituras Publicas</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <MdMail size={30} className="text-teal-500 mr-2" />
                <p className="text-lg">rabp.alfredofonseca@notariointerino.com</p>
              </div>
            </motion.div>
            <motion.div className="bg-white border border-gray-200 rounded-lg shadow p-4 hover:bg-black hover:text-white duration-300 transition-all ease-out" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="flex flex-col items-center mb-4 text-3xl gap-4">
                <div className='text-center'>
                  <h4 className="text-xl font-bold">Jorge Oliver Villegas</h4>
                  <p className="text-lg text-teal-500">Escrituras Publicas</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <MdMail size={30} className="text-teal-500 mr-2" />
                <p className="text-lg">jaov.alfredofonseca@notariointerino.com</p>
              </div>
            </motion.div>
            <motion.div className="bg-white border border-gray-200 rounded-lg shadow p-4 hover:bg-black hover:text-white duration-300 transition-all ease-out" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="flex flex-col items-center mb-4 text-3xl gap-4">
                <div className='text-center'>
                  <h4 className="text-xl font-bold">Victor Retamal Ferrada</h4>
                  <p className="text-lg text-teal-500">Escrituras Publicas</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <MdMail size={30} className="text-teal-500 mr-2" />
                <p className="text-lg">varf.alfredofonseca@notariointerino.com</p>
              </div>
            </motion.div>
            <motion.div className="bg-white border border-gray-200 rounded-lg shadow p-4 hover:bg-black hover:text-white duration-300 transition-all ease-out" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="flex flex-col items-center mb-4 text-3xl gap-4">
                <div className='text-center'>
                  <h4 className="text-xl font-bold">Jimena Ojeda Ampuero</h4>
                  <p className="text-lg text-teal-500">Escrituras Publicas</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <MdMail size={30} className="text-teal-500 mr-2" />
                <p className="text-lg">jaoa.alfredofonseca@notariointerino.com</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
