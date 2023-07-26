import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebookSquare, FaTwitter, FaFacebook } from 'react-icons/fa';



const Footer = () => {
  return (
    <div className="flex flex-col items-center sm:m-auto text-white bg-black p-2 font-primary bottom-0 w-full gap-4 sm:p-10 sm:flex sm:justify-between">
      <h1 className='text-3xl text-center'>© 2023 Notaria Alfredo Fonseca</h1>
      <div className='hidden sm:flex flex-col sm:text-xl gap-2 w-full text-center'>
        <p>Dirección: 21 de Mayo 1123</p>
        <p>6201066 Punta Arenas</p>
        <p>Horario de lunes a viernes</p>
        <p>9:00 - 13:00 y 15:30 - 18:00</p>
      </div>
      <div className="hidden sm:flex sm:items-center sm:gap-2.5">
        <a target='_blank' href="https://www.instagram.com/afonsecamasociados2019/?hl=es-la" className='hover:text-teal-500 cursor-pointer text-2xl'>
          <FaInstagram />
        </a>
        <a target='_blank' href="https://web.facebook.com/Afonsecamasociados-114335363328454/?_rdc=1&_rdr" className='hover:text-teal-500 cursor-pointer text-2xl'>
          <FaFacebook />
        </a>
        <a target='_blank' href="#" className='hover:text-teal-500 cursor-pointer text-2xl'>
          <FaTwitter />
        </a>
        <a target='_blank' href="#" className='hover:text-teal-500 cursor-pointer text-2xl'>
          <FaLinkedin />
        </a>
      </div>
      <div className='sm:hidden flex w-full justify-between pl-4 pr-4 gap-4'>
        <div className='text-lg'>
          <p>Dirección: 21 de Mayo 1123</p>
          <p>6201066 Punta Arenas</p>
          <p>Horario de lunes a viernes</p>
          <p>9:00 - 13:00 y 15:30 - 18:00</p>
        </div>
        <div className="flex flex-col items-center gap-2.5">
          <a target='_blank' href="https://www.instagram.com/afonsecamasociados2019/?hl=es-la" className='hover:text-teal-500 cursor-pointer text-2xl'>
            <FaInstagram />
          </a>
          <a target='_blank' href="https://web.facebook.com/Afonsecamasociados-114335363328454/?_rdc=1&_rdr" className='hover:text-teal-500 cursor-pointer text-2xl'>
            <FaFacebook />
          </a>
          <a target='_blank' href="#" className='hover:text-teal-500 cursor-pointer text-2xl'>
            <FaTwitter />
          </a>
          <a target='_blank' href="#" className='hover:text-teal-500 cursor-pointer text-2xl'>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer