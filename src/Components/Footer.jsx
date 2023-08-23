import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { FaChessKing } from 'react-icons/fa'


const Footer = () => {
    return (
        <footer className='bg-black text-white'>
            <div className='flex flex-col md:flex-row justify-around items-center gap-4 pt-4 pb-4'>
                <div className='flex items-center'>
                    <FaChessKing size={30} className='text-white'/>
                    <h1 className='p-2 text-3xl'> Notaria Alfredo Fonseca Mihovilovic</h1>
                </div>
                <div className="flex  gap-2">
                    <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/afonsecamasociados2019/?hl=es-la" className='hover:text-teal-500 text-2xl'>
                        <FaInstagram />
                    </a>
                    <a target='_blank' rel="noopener noreferrer" href="https://web.facebook.com/Afonsecamasociados-114335363328454/?_rdc=1&_rdr" className='hover:text-teal-500 text-2xl'>
                        <FaFacebook />
                    </a>
                    <a target='_blank' rel="noopener noreferrer" href="#" className='hover:text-teal-500 text-2xl'>
                        <FaTwitter />
                    </a>
                    <a target='_blank' rel="noopener noreferrer" href="#" className='hover:text-teal-500 text-2xl'>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer