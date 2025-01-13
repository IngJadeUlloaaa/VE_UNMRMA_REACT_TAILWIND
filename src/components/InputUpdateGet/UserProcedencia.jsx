import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import InputUpdate from '../InputUpdate';

function UserProcedencia() {
    const [userProcedencia, setUserProcedencia] = useState('Cargando...');
    const studentCode = Cookies.get('studentCode');

    useEffect(() => {
        if (!studentCode) {
            console.error('No se encontró el código de estudiante en las cookies.');
            setUserProcedencia('Error al cargar.');
            return;
        }

        const fetchUserProcedencia = async () => {
            try {
                const response = await fetch(`http://192.168.23.251:7541/api/v1/estudiantes/${studentCode}`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Error al obtener los detalles del estudiante');
                }

                const data = await response.json();
                setUserProcedencia(data.procedencia || 'Procedencia no disponible');
            } catch (error) {
                console.error('Error en la solicitud:', error);
                setUserProcedencia('Error al cargar.');
            }
        };

        fetchUserProcedencia();
    }, [studentCode]);

    return (
        <div className="w-full h-auto flex justify-center items-center">
            <InputUpdate description="Procedencia" userInformation={userProcedencia} bool="true" />
        </div>
    );
}

export default UserProcedencia