import React, { useState } from 'react'
import {BiEditAlt, BiCheckShield, BiPen} from 'react-icons/bi'
import { FaChessKing } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Modal from './Modal'

const Card = () => {

    const [showModal1, setShowModal1] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [showModal3, setShowModal3] = useState(false)


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
    };
    return (
        <div className='max-w-6xl mx-auto mt-10' id='servicios'>
            <motion.div id='servicios' variants={container} initial="hidden" whileInView="visible" className='text-center items-center flex-col justify-center'>
                <h1 className="font-bold font-sans text-4xl sm:text-4xl md:text-5xl text-teal-500 text-center">
                    SERVICIOS IMPORTANTES
                </h1>
                <h2 className="font-light mt-5 text-2xl">
                    Todos los servicios disponibles
                </h2>
            </motion.div>
            <motion.div variants={container} initial="hidden" whileInView="visible" className='mt-10 grid grid-cols-1 md:grid-cols-3 md:gap-y-20 md:gap-x-8 gap-y-20 p-10'>

                {/* cartas */}
                <div className='overflow-hidden rounded-xl bg-white hover:shadow-2xl hover:shadow-teal-500'>
                    <div className='flex items-center justify-center h-[240px] w-full overflow-hidden'>
                        <img src="https://i0.wp.com/blog.lemontech.com/wp-content/uploads/2022/06/archivo-digital.jpg?fit=1024%2C683&ssl=1" className=" md:h-full md:w-auto" />
                    </div>

                    <div className=''>
                        <div className='flex items-center text-3xl rounded-b-md bg-black p-2 text-white justify-beetwen h-20 hover:shadow-lg'>
                            <BiEditAlt className='text-teal-500'/>
                            <span className='text-xl font-bold text-center'>Inscripcion electronica de escrituras</span>
                        </div>
                        <div className='flex items-center justify-around text-center py-3 px-1'>
                            <button onClick={() => setShowModal1(true)} className='text-xl font-semibold bg-teal-500 text-white p-2 rounded-full hover:bg-black duration-150 transition ease-in'>Informacion</button>
                            <a target='_blank' href='https://www.conservador.cl/portal/inscripcion_propiedad' className='text-xl font-semibold bg-teal-500 text-white p-2 rounded-full cursor-pointer hover:bg-black duration-150 transition ease-in'>Ingresar</a>
                        </div>
                        <div className='p-2 text-teal-500 mt-4 flex flex-row items-center text-xl'>
                            <FaChessKing/>
                            <a className='ml-2 text-black font-bold text-sm'>Alfredo Fonseca Mihovilovic</a>
                        </div>
                    </div>
                </div>

                <div className='overflow-hidden rounded-xl bg-white hover:shadow-2xl hover:shadow-teal-500'>
                    <div className='flex items-center justify-center h-[240px] w-full overflow-hidden'>
                        <img src="https://media.ambito.com/p/b79eaecc59ff201461f7d30b6ee9cb88/adjuntos/239/imagenes/039/503/0039503313/firma-digitaljpg.jpg" className="h-full w-auto" />
                    </div>

                    <div className=''>
                        <div className='flex items-center text-3xl rounded-b-md bg-black p-2 text-white justify-beetwen h-20 hover:shadow-lg'>
                            <BiCheckShield className='text-teal-500'/>
                            <span className='text-xl font-bold text-center'>Documentos con firma electronica</span>
                        </div>
                        <div className='flex items-center justify-around text-center py-3 px-'>
                            <button onClick={() => setShowModal2(true)} className='text-xl font-semibold bg-teal-500 text-white p-2 rounded-full hover:bg-black duration-150 transition ease-in'>Informacion</button>
                            <a target='_blank' href='http://fojas.cl/ws_cp/frame_ws_rg.php' className='text-xl font-semibold bg-teal-500 text-white p-2 rounded-full cursor-pointer hover:bg-black duration-150 transition ease-in'>Ingresar</a>
                        </div>
                        <div className='p-2 mt-4 flex flex-row items-center text-xl text-teal-500'>
                            <FaChessKing/>
                            <a className='ml-2 text-black font-bold text-sm'>Alfredo Fonseca Mihovilovic</a>
                        </div>
                    </div>
                </div>

                <div className='overflow-hidden rounded-xl bg-white hover:shadow-2xl hover:shadow-teal-500'>
                    <div className='flex items-center justify-center h-[240px] w-full overflow-hidden'>
                        <img src="https://global-uploads.webflow.com/61388d0210d654c3910bea20/620fb6d688913b53195259f1_guia-practica-para-tramitar-una-herencia-notaria-jbl.jpg" className='md:h-full md:w-auto'/>
                    </div>

                    <div className=''>
                        <div className='flex items-center text-3xl rounded-b-md bg-black p-2 text-white justify-beetwen h-20 hover:shadow-lg'>
                            <BiPen className='text-teal-500'/>
                            <span className='text-xl font-bold text-center'>Documentos privados en linea</span>
                        </div>
                        <div className='flex items-center justify-around text-center py-3 px-'>
                            <button onClick={() => setShowModal3(true)} className='text-xl font-semibold bg-teal-500 text-white p-2 rounded-full hover:bg-black duration-150 transition ease-in'>Informacion</button>
                            <a target='_blank' href='https://www.notarial.cl/' className='text-xl font-semibold bg-teal-500 text-white p-2 rounded-full cursor-pointer hover:bg-black duration-150 transition ease-in'>Ingresar</a>
                        </div>
                        <div className='p-2 text-teal-500 mt-4 flex flex-row items-center text-xl'>
                            <FaChessKing/>
                            <a className='ml-2 text-black font-bold text-sm'>Alfredo Fonseca Mihovilovic</a>
                        </div>
                    </div>
                </div>
            </motion.div>
            <Modal isVisible={showModal1} onClose={() => setShowModal1(false)}>
                <h1 className='text-center text-black text-3xl'>Inscripcion electronica de escrituras</h1>
                <p className='text-justify p-2'>La tramitación electrónica es el uso exahustivo de los medios técnicos disponibles, lo que permite tener procesos completamente eletrónicos sumando a la certeza jurídica las ventajas técnicas de la F.E.A., esto disminuye los plazos, elimina el riesgo de falsificaciones y odemás aporta trazabilidad y transparencia a los procesos. Actualmente se utiliza en la tramitación de las escrituras de compraventa de bienes raíces y de gravámenes.</p>
                <a target='_blank' href='https://www.conservador.cl/portal/inscripcion_propiedad' className='bg-black items-center text-white hover:bg-teal-500 rounded-md p-2 flex justify-center '>Ingresar</a>
            </Modal>
            <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
                <h1 className='text-center text-black text-3xl'>Central de poderes</h1>
                <p className='text-justify p-2'>Este documento incorpora una firma electrónica avanzada, según lo indicado en la Ley Nº19.799 y en el Autoacordado de la Excma. Corte Suprema. Su validez puede ser consultada en el sitio Web www.cbrchile.cl con el código de verificación indicado sobre estas líneas.</p>
                <p className='text-justify p-2'>Aqui puede verificar su documento.</p>
                <a target='_blank' href='http://fojas.cl/ws_cp/frame_ws_rg.php' className='bg-black items-center text-white hover:bg-teal-500 rounded-md p-2 flex justify-center '>Ingresar</a>
            </Modal>
            <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
                <h1 className='text-center text-black text-3xl'>Notarial</h1>
                <p className='text-justify p-2'>A este tipo de actuaciones corresponden aquellos como: cartas poder, declaraciones juradas, autorizaciones de viaje, salvoconductos, aceptación de letras o suscripción de pagarés, compraventa sobre vehículos motorizados, promesas de compraventa, etc.</p>
                <p target='_blank' className='text-justify p-2'>Solicitar documentos privados</p>
                <a href='https://www.notarial.cl/' className='bg-black items-center text-white hover:bg-teal-500 rounded-md p-2 flex justify-center '>Ingresar</a>
            </Modal>
        </div>
    )
}

export default Card