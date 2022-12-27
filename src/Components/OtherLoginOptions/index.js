import React, { Component } from 'react'
import './style.css'
import gitHubIcon from '../../assest/images/github-64.png'
import googleIcon from '../../assest/images/google-48.png'
import linkedInIcon from '../../assest/images/linkedin-48.png'
import twitterIcon from '../../assest/images/twitter-48.png'

export default class index extends Component {
    images = [
        {
            indx: 1,
            src: googleIcon
        },
        {
            indx: 2,
            src: twitterIcon
        },
        {
            indx: 3,
            src: linkedInIcon
        },
        {
            indx: 4,
            src: gitHubIcon
        }
    ]

    render() {
        return (
            <div className='LoginOptions'>
                {this.images.map((img) => {
                    return <div className='SingleLoginOption' key={img.indx}>
                        <img className='SingleLoginOptionImage' alt='' {...img} />
                    </div>
                })
                }
            </div>
        )
    }
}
