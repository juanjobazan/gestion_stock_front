import React from 'react'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import userSchemaLogin from '../helpers/validationSchemaYupLogin';
import { Formik } from 'formik';
const LoginPage = () => {
    return (
        <>
        <Formik
            initialValues={{ user: '', password: '' }}
            validationSchema={userSchemaLogin}
            onSubmit={(values) => sendForm(values)}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
            }) => (

                <div className='container my-5'>
                    <div className='d-flex justify-content-center mt-5'>
                        <Card style={{ width: '25rem' }} className='card-body'>
                            <Card.Body>
                                <Form>
                                    <h3 className='letra text-center'>Inicio de Sesion</h3>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='letra'>Usuario</Form.Label>
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                                </svg></span>
                                            </div>
                                            <Form.Control type="text" name='user' placeholder='Ingrese su Usuario' value={values.user} className={errors.user && touched.user && errors.user && 'is-invalid'} onChange={handleChange} maxLength={18} /> 
                                        </div>
                                        <small className='text-danger'>{errors.user && touched.user && errors.user}</small>
                                    </Form.Group>
                                    <Form.Label className='letra'>Password</Form.Label>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                                    <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                                                </svg></span>
                                            </div>
                                            <Form.Control type="password" name='password' placeholder="Ingrese su Password" value={values.password} className={errors.password && touched.password && errors.password && 'is-invalid'} onChange={handleChange} maxLength={32} />  
                                        </div>
                                        <small className='text-danger'>{errors.password && touched.password && errors.password}</small>
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className='w-100 my-3' onClick={handleSubmit} >
                                        Ingresar
                                    </Button>
                                </Form>
                            </Card.Body>
                            <hr />
                            <NavLink to="/register" className="nav-link text-center ">Registrate</NavLink>
                        </Card>
                    </div>

                </div>
            )}
        </Formik>  

        </>
    )
}

export default LoginPage
