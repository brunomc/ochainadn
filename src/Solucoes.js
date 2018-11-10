import React, { Component } from 'react';
import './ochain.css';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, CardGroup } from 'mdbreact';
import './ochain.css'
class Solucoes extends Component {
    render() {
      return (
        <div className='paddingtop'>
        <CardGroup className='cards'>

<Card>
  <CardImage src="https://www.comofazer.net/wp-content/uploads/2015/06/produto-original-700x455.png" alt="Card image cap" top hover overlay="white-slight"/>
  <CardBody>
    <CardTitle tag="h5">Garantia de originalidade</CardTitle>
    <CardText>Garantimos a originalidade do seu produto utilizando um sistema de propriedade.</CardText>
    <Button color="primary">Leia mais</Button>
  </CardBody>
</Card>

<Card>
  <CardImage src="http://www.blueoceanacademy.com/wp-content/uploads/2018/08/best-practices-in-supply-chain.jpg" alt="Card image cap" top hover overlay="white-slight"/>
  <CardBody>
    <CardTitle tag="h5">Rastreabilidade</CardTitle>
    <CardText>Utilize nossos serviços de rastreamento e descubra por onde o seu produto está passado.</CardText>
    <Button color="primary">Leia mais</Button>
  </CardBody>
</Card>

<Card>
  <CardImage src="http://www.remotexs.in/sites/default/files/decision.png" alt="Card image cap" top hover overlay="white-slight"/>
  <CardBody>
    <CardTitle tag="h5">Descubra quem é seu cliente</CardTitle>
    <CardText>Disponibilizamos informações dos consumidores que utilizam nossa plataforma.</CardText>
    <Button color="primary">Leia mais</Button>
  </CardBody>
</Card>

</CardGroup>
        </div>
        
      );
    }
  }
  
  export default Solucoes