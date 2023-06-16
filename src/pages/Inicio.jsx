import React from 'react'
import Navbar from '../Components/Navbar'
import Main from '../Components/Main'
import Footer from '../Components/Footer'
import Servicios2 from '../Components/Servicios2'
import Map from '../Components/Map'

import Links from '../Components/Links'
import Card from '../Components/Card'

const Inicio = () => {
    return (
        <div>
            <Navbar/>
            <Main/>
            <Servicios2/>
            <Card/>
            <Links/>
            <Map/>
            <Footer/>
        </div>
    )
}

export default Inicio