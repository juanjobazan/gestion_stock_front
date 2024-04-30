import React, { useEffect, useState } from 'react'
import clienteAxios, { config } from '../../utils/axiosCliente'
import { Button, Table } from 'react-bootstrap'
import Swal from 'sweetalert2'
import ModalCusto from './ModalCusto'

const SearchCusto = () => {

  const [allCustomer, setAllCustomer] = useState([])
  const [search, setSearch] = useState('')
  const [refreshState, resRefrestate] = useState()

  const getAllCustomer = async () => {
    const res = await clienteAxios.get('/customer', config)
    setAllCustomer(res.data)

  }
  const searcher = (e) => {
    setSearch(e.target.value)

  }
  let results = []
  if (!search) {
    results = allCustomer
  } else {
    results = allCustomer.filter((dato) =>
      dato.nombre.toLowerCase().includes(search.toLocaleLowerCase())
    )
  }

  //const results = !search ? allCustomer : allCustomer.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
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
        clienteAxios.delete(`/customer/${id}`, config)
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
    getAllCustomer()
    resRefrestate()
  }, [refreshState])

  return (
    <div className='container'>
      <h1 className=' d-flex justify-content-center'>gestion de Clientes</h1>
      <label className='my-3'>Ingrese el Nombre del Cliente</label>
      <div className='justify-content-center '>
        <input value={search} onChange={searcher} type='text' placeholder='' className='form-control' />
      </div>


      <div className='d-flex justify-content-center'>
        <Table striped bordered hover size='sm' className='table table.striped table-hover mt-5 shadow-lg'>
          <thead >
            <tr>
              <th>Nombre y Apellido</th>
              <th>D.N.I</th>
              <th>Email</th>
              <th>Direccion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {

              results.map((custom) =>
                <tr key={custom._id}>
                  <td>{custom.nombre}</td>
                  <td>{custom.dni}</td>
                  <td>{custom.mail}</td>
                  <td>{custom.direccion}</td>
                  <td>
                    <ModalCusto idCusto={custom._id} getAllCustomer={getAllCustomer} />
                    <Button variant='danger' onClick={() => { handleClick(custom._id) }}>Eliminar</Button>

                  </td>
                </tr>
              )}


          </tbody>
        </Table>
      </div>


    </div>
  )
}

export default SearchCusto
