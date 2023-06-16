import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { BsCalendar, BsStarFill } from 'react-icons/bs';
import { IoLocationSharp, IoPersonCircle } from 'react-icons/io5';
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
      <div className="container mx-auto px-4 py-8">
        <motion.h2
          className="text-3xl font-bold text-teal-500 mb-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          Nosotros
        </motion.h2>

        <motion.div
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h3 className="text-2xl font-bold mb-2">Historia</h3>
          <p className="text-lg">
            La Notaría Alfredo Fonseca ha sido parte de la comunidad desde hace más de 20 años. Nuestro fundador, el destacado notario Alfredo Fonseca Mihovilovic, decidió establecer esta notaría con el objetivo de brindar servicios legales de calidad y confianza a todos nuestros clientes.
          </p>
          <p className="text-lg mt-4">
            Durante todos estos años, hemos sido testigos de numerosos momentos importantes en la vida de las personas. Desde la firma de contratos de compraventa de propiedades hasta la redacción de testamentos, nuestra notaría ha estado presente en cada paso del camino.
          </p>
          <p className="text-lg mt-4">
            Nos enorgullece decir que nuestro equipo de profesionales altamente capacitados se ha ganado la confianza de la comunidad gracias a su experiencia y profesionalismo. Nuestro compromiso con la atención personalizada, la honestidad y la transparencia nos distingue como una notaría confiable y de calidad.
          </p>
        </motion.div>

        <motion.div
          className="mb-8 lg:mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h3 className="text-2xl font-bold mb-2">Por qué elegirnos</h3>
          <ul className="list-disc pl-6">
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
        </motion.div>

        <motion.div
          className="mb-8 lg:mb-16"
          initial="hidden"
          animate="visible"
          variants={teamVariants}
        >
          <h3 className="text-4xl font-bold mb-2">Equipo</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white border border-gray-200 rounded-lg shadow p-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center mb-4 text-3xl gap-4">
                <IoPersonCircle />
                {/*<img src="" alt="John Doe" className="w-16 h-16 rounded-full mr-4" />*/}
                <div>
                  <h4 className="text-xl font-bold">Alfredo Fonseca Mihovilovic</h4>
                  <p className="text-lg text-gray-600">Notario</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <FaBriefcase className="text-teal-500 mr-2" />
                <p className="text-lg">Experiencia: 10 años</p>
              </div>
              <div className="flex items-center mb-2">
                <BsCalendar className="text-teal-500 mr-2" />
                <p className="text-lg">Fecha de inicio</p>
              </div>
              <div className="flex items-center">
                <IoLocationSharp className="text-teal-500 mr-2" />
                <p className="text-lg">Ciudad: Punta Arenas</p>
              </div>
            </motion.div>
            {/* Agrega aquí las tarjetas de los demás miembros del equipo */}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={contactVariants}
        >
          <h3 className="text-2xl font-bold mb-2">Contacto</h3>
          <p className="text-lg">
            Si tienes alguna pregunta o necesitas nuestros servicios, no dudes en contactarnos.
          </p>
          <div className="flex items-center mt-4">
            <FaPhoneAlt className="text-teal-500 mr-2" />
            <span className="text-lg">+56 9 9649 0830 || 61 2 223230</span>
          </div>
          <div className="flex items-center mt-2">
            <FaEnvelope className="text-teal-500 mr-2" />
            <a href="mailto:alfredofonseca@notariointerino.com" className="text-lg">alfredofonseca@notariointerino.com</a>
          </div>
          <div className="flex items-center">
            <IoLocationSharp className="text-teal-500 mr-2" />
              <p className="text-lg">21 de Mayo 1123, 6201066 Punta Arenas</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
