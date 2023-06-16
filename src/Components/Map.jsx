import React from 'react'

const Map = () => {

    return (
        <div className="grid grid-cols-1 justify-center place-content-center bg-gray-200">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2392.023364725136!2d-70.91014878416841!3d-53.163620079941104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdb26344f9de9f9b%3A0x341656d2cc37809a!2sNotar%C3%ADa%20Alfredo%20Fonseca%20Mihovilovic!5e0!3m2!1ses!2scl!4v1686708410707!5m2!1ses!2scl"
                title="Google Maps"
                className="w-full h-96 md:h-96"
                loading="lazy">
            </iframe>
        </div>
    )
}

export default Map