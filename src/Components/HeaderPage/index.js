import React, { Component } from 'react'
import './style.css'

export default class index extends Component {
    render() {
        return (
            <div className='headerContainer' style={this.props.MHStyle}>
                <h1  >{this.props.mainHeader}</h1>
                <span  >{this.props.secondaryHeader}</span>
            </div>
        )
    }
}
