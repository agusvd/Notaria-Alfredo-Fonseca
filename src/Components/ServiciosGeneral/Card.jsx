import React, { useState } from 'react'
import { BiEditAlt, BiCheckShield, BiPen } from 'react-icons/bi'
import { FaChessKing } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Modal from '../Modal'
import { Link } from 'react-router-dom'

const Card = () => {

    const [showModal1, setShowModal1] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [showModal3, setShowModal3] = useState(false)

    const [detailsVisible, setDetailsVisible] = useState(false);
    const [detailText, setDetailText] = useState('');

    const handleDetailClick = (text) => {
        if (detailsVisible) {
            setDetailsVisible(false);
            setDetailText('');
        } else {
            setDetailsVisible(true);
            setDetailText(text);
        }
    };

    const steps = [
        {
            title: 'Elige el documento que deseas tramitar',
            detail:
                'Selecciona el documento que necesites tramitar, no olvides leer atentamente sus requerimientos y asegúrate de que sea el correcto. ¡Puedes solicitar asesoría en nuestro chat personalizado!',
        },
        {
            title: 'Selecciona la notaría más cercana a ti',
            detail:
                'Contamos con más de 80 notarías disponibles a lo largo de todo Chile, puedes filtrar por regiones, solo en Santiago y de turno.',
        },
        {
            title: 'Agenda día y hora para firmar',
            detail:
                'Te brindamos la comodidad de agendar el día y la hora que mejor se acomode a tu agenda para poder ir a firmar y retirar tu documento en notaría.',
        },
        {
            title: ' Completa la información del doc',
            detail:
                'Es vital que nos brindes información que nos ayude a redactar tu documento y dejarlo listo en notaría esperando por tu firma.',
        },
        {
            title: 'Paga en línea fácil y seguro',
            detail:
                'Para finalizar el trámite deberás pagar con tarjeta de crédito o debito en nuestra plataforma, no te preocupes, contamos con el sistema WebPay, una de las pasarelas de pago más seguras de Chile.',
        },
        {
            title: 'Acude a notaría y utiliza la fila preferencial',
            detail:
                'Recuerda asistir el día y hora que seleccionaste para firmar tu documento y utiliza la fila preferencial de NotarioExpress para una mejor atención.',
        }
    ];

    const [activeStep, setActiveStep] = useState(null);

    const handleStepClick = (stepIndex) => {
        if (activeStep === stepIndex) {
            setActiveStep(null);
        } else {
            setActiveStep(stepIndex);
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
                        <img src="https://media.ambito.com/p/b79eaecc59ff201461f7d30b6ee9cb88/adjuntos/239/imagenes/039/503/0039503313/firma-digitaljpg.jpg" className="h-full w-auto" />
                    </div>

                    <div className=''>
                        <div className='flex items-center text-3xl rounded-b-md bg-black p-2 text-white justify-beetwen h-20 hover:shadow-lg gap-5'>
                            <BiCheckShield className='text-teal-500' />
                            <span className='text-xl font-bold text-start'>Documentos con firma electronica</span>
                        </div>
                        <div className='flex items-center justify-around text-center py-3 px-1'>
                            <button onClick={() => setShowModal2(true)} className='text-xl font-semibold bg-teal-500 text-white p-2 rounded-full hover:bg-black duration-150 transition ease-in'>Informacion</button>
                            <a target='_blank' href='http://fojas.cl/ws_cp/frame_ws_rg.php' className='text-xl font-semibold bg-teal-500 text-white p-2 rounded-full cursor-pointer hover:bg-black duration-150 transition ease-in'>Ingresar</a>
                        </div>
                        <div className='p-2 mt-4 flex flex-row items-center text-xl text-teal-500'>
                            <FaChessKing />
                            <a className='ml-2 text-black font-bold text-sm'>Alfredo Fonseca Mihovilovic</a>
                        </div>
                    </div>
                </div>

                {/* Otra carta */}
                <div className='overflow-hidden rounded-xl bg-white hover:shadow-2xl hover:shadow-teal-500'>
                    <div className='flex items-center justify-center h-[240px] w-full overflow-hidden'>
                        <img src="https://global-uploads.webflow.com/61388d0210d654c3910bea20/620fb6d688913b53195259f1_guia-practica-para-tramitar-una-herencia-notaria-jbl.jpg" className='md:h-full md:w-auto' />
                    </div>

                    <div className=''>
                        <div className='flex items-center text-3xl rounded-b-md bg-black p-2 text-white justify-beetwen h-20 hover:shadow-lg gap-5'>
                            <BiPen className='text-teal-500' />
                            <span className='text-xl font-bold text-center'>Notaria Express</span>
                        </div>
                        <div className='flex items-center justify-around text-center py-3 px-1'>
                            <button onClick={() => setShowModal3(true)} className='text-xl font-semibold bg-teal-500 text-white p-2 rounded-full hover:bg-black duration-150 transition ease-in'>Informacion</button>
                            <Link to='/Notaria-Express' className='text-xl font-semibold bg-teal-500 text-white p-2 rounded-full cursor-pointer hover:bg-black duration-150 transition ease-in'>Ingresar</Link>
                        </div>
                        <div className='p-2 text-teal-500 mt-4 flex flex-row items-center text-xl'>
                            <FaChessKing />
                            <a className='ml-2 text-black font-bold text-sm'>Alfredo Fonseca Mihovilovic</a>
                        </div>
                    </div>
                </div>
            </motion.div>
            <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
                <h1 className='text-center text-black text-3xl'>Central de poderes</h1>
                <p className='text-justify p-2'>Este documento incorpora una firma electrónica avanzada, según lo indicado en la Ley Nº19.799 y en el Autoacordado de la Excma. Corte Suprema. Su validez puede ser consultada en el sitio Web www.cbrchile.cl con el código de verificación indicado sobre estas líneas.</p>
                <p className='text-justify p-2'>Aqui puede verificar su documento.</p>
                <a target='_blank' href='http://fojas.cl/ws_cp/frame_ws_rg.php' className='bg-black items-center text-white hover:bg-teal-500 rounded-md p-2 flex justify-center '>Ingresar</a>
            </Modal>
            <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
                <div className="pl-8 pr-8 p-2">
                    <h1 className="text-3xl font-bold mb-4">Pasos para tu trámite notarial</h1>
                    <ol className="list-decimal list-inside space-y-4">
                        {steps.map((step, index) => (
                            <li className="flex flex-col" key={index}>
                                <span className="mr-2 text-xl">{index + 1}. {step.title}</span>
                                <button
                                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 w-32"
                                    onClick={() => handleStepClick(index)}
                                >
                                    {activeStep === index ? 'Ver menos' : 'Ver a detalle'}
                                </button>
                                {activeStep === index && <p className="mt-2">{step.detail}</p>}
                            </li>
                        ))}
                    </ol>
                </div>
                <Link to='/Notaria-Express' className='bg-black items-center text-white hover:bg-teal-500 rounded-md p-2 mr-8 ml-8 flex justify-center '>Ingresar</Link>
            </Modal>
        </div>
    )
}

export default Card