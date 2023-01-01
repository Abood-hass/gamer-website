import React, { Component } from 'react'
import OldController from '../../assest/images/oldController.png';
import CustomInput from '../../Components/CustomInput'
import CustomButton from '../../Components/CustomButton'
import OrLine from '../../Components/OrLine'
import OtherLoginOptions from '../../Components/OtherLoginOptions'
import PopupWindow from '../../Components/PopupWindow'
import HeaderPage from '../../Components/HeaderPage'
import crescentMoon from '../../assest/images/crescent-moon-64.png'
import * as yup from 'yup';
import './style.css'
import { Link } from 'react-router-dom';

export default class index extends Component {

    state = {
        userEmail: "",
        userPassword: "",
        popMsg: {
            hidden: true,
            errMsg: "",
            alert: "Done",
            headerStyle: "green"
        }
    }

    componentDidMount() {
        let previUserEmail = window.localStorage.getItem("user-email");
        let previUserPassword = window.localStorage.getItem("user-password");
        if (previUserEmail && previUserPassword) {
            this.props.navigate('/mainPage')
        }

    }

    passwordRegex = "^.*(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$"
    regexp = /^\S*$/;

    schema = yup.object().shape({
        userEmail: yup.string().required("Email required").email("Email form is Wrong"),
        userPassword: yup.string().required("Password required")
            .matches(this.passwordRegex, "Password form is Wrong")
            .matches(this.regexp, "Password form is Wrong"),
    });


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

    onHideMsg = () => {
        this.setState({ popMsg: { hidden: true } })
    }

    setPopMsg = (errMsg, headerStyle, alert) => {
        this.setState({ popMsg: { errMsg, hidden: false, headerStyle, alert } })
    }


    loginPost = (event) => {
        event.preventDefault()

        this.schema.validate(
            {
                userEmail: this.state.userEmail,
                userPassword: this.state.userPassword
            }, { abortEarly: false }
        ).then(_ => {
            window.localStorage.setItem("user-email", this.state.userEmail)
            window.localStorage.setItem("user-password", this.state.userPassword)
            this.props.navigate('/mainPage')

        })
            .catch(err => {
                this.setPopMsg(err.errors.join(" ,"))
            })
    }

    render() {
        return (
            <div className='LoginScreen'>
                <PopupWindow hidden={this.state.popMsg.hidden} headerStyle={this.state.popMsg.headerStyle} onClick={this.onHideMsg} header={this.state.popMsg.alert} body={this.state.popMsg.errMsg} />

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

                    {/* <ToastContainer /> */}
                    <HeaderPage mainHeader={"Join the game!"} secondaryHeader={"Go inside the best gamers social network!"} MHStyle={{ textAlign: 'center' }} />
                    <OtherLoginOptions />
                    <OrLine />
                    <form>
                        <CustomInput required value={this.state.userEmail} onChange={this.onChangeEmail} label={"Your email"} placeholder={"Write your email"} minValueLength={8} bestValueLength={25} errorMessage={"Not bad but you know you can do it better"} />
                        <CustomInput required value={this.state.userPassword} onChange={this.onChangePassword} label={"Enter your password"} type={"password"} placeholder={"Write your password"} minValueLength={8} bestValueLength={25} errorMessage={"Not bad but you know you can do it better"} />
                        <CustomButton onClick={this.loginPost} text={"Login"} />
                    </form>

                    <p className='RegisterOpotion'>Don't have an account?  <Link className='Link' to={'/register'}>Register</Link> </p>

                </div>

            </div>
        )
    }
}
