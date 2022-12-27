import React, { Component } from 'react'
import gamerImage from '../../assest/images/gamerImage.jfif'
import CustomInput from '../../Components/CustomInput'
import HeaderPage from '../../Components/HeaderPage'
import OrLine from '../../Components/OrLine'
import CustomButton from '../../Components/CustomButton'
import CustomRadius from '../../Components/CustomRadius'
import crescentMoon from '../../assest/images/white-crescent-moon-50.png'
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import './style.css'

export default class index extends Component {
    state = {
        termsChecked: false,
        userEmail: "",
        userPassword: "",
        userPasswordConfirm: "",
    }

    notify = (errs) => toast(errs ? errs.join(",") : "Done");

    passwordRegex = "^.*(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$"
    regexp = /^\S*$/;

    schema = yup.object().shape({
        userEmail: yup.string().required("Email required").email("Email form is Wrong"),

        userPassword: yup.string().required("Password required")
            .matches(this.passwordRegex, "Password form is Wrong")
            .matches(this.regexp, "Password form is Wrong"),

        userPasswordConfirm: yup.string().required("Rewrite Password")
            .test("", "Rewrite Password Correctly", value => {
                return value === this.state.userPassword
            }),

        termsChecked: yup.boolean().test("", "terms & conditions must be Checked", value => value)
    });

    onChangeEmail = (e) => {
        this.setState({ userEmail: e.target.value })
    }

    onChangePassword = (e) => {
        this.setState({ userPassword: e.target.value })
    }

    onChangePasswordConfirm = (e) => {
        this.setState({ userPasswordConfirm: e.target.value })
    }


    onChangeCheck = () => {
        this.setState({ termsChecked: !this.state.termsChecked })
    }


    onChangeEmailState = (state) => {
        this.setState({ userEmailReady: state })
    }

    onChangePasswordState = (state) => {
        this.setState({ userPasswordReady: state })
    }

    registerPost = (event) => {
        event.preventDefault()

        this.schema.validate(
            {
                userEmail: this.state.userEmail,
                userPassword: this.state.userPassword,
                userPasswordConfirm: this.state.userPasswordConfirm,
                termsChecked: this.state.termsChecked
            }, { abortEarly: false }
        ).then(_ =>
            this.notify()
        ).catch(err => {
            this.notify(err.errors)
        })
    }

    render() {
        return (
            <div className='RegisterSection'>

                <div className='RegisterSectionLeft'>
                    <img src={gamerImage} alt="" className="gamerImage" />
                    <div className='RegisterSectionLeftBody'>
                        <div className='iconHeader'>
                            <img className="iconPart1" src={crescentMoon} alt="" />
                            <img className="iconPart2" src={crescentMoon} alt="" />
                            <h4>Gamers</h4>
                        </div>
                        <span>،،</span>
                        <p>I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.</p>
                        <p>Hideo Kojima</p>
                    </div>
                </div>
                <div className='RegisterSectionRight'>
                    <ToastContainer />
                    <div className='iconHeader' id="secondPageHeader">
                        <img className="iconPart1" src={crescentMoon} alt="" />
                        <img className="iconPart2" src={crescentMoon} alt="" />
                        <h4>Gamers</h4>
                    </div>
                    <p className='backButton' onClick={this.props.changeActive}>&#x2039;  Back</p>
                    <HeaderPage secondaryHeader={'For the purpose of gamers regulation, your details are required.'} mainHeader={'Register Individual Account!'} />
                    <form>
                        <CustomInput
                            onChange={this.onChangeEmail}
                            value={this.state.userEmail}
                            label={"Email address"}
                            required
                            bestValueLength={20}
                            minValueLength={1}
                        />

                        <CustomInput
                            onChange={this.onChangePassword}
                            value={this.state.userPassword}
                            label={"Create Password"}
                            bestValueLength={15}
                            minValueLength={8}
                            required
                            type={'password'}
                            alwaysHideMetter={false}
                            hideLine={false}
                        />

                        <CustomInput
                            onChange={this.onChangePasswordConfirm}
                            value={this.state.userPasswordConfirm}
                            label={"Repeat password"}
                            bestValueLength={15}
                            minValueLength={8}
                            required
                            type={'password'}
                            alwaysHideMetter={true}
                        />

                        <CustomRadius checked={this.state.termsChecked} onClick={this.onChangeCheck} />
                        <CustomButton onClick={this.registerPost} text={"Register Account"} />
                        <OrLine />
                        <CustomButton text={"login"} type />
                    </form>
                </div>
            </div>
        )
    }
}
