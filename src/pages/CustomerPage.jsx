import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2';
import clienteAxios, { config } from '../../utils/axiosCliente';
const CustomerPage = () => {
  const [allCustomer, setAllCustomer] = useState([])
  const [refreshState, resRefrestate] = useState()
  const getAllCustomer = async () => {
    const res = await clienteAxios.get('/customer', config)
    setAllCustomer(res.data)
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
  useEffect(()=>{
    getAllCustomer()
    resRefrestate()
  },[refreshState])
  return (
    <>
     <div className='container my-5'>
        <div className='d-flex justify-content-center'>
          <Form >
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </div>
        </div> 
        <div className='container'>
        <div className='d-flex justify-content-center mt-5'>

          <Table striped bordered hover size='sm'>
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
                allCustomer.map((custo)=>
                <tr key={custo._id}>
                  <td>{custo.nombre}</td>
                  <td>{custo.dni}</td>
                  <td>{custo.mail}</td>
                  <td>{custo.direccion}</td>
                  <td>
                    <Button variant='danger' onClick={()=>{handleClick(custo._id)}}>Eliminar</Button>
                  </td>
                </tr>
              )}


            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default CustomerPage
