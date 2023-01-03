import React, { Component } from 'react'
import gameOfYear from '../../../assest/images/gameOfYear.png'
import './style.css'

export default class index extends Component {
    render() {
        return (
            <div className='MostRecentCardContainer'>
                <p>
                    <span>{this.props.gameTitle}</span><br />
                    <span>{"Last Time Played: " + this.props.gameRecentPlayInfo.time + " " + this.props.gameRecentPlayInfo.unit}</span>
                </p>
                <img className='gameOfYearSign' src={gameOfYear} alt="" />
                <img className='gameBG' src={this.props.gameImage} alt="" />
            </div>
        )
    }
}
