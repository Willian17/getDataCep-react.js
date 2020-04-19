import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import Routers from './router/router'
import Footer from './components/Footer'
import Axios from 'axios';



export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cep: '',
      dataState: {
        logradouro: '',
        bairro: '',
        localidade: '',
        uf: ''
      },
    }
    this.setCep = this.setCep.bind(this)
    this.setData = this.setData.bind(this)
  }

  setData() {
    Axios(`https://viacep.com.br/ws/${this.state.cep}/json`)
    .then(resp => {
      const {logradouro , bairro , localidade, uf} = resp.data
      const dataState = {logradouro , bairro , localidade, uf}
     this.setState({dataState})})
  }
  
  setCep(cep) {
    this.setState({cep})
  }
  

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routers setCep={this.setCep} setData={this.setData} data={this.state.dataState} />
          < Footer />
        </div>
      </BrowserRouter>
    );
  }
}
