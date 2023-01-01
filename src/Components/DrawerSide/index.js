import React, { Component } from 'react'
import ThemeModeSwitch from './ThemeModeSwitch'
import like from '../../assest/images/like.svg'
import puzzle from '../../assest/images/Puzzle.svg'
import settings from '../../assest/images/Settings.svg'
import logo from '../../assest/images/logo.svg'
import './style.css'

export default class index extends Component {
    render() {
        return (
            <div className='DrawerSideContainer'>
                <div className='DrawerSides'>
                    <div>
                        <img src={logo} className='logo' alt='' />
                    </div>
                    <div className='DrawerSideIcons'>
                        <img src={like} alt='' />
                        <img src={settings} alt='' />
                        <img src={puzzle} alt='' />

                    </div>
                    <div className='DrawerSideIcons' style={{ justifyContent: 'flex-end' }}>
                        <ThemeModeSwitch />
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}
