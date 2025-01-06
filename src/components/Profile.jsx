import BoxTitle from './BoxTitle';
import UNM_Origin from '../assets/images/unm_origin_shield.webp';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import PrincipalHeader from './PrincipalHeader';
import InputUpdate from './InputUpdate';

function Profile() {
  const [visible, setVisible] = useState(false);

  const toggleContainer = () => {
    setVisible(!visible);
  };

  return (
    <>
      <section className="h-screen flex flex-col">
        {!visible ? (
          <>
            <div className="w-full h-auto flex items-center justify-center sm:h-[10%]">
              <BoxTitle header="PERFIL" />
            </div>
            <section className="w-full h-auto flex items-center justify-center sm:h-[90%]">
              <article className="w-[90%] h-[90%] flex flex-col items-center justify-center shadow-2xl dark:shadow-2xl dark:shadow-green-900">
                <div className="w-full h-auto flex">
                  <PrincipalHeader title="Información del Estudiante" img={UNM_Origin} />
                </div>
                <div className="w-full h-auto flex flex-col">
                  <div className="w-full h-auto flex flex-col sm:flex-row">
                    <div className="w-full h-auto flex flex-col items-center sm:w-2/4">
                      <Input data="Carrera" api_data="Ingenieria en Sistemas" />
                      <Input data="Cedula" api_data="001-12345-6789A" />
                      <Input data="Telefono" api_data="123456789" />
                    </div>
                    <div className="w-full h-auto flex flex-col items-center sm:w-2/4">
                      <Input data="Turno" api_data="Matutino" />
                      <Input data="Nombre Completo" api_data="Chayanne de Pochomil" />
                      <Input data="Correo" api_data="chayanne@unm.edu.ni" />
                    </div>
                  </div>
                  <div className="w-full h-auto text-center my-12">
                    <Button onclick={toggleContainer} title="Actualizar Datos" />
                  </div>
                </div>
              </article>
            </section>
          </>
        ) : (
          <>
            <div className="w-full h-[10%]">
              <BoxTitle header="ACTUALIZAR" />
            </div>
            <section className="w-full h-[90%] flex items-center justify-center">
              <article className="w-full h-full scrollbar-custom flex flex-col overflow-auto scroll-smooth">
                <div className="w-full h-[20%] flex">
                  <PrincipalHeader title="Datos Personales" img={UNM_Origin} />
                </div>
                <div className="w-full h-[80%] flex flex-col">
                  <div className="flex-grow w-full flex">
                    <div className="w-2/4 flex flex-col items-center">
                      <InputUpdate description="Primer Nombre" userInformation="lorem ipsum" />
                      <InputUpdate description="Segundo Nombre" userInformation="lorem ipsum" />
                      <InputUpdate description="Celular" userInformation="123456789" />
                      <InputUpdate description="Compañia Telefónica" userInformation="lorem ipsum" />
                      <InputUpdate description="Primer Nombre" userInformation="lorem ipsum" />
                      <InputUpdate description="Segundo Nombre" userInformation="lorem ipsum" />
                      <InputUpdate description="Celular" userInformation="123456789" />
                      <InputUpdate description="Compañia Telefónica" userInformation="lorem ipsum" />
                    </div>
                    <div className="w-2/4 flex flex-col items-center">
                      <InputUpdate description="Primer Apellido" userInformation="lorem ipsum" />
                      <InputUpdate description="Segundo Apellido" userInformation="lorem ipsum" />
                      <InputUpdate description="Correo Personal" userInformation="lorem@gmail.com" />
                      <InputUpdate description="Fecha de Nacimiento" userInformation="00/00/0000" />
                      <InputUpdate description="Primer Apellido" userInformation="lorem ipsum" />
                      <InputUpdate description="Segundo Apellido" userInformation="lorem ipsum" />
                      <InputUpdate description="Correo Personal" userInformation="lorem@gmail.com" />
                      <InputUpdate description="Fecha de Nacimiento" userInformation="00/00/0000" />
                    </div>
                  </div>
                  <div className="w-full h-auto flex items-center justify-center gap-2 mt-auto">
                    <button
                      onClick={toggleContainer}
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                      Cancelar
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                      Guardar
                    </button>
                  </div>
                </div>
              </article>
            </section>
          </>
        )}
      </section>
    </>
  );
}

export default Profile;
