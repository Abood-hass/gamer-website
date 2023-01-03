import React, { Component } from 'react'

import Sun from '../../../assest/images/Sun-one.svg'
import Moon from '../../../assest/images/Moon.svg'

import './style.css'

export default class index extends Component {

    render() {
        return (
            <div className={`SwitchContainer ${localStorage.getItem('theme')}`} style={this.props.style}>
                <img src={Moon} alt="" onClick={_ => this.props.changeTheme("dark")} />
                <img src={Sun} alt="" onClick={_ => this.props.changeTheme("light")} />
            </div>
        )
    }
}
