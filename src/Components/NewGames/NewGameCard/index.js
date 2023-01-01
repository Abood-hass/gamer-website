import React, { Component } from 'react'
import './style.css'

export default class index extends Component {
    state = {
        imageCharacterHover: {}
    }

    hoverIn = () => {
        this.setState({ imageCharacterHover: this.props.CardStyleType ? { height: '300px', transform: ' matrix(0.96, 0.39, -0.27, 0.93, 0, 0)' } : { height: '250px' } })
    }

    hoverOut = () => {
        this.setState({ imageCharacterHover: {} })
    }

    render() {
        return (
            <div className={`NewGameCardContainer ${this.props.CardStyleType}`}
                onClick={_ => { window.open(this.props.gamePage, "_blank") }}
                onMouseEnter={this.hoverIn} onMouseLeave={this.hoverOut}>
                {this.props.imageCharacter && <img style={this.state.imageCharacterHover} className='Character-Image' src={this.props.imageCharacter} alt='' />}
                {this.props.logoImage && <img className='Logo-Image' src={this.props.logoImage} alt='' />}
                {this.props.imageBG && <img className='Bg-Image' src={this.props.imageBG} alt='' />}
                {this.props.desc && <span className='Game-Desc'>{this.props.desc}</span>}
            </div>
        )
    }
}
