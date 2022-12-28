import React, { Component } from 'react'
import './style.css'

export default class index extends Component {
    render() {
        return (
            <div className={`PopupShadow  ${this.props.hidden ? (`hidden`) : (``)}`}>
                <div className={`PopupContainer`} style={this.props.containerStyle}>
                    <span className='PopupHeader'
                        style={{ backgroundColor: (this.props.headerStyle) }}>

                        {this.props.header || "Error"}
                    </span>
                    <p className='PopupBody'>
                        {this.props.body}
                    </p>
                    <button onClick={this.props.onClick} className='PopupControl'>{this.props.btnText || "Ok"}</button>
                </div >
            </div>
        )
    }
}
