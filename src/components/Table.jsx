import React from 'react'
import './Table.css'




export default class Table extends React.Component {

   
renderTable() {
    const {logradouro , bairro , localidade , uf} = this.props.data
    return (
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>Rua</th>
                    <th>Bairro</th>
                    <th>Cidade</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{logradouro}</th>
                    <th>{bairro}</th>
                    <th>{localidade}</th>
                    <th>{uf}</th>
                </tr>
            </tbody>
        </table>
    )
}
render(){
    return (
        < React.Fragment >
            {this.renderTable()}
        </React.Fragment>
    )
}
}

