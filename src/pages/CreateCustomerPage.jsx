import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import customerSchema from '../helpers/validationSchemayupCustomer'
import { Formik } from 'formik'
import clienteAxios, { config } from '../../utils/axiosCliente'
import Swal from 'sweetalert2'
const CreateCustomerPage = () => {
    const navigate = useNavigate()
    const sendForm = async (values) => {
        try {
            const res = await clienteAxios.post('/customer', values, config)
            if (res.status === 200) {
                Swal.fire(
                  res.data.msg,
                  '',
                  'success'
                )
                navigate('/')
              }
        } catch (error) {
            if (error.response.status === 400) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oooppspsps',
                    text: error.response.data.msg
                }
                )
            }
        }
    }
    return (
        <>
            <Formik
                initialValues={{ nombre: '', dni: '', mail: '', direccion: '' }}
                validationSchema={customerSchema}
                onSubmit={(values) => sendForm(values)}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                }) => (<div className='container my-5'>
                    <div className='d-flex justify-content-center mt-5'>
                        <Card style={{ width: '25rem' }} className='card-body'>
                            <Card.Body>
                                <Form>
                                    <h3 className='letra text-center'>Nuevo Cliente</h3>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className='letra'>Nombre y Apellido</Form.Label>
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-alphabet" viewBox="0 0 16 16">
                                                    <path d="M2.204 11.078c.767 0 1.201-.356 1.406-.737h.059V11h1.216V7.519c0-1.314-.947-1.783-2.11-1.783C1.355 5.736.75 6.42.69 7.27h1.216c.064-.323.313-.552.84-.552s.864.249.864.771v.464H2.346C1.145 7.953.5 8.568.5 9.496c0 .977.693 1.582 1.704 1.582m.42-.947c-.44 0-.845-.235-.845-.718 0-.395.269-.684.84-.684h.991v.538c0 .503-.444.864-.986.864m5.593.937c1.216 0 1.948-.869 1.948-2.31v-.702c0-1.44-.727-2.305-1.929-2.305-.742 0-1.328.347-1.499.889h-.063V3.983h-1.29V11h1.27v-.791h.064c.21.532.776.86 1.499.86Zm-.43-1.025c-.66 0-1.113-.518-1.113-1.28V8.12c0-.825.42-1.343 1.098-1.343.684 0 1.075.518 1.075 1.416v.45c0 .888-.386 1.401-1.06 1.401Zm2.834-1.328c0 1.47.87 2.378 2.305 2.378 1.416 0 2.139-.777 2.158-1.763h-1.186c-.06.425-.313.732-.933.732-.66 0-1.05-.512-1.05-1.352v-.625c0-.81.371-1.328 1.045-1.328.635 0 .879.425.918.776h1.187c-.02-.986-.787-1.806-2.14-1.806-1.41 0-2.304.918-2.304 2.338z" />
                                                </svg></span>
                                            </div>
                                            <Form.Control type="text" name='nombre' placeholder="Ingrese Nombre y Apellido" maxLength={64} value={values.nombre} className={errors.nombre && touched.nombre && errors.nombre && 'is-invalid'} onChange={handleChange} />
                                        </div>
                                        <small className='text-danger'>{errors.nombre && touched.nombre && errors.nombre}</small>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicmail">
                                        <Form.Label className='letra'>DNI</Form.Label>
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list-ol" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" />
                                                    <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z" />
                                                </svg></span>
                                            </div>
                                            <Form.Control type="number" name='dni' placeholder='Ingrese el DNI' maxLength={18} value={values.dni} className={errors.dni && touched.dni && errors.dni && 'is-invalid'} onChange={handleChange} />
                                        </div>
                                        <small className='text-danger'>{errors.dni && touched.dni && errors.dni}</small>
                                    </Form.Group>


                                    <Form.Label className='letra'>mail</Form.Label>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-at" viewBox="0 0 16 16">
                                                    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914" />
                                                </svg></span>
                                            </div>
                                            <Form.Control type="text" name='mail' placeholder="Ingrese el mail" maxLength={32} value={values.mail} className={errors.mail && touched.mail && errors.mail && 'is-invalid'} onChange={handleChange} />
                                        </div>
                                        <small className='text-danger'>{errors.mail && touched.mail && errors.mail}</small>
                                    </Form.Group>
                                    <Form.Label className='letra'>Direccion</Form.Label>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-123" viewBox="0 0 16 16">
                                                    <path d="M2.873 11.297V4.142H1.699L0 5.379v1.137l1.64-1.18h.06v5.961zm3.213-5.09v-.063c0-.618.44-1.169 1.196-1.169.676 0 1.174.44 1.174 1.106 0 .624-.42 1.101-.807 1.526L4.99 10.553v.744h4.78v-.99H6.643v-.069L8.41 8.252c.65-.724 1.237-1.332 1.237-2.27C9.646 4.849 8.723 4 7.308 4c-1.573 0-2.36 1.064-2.36 2.15v.057zm6.559 1.883h.786c.823 0 1.374.481 1.379 1.179.01.707-.55 1.216-1.421 1.21-.77-.005-1.326-.419-1.379-.953h-1.095c.042 1.053.938 1.918 2.464 1.918 1.478 0 2.642-.839 2.62-2.144-.02-1.143-.922-1.651-1.551-1.714v-.063c.535-.09 1.347-.66 1.326-1.678-.026-1.053-.933-1.855-2.359-1.845-1.5.005-2.317.88-2.348 1.898h1.116c.032-.498.498-.944 1.206-.944.703 0 1.206.435 1.206 1.07.005.64-.504 1.106-1.2 1.106h-.75z" />
                                                </svg></span>
                                            </div>
                                            <Form.Control type="text" name='direccion' placeholder='Ingrese la Direccion' maxLength={32} value={values.direccion} className={errors.direccion && touched.direccion && errors.direccion && 'is-invalid'} onChange={handleChange} />
                                        </div>
                                        <small className='text-danger'>{errors.direccion && touched.direccion && errors.direccion}</small>
                                    </Form.Group>


                                    <Button variant="primary" type="submit" className='w-100 my-3' onClick={handleSubmit}  >
                                        Crear
                                    </Button>
                                </Form>
                            </Card.Body>
                            <hr />
                            <Link to={'/'} relative='path' variant='danger' className="nav-link text-center " >Cancelar</Link>
                        </Card>
                    </div>
                </div>)}

            </Formik>
        </>
    )
}

export default CreateCustomerPage
