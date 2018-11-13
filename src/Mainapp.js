import React, { Component } from 'react';
import './ochain.css';
import Pf from './estevan.jpg'
import { Button } from 'mdbreact';
import Hist from './Hist';
import axios from 'axios';

class Mainapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: '',
        image: '',
        description: '',
      },
      owner: {}
    }
  }
  async componentWillMount() {
    var userData;
    await axios.get('https://originalchainx.herokuapp.com/products/' + this.props.match.params.code).then(res => {

      if (res.data.user_id) {
        axios.get('https://originalchainx.herokuapp.com/users/' + res.data.user_id).then(res => {
          userData = res.data;

          this.setState({
            owner: {
              name: userData.username,
              cpfcnpj: userData.cnpj ? userData.cnpj : userData.cpf,
              email: userData.email,
              avatar: userData.avatar,
              fullname: userData.fullname
            }
          });
        }).catch(res => {

        });
      }
      this.setState({
        product: {
          name: res.data.name,
          image: res.data.image,
          description: res.data.description,
        }
      });
    }).catch(res => {
      console.log('Produto não cadastrado na base')
    })
    console.log(this.state.product);
  }
  render() {
    return (
      <div>
        <div style={{ alignItems: 'center', textAlign: 'center' }} className='greybox z-depth-5 border border-light rounded'>

          <h6 className='text-center' >Produto</h6>
          <img src={"data:image/png;base64," + this.state.product.image} />
          <h5 className='text-center font-weight-bold '>{this.state.product.name}</h5>
          <hr />
          <p>{this.state.product.description}</p>
        </div>

        <div className='greybox z-depth-5 border border-light rounded'>

          <h6 className='text-center'>Propriedade</h6>
          <h5 className='text-center font-weight-bold '>{this.state.owner.fullname}</h5>

          <div className='text-center'>
            <a><img width="100px" height="100px" src={"data:image/png;base64," + this.state.owner.avatar} alt='profile_photo' className="rounded-circle" /></a><br />
          </div>
          <hr />
          <p1>Usuário: {this.state.owner.name}</p1><br />
          <p1>CNPJ/CPF: {this.state.owner.cpfcnpj}</p1><br />
          <p1>E-mail: {this.state.owner.email}</p1><br />
          <hr />
          <div className='text-center'><Button href="/historico" size="sm">Histórico</Button></div>
        </div>
      </div >
    );
  }
}

export default Mainapp;