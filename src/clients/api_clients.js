import axios from "axios";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

export const useGetStudent = (cnuCode) => {
  const fetchStudent = async () => {
    return (await axios.get(`${import.meta.env.VITE_BASE_API_URL}/estudiantes/${cnuCode}`, {
    })).data;
  };

  return useQuery({
    queryKey: ["estudiantes_query"],
    queryFn: fetchStudent,
    refetchOnWindowFocus: false
  });
};

export const useGetStudentDetails = (cnuCode) => {

  const fetchStudent = async () => {
    return (await axios.get(`${import.meta.env.VITE_BASE_API_URL}/estudiantes/detalles/${cnuCode}`, {
    })).data;
  };

  return useQuery({
    queryKey: ["estudiantes_detalles_query"],
    queryFn: fetchStudent,
    refetchOnWindowFocus: false
  });
};

export const useGetCountries = () => {

  const fetchStudent = async () => {
    return (await axios.get(`${import.meta.env.VITE_BASE_API_URL}/paises`, {
    })).data;
  };

  return useQuery({
    queryKey: ["paises_query"],
    queryFn: fetchStudent,
    refetchOnWindowFocus: false
  });
};

export const useGetEthnicities = () => {

  const fetchStudent = async () => {
    return (await axios.get(`${import.meta.env.VITE_BASE_API_URL}/etnias`, {
    })).data;
  };

  return useQuery({
    queryKey: ["etnias_query"],
    queryFn: fetchStudent,
    refetchOnWindowFocus: false
  });
};

export const useGetMunicipalities = () => {

  const fetchStudent = async () => {
    return (await axios.get(`${import.meta.env.VITE_BASE_API_URL}/municipios`, {
    })).data;
  };

  return useQuery({
    queryKey: ["municipios_query"],
    queryFn: fetchStudent,
    refetchOnWindowFocus: false
  });
};

export const useGetZones = () => {

  const fetchStudent = async () => {
    return (await axios.get(`${import.meta.env.VITE_BASE_API_URL}/zonas`, {
    })).data;
  };

  return useQuery({
    queryKey: ["zonas_query"],
    queryFn: fetchStudent,
    refetchOnWindowFocus: false
  });
};

export const useUpdateStudent = () => {
  const queryClient = useQueryClient();

  const updateStudent = async (data) => {
    return (await axios.post(`${import.meta.env.VITE_BASE_API_URL}/estudiantes/actualizar`, data)).data;
  };

  return useMutation({
    mutationFn: updateStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [""] });
    },
  });
};