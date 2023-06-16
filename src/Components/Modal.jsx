import React from 'react'
import {CgCloseR} from 'react-icons/cg'

const Modal = ({ isVisible, onClose, children }) => {
    if ( !isVisible ) return null

    const handleClose = (e) => {
        if( e.target.id === 'closeOut') onClose()
    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center font-primary' id='closeOut' onClick={handleClose}>
            <div className='w-[600px] flex flex-col'>
                <button className='text-teal-500 text-3xl hover:text-black cursor-pointer transition duration-150 place-self-end mb-2' 
                onClick={() => onClose()}><CgCloseR/></button>
                <div className='bg-white p-2 rounded'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal