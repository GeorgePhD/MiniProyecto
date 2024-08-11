import React from 'react';

const Receta = () => {
    // Generate a random 8-digit number
    const recetaNumber = Math.floor(10000000 + Math.random() * 90000000);

    // Sample data (You can replace this with actual data)
    const fechaEmision = '2024-08-11';
    const nombreDoctor = 'Dr. Juan Pérez';
    const especialidadDoctor = 'Cardiología';
    const codigoNumber = '123456';

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-16 bg-white rounded-lg shadow-lg">
                {/* First Row: Receta Number */}
                <div className="flex items-center mb-4">
                    <h2 className="text-2xl font-bold text-blue-600">Receta #{recetaNumber}</h2>
                </div>

                {/* Second Row: Doctor Information */}
                <div className="flex flex-col mb-4">
                    <p className="text-lg"><strong>Fecha de Emisión:</strong> {fechaEmision}</p>
                    <p className="text-lg"><strong>Doctor:</strong> {nombreDoctor}</p>
                    <p className="text-lg"><strong>Especialidad:</strong> {especialidadDoctor}</p>
                </div>

                {/* Third Row: Code Number and Button */}
                <div className="flex items-center">
                    <p className="text-lg font-bold mr-4">Código: {codigoNumber}</p>
                    <button className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Ver
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Receta;
