import React, { Component } from 'react'
import './style.css'

export default class index extends Component {


    state = {
        lineMetter: 0,
        showPassword: false,
        hideMetter: this.props.hideMetter || true,
        alwaysHideMetter: this.props.alwaysHideMetter,
        hideLine: this.props.hideLine || true,
    }

    showHidePassword = () => {
        this.setState({ showPassword: !this.state.showPassword })
    }

    valueLengthMetter = (event) => {
        try {

            this.props?.onChange(event)

            this.setState({
                lineMetter: ((event.target.value.length >= this.props.bestValueLength) ? (100) :
                    ((event.target.value.length >= this.props.minValueLength * (2)) ? (70) :
                        (((event.target.value.length >= this.props.minValueLength) ? (30) : (0)
                        ))
                    ))
                , hideMetter: false
            })

            this.props.onChangeState((event.target.value.length >= this.props.minValueLength))

        } catch (error) {

        }
    }


    render() {
        return (
            <div className='CustomInputConatiner'
            >   <span className='CustomInputLabel'>{this.props.label}</span><span className='CustomInputLabel'>{this.props.required && ("*")}</span>


                {this.props.type === "password" && (<span onClick={this.showHidePassword} className="material-symbols-outlined">
                    {(this.state.showPassword) ? ('visibility') : ('visibility_off')}
                </span>)}

                <input
                    type={this.state.showPassword ? ("text") : (this.props.type)}
                    value={this.props.value}
                    onChange={(event) => this.valueLengthMetter(event)}
                    placeholder={this.props.placeholder}
                    maxLength={parseInt(this.props?.bestValueLength + 10)}
                    required={this.props.required} />
                {(!this.state.hideMetter && !this.state.alwaysHideMetter) && <div>
                    <hr style={
                        {
                            display: (this.props.type === 'password' && this.state.hideLine) ? ('block') : ('none'),
                            background: ((this.state.lineMetter >= 100)) ? 'green' : `linear-gradient(90deg, ${(this.state.lineMetter) ? "#FFC107" : "red"} ${this.state.lineMetter}%, #C4C4C4  ${this.state.lineMetter}%)`,

                        }} />
                    <span style={{
                        color: ((this.state.lineMetter) >= 100) ? 'green' : (this.state.lineMetter >= 30 ? "" : "red")

                    }}>{(this.state.lineMetter >= 30) ? (((this.state.lineMetter) >= 100) ? "Good to Go" : (this.props.errorMessage || "not bad, but could be better")) : ("Add some letters")}</span>
                </div>}
            </div >

        )
    }
}

