import * as yup from 'yup'

const customerSchema = yup.object({
nombre: yup.string().required('El Campo Nombre y Apellido es Obligatorio').max(45,'El Maximo es de 45 Caracteres').min(8,'El Minimo es de 8 caracteres'),
dni: yup.number().required('El Campo DNI es Obligatorio').min(9999999,'Faltan Numeros por Ingresar').max(99999999,'Supero el Maximo de Caracteres'),
mail: yup.string().required('El Campo Email es Obligatorio').email('No es un Email Valido'),
direccion: yup.string().required('El Campo Direccion es Obligatorio').min(8,'El minimo es de 8 caracteres').max(32,'El Maximo es de 32 Caracteres')
});

export default customerSchema