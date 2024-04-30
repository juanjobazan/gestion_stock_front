import React, { useEffect, useState } from 'react'
import clienteAxios, { config } from '../../utils/axiosCliente'
import ModalProd from './ModalProd'
import { Button, Table } from 'react-bootstrap'
import Swal from 'sweetalert2'
const SearchProduc = () => {

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

    const handleClick = async (id) => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Estas Seguro?',
            text: "No podras Revertir Esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'SI, Eliminar!',
            cancelButtonText: 'No, Cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                clienteAxios.delete(`/product/${id}`, config)
                    .then(res => {
                        if (res.status === 200) {
                            swalWithBootstrapButtons.fire(
                                'Eliminado!',
                                res.data.msg,
                                'success'
                            )
                        }
                    })
                resRefrestate(true)
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'NO se Elimino :)',
                    'error'
                )
            }
        })


    }

    useEffect(() => {
        getAllProduct()
        resRefrestate()
    }, [refreshState])
    return (
        <>
            <div className='container'>
                <h1 className=' d-flex justify-content-center'>gestion de Productos</h1>
                <label className='my-3'>Ingrese el Nombre del Producto</label>
                <input type='text' value={search} onChange={searcher} placeholder='' className='form-control' />
            </div>
            <div className='d-flex justify-content-center'>
                <Table striped bordered hover size='sm' className='table table.striped table-hover mt-5 shadow-lg'>
                    <thead >
                        <tr>
                            <th>Codigo</th>
                            <th>Descripcion</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            results.map((product) =>
                                <tr key={product._id}>
                                    <td>{product.codigo}</td>
                                    <td>{product.descripcion}</td>
                                    <td>{product.precio}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <ModalProd idProd={product._id} getAllProduct={getAllProduct} />
                                        <Button variant='danger' onClick={() => { handleClick(product._id) }}>Eliminar</Button>

                                    </td>
                                </tr>
                            )}


                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default SearchProduc
