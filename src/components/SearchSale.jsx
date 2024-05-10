import React, { useEffect, useState } from 'react'
import clienteAxios, { config } from '../../utils/axiosCliente'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SearchSale = () => {
    const [allProduct, setAllProduc] = useState([])
    const [search, setSearch] = useState('')

    const getAllProduct = async () => {
        const res = await clienteAxios.get('/product', config)
        setAllProduc(res.data)
    }

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    let results = []
    if (!search) {
        results = allProduct
    } else {
        results = allProduct.filter((dato) =>
            dato.descripcion.toLowerCase().includes(search.toLocaleLowerCase()) 
        )
    }

    useEffect(() => {
        getAllProduct()
    })

    return (
        <>
            <div className=''>
                <label className='text-center'>Ingrese el Nombre del Producto:</label>
                <input type="text" className='text-center' placeholder='Buscador' value={search} onChange={searcher} />
                <div className='row col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                    {
                        results.map((product) =>
                            <Card key={product._id} style={{ width: '18rem' }} className='my-3 mx-3 mt-2 mb-3 m-3'>
                                <Card.Img variant="top" src="holder.js/100px180" className='h-50' />
                                <Card.Body>
                                    <Card.Title>Codigo: {product.codigo}</Card.Title>
                                    <Card.Text>
                                        Nombre: {product.descripcion}
                                    </Card.Text>
                                    <Card.Text>
                                        Precio: ${product.precio}
                                    </Card.Text>
                                    <Card.Text>
                                        Stock: {product.stock}
                                    </Card.Text>
                                    <Link to={`/detalleProduct/${product._id}`} className='btn btn-outline-warning '>Consultar</Link>
                                </Card.Body>
                            </Card>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default SearchSale
