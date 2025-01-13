import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import InputUpdate from '../InputUpdate';

function UserSexo() {
    const [userSexo, setUserSexo] = useState('Cargando...');
    const studentCode = Cookies.get('studentCode');

    useEffect(() => {
        if (!studentCode) {
            console.error('No se encontró el código de estudiante en las cookies.');
            setUserSexo('Error al cargar.');
            return;
        }

        const fetchUserSexo = async () => {
            try {
                const response = await fetch(`http://192.168.23.251:7541/api/v1/estudiantes/${studentCode}`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Error al obtener los detalles del estudiante');
                }

                const data = await response.json();
                setUserSexo(data.sexo || 'Sexo no disponible');
            } catch (error) {
                console.error('Error en la solicitud:', error);
                setUserSexo('Error al cargar.');
            }
        };

        fetchUserSexo();
    }, [studentCode]);

    return (
        <div className="w-full h-auto flex justify-center items-center">
            <InputUpdate description="Sexo" userInformation={userSexo} bool={true} />
        </div>
    );
}

export default UserSexo