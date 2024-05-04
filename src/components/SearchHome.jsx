import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import clienteAxios, { config } from '../../utils/axiosCliente';
import '../css/CardsSearchHome.css'
const SearchHome = () => {

  const [allProduct, setAllProduc] = useState([])
  const [search, setSearch] = useState('')
  const [refreshState, resRefrestate] = useState()

  const getAllProduct = async () => {
    const res = await clienteAxios.get('/product', config)
    setAllProduc(res.data)
  }

  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(setSearch)
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
      <div className='container '>
        <div className=' text-center py-2'>
        <div className='justify-content-center col-lg-12' >
          <label className='my-3'>Ingrese el Nombre del Producto: </label>
          <input type='text' value={search} onChange={searcher} placeholder='' className='col-lg-4 ' />
          
        </div>
          
          <div className='row col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            {
              results.map((product) =>
                <Card key={product._id} style={{ width: '18rem' }} className='my-3 mx-3 mt-2 mb-3 m-3'>
                  <Card.Img variant="top" src="holder.js/100px180" className='h-50' />
                  <Card.Body>
                    <Card.Title>Codigo: {product.codigo}</Card.Title>
                    <Card.Text>
                      Descripcion: {product.descripcion}
                    </Card.Text>
                    <Card.Text>
                      Precio: ${product.precio}
                    </Card.Text>
                    <Card.Text>
                      Stock: {product.stock}
                    </Card.Text>
                    <Button variant="primary">Consultar</Button>
                  </Card.Body>
                </Card>)

            }

          </div>
        </div>
        </div>



    
    </>
  )
}

export default SearchHome

