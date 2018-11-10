import React, { Component } from 'react';
import './ochain.css';

class Cadastrocontas extends Component {
    render() {
      return (
        <div className='greybox z-depth-5 border border-light'>
          <form>
            <p className="h1 text-center mb-4">Cadastro</p>
            <label htmlFor="defaultFormRegisterNameEx">Usuário</label>
            <input type="text" id="cadastrouser" className="form-control"/>
            <br/>
            <label htmlFor="defaultFormRegisterEmailEx">Nome</label>
            <input type="email" id="cadastronome" className="form-control"/>
            <br/>
            <label htmlFor="defaultFormRegisterConfirmEx">E-mail</label>
            <input type="email" id="cadastroemail" className="form-control"/>
            <br/>
            <label htmlFor="defaultFormRegisterConfirmEx">CNPJ/CPF</label>
            <input type="email" id="cadastrodoc" className="form-control"/>
            <br/>
            <label htmlFor="defaultFormRegisterPasswordEx">Your password</label>
            <input type="password" id="cadastropass" className="form-control"/>
            <div className="text-center mt-4">
              <button className="btn btn-unique" type="submit">Cadastrar</button>
            </div>
          </form>
          </div>
      );
    }
  }
  
export default Cadastrocontas;