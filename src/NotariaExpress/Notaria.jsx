import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Modal from './Modal';
import ModalCategoria from './ModalCategoria';
import ModalBuscar from './ModalBuscar';

const Notaria = () => {
    {/* Input para buscar */ }
    const [filterInput, setFilterInput] = useState(''); // Estado para el valor del input
    const [documents, setDocuments] = useState([]); // Estado para almacenar los documentos
    const [filteredDocuments, setFilteredDocuments] = useState([]);
    {/* Modals */ }
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);


    useEffect(() => {
        // Llamada a la API para obtener los documentos
        axios.get('https://www.notarioexpress.cl/api/integracion/notaria/39')
            .then(response => {
                setDocuments(response.data);
            })
            .catch(error => {
                console.error('Error fetching documents:', error);
            });
    }, []); // Se ejecutará solo una vez al montar el componente

    {/* Funcinoes para el buscador de documentos */ }
    useEffect(() => {
        // Filtrar documentos cuando cambie el filtro
        if (filterInput.trim() === '') {
            setFilteredDocuments([]);
            return;
        }
        const normalizedFilterInput = filterInput
            .toLowerCase()
            .replace('á', 'a')
            .replace('é', 'e')
            .replace('í', 'i')
            .replace('ó', 'o')
            .replace('ü', 'u');

        const filtered = documents.filter(document => {
            const normalizedDocumentName = document.Nombre
                .toLowerCase()
                .replace('á', 'a')
                .replace('é', 'e')
                .replace('í', 'i')
                .replace('ó', 'o')
                .replace('ü', 'u');

            return normalizedDocumentName.includes(normalizedFilterInput);
        });

        setFilteredDocuments(filtered);
    }, [filterInput, documents]);

    const getDocumentsByCategory = (category) => {
        return documents.filter(document => document.Categoria === category);
    };

    return (
        <div className='pt-10 pb-10 h-screen w-full flex flex-col justify-center font-primary'>
            {/* Header */}
            <div className='flex flex-col items-center justify-center text-center'>
                <img src="https://www.notarioexpress.cl/images/finiquitos-page/logo/logo-icon.png"
                    alt="logo notarioexpress" width="50px" height="auto" />
                <h1 className='text-4xl pt-5'>¿Qué documento buscas?</h1>
                <h4 className='text-2xl pb-5'>Obtén tu documento rápido, fácil y en línea</h4>
                <button className="p-2 w-auto text-xl font-bold rounded-2xl border-2"
                    onClick={() => setIsSearchModalOpen(true)}>
                    Busca aquí tu documento
                </button>
            </div>
            {/* Buscador */}
            <div>
                <div className='text-center p-2'>
                    {/* Use the new ModalBuscar component */}
                    <ModalBuscar
                        isOpen={isSearchModalOpen}
                        onClose={() => setIsSearchModalOpen(false)}
                        filterInput={filterInput}
                        setFilterInput={setFilterInput}
                        filteredDocuments={filteredDocuments}
                        setSelectedDocument={setSelectedDocument}
                    />
                </div>
                {/* Modal */}
                {selectedDocument && (
                    <Modal
                        document={selectedDocument}
                        onClose={() => setSelectedDocument(null)}
                    />
                )}
            </div>
            {/* Categorias de los documentos */}
            <div className='flex justify-center items-center p-2'>
                <div className='grid grid-cols-2 gap-10'>
                    {/* Autorizaciones */}
                    <div className='flex flex-col items-center gap-2 cursor-pointer' onClick={() => setSelectedCategory('Autorizaciones')}>
                        <img src="https://www.notarioexpress.cl/images/docs-pages/icons/acordeon-documentos/autorizaciones.png"
                            width="auto" height="38rem" alt="category" />
                        <p className="name-category">Autorizaciones</p>
                    </div>
                    {/* Declaraciones */}
                    <div className='flex flex-col items-center gap-2 cursor-pointer' onClick={() => setSelectedCategory('Declaraciones')}>
                        <img src="https://www.notarioexpress.cl/images/docs-pages/icons/acordeon-documentos/Declaracionesa.png"
                            width="auto" height="38rem" alt="category" />
                        <p className="name-category">Declaraciones</p>
                    </div>
                    {/* Certificaciones */}
                    <div className='flex flex-col items-center gap-2 cursor-pointer' onClick={() => setSelectedCategory('Certificados')}>
                        <img src="https://www.notarioexpress.cl/images/docs-pages/icons/acordeon-documentos/Certificados.png"
                            width="auto" height="38rem" alt="category" />
                        <p className="name-category">Certificaciones</p>
                    </div>
                    {/* Poderes */}
                    <div className='flex flex-col items-center gap-2 cursor-pointer' onClick={() => setSelectedCategory('Poderes')}>
                        <img src="https://www.notarioexpress.cl/images/docs-pages/icons/acordeon-documentos/Poderes.svg"
                            width="auto" height="38rem" alt="category" />
                        <p className="name-category">Poderes</p>
                    </div>
                    {/* Contratos */}
                    <div className='flex flex-col items-center gap-2 cursor-pointer' onClick={() => setSelectedCategory('Contratos')}>
                        <img src="https://www.notarioexpress.cl/images/docs-pages/icons/acordeon-documentos/Contratosa.png"
                            width="auto" height="38rem" alt="category" />
                        <p className="name-category">Contratos</p>
                    </div>
                    {/* Otros */}
                    <div className='flex flex-col items-center gap-2 cursor-pointer' onClick={() => setSelectedCategory('Otros')}>
                        <img src="https://www.notarioexpress.cl/images/docs-pages/icons/acordeon-documentos/Otrosa.png"
                            width="auto" height="38rem" alt="category" />
                        <p className="name-category">Otros</p>
                    </div>
                </div>
                {selectedCategory && (
                    <ModalCategoria
                        documents={getDocumentsByCategory(selectedCategory)}
                        selectedCategory={selectedCategory}
                        onClose={() => setSelectedCategory(null)}
                        onDocumentClick={(document) => setSelectedDocument(document)} />
                )}
            </div>
        </div>
    )
}

export default Notaria