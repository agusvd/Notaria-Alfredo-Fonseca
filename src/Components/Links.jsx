import React from 'react'
import '../index.css'
import fojas from '../assets/fojas.png'
import tgr from '../assets/tgr.png'
import sii from '../assets/sii.png'
import registrocivil from '../assets/registrocivil.png'
import pdj from '../assets/pdj.png'
import diariooficial from '../assets/diariooficial.png'
import { motion } from 'framer-motion'

const Links = () => {

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
        <motion.div variants={container} initial="hidden" whileInView="visible" id='links' className='flex flex-col items-center justify-center font-primary pb-32 pt-32'>
            <h1 className="font-bold font-sans text-4xl sm:text-4xl md:text-5xl text-teal-500 text-center mb-10">
                LINKS IMPORTANTES
            </h1>
            <motion.div variants={container} className=' bg-white rounded-xl space-y-3 sm:space-x-10 grid grid-cols-1 lg:flex'>
                <button className='shadow-md rounded-xl hover:bg-gray-100 hover:scale-110 hover:shadow-md'>
                    <a target='_blank' href='https://www.fojas.cl/index2.php' ><img src={fojas} /></a>
                </button>
                <button className='shadow-md rounded-xl hover:bg-gray-100 hover:scale-110 hover:shadow-md'>
                    <a target='_blank' href='https://www.tgr.cl/'><img src={tgr} /></a>
                </button>
                <button className='shadow-md rounded-xl hover:bg-gray-100 hover:scale-110 hover:shadow-md'>
                    <a target='_blank' href='https://homer.sii.cl//'><img src={sii} /></a>
                </button>
                <button className='shadow-md rounded-xl hover:bg-gray-100 hover:scale-110 hover:shadow-md'>
                    <a target='_blank' href='https://www.registrocivil.cl/'><img src={registrocivil} /></a>
                </button>
                <button className='shadow-md rounded-xl hover:bg-gray-100 hover:scale-110 hover:shadow-md'>
                    <a target='_blank' href='https://www.pjud.cl/'><img src={pdj} /></a>
                </button>
                <button className='shadow-md rounded-xl hover:bg-gray-100 hover:scale-110 hover:shadow-md'>
                    <a target='_blank' href='https://www.diariooficial.interior.gob.cl/#openModalMenu'><img src={diariooficial} /></a>
                </button>
            </motion.div>
        </motion.div>
    )
}

export default Links