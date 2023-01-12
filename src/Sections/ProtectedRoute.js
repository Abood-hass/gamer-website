import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export default class ProtectedRoute extends Component {


    token = localStorage.getItem('token')
    direction = (this.token ? "/mainPage" : "/login")

    render() {
        return (<Navigate to={this.direction} replace={true} />)
    }

}
