import React, { Component } from 'react';
import './ochain.css';
import Pf from './pf.png'
import  { Button } from 'mdbreact';

class Trans extends Component {
    render() {
      return (
        <div className='greybox z-depth-5 border border-light'>
        <form>
          <p className="h4 text-center mb-4">Transferência</p>
          <label htmlFor="defaultFormRegisterNameEx">Endereço do produto</label>
          <input type="text" id="cadastrouser" className="form-control"/>
          <br/>
          <label htmlFor="defaultFormRegisterEmailEx">Endereço do destinatário</label>
          <input type="email" id="cadastronome" className="form-control"/>
          <br/>
          <label htmlFor="defaultFormRegisterConfirmEx">Usuário</label>
          <input type="email" id="cadastroemail" className="form-control"/>
          <br/>
          <label htmlFor="defaultFormRegisterConfirmEx">Senha</label>
          <input type="email" id="cadastrodoc" className="form-control"/>
          <br/>
          <div className="text-center mt-4">
            <button className="btn btn-unique" type="submit">Enviar</button>
          </div>
        </form>
     </div> 
        
      );
    }
  }
  
export default Trans;