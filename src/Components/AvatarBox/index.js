import React, { Component } from 'react'

import ThemeModeSwitch from '../DrawerSide/ThemeModeSwitch'
import like from '../../assest/images/like.svg'
import signoutDark from '../../assest/images/dark-sign-out-96.png'
import signoutWhite from '../../assest/images/white-sign-out-96.png'
import usersMangment from '../../assest/images/users-mangment-100.png'
import puzzle from '../../assest/images/Puzzle.svg'
import settings from '../../assest/images/Settings.svg'
import './style.css'

export default class index extends Component {
    state = {
        menuShowed: false,
        admin: false
    }

    componentDidMount() {
        this.setState({ admin: localStorage.getItem('admin') === "true" })
        console.log(this.state.admin);
    }
    onClickOnAvatar = () => {
        if (window.screen.availWidth <= 800) {
            this.setState({ menuShowed: !this.state.menuShowed })

        }
    }
    signOutBtn = () => {
        localStorage.clear()
        this.props.navigate('/')
    }


    navigateProfile = () => {
        this.props.navigate("/profile")
    }


    navigateAdminDashboard = () => {
        this.props.navigate('/DashboardPort')
    }


    render() {
        return (
            <div className='AvatarBoxContainer' style={{ marginBottom: this.state.menuShowed ? '120px' : '0px' }}>
                <img className='LogoutIcon' alt='' onClick={this.signOutBtn} src={localStorage.getItem("theme") === 'dark' ? signoutWhite : signoutDark} />

                <span>{`Welcome Back, `}<br />
                    {
                        localStorage.getItem('name')
                    }</span>
                <img className='UserAvatar' src={this.props.avatar} alt='' onClick={this.onClickOnAvatar} />

                <div className={`MenuBox ${localStorage.getItem("theme") + "Menu"}`} style={{ height: this.state.menuShowed ? '100px' : '0px' }}>

                    <img src={like} alt='' />
                    <img src={settings} alt='' onClick={this.navigateProfile} />
                    <img src={puzzle} alt='' />
                    {this.state.admin && <img src={usersMangment} onClick={this.navigateAdminDashboard} alt='' />}

                    <ThemeModeSwitch changeTheme={this.props.changeTheme} style={{ flexDirection: 'row', width: '100px', height: '30px' }} />
                </div>
            </div>
        )
    }
}
