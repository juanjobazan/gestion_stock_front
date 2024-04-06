import React from 'react'
import Table from 'react-bootstrap/Table';
const ProductPage = () => {
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
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>
        </>
    )
}

export default ProductPage
