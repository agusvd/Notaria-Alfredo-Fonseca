import React, { useState } from 'react';
import { CgMenu, CgClose } from 'react-icons/cg';
import { Link, useLocation } from 'react-router-dom';

const NavbarMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="block sm:hidden bg-black">
            <div className="flex flex-col text-xl space-y-2">
                <div className="flex items-center justify-center">
                    <a onClick={toggleMenu} className="text-white hover:text-teal-500 text-3xl flex items-center justify-center">
                        {menuOpen ? <CgClose /> : <CgMenu />} <a className='text-xl'>Menu</a>
                    </a>
                </div>
                {menuOpen && (
                    <div className='bg-black fixed inset-0 flex justify-center items-center flex-col w-full text-3xl gap-2 z-[99]'>
                        <Link to="/" onClick={closeMenu} className={`hover:no-underline underline-animation cursor-pointer ${location.pathname === '/' ? 'text-teal-500' : 'text-white'}`}>
                            Inicio
                        </Link>
                        {location.pathname === '/' && (
                            <a href="#servicios" onClick={closeMenu} className="hover:no-underline underline-animation cursor-pointer text-white">
                                Servicios
                            </a>)}
                        {location.pathname === '/' && (
                            <a href="#preguntas" onClick={closeMenu} className="hover:no-underline underline-animation cursor-pointer text-white">
                                Preguntas
                            </a>)}
                        <Link to="/Notaria-express" onClick={closeMenu} className={`hover:no-underline underline-animation cursor-pointer ${location.pathname === '/Notaria-express' ? 'text-teal-500' : 'text-white'}`}>
                            Notaria Express
                        </Link>
                        <Link to="/Contacto" onClick={closeMenu} className={`hover:no-underline underline-animation cursor-pointer ${location.pathname === '/Contacto' ? 'text-teal-500' : 'text-white'}`}>
                            Contacto
                        </Link>
                        <Link to="/Nosotros" onClick={closeMenu} className={`hover:no-underline underline-animation cursor-pointer ${location.pathname === '/Nosotros' ? 'text-teal-500' : 'text-white'}`}>
                            Nosotros
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavbarMobile;
