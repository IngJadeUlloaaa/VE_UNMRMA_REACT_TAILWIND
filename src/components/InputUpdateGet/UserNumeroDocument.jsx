import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import InputUpdate from '../InputUpdate';

function UserNumeroDocument() {
    const [userNumeroDocument, setUserNumeroDocument] = useState('Cargando...');
    const studentCode = Cookies.get('studentCode');

    useEffect(() => {
        if (!studentCode) {
            console.error('No se encontró el código de estudiante en las cookies.');
            setUserNumeroDocument('Error al cargar.');
            return;
        }

        const fetchUserNumeroDocument = async () => {
            try {
                const response = await fetch(`http://192.168.23.251:7541/api/v1/estudiantes/${studentCode}`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Error al obtener los detalles del estudiante');
                }

                const data = await response.json();
                setUserNumeroDocument(data.numero_documento || 'Numero de Documento no disponible');
            } catch (error) {
                console.error('Error en la solicitud:', error);
                setUserNumeroDocument('Error al cargar.');
            }
        };

        fetchUserNumeroDocument();
    }, [studentCode]);

    return (
        <div className="w-full h-auto flex justify-center items-center">
            <InputUpdate description="Codigo MINED" userInformation={userNumeroDocument} bool={true} />
        </div>
    );
}

export default UserNumeroDocument