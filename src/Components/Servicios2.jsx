import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronDown } from 'react-icons/fa';
import '../index.css';

const Servicios2 = () => {
    const [respuestasVisibles, setRespuestasVisibles] = useState([]);

    const handleMostrarRespuesta = (id) => {
        setRespuestasVisibles((prevRespuestasVisibles) => {
            const nuevasVisibilidades = [...prevRespuestasVisibles];
            nuevasVisibilidades[id] = !nuevasVisibilidades[id];
            return nuevasVisibilidades;
        });
    };

    const container = {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.01,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const preguntasRespuestas = [
        {
            id: 0,
            pregunta: '¿Es necesario un abogado para realizar un trabajo en la Notaría?',
            respuesta:
                'En general, no se requiere la presencia de un abogado para llevar a cabo trámites y trabajos en una notaría. La función de una notaría es autenticar y certificar actos jurídicos, como contratos y escrituras públicas. Aunque un abogado puede asesorar y brindar orientación legal en la preparación de documentos, no es obligatorio tener uno presente para realizar los trámites notariales. Sin embargo, en situaciones más complejas o que requieran interpretación legal específica, podría ser recomendable buscar el consejo de un abogado.',
        },
        {
            id: 1,
            pregunta: 'Requisitos para Constituir una Sociedad',
            respuesta:
                'Los requisitos para constituir una sociedad pueden variar dependiendo del tipo de sociedad que desees formar y de las leyes y regulaciones del país en el que te encuentres. En general, se suelen requerir los siguientes documentos y trámites:\n\n- Escritura pública de constitución de la sociedad\n- Inscripción en el registro mercantil o entidad similar\n- Obtención de un número de identificación fiscal\n- Cumplimiento de requisitos específicos según el tipo de sociedad (por ejemplo, aportación de capital mínimo, nombramiento de administradores, etc.)\n\nEs recomendable consultar con un abogado o asesor legal especializado para obtener información más precisa y actualizada sobre los requisitos específicos en tu país.',
            },
        {
            id: 2,
            pregunta: 'Requisitos para otorgar un Poder General',
            respuesta:
            'Para otorgar un poder general, generalmente se requiere lo siguiente:\n\n- Documento de identidad válido y vigente del otorgante\n- Documento de identidad válido y vigente del apoderado\n- Escritura pública o documento privado debidamente firmado y notarizado que contenga los poderes y facultades específicas que se desean otorgar\n\nEs importante tener en cuenta que los requisitos pueden variar según la legislación de cada país y las circunstancias particulares del caso. Se recomienda consultar con un abogado o notario para obtener información precisa sobre los requisitos específicos en tu jurisdicción.',
        },
        {
            id: 3,
            pregunta: 'Requisitos para un Certificado de Estado Civil',
            respuesta:
            'Los requisitos para obtener un certificado de estado civil pueden variar según el país y el tipo de certificado que necesites. En general, se suelen requerir los siguientes documentos e información:\n\n- Documento de identidad válido y vigente\n- Información personal, como nombre completo, fecha y lugar de nacimiento, nombres de los padres, estado civil actual, etc.\n- Pago de las tasas correspondientes\n\nEs recomendable consultar los requisitos específicos y los procedimientos establecidos por el registro civil o entidad responsable en tu país.',
        },
        {
            id: 4,
            pregunta: 'Requisitos para Autorización de Viaje',
            respuesta:
            'Los requisitos para obtener una autorización de viaje pueden variar según el país y las circunstancias particulares del caso. En muchos países, especialmente cuando se trata de menores de edad que viajan sin uno o ambos padres, se pueden requerir los siguientes documentos:\n\n- Documento de identidad válido y vigente del menor\n- Documento de identidad válido y vigente de los padres o tutores legales\n- Autorización notarial o consentimiento escrito de los padres o tutores ausentes\n\nEs importante consultar las regulaciones y requisitos específicos del país de origen y destino, así como cualquier requisito adicional establecido por las aerolíneas u otras autoridades relevantes.',
        },
        {
            id: 5,
            pregunta: 'Requisitos para Autorización fijar domicilio comercial',
            respuesta:
            'Los requisitos para obtener una autorización para fijar un domicilio comercial pueden variar según las regulaciones y leyes comerciales del país en el que te encuentres. Algunos de los requisitos comunes pueden incluir:\n\n- Presentación de una solicitud formal para la autorización\n- Documento de identidad válido y vigente\n- Comprobante de dirección o contrato de arrendamiento del local comercial\n- Pago de tasas administrativas o impuestos relacionados\n\nEs recomendable verificar las regulaciones específicas y consultar con las autoridades competentes o un asesor legal para obtener información actualizada y precisa sobre los requisitos en tu jurisdicción.',
        },
        {
            id: 6,
            pregunta: 'Requisitos para Vender un Vehículo',
            respuesta:
            'Los requisitos para vender un vehículo pueden variar según el país y las regulaciones locales. Algunos de los requisitos comunes pueden incluir:\n\n- Documento de identidad válido y vigente del vendedor\n- Título de propiedad del vehículo o documento equivalente\n- Certificado de registro del vehículo\n- Comprobante de pago de impuestos sobre la venta del vehículo\n- Informe de inspección vehicular o certificado de seguridad\n- Liberación de gravámenes o deudas pendientes sobre el vehículo\n\nEs importante verificar las regulaciones específicas y consultar con las autoridades competentes o un asesor legal para obtener información precisa y actualizada sobre los requisitos y procedimientos en tu país.',
        },
        {
            id: 7,
            pregunta: 'Requisitos para celebrar un contrato de arrendamiento',
            respuesta:
            'Los requisitos para celebrar un contrato de arrendamiento pueden variar según el país y las regulaciones locales. Algunos de los requisitos comunes pueden incluir:\n\n- Documento de identidad válido y vigente del arrendador y arrendatario\n- Descripción detallada de la propiedad o local a arrendar\n- Términos y condiciones del contrato, incluyendo duración, renta mensual, depósito de garantía, etc.\n- Firma de ambas partes o sus representantes legales\n\nEs recomendable consultar las leyes y regulaciones específicas en tu jurisdicción, y en caso de duda, buscar el asesoramiento de un abogado especializado en derecho inmobiliario o contractual.',
        },
        {
            id: 8,
            pregunta: 'Requisitos para Otorgar un Testamento',
            respuesta: [
            'Los requisitos para otorgar un testamento pueden variar según el país y las leyes de sucesión aplicables. Algunos de los requisitos comunes pueden incluir:\n\n- Ser mayor de edad y tener plena capacidad legal\n- Estar en pleno uso de facultades mentales al momento de otorgar el testamento\n- Documento escrito que cumpla con los requisitos legales de forma y contenido\n- Firma del testador y de testigos, según lo requerido por la ley\n\nEs importante consultar las leyes de sucesión y los requisitos específicos de tu país, y en caso de duda, buscar el asesoramiento de un abogado especializado en derecho sucesorio.'],
        },
        {
            id: 9,
            pregunta: 'Documentos necesarios para efectuar Transferencias de un Bien Raíz',
            respuesta:
            'Los documentos necesarios para efectuar transferencias de un bien raíz pueden variar según el país y las regulaciones locales. Algunos de los documentos comunes pueden incluir:\n\n- Escritura de compraventa del bien raíz\n- Certificado de dominio vigente\n- Certificado de gravámenes y deudas pendientes\n- Planos y permisos de construcción, en caso de ser aplicable\n- Declaración de impuestos sobre la venta del inmueble\n\nEs recomendable consultar las leyes y regulaciones específicas en tu jurisdicción, y en caso de duda, buscar el asesoramiento de un abogado especializado en derecho inmobiliario o notario público.',
        },
        {
            id: 10,
            pregunta: 'Protesto de Letras',
            respuesta:
            'El protesto de letras es un procedimiento legal mediante el cual se certifica el impago de una letra de cambio u otro título valor similar. Los requisitos y el proceso para realizar un protesto de letras pueden variar según la legislación de cada país. En general, se deben seguir ciertos pasos legales que pueden incluir:\n\n - Presentación de la letra de cambio impagada al notario público o entidad competente\n- Verificación de la falta de pago por parte del deudor\n- Emisión de un acta de protesto que certifique el impago\n\nEs recomendable consultar las leyes y regulaciones específicas en tu país y buscar el asesoramiento de un abogado especializado en derecho comercial o mercantil.',
        },
    ];

    return (
        <div className='font-primary'>
        <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:py-12 bg-white/50 lg:w-full">
            <div className="md:mx-auto sm:text-center lg:w-screen rounded-lg lg:pb-14 container pb-16">
                <div className='text-center'>
                    <p className="inline-block px-3 mb-4 text-xl font-bold tracking-wider text-black  rounded-full">
                        Alfredo Fonseca Mihovilovic
                    </p>
                </div>
                <h2 className="sm:p-10 max-w-lg font-sans text-5xl font-bold leading-none tracking-tight text-teal-500 sm:text-5xl md:mx-auto text-center">
                    <span className="relative inline-block"></span>GUIA DE TRAMITES
                </h2>
            </div>
            <p className="text-xl text-center bg-black text-white p-10 mb-5">
                Aquí encontrarás respuestas a algunas preguntas frecuentes sobre diversos trámites en notarías y asesoría legal.
            </p>
            <div id='preguntas' className="max-w-screen-lg sm:mx-auto">
                <ul className="space-y-8">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                    >
                        {preguntasRespuestas.map((preguntaRespuesta) => (
                            <motion.li
                                key={preguntaRespuesta.id}
                                variants={item} 
                            >
                                <div className="space-y-3 pb-3">
                                    <div className="flex items-center justify-between rounded-xl p-2">
                                        <h3 className="text-xl bg-teal-600 transition-colors duration-200 text-white p-2 rounded-xl">{preguntaRespuesta.pregunta}</h3>
                                        <button onClick={() => handleMostrarRespuesta(preguntaRespuesta.id)} className="p-1 transition duration-300 transform rounded-full bg-teal-400 hover:scale-125">
                                            {respuestasVisibles[preguntaRespuesta.id] ? (<FaChevronDown className="w-6 h-6" />) : (<FaChevronLeft className="w-6 h-6" />)}
                                        </button>
                                    </div>
                                    {respuestasVisibles[preguntaRespuesta.id] && (
                                        <pre className="text-black font-primary border-2 rounded-xl border-teal-300 p-2 text-justify whitespace-pre-wrap text-xl">{preguntaRespuesta.respuesta}</pre>
                                    )}
                                </div>
                            </motion.li>
                        ))}
                    </motion.div>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Servicios2;