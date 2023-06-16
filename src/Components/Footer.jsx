import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebookSquare, FaTwitter, FaFacebook } from 'react-icons/fa';



const Footer = () => {
  return (
    <div className="flex items-center justify-between text-sm m-auto text-white bg-black p-10 font-primary bottom-0 w-full">
        <h1 className=' text-lg'>© 2023 Notaria Alfredo Fonseca</h1>
        <div className='text-lg'>
          <p>Dirección: 21 de Mayo 1123, 6201066 Punta Arenas</p>
          <p>Horario de lunes a viernes</p>
          <p>9:00-13:00, 15:30-18:00</p>
        </div>
        <div className="flex items-center gap-2.5">
          <a target='_blank' href="https://www.instagram.com/afonsecamasociados2019/?hl=es-la" className='hover:text-teal-500 cursor-pointer text-2xl'>
            <FaInstagram/>
          </a>
          <a target='_blank' href="https://web.facebook.com/Afonsecamasociados-114335363328454/?_rdc=1&_rdr" className='hover:text-teal-500 cursor-pointer text-2xl'>
            <FaFacebook/>
          </a>
          <a target='_blank' href="#" className='hover:text-teal-500 cursor-pointer text-2xl'>
            <FaTwitter/>
          </a>
          <a target='_blank' href="#" className='hover:text-teal-500 cursor-pointer text-2xl'>
            <FaLinkedin/>
          </a>
        </div>
    </div>
  )
}

export default Footer