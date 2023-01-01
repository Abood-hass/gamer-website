import React, { Component } from 'react'
import './style.css'

export default class index extends Component {
    render() {
        return (
            <div className='AvatarBoxContainer'>
                <span>{`Welcome Back, `}<br />
                    {
                        `${this.props.name}!`
                    }</span>
                <img src={this.props.avatar} alt='' />
            </div>
        )
    }
}
