import React, { Component } from 'react'
import LastPlayedItem from './LastPlayedItem'
import './style.css'

import harrypoterjfif from '../../assest/images/harrypoter.jfif'
import crush from '../../assest/images/crush.jfif'
import dyinglight2 from '../../assest/images/dyinglight2.jfif'
import godofwar from '../../assest/images/godofwar.jfif'

export default class index extends Component {
    LastPlayedItems = [
        {
            gameImage: harrypoterjfif,
            gameTitle: "Hogwarts Legacy",
            progress: 50
        },
        {
            gameImage: godofwar,
            gameTitle: "God Of War: Ragnarök",
            progress: 72.2
        }, {
            gameImage: crush,
            gameTitle: "Crash Bandicoot N. Sane Trilogy",
            progress: 34
        }, {
            gameImage: dyinglight2,
            gameTitle: "Dying Light 2 Stay Human",
            progress: 100
        }
    ]

    render() {
        return (
            <div className='LastPlayedContainer'>
                <p>last played</p>
                <div>
                    {this.LastPlayedItems.map((game, index) =>
                        <LastPlayedItem {...game} key={index} />)}
                </div>
            </div>
        )
    }
}
