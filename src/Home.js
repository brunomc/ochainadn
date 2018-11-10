import React, { Component } from 'react';
import { Button } from 'mdbreact';
import './ochain.css'
import Solucoes from './Solucoes'
import Contato from './Contato';
import Beneficios from './Beneficios'
import FooterPage from './FooterPage';
import Cadastrocontas from './Cadastrocontas';
import Mainapp from './Mainapp';
import Hist from './Hist';
import Trans from './Trans';
import Quemsomos from './Quemsomos'

class Home extends Component {

  render(){
    return(
<div>
      <div className='fullscreen'>
      <div className='center'>
        <h1 className='h1'>Ganhe competitividade <br/>registrando sua propriedade em seus produtos. </h1>
        <Button  color="success">Conheça nossas soluções</Button>
      </div>

    </div>
         <Solucoes />
           <Quemsomos />
         </div>
   );
  }
}

export default Home;