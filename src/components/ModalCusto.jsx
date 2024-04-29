import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import clienteAxios, { config } from '../../utils/axiosCliente';
import Swal from 'sweetalert2';
import { Form } from 'react-bootstrap';

const ModalCusto = (props) => {

    const { type, idCusto} = props
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [idCustoState, setCustoState] = useState('')
    const [custo, setCusto] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = async () => {
        const res = await clienteAxios.get(`/customer/${idCusto}`, config)
        setCusto(res.data)
        setShow(true)
    }

    const handleChange = (ev) => {
        const { name, value } = ev.target
        setCusto({ ...custo, [name]: value })
    }

    const sendFormProd = async (id) => {
        try {
            const res = await clienteAxios.put(`/customer/${id}`, custo, config)
            if (res.status === 200) {
                Swal.fire(
                    res.data.msg,
                    '',
                    'success'
                )
                getAllCustomers()
                handleClose()
              
            }
           

        } catch (error) {
            if (error.response.status === 400) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oooopsss..',
                    text: error.response.msg
                })
            }
        }
    }
    useEffect(() => {
        setCustoState(idCusto)
    }, [])
    return (
        <>
            <Button variant='primary' onClick={handleClick}>Editar</Button>
            {
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Cliente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="CodigoProd">
                                <Form.Label>D.N.I</Form.Label>
                                <Form.Control type="number" name='dni' placeholder="Ingrese el Dni" value={custo?.dni} onChange={handleChange} disabled />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="descripProd">
                                <Form.Label>Nombre y Apellido|</Form.Label>
                                <Form.Control type="text" name='nombre' placeholder="Ingrese el nombre y apellido" value={custo?.nombre} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="precioProd">
                                <Form.Label>mail</Form.Label>
                                <Form.Control type="text" name='mail' placeholder="Ingrese el mail" value={custo?.mail} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="stockProd">
                                <Form.Label>Direccion</Form.Label>
                                <Form.Control type="text" name='direccion' placeholder="Ingrese la direccion" value={custo?.direccion} onChange={handleChange} />
                            </Form.Group>


                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => sendFormProd(custo._id)} >
                            Guardar Cambios
                        </Button>

                    </Modal.Footer>
                </Modal>
            }
        </>
    )
}

export default ModalCusto
