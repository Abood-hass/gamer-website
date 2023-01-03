import React, { Component } from 'react'

import Sun from '../../../assest/images/Sun-one.svg'
import Moon from '../../../assest/images/Moon.svg'

import './style.css'

export default class index extends Component {
    render() {
        return (
            <div className='SwitchContainer' style={this.props.style}>
                <img src={Moon} alt="" />
                <img src={Sun} alt="" />
            </div>
        )
    }
}
