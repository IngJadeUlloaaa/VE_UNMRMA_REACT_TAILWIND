import { useEffect, useState, useRef } from 'react';
import BoxTitle from './BoxTitle';
import UNM_Origin from '../assets/images/unm_origin_shield.webp';
import Input from '../components/Input';
import Button from '../components/Button';
import PrincipalHeader from '../components/PrincipalHeader';
import DropDown from '../components/DropDown';
import {
  useGetCountries,
  useGetEthnicities,
  useGetMunicipalities,
  useGetStudent,
  useGetStudentDetails,
  useUpdateStudent
} from '../clients/api_clients';

function Profile() {
  const [visible, setVisible] = useState(false);

  const toggleContainer = () => {
    setVisible(!visible);
  };

  const { data: etnias, isLoading: isLoadingEthnicities } = useGetEthnicities()
  const { data: paises, isLoading: isLoadingCountries } = useGetCountries()
  const { data: municipios, isLoading: isLoadingMunicipatilies } = useGetMunicipalities()
  const { data: estudiante, isLoadingStudent } = useGetStudent(window.localStorage.getItem("CNU") ?? "")
  const { data: estudianteDetalle, isLoadingStudentDetails } = useGetStudentDetails(window.localStorage.getItem("CNU") ?? "")
  const { mutate: updateStudent } = useUpdateStudent()

  useEffect(() => {
    setData({
      idMunicipioOrigen: Number(estudiante?.nacionalidad?.idMunicipio),
      idEtnia: Number(estudiante?.etnia?.id),
      idPaisOrigen: Number(estudiante?.nacionalidad?.idPais),
    });
  }, [
    isLoadingEthnicities,
    isLoadingCountries,
    isLoadingMunicipatilies,
    isLoadingStudent,
    isLoadingStudentDetails
  ]);

  const [data, setData] = useState();

  const onUpdateStudent = () => {
    updateStudent({ ...data, "id": Number(estudiante.id) })
  }

  const onChangeMunicipio = (e) => {
    setData((prev) => ({ ...prev, "idMunicipioOrigen": Number(e?.target.defaultValue) }))
  }

  const onChangePais = (e) => {
    setData((prev) => ({ ...prev, "idPaisOrigen": Number(e?.target.defaultValue) }))
  }

  const onChangeEtnia = (e) => {
    setData((prev) => ({ ...prev, "idEtnia": Number(e?.target.defaultValue) }))
  }

  return (
    <>
      <section className="h-auto flex gap-6 flex-col overflow-auto scroll-smooth scrollbar-native scrollbar-native sm:h-screen sm:gap-0">
        {!visible ? (
          <>
            <div className="w-full h-auto flex items-center justify-center sm:h-auto">
              <BoxTitle header="PERFIL" />
            </div>
            <section className="w-full h-full flex items-center justify-center">
              <article className="w-[90%] h-auto flex flex-col items-center justify-center shadow-2xl dark:shadow-2xl dark:shadow-green-900 sm:h-[90%]">
                {/* <div className="w-full h-auto my-4 flex sm:my-0">
                  <PrincipalHeader title="Información del Estudiante" img={UNM_Origin} />
                </div>
                <div className="w-full h-auto flex flex-col">
                  <div className="w-full h-auto flex flex-col sm:flex-row">
                    <div className="w-full h-auto flex flex-col items-center sm:w-2/4">
                      <Input data="Nombre" defaultValue={estudiante?.nombres} />
                      <Input data="Apellido" defaultValue={estudiante?.apellidos} />
                      <Input data="Cedula" defaultValue={estudiante?.numeroIdentidad} />
                    </div>

                    <div className="w-full h-auto flex flex-col items-center sm:w-2/4">
                      <Input data="Codigo CNU" defaultValue={estudiante?.codigoCNU} />
                      <Input data="Año Ingreso" defaultValue={estudiante?.anioIngresoCarrera} />
                    </div>
                  </div>
                </div>
                <div className='w-full flex'>
                  {estudianteDetalle?.correos ?
                    <ul className='w-full px-16'>
                      {estudianteDetalle?.correos.map((c, index) =>
                        <li key={c} className='w-full'>
                          <Input data={`Correo ${index + 1}`} defaultValue={c} />
                        </li>)}

                    </ul>
                    : null}
                </div> */}

                <div className="w-full h-auto my-4 flex sm:my-0">
                  <PrincipalHeader title="Información del Estudiante" img={UNM_Origin} />
                </div>
                <div className="w-full h-auto flex-col px-5 flex flex-wrap items-center lg:items-start justify-between lg:px-10 lg:flex-row">
                  <div className='w-full flex flex-col items-center lg:items-start lg:w-[50%] lg:static px-2'>
                    <Input data="Nombre" defaultValue={estudiante?.nombres} readOnly/>
                    <Input data="Apellido" defaultValue={estudiante?.apellidos} readOnly/>
                    <Input data="Cedula" defaultValue={estudiante?.numeroIdentidad} readOnly/>
                    <Input data="Codigo CNU" defaultValue={estudiante?.codigoCNU} readOnly />
                    <Input data="Año Ingreso" defaultValue={estudiante?.anioIngresoCarrera} readOnly />
                  </div>
                  <div className='w-full flex flex-col items-center lg:items-start lg:w-[50%] lg:static px-2'>
                    {estudianteDetalle?.correos ?
                      <ul className='w-full'>
                        {estudianteDetalle?.correos.map((c, index) =>
                          <li key={c} className='w-full'>
                            <Input data={`Correo ${index + 1}`} defaultValue={c}  readOnly/>
                          </li>)}

                      </ul>
                      : null}
                    {estudianteDetalle?.telefonos ?
                      <ul className='w-full'>
                        {estudianteDetalle?.telefonos.map((c, index) =>
                          <li key={c} className='w-full'>
                            <Input data={`Teléfono ${index + 1}`} defaultValue={c} readOnly />
                          </li>)}
                      </ul>
                      : null}
                  </div>
                </div>
                <div className='w-full flex'>
                </div>
                <div className="w-full h-auto text-center my-12">
                  <Button onclick={toggleContainer} title="Actualizar Datos" />
                </div>
              </article>
            </section>
          </>
        ) : (
          <>
            <div className="w-full h-dvh flex flex-col overflow-auto scroll-smooth scrollbar-native">
              <div className="w-full h-auto">
                <BoxTitle header="ACTUALIZAR" />
              </div>
              <section className="w-full h-full flex items-center justify-center">
                <article className="w-full h-full scrollbar-custom flex flex-col overflow-auto scroll-smooth">
                  <div className="w-full h-[20%] flex">
                    <PrincipalHeader title="Datos Personales" img={UNM_Origin} />
                  </div>
                  <div className="w-full h-[80%] flex flex-col">
                    <div className="flex-grow w-full flex flex-col sm:flex-row">
                      <div className="w-full flex flex-col items-center gap-4 sm:w-2/4">
                        <DropDown onChange={onChangeMunicipio} description="Municipio" options={municipios} defaultValue={estudiante?.nacionalidad?.idMunicipio} />
                      </div>
                      <div className="w-full flex flex-col items-center sm:w-2/4">
                        <DropDown onChange={onChangeEtnia} description="Etnia" options={etnias} defaultValue={estudiante?.etnia?.id} />
                        <DropDown onChange={onChangePais} description="Nacionalidad" options={paises} defaultValue={estudiante?.nacionalidad?.idPais} />
                      </div>
                    </div>
                    <div className="w-full h-auto my-4 flex items-center justify-center gap-4 sm:my-0">
                      <button
                        onClick={toggleContainer}
                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                      >
                        Cancelar
                      </button>
                      <button onClick={onUpdateStudent} className="bg-green-500 text-white px-4 py-2 rounded-md">
                        Matricular
                      </button>
                    </div>
                  </div>
                </article>
              </section>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default Profile;
