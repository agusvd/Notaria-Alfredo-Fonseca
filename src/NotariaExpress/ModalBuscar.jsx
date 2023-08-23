import React from 'react';
import { IoClose } from 'react-icons/io5'
import {BiSearchAlt} from 'react-icons/bi'

const ModalBuscar = ({ isOpen, onClose, filterInput, setFilterInput, filteredDocuments, setSelectedDocument }) => {
    const hasFilterInput = filterInput.trim() !== '';

    
    return (
        <div className={`bg-black bg-opacity-25 backdrop-blur-sm fixed inset-0 flex items-center justify-center transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="w-full sm:w-2/3 mx-auto p-4 rounded-md ">
                <div className='flex justify-center items-center'>
                    <div className='flex items-center w-full border-2 rounded-xl bg-white'>
                        <BiSearchAlt size={30} className=''/>
                        <input type="text" placeholder="Buscar documento" className="p-2 w-full rounded-md focus:outline-none" value={filterInput}
                        onChange={(e) => setFilterInput(e.target.value)} />
                        <button onClick={onClose} className=' w-min p-2 rounded-xl text-black hover:text-red-500'><IoClose size={30} /></button>
                    </div>
                </div>
                {/* Scroll container */}
                {hasFilterInput && (
                    <div className="bg-white max-h-64 overflow-y-auto">
                        {/* Renderizar la lista de documentos filtrados */}
                        {filteredDocuments.map((document) => (
                            <a
                                key={document.id}
                                onClick={() => {
                                    setSelectedDocument(document);
                                    onClose();
                                }}
                                className="text-start block p-2 hover:bg-gray-100 hover:text-teal-400 cursor-pointer"
                            >
                                {document.Nombre}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ModalBuscar;
