import React, { Component } from 'react'
import './style.css'

export default class index extends Component {
    render() {
        return (
            <div className='FriendsListContainer'>
                <p>freind list</p>
                <div className='FriendsList'>
                    {[...new Array(6)].map((line, index) => {
                        return (

                            <div key={index}>
                                {
                                    [...new Array(index === 0 ? 5 : (index === 5 ? 5 : (6)))].map((circle, index) => {
                                        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                                        return (
                                            <span style={{ backgroundColor: ` #${randomColor}` }}
                                                className="FriendItem"
                                                key={index}>
                                            </span>)
                                    })}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
