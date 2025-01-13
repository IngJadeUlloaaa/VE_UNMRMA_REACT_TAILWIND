import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import InputUpdate from '../InputUpdate';

function UserNombreSede() {
    const [userNombreSede, setUserNombreSede] = useState('Cargando...');
    const studentCode = Cookies.get('studentCode');

    useEffect(() => {
        if (!studentCode) {
            console.error('No se encontró el código de estudiante en las cookies.');
            setUserNombreSede('Error al cargar.');
            return;
        }

        const fetchUserNombreSede = async () => {
            try {
                const response = await fetch(`http://192.168.23.251:7541/api/v1/estudiantes/${studentCode}`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Error al obtener los detalles del estudiante');
                }

                const data = await response.json();
                setUserNombreSede(data.centro || 'Centro no disponible');
            } catch (error) {
                console.error('Error en la solicitud:', error);
                setUserNombreSede('Error al cargar.');
            }
        };

        fetchUserNombreSede();
    }, [studentCode]);

    return (
        <div className="w-full h-auto flex justify-center items-center">
            <InputUpdate description="Nombre Sede" userInformation={userNombreSede} bool={true} />
        </div>
    );
}

export default UserNombreSede