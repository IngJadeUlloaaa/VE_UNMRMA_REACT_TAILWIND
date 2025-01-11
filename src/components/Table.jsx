import React, { useState } from 'react';
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { FaTimes } from "react-icons/fa";

const defaultData = [
    {
        Nombres: 'Carlos Enrique Ulloa Martinez',
        Codigo_Estudiantil: 'linsley',
        Tipo_Documento: 24,
        No_Cedula: 100,
        No_Cedula_Resid: 'In Relationship',
        No_Pasaporte: 50,
        Sexo: 'Masculino',
        Fecha_Nacimiento: '00/00/0000',
        Edad: 18,
        Dimension_Nacionalidad: 'Nacional',
        Pais_Procedencia: 'Nicaragua',
        Etnia: 'Mestizo',
        Dep_Procedencia: 'Managua',
        Mun_Procedencia: 'Managua',
        Zona_Procedencia: 'Urbano',
        Centro_Secundaria: 'Estatal',
        Estado_Civil: 'Soltero',
        No_Hijos: 0,
        Condicion_Laboral: 'Trabaja',
        Ocupacion: 'Ninguno',
        Discapacidad: 'Ninguna',
        Dominio_Idiomas: 'Si',
        Nombre_Idioma: 'Ingles',
        Nivel_Alcanzado: 'C1',
        Sede: 'Extension Universitaria Boaco',
        Dep_Sede: 'Boaco',
        Mun_Sede: 'Boaco',
        Prog_Especial: 'No aplica',
        Tipo_Informacion: 'Grado',
        Nivel_fp: 'Ingenieria',
        Nombre_Carrera: 'Ingenieria en Sistemas',
        Año_Academico: 'II',
        Modalidad: 'Semi Presencial',
        Regimen: 'Cuatrimestral',
        Turno: 'Matutino',
        Tipo_Beca: 'Ninguna',
        Beca_Complementaria: 'No',
        Movilidad_Academica: 'No',
        Tipo_Movilidad: 'No aplica',
        Gestion_Movilidad: 'No aplica',
        Pais_Movilidad: '',
        Tipo_Entidad: 'No aplica',
        Institucion_Movilidad: 'Ninguna',
        Modalidad_Movilidad: 'No aplica',
        Finalidad_Movilidad: 'No aplica',
        Duracion_Movilidad: 'No aplica',
        Dispositivos: 'Celular Inteligentes',
        Tipo_Conexion: 'Movil',
        Emp_Internet: 'Tigo'
    },
    {
        Nombres: 'tanner',
        Codigo_Estudiantil: 'linsley',
        Tipo_Documento: 24,
        No_Cedula: 100,
        No_Cedula_Resid: 'In Relationship',
        No_Pasaporte: 50,
        Sexo: 'Masculino',
        Fecha_Nacimiento: '00/00/0000',
        Edad: 18,
        Dimension_Nacionalidad: 'Nacional',
        Pais_Procedencia: 'Nicaragua',
        Etnia: 'Mestizo',
        Dep_Procedencia: 'Managua',
        Mun_Procedencia: 'Managua',
        Zona_Procedencia: 'Urbano',
        Centro_Secundaria: 'Estatal',
        Estado_Civil: 'Soltero',
        No_Hijos: 0,
        Condicion_Laboral: 'Trabaja',
        Ocupacion: 'Ninguno',
        Discapacidad: 'Ninguna',
        Dominio_Idiomas: 'Si',
        Nombre_Idioma: 'Ingles',
        Nivel_Alcanzado: 'C1',
        Sede: 'Extension Universitaria Boaco',
        Dep_Sede: 'Boaco',
        Mun_Sede: 'Boaco',
        Prog_Especial: 'No aplica',
        Tipo_Informacion: 'Grado',
        Nivel_fp: 'Ingenieria',
        Nombre_Carrera: 'Ingenieria en Sistemas',
        Año_Academico: 'II',
        Modalidad: 'Semi Presencial',
        Regimen: 'Cuatrimestral',
        Turno: 'Matutino',
        Tipo_Beca: 'Ninguna',
        Beca_Complementaria: 'No',
        Movilidad_Academica: 'No',
        Tipo_Movilidad: 'No aplica',
        Gestion_Movilidad: 'No aplica',
        Pais_Movilidad: '',
        Tipo_Entidad: 'No aplica',
        Institucion_Movilidad: 'Ninguna',
        Modalidad_Movilidad: 'No aplica',
        Finalidad_Movilidad: 'No aplica',
        Duracion_Movilidad: 'No aplica',
        Dispositivos: 'Celular Inteligentes',
        Tipo_Conexion: 'Movil',
        Emp_Internet: 'Tigo'
    },
    {
        Nombres: 'tanner',
        Codigo_Estudiantil: 'linsley',
        Tipo_Documento: 24,
        No_Cedula: 100,
        No_Cedula_Resid: 'In Relationship',
        No_Pasaporte: 50,
        Sexo: 'Masculino',
        Fecha_Nacimiento: '00/00/0000',
        Edad: 18,
        Dimension_Nacionalidad: 'Nacional',
        Pais_Procedencia: 'Nicaragua',
        Etnia: 'Mestizo',
        Dep_Procedencia: 'Managua',
        Mun_Procedencia: 'Managua',
        Zona_Procedencia: 'Urbano',
        Centro_Secundaria: 'Estatal',
        Estado_Civil: 'Soltero',
        No_Hijos: 0,
        Condicion_Laboral: 'Trabaja',
        Ocupacion: 'Ninguno',
        Discapacidad: 'Ninguna',
        Dominio_Idiomas: 'Si',
        Nombre_Idioma: 'Ingles',
        Nivel_Alcanzado: 'C1',
        Sede: 'Extension Universitaria Boaco',
        Dep_Sede: 'Boaco',
        Mun_Sede: 'Boaco',
        Prog_Especial: 'No aplica',
        Tipo_Informacion: 'Grado',
        Nivel_fp: 'Ingenieria',
        Nombre_Carrera: 'Ingenieria en Sistemas',
        Año_Academico: 'II',
        Modalidad: 'Semi Presencial',
        Regimen: 'Cuatrimestral',
        Turno: 'Matutino',
        Tipo_Beca: 'Ninguna',
        Beca_Complementaria: 'No',
        Movilidad_Academica: 'No',
        Tipo_Movilidad: 'No aplica',
        Gestion_Movilidad: 'No aplica',
        Pais_Movilidad: '',
        Tipo_Entidad: 'No aplica',
        Institucion_Movilidad: 'Ninguna',
        Modalidad_Movilidad: 'No aplica',
        Finalidad_Movilidad: 'No aplica',
        Duracion_Movilidad: 'No aplica',
        Dispositivos: 'Celular Inteligentes',
        Tipo_Conexion: 'Movil',
        Emp_Internet: 'Tigo'
    },
    {
        Nombres: 'tanner',
        Codigo_Estudiantil: 'linsley',
        Tipo_Documento: 24,
        No_Cedula: 100,
        No_Cedula_Resid: 'In Relationship',
        No_Pasaporte: 50,
        Sexo: 'Masculino',
        Fecha_Nacimiento: '00/00/0000',
        Edad: 18,
        Dimension_Nacionalidad: 'Nacional',
        Pais_Procedencia: 'Nicaragua',
        Etnia: 'Mestizo',
        Dep_Procedencia: 'Managua',
        Mun_Procedencia: 'Managua',
        Zona_Procedencia: 'Urbano',
        Centro_Secundaria: 'Estatal',
        Estado_Civil: 'Soltero',
        No_Hijos: 0,
        Condicion_Laboral: 'Trabaja',
        Ocupacion: 'Ninguno',
        Discapacidad: 'Ninguna',
        Dominio_Idiomas: 'Si',
        Nombre_Idioma: 'Ingles',
        Nivel_Alcanzado: 'C1',
        Sede: 'Extension Universitaria Boaco',
        Dep_Sede: 'Boaco',
        Mun_Sede: 'Boaco',
        Prog_Especial: 'No aplica',
        Tipo_Informacion: 'Grado',
        Nivel_fp: 'Ingenieria',
        Nombre_Carrera: 'Ingenieria en Sistemas',
        Año_Academico: 'II',
        Modalidad: 'Semi Presencial',
        Regimen: 'Cuatrimestral',
        Turno: 'Matutino',
        Tipo_Beca: 'Ninguna',
        Beca_Complementaria: 'No',
        Movilidad_Academica: 'No',
        Tipo_Movilidad: 'No aplica',
        Gestion_Movilidad: 'No aplica',
        Pais_Movilidad: '',
        Tipo_Entidad: 'No aplica',
        Institucion_Movilidad: 'Ninguna',
        Modalidad_Movilidad: 'No aplica',
        Finalidad_Movilidad: 'No aplica',
        Duracion_Movilidad: 'No aplica',
        Dispositivos: 'Celular Inteligentes',
        Tipo_Conexion: 'Movil',
        Emp_Internet: 'Tigo'
    },
    {
        Nombres: 'tanner',
        Codigo_Estudiantil: 'linsley',
        Tipo_Documento: 24,
        No_Cedula: 100,
        No_Cedula_Resid: 'In Relationship',
        No_Pasaporte: 50,
        Sexo: 'Masculino',
        Fecha_Nacimiento: '00/00/0000',
        Edad: 18,
        Dimension_Nacionalidad: 'Nacional',
        Pais_Procedencia: 'Nicaragua',
        Etnia: 'Mestizo',
        Dep_Procedencia: 'Managua',
        Mun_Procedencia: 'Managua',
        Zona_Procedencia: 'Urbano',
        Centro_Secundaria: 'Estatal',
        Estado_Civil: 'Soltero',
        No_Hijos: 0,
        Condicion_Laboral: 'Trabaja',
        Ocupacion: 'Ninguno',
        Discapacidad: 'Ninguna',
        Dominio_Idiomas: 'Si',
        Nombre_Idioma: 'Ingles',
        Nivel_Alcanzado: 'C1',
        Sede: 'Extension Universitaria Boaco',
        Dep_Sede: 'Boaco',
        Mun_Sede: 'Boaco',
        Prog_Especial: 'No aplica',
        Tipo_Informacion: 'Grado',
        Nivel_fp: 'Ingenieria',
        Nombre_Carrera: 'Ingenieria en Sistemas',
        Año_Academico: 'II',
        Modalidad: 'Semi Presencial',
        Regimen: 'Cuatrimestral',
        Turno: 'Matutino',
        Tipo_Beca: 'Ninguna',
        Beca_Complementaria: 'No',
        Movilidad_Academica: 'No',
        Tipo_Movilidad: 'No aplica',
        Gestion_Movilidad: 'No aplica',
        Pais_Movilidad: '',
        Tipo_Entidad: 'No aplica',
        Institucion_Movilidad: 'Ninguna',
        Modalidad_Movilidad: 'No aplica',
        Finalidad_Movilidad: 'No aplica',
        Duracion_Movilidad: 'No aplica',
        Dispositivos: 'Celular Inteligentes',
        Tipo_Conexion: 'Movil',
        Emp_Internet: 'Tigo'
    },
    {
        Nombres: 'tanner',
        Codigo_Estudiantil: 'linsley',
        Tipo_Documento: 24,
        No_Cedula: 100,
        No_Cedula_Resid: 'In Relationship',
        No_Pasaporte: 50,
        Sexo: 'Masculino',
        Fecha_Nacimiento: '00/00/0000',
        Edad: 18,
        Dimension_Nacionalidad: 'Nacional',
        Pais_Procedencia: 'Nicaragua',
        Etnia: 'Mestizo',
        Dep_Procedencia: 'Managua',
        Mun_Procedencia: 'Managua',
        Zona_Procedencia: 'Urbano',
        Centro_Secundaria: 'Estatal',
        Estado_Civil: 'Soltero',
        No_Hijos: 0,
        Condicion_Laboral: 'Trabaja',
        Ocupacion: 'Ninguno',
        Discapacidad: 'Ninguna',
        Dominio_Idiomas: 'Si',
        Nombre_Idioma: 'Ingles',
        Nivel_Alcanzado: 'C1',
        Sede: 'Extension Universitaria Boaco',
        Dep_Sede: 'Boaco',
        Mun_Sede: 'Boaco',
        Prog_Especial: 'No aplica',
        Tipo_Informacion: 'Grado',
        Nivel_fp: 'Ingenieria',
        Nombre_Carrera: 'Ingenieria en Sistemas',
        Año_Academico: 'II',
        Modalidad: 'Semi Presencial',
        Regimen: 'Cuatrimestral',
        Turno: 'Matutino',
        Tipo_Beca: 'Ninguna',
        Beca_Complementaria: 'No',
        Movilidad_Academica: 'No',
        Tipo_Movilidad: 'No aplica',
        Gestion_Movilidad: 'No aplica',
        Pais_Movilidad: '',
        Tipo_Entidad: 'No aplica',
        Institucion_Movilidad: 'Ninguna',
        Modalidad_Movilidad: 'No aplica',
        Finalidad_Movilidad: 'No aplica',
        Duracion_Movilidad: 'No aplica',
        Dispositivos: 'Celular Inteligentes',
        Tipo_Conexion: 'Movil',
        Emp_Internet: 'Tigo'
    },
    {
        Nombres: 'tanner',
        Codigo_Estudiantil: 'linsley',
        Tipo_Documento: 24,
        No_Cedula: 100,
        No_Cedula_Resid: 'In Relationship',
        No_Pasaporte: 50,
        Sexo: 'Masculino',
        Fecha_Nacimiento: '00/00/0000',
        Edad: 18,
        Dimension_Nacionalidad: 'Nacional',
        Pais_Procedencia: 'Nicaragua',
        Etnia: 'Mestizo',
        Dep_Procedencia: 'Managua',
        Mun_Procedencia: 'Managua',
        Zona_Procedencia: 'Urbano',
        Centro_Secundaria: 'Estatal',
        Estado_Civil: 'Soltero',
        No_Hijos: 0,
        Condicion_Laboral: 'Trabaja',
        Ocupacion: 'Ninguno',
        Discapacidad: 'Ninguna',
        Dominio_Idiomas: 'Si',
        Nombre_Idioma: 'Ingles',
        Nivel_Alcanzado: 'C1',
        Sede: 'Extension Universitaria Boaco',
        Dep_Sede: 'Boaco',
        Mun_Sede: 'Boaco',
        Prog_Especial: 'No aplica',
        Tipo_Informacion: 'Grado',
        Nivel_fp: 'Ingenieria',
        Nombre_Carrera: 'Ingenieria en Sistemas',
        Año_Academico: 'II',
        Modalidad: 'Semi Presencial',
        Regimen: 'Cuatrimestral',
        Turno: 'Matutino',
        Tipo_Beca: 'Ninguna',
        Beca_Complementaria: 'No',
        Movilidad_Academica: 'No',
        Tipo_Movilidad: 'No aplica',
        Gestion_Movilidad: 'No aplica',
        Pais_Movilidad: '',
        Tipo_Entidad: 'No aplica',
        Institucion_Movilidad: 'Ninguna',
        Modalidad_Movilidad: 'No aplica',
        Finalidad_Movilidad: 'No aplica',
        Duracion_Movilidad: 'No aplica',
        Dispositivos: 'Celular Inteligentes',
        Tipo_Conexion: 'Movil',
        Emp_Internet: 'Tigo'
    },
    {
        Nombres: 'tanner',
        Codigo_Estudiantil: 'linsley',
        Tipo_Documento: 24,
        No_Cedula: 100,
        No_Cedula_Resid: 'In Relationship',
        No_Pasaporte: 50,
        Sexo: 'Masculino',
        Fecha_Nacimiento: '00/00/0000',
        Edad: 18,
        Dimension_Nacionalidad: 'Nacional',
        Pais_Procedencia: 'Nicaragua',
        Etnia: 'Mestizo',
        Dep_Procedencia: 'Managua',
        Mun_Procedencia: 'Managua',
        Zona_Procedencia: 'Urbano',
        Centro_Secundaria: 'Estatal',
        Estado_Civil: 'Soltero',
        No_Hijos: 0,
        Condicion_Laboral: 'Trabaja',
        Ocupacion: 'Ninguno',
        Discapacidad: 'Ninguna',
        Dominio_Idiomas: 'Si',
        Nombre_Idioma: 'Ingles',
        Nivel_Alcanzado: 'C1',
        Sede: 'Extension Universitaria Boaco',
        Dep_Sede: 'Boaco',
        Mun_Sede: 'Boaco',
        Prog_Especial: 'No aplica',
        Tipo_Informacion: 'Grado',
        Nivel_fp: 'Ingenieria',
        Nombre_Carrera: 'Ingenieria en Sistemas',
        Año_Academico: 'II',
        Modalidad: 'Semi Presencial',
        Regimen: 'Cuatrimestral',
        Turno: 'Matutino',
        Tipo_Beca: 'Ninguna',
        Beca_Complementaria: 'No',
        Movilidad_Academica: 'No',
        Tipo_Movilidad: 'No aplica',
        Gestion_Movilidad: 'No aplica',
        Pais_Movilidad: '',
        Tipo_Entidad: 'No aplica',
        Institucion_Movilidad: 'Ninguna',
        Modalidad_Movilidad: 'No aplica',
        Finalidad_Movilidad: 'No aplica',
        Duracion_Movilidad: 'No aplica',
        Dispositivos: 'Celular Inteligentes',
        Tipo_Conexion: 'Movil',
        Emp_Internet: 'Tigo'
    },
    {
        Nombres: 'tanner',
        Codigo_Estudiantil: 'linsley',
        Tipo_Documento: 24,
        No_Cedula: 100,
        No_Cedula_Resid: 'In Relationship',
        No_Pasaporte: 50,
        Sexo: 'Masculino',
        Fecha_Nacimiento: '00/00/0000',
        Edad: 18,
        Dimension_Nacionalidad: 'Nacional',
        Pais_Procedencia: 'Nicaragua',
        Etnia: 'Mestizo',
        Dep_Procedencia: 'Managua',
        Mun_Procedencia: 'Managua',
        Zona_Procedencia: 'Urbano',
        Centro_Secundaria: 'Estatal',
        Estado_Civil: 'Soltero',
        No_Hijos: 0,
        Condicion_Laboral: 'Trabaja',
        Ocupacion: 'Ninguno',
        Discapacidad: 'Ninguna',
        Dominio_Idiomas: 'Si',
        Nombre_Idioma: 'Ingles',
        Nivel_Alcanzado: 'C1',
        Sede: 'Extension Universitaria Boaco',
        Dep_Sede: 'Boaco',
        Mun_Sede: 'Boaco',
        Prog_Especial: 'No aplica',
        Tipo_Informacion: 'Grado',
        Nivel_fp: 'Ingenieria',
        Nombre_Carrera: 'Ingenieria en Sistemas',
        Año_Academico: 'II',
        Modalidad: 'Semi Presencial',
        Regimen: 'Cuatrimestral',
        Turno: 'Matutino',
        Tipo_Beca: 'Ninguna',
        Beca_Complementaria: 'No',
        Movilidad_Academica: 'No',
        Tipo_Movilidad: 'No aplica',
        Gestion_Movilidad: 'No aplica',
        Pais_Movilidad: '',
        Tipo_Entidad: 'No aplica',
        Institucion_Movilidad: 'Ninguna',
        Modalidad_Movilidad: 'No aplica',
        Finalidad_Movilidad: 'No aplica',
        Duracion_Movilidad: 'No aplica',
        Dispositivos: 'Celular Inteligentes',
        Tipo_Conexion: 'Movil',
        Emp_Internet: 'Tigo'
    },
    {
        Nombres: 'tanner',
        Codigo_Estudiantil: 'linsley',
        Tipo_Documento: 24,
        No_Cedula: 100,
        No_Cedula_Resid: 'In Relationship',
        No_Pasaporte: 50,
        Sexo: 'Masculino',
        Fecha_Nacimiento: '00/00/0000',
        Edad: 18,
        Dimension_Nacionalidad: 'Nacional',
        Pais_Procedencia: 'Nicaragua',
        Etnia: 'Mestizo',
        Dep_Procedencia: 'Managua',
        Mun_Procedencia: 'Managua',
        Zona_Procedencia: 'Urbano',
        Centro_Secundaria: 'Estatal',
        Estado_Civil: 'Soltero',
        No_Hijos: 0,
        Condicion_Laboral: 'Trabaja',
        Ocupacion: 'Ninguno',
        Discapacidad: 'Ninguna',
        Dominio_Idiomas: 'Si',
        Nombre_Idioma: 'Ingles',
        Nivel_Alcanzado: 'C1',
        Sede: 'Extension Universitaria Boaco',
        Dep_Sede: 'Boaco',
        Mun_Sede: 'Boaco',
        Prog_Especial: 'No aplica',
        Tipo_Informacion: 'Grado',
        Nivel_fp: 'Ingenieria',
        Nombre_Carrera: 'Ingenieria en Sistemas',
        Año_Academico: 'II',
        Modalidad: 'Semi Presencial',
        Regimen: 'Cuatrimestral',
        Turno: 'Matutino',
        Tipo_Beca: 'Ninguna',
        Beca_Complementaria: 'No',
        Movilidad_Academica: 'No',
        Tipo_Movilidad: 'No aplica',
        Gestion_Movilidad: 'No aplica',
        Pais_Movilidad: '',
        Tipo_Entidad: 'No aplica',
        Institucion_Movilidad: 'Ninguna',
        Modalidad_Movilidad: 'No aplica',
        Finalidad_Movilidad: 'No aplica',
        Duracion_Movilidad: 'No aplica',
        Dispositivos: 'Celular Inteligentes',
        Tipo_Conexion: 'Movil',
        Emp_Internet: 'Tigo'
    },
];

const columnHelper = createColumnHelper();

const columns = [
    columnHelper.accessor('Nombres', {
        header: () => 'Nombres',
        footer: () => 'Nombres',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Codigo_Estudiantil', {
        header: () => 'Código Estudiantil',
        footer: () => 'Código Estuidantil',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Tipo_Documento', {
        header: () => 'Tipo de Documento',
        footer: () => 'Tipo de Documento',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('No_Cedula', {
        header: () => 'No Cedula',
        footer: () => 'No Cedula',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('No_Cedula_Resid', {
        header: () => 'No Cedula Resid',
        footer: () => 'No Cedula Resid',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('No_Pasaporte', {
        header: () => 'No Pasaporte',
        footer: () => 'No Pasaporte',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Sexo', {
        header: () => 'Sexo',
        footer: () => 'Sexo',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Fecha_Nacimiento', {
        header: () => 'Fecha Nacimiento',
        footer: () => 'Fecha Nacimiento',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Edad', {
        header: () => 'Edad',
        footer: () => 'Edad',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Dimension_Nacionalidad', {
        header: () => 'Dimension Nacionalidad',
        footer: () => 'Dimension Nacionalidad',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Pais_Procedencia', {
        header: () => 'Pais Procedencia',
        footer: () => 'Pais Procedencia',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Etnia', {
        header: () => 'Etnia',
        footer: () => 'Etnia',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Dep_Procedencia', {
        header: () => 'Dep. Procedencia',
        footer: () => 'Dep. Procedencia',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Mun_Procedencia', {
        header: () => 'Mun. Procedencia',
        footer: () => 'Mun. Procedencia',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Zona_Procedencia', {
        header: () => 'Zona Procedencia',
        footer: () => 'Zona Procedencia',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Centro_Secundaria', {
        header: () => 'Centro Secundaria',
        footer: () => 'Centro Secundaria',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Estado_Civil', {
        header: () => 'Estado Civil',
        footer: () => 'Estado Civil',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('No_Hijos', {
        header: () => 'No Hijos',
        footer: () => 'No Hijos',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Condicion_Laboral', {
        header: () => 'Condicion Laboral',
        footer: () => 'Condicion Laboral',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Ocupacion', {
        header: () => 'Ocupacion',
        footer: () => 'Ocupacion',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Discapacidad', {
        header: () => 'Discapacidad',
        footer: () => 'Discapacidad',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Dominio_Idiomas', {
        header: () => 'Dominio Idiomas',
        footer: () => 'Dominio Idiomas',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Nombre_Idioma', {
        header: () => 'Nombre Idioma',
        footer: () => 'Nombre Idioma',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Nivel_Alcanzado', {
        header: () => 'Nivel Alcanzado',
        footer: () => 'Nivel Alcanzado',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Sede', {
        header: () => 'Sede',
        footer: () => 'Sede',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Dep_Sede', {
        header: () => 'Dep. Sede',
        footer: () => 'Dep. Sede',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Mun_Sede', {
        header: () => 'Mun. Sede',
        footer: () => 'Mun. Sede',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Prog_Especial', {
        header: () => 'Prog. Especial',
        footer: () => 'Prog. Especial',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Tipo_Informacion', {
        header: () => 'Tipo Informacion',
        footer: () => 'Tipo informacion',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Nivel_Fp', {
        header: () => 'Nivel Fp',
        footer: () => 'Nivel Fp',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Nombre_Carrera', {
        header: () => 'Nombre Carrera',
        footer: () => 'Nombre Carrera',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Año_Academico', {
        header: () => 'Año Academico',
        footer: () => 'Año Academico',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Modalidad', {
        header: () => 'Modalidad',
        footer: () => 'Modalidad',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Regimen', {
        header: () => 'Regimen',
        footer: () => 'Regimen',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Turno', {
        header: () => 'Turno',
        footer: () => 'Turno',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Tipo_Beca', {
        header: () => 'Tipo Beca',
        footer: () => 'Tipo Beca',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Beca_Complementaria', {
        header: () => 'Beca Complementaria',
        footer: () => 'Beca Complementaria',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Movilidad_Academica', {
        header: () => 'Movilidad Academica',
        footer: () => 'Movilidad Academica',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Tipo_Movilidad', {
        header: () => 'Tipo Movilidad',
        footer: () => 'Tipo Movilidad',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Gestion_Movilidad', {
        header: () => 'Gestion Movilidad',
        footer: () => 'Gestion Movilidad',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Pais_Movilidad', {
        header: () => 'Pais Movilidad',
        footer: () => 'Pais Movilidad',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Tipo_Entidad', {
        header: () => 'Tipo Entidad',
        footer: () => 'Tipo Entidad',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Institucion_Movilidad', {
        header: () => 'Institucion Movilidad',
        footer: () => 'Institucion Movilidad',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Modalidad_Movilidad', {
        header: () => 'Modalidad Movilidad',
        footer: () => 'Modalidad Movilidad',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Finalidad_Movilidad', {
        header: () => 'Finalidad Movilidad',
        footer: () => 'Finalidad Movilidad',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Duracion_Movilidad', {
        header: () => 'Duracion Movilidad',
        footer: () => 'Duracion Movilidad',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Dispositivos', {
        header: () => 'Dispositivos',
        footer: () => 'Dispositivos',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Tipo_Conexion', {
        header: () => 'Tipo de Conexion',
        footer: () => 'Tipo de Conexion',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('Emp_Internet', {
        header: () => 'Empresa Internet',
        footer: () => 'Empresa Internet',
        cell: (info) => info.getValue(),
    }),
];

function Table() {
    const [data, _setData] = useState(() => [...defaultData]);
    const [isVisible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!isVisible);
    };

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <section className="w-full h-dvh flex flex-col items-center justify-center gap-6 bg-gray-100 p-4">
            {/* Barra de búsqueda y botón */}
            <div className="flex w-full justify-between items-center space-x-4">
                <input
                    className="w-1/3 p-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Buscar..."
                />
                <button
                    onClick={toggleVisibility}
                    className="px-4 py-2 bg-app-greenColor text-white rounded-lg hover:shadow-lg hover:shadow-green-200"
                    aria-label="Editar"
                >
                    {isVisible ? 'Editing...' : 'Edit'}
                </button>
            </div>

            {/* Contenedor para tabla con scroll */}
            <div className="w-full h-96 overflow-auto border border-gray-300 rounded-lg">
                <table className="min-w-full bg-white table-auto border-collapse">
                    {/* Encabezados */}
                    <thead className="bg-green-500 text-white">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className="px-4 py-2 text-left font-semibold"
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    {/* Cuerpo */}
                    <tbody className="divide-y divide-gray-200">
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-100">
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        key={cell.id}
                                        className="min-w-96 px-4 py-2 text-gray-700"
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>

                    {/* Pie de tabla */}
                    <tfoot className="bg-green-500 text-white">
                        {table.getFooterGroups().map((footerGroup) => (
                            <tr key={footerGroup.id}>
                                {footerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className="px-4 py-2 text-left font-semibold"
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.footer,
                                                header.getContext()
                                            )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </tfoot>
                </table>
            </div>

            {/* Modal */}
            {isVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <article className="relative bg-white w-4/5 h-4/5 p-4 shadow-2xl rounded-lg">
                        <button
                            onClick={toggleVisibility}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                            aria-label="Cerrar"
                        >
                            <FaTimes size={24} />
                        </button>
                        <div className="w-full h-full flex flex-col gap-4">
                            <div>
                                <h1 className="text-xl font-semibold">Actualizar Datos</h1>
                            </div>
                            <div className="w-full h-full overflow-auto scroll-smooth scrollbar-custom">
                                <div className="w-full h-full flex flex-col items-center gap-4 p-4">
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Nombres</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="tanner" />
                                    </div>

                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Codigo Estudiantil</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="linsley" />
                                    </div>

                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Tipo Documento</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="24" />
                                    </div>

                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">No Cedula</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="100" />
                                    </div>

                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">No Cedula Resid</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="In Relationship" />
                                    </div>

                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">No Pasaporte</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="50" />
                                    </div>

                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Sexo</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Masculino" />
                                    </div>

                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Fecha Nacimiento</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="00/00/0000" />
                                    </div>

                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Edad</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="18" />
                                    </div>

                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Dimension Nacionalidad</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Nacional" />
                                    </div>

                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Pais Procedencia</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Nicaragua" />
                                    </div>

                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Etnia</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Departamento Procedencia</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Municipio Procedencia</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Zona Procedencia</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Centro Secundaria</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Estado Civil</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Numeros de Hijos</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Condicion Laboral</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Ocupacion</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Discapacidad</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Dominio de Idiomas</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Nombre del Idioma</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Nivel Alcanzado</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Sede</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Departamento Sede</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Municipio Sede</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Prog Especial</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Tipo de Informacion</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Nivel Fp</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Nombre de la Carrera</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Año Academico</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Modalidad</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Regimen</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Turno</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Tipo de Beca</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Beca Complementaria</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Movilidad Academica</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Tipo de Movilidad</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Gestion de Movilidad</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Pais Movilidad</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Tipo Entidad</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Institucion Movilidad</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Modalidad Movilidad</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Finalidad Movilidad</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Duracion Movilidad</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Dispositivos</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Tipo de Conexion</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>
                                    <div className="w-full md:w-3/4 h-auto">
                                        <p className="text-start text-app-grayColor dark:text-app-whiteColor font-sans text-sm font-semibold">Empresa de Internet</p>
                                        <input className="w-full bg-transparent shadow-lg text-app-grayColor font-sans text-base font-semibold rounded-xl border-4 border-app-blueColor px-3 py-3 focus:outline-none" type="text" placeholder="Mestizo" />
                                    </div>

                                    <button className='bg-app-greenColor text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-green-500'>Guardar Cambios</button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            )}
        </section>
    );
}

export default Table;
