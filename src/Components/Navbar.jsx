import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import { CgMenu, CgClose } from 'react-icons/cg';
import { FaChessKing } from 'react-icons/fa'
import '../index.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg-black text-white sm:flex sm:justify-around p-5 font-primary">
            <div className="hidden text-center text-xl space-x-2 sm:flex sm:space-x-3 sm:items-center">
                <FaChessKing className="text-xl text-white" />
                <Link to="/" className={`hover:no-underline underline-animation cursor-pointer ${location.pathname === '/' ? 'text-teal-500' : 'text-white'
                    }`}>Inicio</Link>
                {location.pathname === '/' &&
                    (<a href="#servicios" className="hover:no-underline underline-animation cursor-pointer text-white">
                        Servicios
                    </a>)}
                {location.pathname === '/' &&
                    (<a href='#preguntas' className='hover:no-underline underline-animation cursor-pointer text-white'>
                        Preguntas
                    </a>)}
                <Link to="/Contacto" className={`hover:no-underline underline-animation cursor-pointer ${location.pathname === '/Contacto' ? 'text-teal-500' : 'text-white'
                    }`}>Contacto</Link>
                <Link to="/Nosotros" className={`hover:no-underline underline-animation cursor-pointer ${location.pathname === '/Nosotros' ? 'text-teal-500' : 'text-white'
                    }`}> Nosotros</Link>
            </div>
            <div className="hidden sm:text-center text-xl sm:flex sm:items-center sm:space-x-1 sm:text-2xl">
                <a target='_blank' href='https://web.facebook.com/Afonsecamasociados-114335363328454/?_rdc=1&_rdr' className="cursor-pointer hover:text-teal-500">
                    <FaFacebookSquare />
                </a>
                <a target='_blank' href='https://www.instagram.com/afonsecamasociados2019/?hl=es-la' className="cursor-pointer hover:text-teal-500">
                    <FaInstagram />
                </a>
                <a target='_blank' className="cursor-pointer hover:text-teal-500">
                    <FaTwitter />
                </a>
                <a target='_blank' className="cursor-pointer hover:text-teal-500">
                    <FaLinkedin />
                </a>
            </div>
            <div className="block sm:hidden bg-black">
                <div className="flex flex-col text-xl space-y-2">
                    <div className="flex items-center justify-start">
                        <a onClick={toggleMenu} className="text-white hover:text-teal-500 text-3xl">
                            {menuOpen ? <CgClose /> : <CgMenu />}
                        </a>
                    </div>
                    {menuOpen && (
                        <div className='bg-black flex justify-center items-center flex-col w-full text-3xl gap-2'>
                            <Link to="/" className={`hover:no-underline underline-animation cursor-pointer ${location.pathname === '/' ? 'text-teal-500' : 'text-white'}`}>
                                Inicio
                            </Link>
                            {location.pathname === '/' && (
                                <a href="#servicios" className="hover:no-underline underline-animation cursor-pointer text-white">
                                    Servicios
                                </a>)}
                            {location.pathname === '/' && (
                                <a href="#preguntas" className="hover:no-underline underline-animation cursor-pointer text-white">
                                    Preguntas
                                </a>)}
                            <Link to="/Contacto" className={`hover:no-underline underline-animation cursor-pointer ${location.pathname === '/Contacto' ? 'text-teal-500' : 'text-white'}`}>
                                Contacto
                            </Link>
                            <Link to="/Nosotros" className={`hover:no-underline underline-animation cursor-pointer ${location.pathname === '/Nosotros' ? 'text-teal-500' : 'text-white'}`}>
                                Nosotros
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;