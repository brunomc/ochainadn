import React, { Component } from 'react';
import Registro from './Registro'
import Quemsomos from './Quemsomos'
import Menu from './Menu'
import Solucoes from './Solucoes'
import Contato from './Contato';
import Home from './Home'
import Beneficios from './Beneficios'
import FooterPage from './FooterPage';
import Cadastrocontas from './Cadastrocontas';
import Mainapp from './Mainapp';
import Hist from './Hist';
import Trans from './Trans';
import {BrowserRouter, Route, Switch} from "react-router-dom";

const NewRouter = () => {
  return (
    <div>
      <h1>NEW ROUTER</h1>
    </div>
  );
}
class App extends Component {
  constructor (props) {
    super(props);
    this.state ={
      id:'"/Solucoes"',
      component:'{Solucoes}',
    }
  }
  render() {
        return (
        <div >
        <Menu />
        </div>
      
    );
  }
}

export default App;
