import React, { Component } from 'react';
import './ochain.css';
import Pf from './estevan.jpg'
import  { Button } from 'mdbreact';
import Hist from './Hist';

class Mainapp extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      owner_new: { 
        product_name:'Vitamina A-Z',
        product_desc: 'Produto original do paraná, com composição: olho de soja, extrato de leite, ovo de codorna destilado. Produto original do paraná, com composição: olho de soja, extrato de leite, ovo de codorna destilado. ',
        prop_infos: {
          name:'Estevan Pedro W. R.',
          user:'estevanpwr',
          doc:'059.292.829-27',
          email: 'estevanpwr@outlook.com',
      },
    },
      owner_old: {
        product_name:'Vitamina A-Z',
        product_desc: 'Produto original do paraná, com composição: olho de soja, extrato de leite, ovo de codorna destilado. Produto original do paraná, com composição: olho de soja, extrato de leite, ovo de codorna destilado. ',
        prop_infos: {
          name:'Bruno Medeiros',
          user:'brunome',
          doc:'054.659.361-89',
          email: 'brunome@outlook.com',
      },
    },
  }
}
    render() {
      return (
        <div>
        <div className='greybox z-depth-5 border border-light rounded'>

           <h6 className='text-center' >Produto</h6>

           <h5 className='text-center font-weight-bold '>{this.state.owner_new.product_name}</h5>
        <hr/>
            <p>{this.state.owner_new.product_desc}</p>
        </div>

<div className='greybox z-depth-5 border border-light rounded'>

<h6 className='text-center'>Propriedade</h6>
<h5 className='text-center font-weight-bold '>{this.state.owner_new.prop_infos.name}</h5>

<div className='text-center'>
<a><img width="100px" height="100px" src={Pf} alt='profile_photo'  className="rounded-circle" /></a><br/>
</div>
<hr/>
<p1>Usuário: {this.state.owner_new.prop_infos.user}</p1><br/>
<p1>CNPJ/CPF: {this.state.owner_new.prop_infos.doc}</p1><br/>
<p1>E-mail: {this.state.owner_new.prop_infos.email}</p1><br/>
<hr/>
<div className='text-center'><Button href="/historico" size="sm">Histórico</Button></div>
</div>
        </div>
      );
    }
  }
  
export default Mainapp;