import React, { Component } from 'react'
import './style.css'

export default class index extends Component {
    state = {
        checked: this.props.checked || false
    }

    UNSAFE_componentWillUpdate(nextProps) {
        if (nextProps.checked !== this.state.checked) {
            this.setState({ checked: nextProps.checked })
        }

    }

    render() {
        return (
            <div className='customRadios' onClick={this.props.onClick}>
                <span
                    style={{ backgroundColor: (this.state.checked) ? '#1565D8' : '#0000' }}
                >
                </span><span>I agree to terms & conditions</span>
            </div >
        )
    }
}
