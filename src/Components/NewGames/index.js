import React, { Component } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import NewGames from './NewGameCard'
import { isBrowser, isMobile } from 'react-device-detect'
import './style.css'

import spidermanChar from '../../assest/images/spiderMan.png'
import supermanChar from '../../assest/images/superman.png'
import kratos from '../../assest/images/kratos.png'

import SpiderManbackground from '../../assest/images/SpiderManbackground.jfif'
import superManbackground from '../../assest/images/superManbackground.jfif'
import GoW from '../../assest/images/GoW.png'

import SpiderManIcon from '../../assest/images/SpiderManIcon.png'
import GoWIcon from '../../assest/images/GoWIcon.png'


export default class index extends Component {


    state = {
        userMobile: false
    }

    NewGamesData = [
        {
            logoImage: GoWIcon
            , imageCharacter: kratos
            , imageBG: GoW
            , desc: "Join in the new DLC with Kratos to learn more about him and his future."
            , gamePage: "https://www.playstation.com/en-us/games/god-of-war-ragnarok/"
        }, {
            logoImage: SpiderManIcon
            , imageCharacter: spidermanChar
            , imageBG: SpiderManbackground
            , desc: 'Miles Morales discovers powers from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks.'
            , gamePage: "https://store.steampowered.com/app/1817190/Marvels_SpiderMan_Miles_Morales/"
            , CardStyleType: 'CardStyle-1'
        }, {
            imageCharacter: supermanChar
            , imageBG: superManbackground
            , desc: 'Be part of the Suicide Squad and kill the Justice League!- Amanda Waller'
            , gamePage: "https://www.suicidesquadgame.com/en-gb"
        }
    ]
    render() {
        return (
            <div className='NewGamesSliderContainer'>
                <p>New Games</p>
                <Swiper
                    slidesPerView={isMobile ? 1 : (isBrowser ? 3 : 2)}
                    spaceBetween={30}
                    slidesPerGroup={isMobile ? 1 : (isBrowser ? 3 : 2)}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={`mySwiper`}
                    style={{ userSelect: 'none', maxWidth: '90vw' }}>
                    {this.NewGamesData.map((newGame, index) => <SwiperSlide style={{ overflow: 'visible' }}><NewGames key={index} {...newGame} /></SwiperSlide>)}

                </Swiper>
            </div >
        )
    }
}
