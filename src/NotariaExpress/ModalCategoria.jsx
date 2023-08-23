import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5'



const ModalCategoria = ({ documents, selectedCategory, onClose, onDocumentClick }) => {
    const [selectedDocument, setSelectedDocument] = useState(null);

    const handleDocumentClick = (document) => {
        setSelectedDocument(document);
        onDocumentClick(document);
        onClose();
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center font-primary'>
            <div className='w-[700px] flex flex-col text-black bg-white p-2 text-start gap-2 rounded-lg max-h-full overflow-y-auto'>
                <div className='flex justify-center items-center'>
                    <h2 className='text-3xl sm:text-2xl text-center font-bold'>Documentos de {selectedCategory}</h2>
                    <button onClick={onClose} className='w-min p-2 rounded-xl text-black hover:text-red-500'>
                        <IoClose size={30} />
                    </button>
                </div>
                <div className='flex flex-col'>
                    {documents.map(document => (
                        <div>
                        <p
                            key={document.id}
                            className="flex items-start cursor-pointer hover:text-teal-500 text-xl border-b"
                            onClick={() => handleDocumentClick(document)}>
                            <span className="mr-2">•</span> {document.Nombre}
                        </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ModalCategoria