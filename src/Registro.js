import React, { Component } from 'react';
import './ochain.css';

class Registro extends Component {
    render() {
      return (

        <div className= 'paddingtop'>
                <h1 className='h1'>Registro de propriedade</h1>
                <form>
  <p className="h4 text-center mb-4">Gerador de código QR</p>
  <label htmlFor="defaultFormContactNameEx">Nome do produto</label>
  <input type="text" id="defaultFormContactNameEx" className="form-control"/>
  <br/>
  <label htmlFor="defaultFormContactMessageEx">Descrição</label>
  <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3"></textarea>
  <div className="text-center mt-4">
    <button className="btn btn-outline-warning" type="submit">GERAR<i className="fa fa-paper-plane-o ml-2"></i></button>
  </div>
</form>

        </div>
        
      );
    }
  }
  
export default Registro;