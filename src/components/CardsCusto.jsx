import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardsCusto = (props) => {
    const {custoRes,custo}=props
  return (
<>
{
    custoRes
    ?
    custo.map((custo)=>
    <Card style={{ width: '18rem' }} key={custo._id}>
    <Card.Img variant="top" src={custo.dni} />
    <Card.Body>
      <Card.Title>{custo.nombre}</Card.Title>
      <Card.Text>
       {custo.precio}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>):
  <div></div>
}
</>
  )
}

export default CardsCusto
