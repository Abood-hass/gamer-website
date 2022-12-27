import React, { Component } from 'react'
import OldController from '../../assest/images/oldController.png';
import CustomInput from '../../Components/CustomInput'
import CustomButton from '../../Components/CustomButton'
import OrLine from '../../Components/OrLine'
import OtherLoginOptions from '../../Components/OtherLoginOptions'
import HeaderPage from '../../Components/HeaderPage'
import crescentMoon from '../../assest/images/crescent-moon-64.png'
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'

export default class index extends Component {

    notify = (errs) => toast(errs ? errs.join(",") : "Done");

    state = {
        userEmail: "",
        userPassword: "",
        active: this.props.active || false
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


    loginPost = (event) => {
        event.preventDefault()

        this.schema.validate(
            {
                userEmail: this.state.userEmail,
                userPassword: this.state.userPassword
            }, { abortEarly: false }
        ).then(_ =>
            this.notify()
        ).catch(err => {
            this.notify(err.errors)
        })
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

                    <ToastContainer />
                    <HeaderPage mainHeader={"Join the game!"} secondaryHeader={"Go inside the best gamers social network!"} MHStyle={{ textAlign: 'center' }} />
                    <OtherLoginOptions />
                    <OrLine />
                    <form>
                        <CustomInput required value={this.state.userEmail} onChange={this.onChangeEmail} label={"Your email"} placeholder={"Write your email"} minValueLength={8} bestValueLength={25} errorMessage={"Not bad but you know you can do it better"} />
                        <CustomInput required value={this.state.userPassword} onChange={this.onChangePassword} label={"Enter your password"} type={"password"} placeholder={"Write your password"} minValueLength={8} bestValueLength={25} errorMessage={"Not bad but you know you can do it better"} />
                        <CustomButton onClick={this.loginPost} text={"Login"} />
                    </form>

                    <p className='RegisterOpotion'>Don't have an account? <span onClick={this.props.changeActive}>Register </span></p>

                </div>

            </div>
        )
    }
}
