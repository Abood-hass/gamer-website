import React, { Component } from 'react'
import { BASE_URL } from '../../config'
import imgIndicator from '../../assest/images/loading-90.png'
import deleteUser from '../../assest/images/delete-user-64.png'
import PopupWindow from '../../Components/PopupWindow'
import './style.css'


export default class index extends Component {
    callUsersRoute = '/api/users'
    Auth = `Bearer ${localStorage.getItem('token')}`
    state = {
        loadingData: true,
        loadingUserData: false,
        usersData: [],
        showedUser: {}
        , popMsg: {
            hidden: true,
            errMsg: "",
            alert: "Done",
            headerStyle: "green"
        },
    }
    onHideMsg = () => {
        this.setState({ popMsg: { hidden: true } })
    }
    setPopMsg = (errMsg, headerStyle, alert) => {
        this.setState({ popMsg: { errMsg, hidden: false, headerStyle, alert } })
    }

    showOneUser = async (userId) => {
        this.setState({ loadingUserData: true })
        await fetch(BASE_URL + this.callUsersRoute + "/" + userId, {
            headers: {
                Authorization: this.Auth
            }
        })
            .then(res => res.json())
            .then(data => this.setState({ showedUser: data }))
            .catch(err => console.log(err))
            .finally(_ => this.setState({ loadingUserData: false }))
    }


    deleteOneUser = async (userId) => {
        this.setState({ loadingUserData: true })
        await fetch(BASE_URL + this.callUsersRoute + "/" + userId, {
            method: 'DELETE',
            headers: {
                Authorization: this.Auth
            }
        })
            .then(res => res.json())
            .then(data => this.setPopMsg(data.message, "blue", "Admin Alert"))
            .catch(err => console.log(err))
            .finally(_ => this.setState({ loadingUserData: false }))
    }

    async componentDidMount() {
        await fetch(BASE_URL + this.callUsersRoute, {
            headers: {
                Authorization: this.Auth
            }
        })
            .then(res => res.json())
            .then(data => this.setState({ usersData: data, loadingData: false }))
            .catch(err => console.log(err))
    }
    render() {
        return (<div className='DashboardBody'>
            <PopupWindow hidden={this.state.popMsg.hidden} headerStyle={this.state.popMsg.headerStyle} onClick={this.onHideMsg} header={this.state.popMsg.alert} body={this.state.popMsg.errMsg} />

            <div className='UsersTable'>
                <div className='UserTableHeader'>
                    <span>#</span>
                    <span>Name</span>
                    <span>Email</span>
                </div>
                <div className='UserTableBody'>

                    {this.state.loadingData ?
                        <img className='Indicator' src={imgIndicator} alt='' />
                        : this.state.usersData.map((user, index) =>
                            <div key={index} className='UserRow' onClick={() => this.showOneUser(user._id)}>
                                <span className='UserRowCol1'>{index + 1}</span>
                                <span className='UserRowCol2'>{user.name}</span>
                                <span className='UserRowCol3'>{user.email}</span>
                            </div>
                        )}
                </div>
            </div>
            <div className='UserView'>
                {this.state.loadingUserData ?
                    <img className='Indicator' src={imgIndicator} alt='' />

                    : (this.state.showedUser['name']) ? (
                        <>
                            <img className='UserImage' alt="" src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png' />
                            <span className='UserName'>
                                {this.state.showedUser.name}
                            </span>
                            <span >
                                {this.state.showedUser.isAdmin ? "Admin" : "User"}
                            </span>
                            <span >
                                {this.state.showedUser.email}
                            </span>
                            <div className='UserDates'>
                                <span >
                                    {"Created at: " + this.state.showedUser.createdAt}
                                </span>
                                <span >
                                    {"Updated at: " + this.state.showedUser.updatedAt}
                                </span>
                            </div>
                            <span className='deleteBtn' onClick={() => { this.deleteOneUser(this.state.showedUser._id); this.setState({ showedUser: {} }) }}><img src={deleteUser} alt="" />Delete</span>
                        </>
                    ) : (<h1>Click on one of Users</h1>)}
            </div>
        </div>
        )
    }
}
