import * as yup from 'yup'

const productSchema = yup.object({
    codigo: yup.number().required('El Campo Codigo es Requerido').max(99999999999999999999,'el Maximo es 20 Numeros'),
    descripcion: yup.string().min(8,'El Minimo es de 8 caracteres').required('El Campo Descripcion es Reqierido'),
    precio: yup.number().min(1,'El Minimo es de 1 digito ').required('El Campo precio es Requerido').max(99999999999999999999,'el Maximo es 20 Numeros'),
    stock: yup.number().min(1,'El Minimo es de 1 digito ').required('El Campo Stock es Requerido').max(99999999999999999999,'el Maximo es 20 Numeros')
});

export default productSchema