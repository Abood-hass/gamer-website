import React, { Component } from 'react'
import googleIcon from '../../assest/images/google-48.png'
import './style.css'

export default class index extends Component {
    type = this.props.type;
    text = this.props.text

    secondaryButtonStyle = (this.type ? {
        backgroundColor: 'white', color: 'black', boxShadow: ' 0px 25px 35px -10px rgba(0,0,0,0.11)'
    } : {})

    componentWillUpdate(nextProps) {
        if (nextProps !== this.props) {
            this.type = nextProps.type;
            this.text = nextProps.text;
        }
    }

    render() {
        return (
            <button
                className='customButton'
                style={this.secondaryButtonStyle}
                onClick={this.props.onClick}
            >
                {this.type && <img src={googleIcon} alt='' />}

                {this.text}</button>
        )
    }
}
