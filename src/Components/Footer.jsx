import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { FaChessKing } from 'react-icons/fa'


const Footer = () => {
    return (
        <footer className='bg-black text-white flex justify-around flex-col sm:flex-row'>
            <div className='flex flex-col justify-around items-center gap-4 pt-4 pb-4 text-center'>
                <div className='flex items-center justify-center flex-col sm:flex-row'>
                    <FaChessKing size={30} className='text-white' />
                    <h1 className='p-2 text-3xl'> Notaria Alfredo Fonseca Mihovilovic</h1>
                </div>
                <div className='flex justify-center'>

                    <a>Dev by <a className='text-teal-400'>Agustin Villarroel Dirstine</a></a>

                </div>
            </div>
            <div className="flex justify-center pb-5 sm:p-5 sm:flex-col gap-2">
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
        </footer>
    )
}

export default Footer