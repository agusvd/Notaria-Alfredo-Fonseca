import React from 'react'
import {IoClose} from 'react-icons/io5'

const processRequisitosContent = (content) => {
    return content
        .replace(/<li>/g, '• ') // Reemplaza <li> con viñetas
        .replace(/<\/li>/g, '</li><br>') // Agrega salto de línea después de </li>
        .replace(/<\/?ul>|<\/?p>/g, '') // Remove <ul> and <p> tags
        .replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ') // Add target and rel attributes to <a> tags
        .replace(/Click Aquí/g, '    <span style="color: red;">Click Aquí</span>') // Agrega espacios a la izquierda antes de "Click Aquí"
        .split('\n') // Divide el contenido por saltos de línea
        .map(line => line.trim()) // Elimina espacios en blanco adicionales
        .map(line => line.endsWith('.') ? line + '<br>' : line) // Agrega <br> si la línea termina con un punto
        .join('<br>'); // Convierte los saltos de línea en <br> para el uso en dangerouslySetInnerHTML
};

const Modal = ({ document, onClose }) => {
    const processedRequisitos = processRequisitosContent(document.Requisitos);

    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center font-primary'>
            <div className='w-[700px] flex flex-col text-black bg-white p-2 text-start gap-2 rounded-lg max-h-[700px] overflow-y-auto'>
                <div className='flex justify-center items-center'>
                    <h2 className='text-xl text-center font-bold'>{document.Nombre}</h2>
                    <button onClick={onClose} className=' w-min p-2 rounded-xl text-black hover:text-red-500'><IoClose size={30}/></button>
                </div>
                <div className='flex flex-col text-start items-center'>
                    <p className='text-gray-700'>{document.Descripcion}</p>
                    <h2 className='text-center text-lg font-bold'>Requerimientos</h2>
                    <div className='text-gray-800' dangerouslySetInnerHTML={{ __html: processedRequisitos }} />
                </div>
                <div className='flex justify-center text-center items-center'>
                    <a className='flex bg-blue-500 text-white p-2 rounded-xl hover:bg-teal-500' href={document.UrlNotarioExpress} target="_blank" rel="noopener noreferrer">Pídelo ahora</a>
                </div>
            </div>
        </div>
    );
};

export default Modal