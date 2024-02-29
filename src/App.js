import './App.css';
import Card from 'react-bootstrap/Card';
import Name from './Name';
import Description from './Description';
import Image from './Image';
import Price from './Price';
import 'bootstrap/dist/css/bootstrap.min.css';
import product from './product';
import React from 'react'

function App() {
  const firstName="Ons"
  return (
    <div className="App">
      <center>
      <h1>{firstName?`Hello,${firstName}`:`Hello there!`}</h1>
    <Card style={{ width: '18rem' }}>
      <Card.Img src={product.image} alt='img' />
      <Card.Body>
        <Card.Title className='name'><Name/></Card.Title>
        <Card.Text><Description/></Card.Text>
        <Price/>
      </Card.Body>
    </Card>
    </center>
    </div>
  );
}

export default App;
