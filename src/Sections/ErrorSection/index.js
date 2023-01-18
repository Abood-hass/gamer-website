import React, { Component } from 'react'
import './style.css'

export default class index extends Component {
    goBackFunction = () => [
        this.props.navigate("/")
    ]
    render() {
        return (
            <div className='ErrorPage'>
                <h3>Error 404</h3>
                <p onClick={this.goBackFunction}>click me to back</p>
            </div>
        )
    }
}
