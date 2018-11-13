import React, { Component } from 'react';
import './ochain.css';
import Pfe from './estevan.jpg';
import Pfm from './bruno.jpg';
import Ffm from './flor.png';
import  { Button } from 'mdbreact';

class Hist extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      owner_new: { 
        product_name:'Vitamina A-Z',
        product_desc: 'Produto original do paraná, com composição: olho de soja, extrato de leite, ovo de codorna destilado. Produto original do paraná, com composição: olho de soja, extrato de leite, ovo de codorna destilado. ',
        prop_infos: {
          name:'Estevan Pedro W. R.',
          user:'estevanw',
          doc:'600.494.940-08',
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
    owner_first: {
      product_name:'Vitamina A-Z',
      product_desc: 'Produto original do paraná, com composição: olho de soja, extrato de leite, ovo de codorna destilado. Produto original do paraná, com composição: olho de soja, extrato de leite, ovo de codorna destilado. ',
      prop_infos: {
        name:'Vinícola da Flor',
        user:'vinicolaflor',
        doc:'600.847.968-28',
        email: 'vinicolaluz@outlook.com',
    },
  },
  }
}
    render() {
      return (
<div>
<div className='greybox z-depth-5 border border-light rounded'>

<h6 className='text-center'>Dono atual</h6>
<h5 className='text-center font-weight-bold '>{this.state.owner_new.prop_infos.name}</h5>

<div className='text-center'>
<img width="100px" height="100px" src={Pfe} alt='profile_photo'  className="rounded-circle" /><br/>
</div>
<hr/>
<a>Usuário: {this.state.owner_new.prop_infos.user}</a><br/>
<a>CNPJ/CPF: {this.state.owner_new.prop_infos.doc}</a><br/>
<a>E-mail: {this.state.owner_new.prop_infos.email}</a><br/>
<hr/>
<div className="text-center font-weight-bold"> <a >02/05/2018 - </a> </div>
</div>

<div className='greybox z-depth-5 border border-light rounded'>

<h6 className='text-center'>Transferido</h6>
<h5 className='text-center font-weight-bold '>{this.state.owner_old.prop_infos.name}</h5>

<div className='text-center'>
<img width="100px" height="100px" src={Pfm} alt='profile_photo'  className="rounded-circle" /><br/>
</div>
<hr/>
<a>Usuário: {this.state.owner_old.prop_infos.user}</a><br/>
<a>CNPJ/CPF: {this.state.owner_old.prop_infos.doc}</a><br/>
<a>E-mail: {this.state.owner_old.prop_infos.email}</a><br/>
<hr/>
<div className="text-center font-weight-bold"> <a >02/01/2018 - 02/05/2018</a> </div>
</div>

<div className='greybox z-depth-5 border border-light rounded'>

<h6 className='text-center'>Criador</h6>
<h5 className='text-center font-weight-bold '>{this.state.owner_first.prop_infos.name}</h5>

<div className='text-center'>
<img width="100px" height="100px" src={Ffm} alt='profile_photo'  className="rounded-circle" /><br/>
</div>
<hr/>
<a>Usuário: {this.state.owner_first.prop_infos.user}</a><br/>
<a>CNPJ/CPF: {this.state.owner_first.prop_infos.doc}</a><br/>
<a>E-mail: {this.state.owner_first.prop_infos.email}</a><br/>
<hr/>
<div className="text-center font-weight-bold"> <a >01/01/2018 - 02/01/2018</a> </div>
</div>


<div className='text-center buttonhist'><Button href='/produto/11' size="sm">Voltar</Button></div>
</div>
        
      );
    }
  }
  
export default Hist;