import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import clienteAxios, { config } from '../../utils/axiosCliente';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
const ProductPage = () => {
    const [allProd, setAllProd] = useState([])
    const [refreshState, resRefrestate] = useState(false)
    const getAllProd = async () => {
        const res = await clienteAxios.get('/product', config)
        setAllProd(res.data)
    }

    const handleClick= async(id)=>{

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
             clienteAxios.delete(`/product/${id}`,config)
              .then(res=>{
                if(res.status === 200 ){
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
        getAllProd()
        resRefrestate()
    }, [refreshState])
    return (
        <>
            <div className=' container my-5'>
                <div className='d-flex justify-content-center mt-5'>
                    <Table striped bordered hover size="sm">
                        <thead>
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
                                allProd.map((prod) =>
                                    <tr key={prod._id}>
                                        <td>{prod.codigo}</td>
                                        <td>{prod.descripcion}</td>
                                        <td>{prod.precio}</td>
                                        <td>{prod.stock}</td>
                                        <td>
                                            <Button variant='danger' onClick={() => { handleClick(prod._id) }} >Elimimar</Button>
                                        </td>
                                    </tr>)
                            }

                        </tbody>
                    </Table>
                </div>

            </div>
        </>
    )
}

export default ProductPage
