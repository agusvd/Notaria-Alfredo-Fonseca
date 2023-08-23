import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Main from '../Components/Main'
import Footer from '../Components/Footer'
import Links from '../Components/Links'
import Card from '../Components/Card'
import Preguntas from '../Components/Preguntas'

const Inicio = () => {
    return (
        <div>
            <Navbar/>
            <Main/>
            <Preguntas/>
            <Card/>
            <Links/>
            <Footer/>
        </div>
    )
}

export default Inicio