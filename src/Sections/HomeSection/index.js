import React, { Component } from 'react'
import AvatarBox from '../../Components/AvatarBox'
import DrawerSide from '../../Components/DrawerSide'
import NewGamesSlider from '../../Components/NewGames'
import LastPlayedList from '../../Components/LastPlayedList'
import MostRecent from '../../Components/MostRecent'
import FreindsList from '../../Components/FreindsList'
import './style.css'

export default class index extends Component {


    state = {
        theme: localStorage.getItem('theme') || 'light'
    }
    changeTheme = (theme) => {
        if (theme !== this.state.theme) {
            this.setState({ theme: theme })
            localStorage.setItem('theme', theme)
        }
    }

    render() {
        return (
            <div className={`HomeContainer ${this.state.theme}`}>
                <DrawerSide changeTheme={this.changeTheme} />
                <div className='HomeMain' >
                    <AvatarBox changeTheme={this.changeTheme} avatar={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
                    <NewGamesSlider />
                    <div className='HomeMainLower' >
                        <LastPlayedList />
                        <MostRecent />
                        <FreindsList />
                    </div>
                </div>
            </div>
        )
    }
}
