import React, { Component } from 'react'
import './style.css'

export default class index extends Component {
    render() {
        return (
            <div className={`LastPlayedItemContainer ${localStorage.getItem("theme") + "LastPlayedItem"}`}>
                <img src={this.props?.gameImage} alt="" />
                <p>{this.props?.gameTitle}{`  ` + this.props?.progress + "%"}</p>
            </div>
        )
    }
}
