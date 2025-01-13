import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import InputUpdate from '../InputUpdate';

function UserCellphone() {
    const [userCellphone, setUserCellphone] = useState('Cargando...');
    const studentCode = Cookies.get('studentCode');

    useEffect(() => {
        if (!studentCode) {
            console.error('No se encontró el código de estudiante en las cookies.');
            setUserCellphone('Error al cargar.');
            return;
        }

        const fetchUserCellphone = async () => {
            try {
                const response = await fetch(`http://192.168.23.251:7541/api/v1/estudiantes/detalles/${studentCode}`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Error al obtener los detalles del estudiante');
                }

                const data = await response.json();
                setUserCellphone(data.telefonos || 'Telefono no disponible');
            } catch (error) {
                console.error('Error en la solicitud:', error);
                setUserCellphone('Error al cargar.');
            }
        };

        fetchUserCellphone();
    }, [studentCode]);

    return (
        <div className="w-full h-auto flex justify-center items-center">
            <InputUpdate description="Telefono" userInformation={userCellphone} bool={false} />
        </div>
    );
}

export default UserCellphone