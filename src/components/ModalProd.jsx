import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import clienteAxios, { config } from '../../utils/axiosCliente';
import Swal from 'sweetalert2';
import { Form } from 'react-bootstrap';
const ModalProd = (props) => {
    const { type, idProd } = props
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [idProdState, setProdState] = useState('')
    const [prod, setProd] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = async () => {
        const res = await clienteAxios.get(`/product/${idProd}`, config)
        setProd(res.data)
        setShow(true)
    }

    const handleChange = (ev) => {
        const { name, value } = ev.target
        setProd({ ...prod, [name]: value })
    }

    const sendFormProd = async (id) => {
        try {
            const res = await clienteAxios.put(`/product/${id}`, prod, config)
            if (res.status === 200) {
                Swal.fire(
                    res.data.msg,
                    '',
                    'success'
                )
                getAllProducts()
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
        setProdState(idProd)
    }, [])
    return (
        <>
            <Button variant='primary' onClick={handleClick}>Editar</Button>
            {
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="CodigoProd">
                                <Form.Label>Codigo</Form.Label>
                                <Form.Control type="number" name='codigo' placeholder="Ingrese el codigo" value={prod?.codigo} onChange={handleChange} disabled />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="descripProd">
                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control type="text" name='descripcion' placeholder="Ingrese la descripcion del producto" value={prod?.descripcion} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="precioProd">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control type="numbre" name='precio' placeholder="Ingrese el precio del Producto" value={prod?.precio} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="stockProd">
                                <Form.Label>Stock</Form.Label>
                                <Form.Control type="number" name='stock' placeholder="Ingrese el Stock" value={prod?.stock} onChange={handleChange} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => sendFormProd(prod._id)} >
                            Guardar Cambios
                        </Button>

                    </Modal.Footer>
                </Modal>
            }

        </>
    )
}

export default ModalProd
