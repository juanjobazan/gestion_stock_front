import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import clienteAxios, { config } from '../../utils/axiosCliente'

const ProductDetalle = () => {

    const params = useParams()
    const navigate = useNavigate()
    const [product, setProducts] = useState({})




    const getOneProduct = async () => {
        const res = await clienteAxios.get(`/product/${params.id}`, config)
        setProducts(res.data)
    }



    useEffect(() => {
        getOneProduct()
    }, [])

    return (
        <>
            <div className='container my-3'>
                <h2 className='justify-content-center'>Detalle del Producto</h2>
                <Card className="d-flex ">
                    <div className="w-25">
                        <Card.Img variant="top" className="img-fluid" />
                    </div>
                    <Card.Body>
                        <Card.Title>Nombre: {product.descripcion}</Card.Title>
                        <Card.Text>
                            Codigo: {product.codigo}
                        </Card.Text>
                        <Card.Text>
                            Precio: $AR {product.precio}
                        </Card.Text>
                        <Card.Text>
                            Stock: {product.stock}
                        </Card.Text>
                        <br />
                        <Button >Agregar</Button>
                        <hr />
                        <Link to={'/'} className='nav-link '>Volver</Link>
                    </Card.Body>
                </Card>
            </div>

        </>
    )
}

export default ProductDetalle
