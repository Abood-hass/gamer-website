import React, { Component } from 'react'
import ThemeModeSwitch from './ThemeModeSwitch'
import like from '../../assest/images/like.svg'
import puzzle from '../../assest/images/Puzzle.svg'
import usersMangment from '../../assest/images/users-mangment-100.png'
import settings from '../../assest/images/Settings.svg'
import logo from '../../assest/images/logo.svg'
import './style.css'

export default class index extends Component {
    state = {
        admin: false
    }
    componentDidMount() {
        this.setState({ admin: localStorage.getItem("admin") === "true" })
    }
    render() {
        return (
            <div className='DrawerSideContainer'>
                <div className='DrawerSides'>
                    <div>
                        <img src={logo} className='logo' alt='' />
                    </div>
                    <div className='DrawerSideIcons'>
                        <img src={like} alt='' />
                        <img src={settings} alt='' onClick={() => this.props.navigate("/profile")} />
                        <img src={puzzle} alt='' />
                        {this.state.admin && <img src={usersMangment} onClick={() => this.props.navigate("/DashboardPort")} alt='' />}

                    </div>
                    <div className='DrawerSideIcons' style={{ justifyContent: 'flex-end' }}>
                        <ThemeModeSwitch changeTheme={this.props.changeTheme} />
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}
