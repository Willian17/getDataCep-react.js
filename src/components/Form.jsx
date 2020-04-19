import React, {Component} from 'react'
import './Form.css'
import {Link} from 'react-router-dom'

export default class Form extends Component{
 
 render(){
     return(
         <form className="form p-5">
             <div className="content border border-dark">
                 <div className="form-group">
                     <label htmlFor="cep">CEP</label>
                     <input type="text" className="form-control" id="cep" maxLength="8"
                         aria-describedby="cepHelp" onChange={e => this.props.setCep(e.target.value)} />
                     <small id="cepHelp" className="form-text text-muted">
                         Campo deve ser informado com apenas números
                </small>
                 </div>
                 <hr />
                 <Link to="/cep-data" type="submit" 
                 className="btn btn-primary" onClick={this.props.setData}>Buscar Cep</Link>
             </div>
         </form>
     )
 }
}
