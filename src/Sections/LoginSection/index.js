import React, { Component } from 'react'
import OldController from '../../assest/images/oldController.png';
import CustomInput from '../../Components/CustomInput'
import CustomButton from '../../Components/CustomButton'
import OrLine from '../../Components/OrLine'
import OtherLoginOptions from '../../Components/OtherLoginOptions'
import HeaderPage from '../../Components/HeaderPage'
import crescentMoon from '../../assest/images/crescent-moon-64.png'
import './style.css'

export default class index extends Component {


    state = {
        userEmail: "",
        userEmailReady: false,
        userPassword: "",
        userPasswordReady: false,
        active: this.props.active || false
    }

    onChangeEmail = (event) => {
        const input = event.target.value
        this.setState({ userEmail: input })
    }


    onChangeActive = () => {
        this.setState({ active: !this.state.active })
        console.log("now");
    }

    onChangePassword = (event) => {
        const input = event.target.value
        this.setState({ userPassword: input })
    }


    onChangeEmailState = (state) => {
        this.setState({ userEmailReady: state })
    }

    onChangePasswordState = (state) => {
        this.setState({ userPasswordReady: state })
    }

    loginPost = (event) => {
        event.preventDefault()
        if (
            this.state.userEmailReady
            &&
            this.state.userPasswordReady
        ) {
            console.log("Ready");
        } else {
            console.log("Not Ready");
        }
    }

    render() {
        return (
            <div className='LoginScreen'>
                <div className='LoginScreenLeft'>
                    <div className='iconHeaderLogin'>
                        <img className="iconPart1Login" src={crescentMoon} alt="" />
                        <img className="iconPart2Login" src={crescentMoon} alt="" />
                        <p className='PageHeader'>Gamers</p>
                    </div>
                    <p className='LoverText'>I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.</p>
                    <div>
                        <p className='LoverName'>Hideo Kojima</p>
                        <img className='OldController' src={OldController} alt="" />
                    </div>
                    <button className='ScrollToLoginButton' onClick={() => window.scrollTo(0, 1000)} >Go Login</button>
                </div>
                <div className='LoginScreenRight'>
                    <HeaderPage mainHeader={"Join the game!"} secondaryHeader={"Go inside the best gamers social network!"} MHStyle={{ textAlign: 'center' }} />
                    <OtherLoginOptions />
                    <OrLine />
                    <form>
                        <CustomInput onChangeState={(state) => this.onChangeEmailState(state)} required value={this.state.userEmail} onChange={this.onChangeEmail} label={"Your email"} placeholder={"Write your email"} minValueLength={8} bestValueLength={25} errorMessage={"Not bad but you know you can do it better"} />
                        <CustomInput required onChangeState={(state) => this.onChangePasswordState(state)} value={this.state.userPassword} onChange={this.onChangePassword} label={"Enter your password"} type={"password"} placeholder={"Write your password"} minValueLength={8} bestValueLength={25} errorMessage={"Not bad but you know you can do it better"} />
                        <CustomButton onClick={this.loginPost} text={"Login"} />
                    </form>
                    <p className='RegisterOpotion'>Don't have an account? <span onClick={this.props.changeActive}>Register </span></p>
                </div>
            </div>
        )
    }
}
