import * as yup from 'yup'

const userSchemaLogin = yup.object({
    user: yup.string().min(4,'El minimo es de 4 caracteres').required('El usuario es Obligatorio'),
    password: yup.string().min(8,'El minimo es de 8 caracteres').required('La contraseña es Requerida')
});

export default userSchemaLogin;