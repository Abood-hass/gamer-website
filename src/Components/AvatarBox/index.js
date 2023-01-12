import React, { Component } from 'react'

import ThemeModeSwitch from '../DrawerSide/ThemeModeSwitch'
import like from '../../assest/images/like.svg'
import usersMangment from '../../assest/images/users-mangment-100.png'
import puzzle from '../../assest/images/Puzzle.svg'
import settings from '../../assest/images/Settings.svg'
import './style.css'

export default class index extends Component {
    state = {
        menuShowed: false
    }
    onClickOnAvatar = () => {
        if (window.screen.availWidth <= 800) {
            this.setState({ menuShowed: !this.state.menuShowed })

        }
    }

    render() {
        return (
            <div className='AvatarBoxContainer' style={{ marginBottom: this.state.menuShowed ? '120px' : '0px' }}>
                <span>{`Welcome Back, `}<br />
                    {
                        localStorage.getItem('name')
                    }</span>
                <img src={this.props.avatar} alt='' onClick={this.onClickOnAvatar} />
                <div className={`MenuBox ${localStorage.getItem("theme") + "Menu"}`} style={{ height: this.state.menuShowed ? '100px' : '0px' }}>

                    <img src={like} alt='' />
                    <img src={settings} alt='' />
                    <img src={puzzle} alt='' />
                    {this.state.admin && <img src={usersMangment} alt='' />}

                    <ThemeModeSwitch changeTheme={this.props.changeTheme} style={{ flexDirection: 'row', width: '100px', height: '30px' }} />
                </div>
            </div>
        )
    }
}
