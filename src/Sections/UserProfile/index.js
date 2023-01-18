import React, { Component } from 'react'
import AvatarBox from '../../Components/AvatarBox'
import DrawerSide from '../../Components/DrawerSide'
import imgIndicator from '../../assest/images/loading-90.png'
import { BASE_URL } from '../../config'
import './style.css'
import { Navigate } from 'react-router-dom'

export default class index extends Component {
    state = {
        theme: localStorage.getItem('theme') || 'light',
        userInfo: {},
        isLoading: true,
        token: localStorage.getItem('token') || false
    }
    Auth = `Bearer ${localStorage.getItem('token')}`

    userInfoUrl = "/api/users/profile"
    async componentDidMount() {
        await fetch(BASE_URL + this.userInfoUrl,
            {
                headers: { Authorization: this.Auth },
            })
            .then((response) => response.json())
            .then((data) => {
                if (data._id) {
                    this.setState({ userInfo: data })
                    this.setState({ isLoading: false })
                    // console.log(data);
                } else {
                    this.setPopMsg(data.message)
                }


            })
            .catch(err => this.setPopMsg(err || "Something Wrong"))
    }
    changeTheme = (theme) => {
        if (theme !== this.state.theme) {
            this.setState({ theme: theme })
            localStorage.setItem('theme', theme)
        }
    }

    render() {
        return (
            (this.state.token) ?
                <div className={`HomeContainer ${this.state.theme}`}>
                    <DrawerSide navigate={this.props.navigate} changeTheme={this.changeTheme} />
                    <div className='HomeMain' >
                        <AvatarBox navigate={this.props.navigate} changeTheme={this.changeTheme} avatar={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
                        {this.state.isLoading ? <img className='Indicator' style={{ alignSelf: 'center' }} src={imgIndicator} alt='' />
                            :
                            <div className='ProfileContainer'>
                                <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                                <div>
                                    <div className='UserInfo'>
                                        <p>
                                            Name<span>{this.state.userInfo.name}</span>
                                        </p>
                                        <p>
                                            Email<span>{this.state.userInfo.email}</span>
                                        </p>
                                        <p>
                                            Account Type<span>{this.state.userInfo.isAdmin ? "Admin" : "User"}</span>
                                        </p>
                                    </div>

                                </div>
                            </div>}
                    </div>
                </div> : <Navigate to={"/login"} replace={true} />
        )
    }
}
