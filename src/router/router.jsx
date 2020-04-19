import React from 'react'
import {Switch , Route , Redirect}from 'react-router-dom'

import Form from '../components/Form'
import Table from '../components/Table'

export default props =>
    <Switch >
        <Route exact path="/">
            <Form setCep={props.setCep} setData={props.setData}/>
        </Route>

        <Route path="/cep-data">
            <Table data={props.data} />
        </Route>
        <Redirect from="*" to="/" />
    </Switch>

