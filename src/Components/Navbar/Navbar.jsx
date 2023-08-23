import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import { FaChessKing } from 'react-icons/fa'
import '../../index.css';
import { Link, useLocation } from 'react-router-dom';
import NavbarMobile from './NavbarMobile';

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
                <Link to="/Notaria-express" className={`hover:no-underline underline-animation cursor-pointer ${location.pathname === '/Notaria-express' ? 'text-teal-500' : 'text-white'
                    }`}>Notaria Express
                </Link>
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
            <NavbarMobile/>
        </div>
    );
};

export default Navbar;