import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container, Mask, View } from 'mdbreact';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './ullPageIntroWithFixedTransparentNavbar.css';
import Solucoes from './Solucoes';
import Quemsomos from './Quemsomos';
import Contato from './Contato';
import Home from './Home';
import Mainapp from './Mainapp';
import Hist from './Hist';
import logo from './logo.png'
class FullPageIntroWithFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        collapse: false,
        isWideEnough: false,
      };
  this.onClick = this.onClick.bind(this);
}

onClick(){
  this.setState({
    collapse: !this.state.collapse,
  });
}

render() {
  return (
    <div className='paddingtop'>
    <BrowserRouter>
        <div >
              <Navbar  color="transparent" dark expand="md" fixed="top" scrolling>
              
                <NavbarBrand >
                <img width="25px" src="https://www.ochain.com.br/static/media/logo.73a32887.png"/>
                <strong>  Ochain</strong>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                  <NavbarNav right>

                    <NavItem className='textcenter' active>
                        <NavLink onClick={this.onClick} to="/produto">Produto</NavLink>
                    </NavItem>

                    <NavItem className='textcenter' active>
                        <NavLink onClick={this.onClick} to="/historico">Histórico</NavLink>
                    </NavItem>

                  </NavbarNav>
                  
                </Collapse>
              </Navbar>

              <div>
              <Route path='/produto' component={Mainapp}/>
              <Route path='/historico' component={Hist}/>
              </div>
              
        </div>
        </BrowserRouter>
        </div>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;
