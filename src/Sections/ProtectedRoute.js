import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export class ProtectedRouteLogin extends Component {


    token = localStorage.getItem('token')
    direction = (this.token ? "/mainPage" : "/login")

    render() {
        return (<Navigate to={this.direction} replace={true} />)
    }

}

export class ProtectedRouteDashboard extends Component {


    admin = localStorage.getItem('admin')
    direction = (this.admin === "true" ? "/dashboard" : "/mainPage")

    render() {
        return (<Navigate to={this.direction} replace={true} />)
    }

}
