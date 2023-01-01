import React, { Component } from 'react'
import AvatarBox from '../../Components/AvatarBox'
import DrawerSide from '../../Components/DrawerSide'
import NewGamesSlider from '../../Components/NewGames'
import LastPlayedList from '../../Components/LastPlayedList'
import './style.css'

export default class index extends Component {
    render() {
        return (
            <div className='HomeContainer'>
                <DrawerSide />
                <div className='HomeMain' >
                    <AvatarBox name={"abood"} avatar={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
                    <NewGamesSlider />
                    <div className='HomeMainLower' >
                        <LastPlayedList />
                    </div>
                </div>
            </div>
        )
    }
}
