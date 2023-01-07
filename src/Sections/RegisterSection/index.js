import React, { Component } from 'react'
import gamerImage from '../../assest/images/gamerImage.jfif'
import CustomInput from '../../Components/CustomInput'
import HeaderPage from '../../Components/HeaderPage'
import OrLine from '../../Components/OrLine'
import CustomButton from '../../Components/CustomButton'
import CustomRadius from '../../Components/CustomRadius'
import crescentMoon from '../../assest/images/white-crescent-moon-50.png'
import * as yup from 'yup';
import PopupWindow from '../../Components/PopupWindow'
import './style.css'
import { Link } from 'react-router-dom'

export default class index extends Component {
    state = {
        termsChecked: false,
        userEmail: "",
        userName: "",
        userPassword: "",
        userPasswordConfirm: "",
        popMsg: {
            hidden: true,
            errMsg: "",
            alert: "Done",
            headerStyle: "green"
        },
        data: []

    }


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


    async componentDidMount() {
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => this.setState({ data }));
    }
    onChangeEmail = (e) => {
        this.setState({ userEmail: e.target.value })
    }

    onChangeName = (e) => {
        this.setState({ userName: e.target.value })
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


    onHideMsg = () => {
        this.setState({ popMsg: { hidden: true } })
    }

    setPopMsg = (errMsg, headerStyle, alert) => {
        this.setState({ popMsg: { errMsg, hidden: false, headerStyle, alert } })
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
        ).then(_ => {
            if (this.state.data.find(user => user.email === this.state.userEmail)) {
                this.setPopMsg("There is User already with this Info")
            } else {
                window.localStorage.setItem("user-email", this.state.userEmail)
                window.localStorage.setItem("user-password", this.state.userPassword)
                this.props.navigate('/mainPage', { state: { userName: this.state.userName } })
            }
        }
        ).catch(err => {
            this.setPopMsg(err.errors.join(" ,"))
        })
    }

    render() {
        return (
            <div className='RegisterSection'>
                <PopupWindow hidden={this.state.popMsg.hidden} headerStyle={this.state.popMsg.headerStyle} onClick={this.onHideMsg} header={this.state.popMsg.alert} body={this.state.popMsg.errMsg} />


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
                    <div className='iconHeader' id="secondPageHeader">
                        <img className="iconPart1" src={crescentMoon} alt="" />
                        <img className="iconPart2" src={crescentMoon} alt="" />
                        <h4>Gamers</h4>
                    </div>
                    <Link className='backButton' to={'/'}>&#x2039;  Back</Link>
                    <HeaderPage secondaryHeader={'For the purpose of gamers regulation, your details are required.'} mainHeader={'Register Individual Account!'} />
                    <form>

                        <CustomInput
                            onChange={this.onChangeName}
                            value={this.state.userName}
                            label={"User Name"}
                            required
                            bestValueLength={5}
                            minValueLength={5}
                        />
                        <CustomInput
                            onChange={this.onChangeEmail}
                            value={this.state.userEmail}
                            label={"Email address"}
                            required
                            bestValueLength={20}
                            minValueLength={1}
                            type={'email'}
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
                        <div className='Buttons'>
                            <CustomRadius checked={this.state.termsChecked} onClick={this.onChangeCheck} />
                            <CustomButton onClick={this.registerPost} text={"Register Account"} />
                            <OrLine />
                            <CustomButton text={"login"} type />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
