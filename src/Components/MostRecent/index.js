import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import MostRecentCard from './MostRecentCard'
import 'swiper/css';
import './style.css'
import { Autoplay, Navigation, Pagination } from 'swiper';

import harrypoterjfif from '../../assest/images/harrypoter.jfif'
import crush from '../../assest/images/crush.jfif'
import dyinglight2 from '../../assest/images/dyinglight2.jfif'
import godofwar from '../../assest/images/godofwar.jfif'

export default class index extends Component {
    RecentData = [
        {
            gameImage: harrypoterjfif,
            gameTitle: "Hogwarts Legacy",
            gameRecentPlayInfo: {
                time: 10,
                unit: 'Hours'
            }
        },
        {
            gameImage: godofwar,
            gameTitle: "God Of War: Ragnarök",
            gameRecentPlayInfo: {
                time: 2.5,
                unit: 'Hours'
            }
        }, {
            gameImage: crush,
            gameTitle: "Crash Bandicoot N. Sane Trilogy",
            gameRecentPlayInfo: {
                time: 1,
                unit: 'Day'
            }
        }, {
            gameImage: dyinglight2,
            gameTitle: "Dying Light 2 Stay Human",
            gameRecentPlayInfo: {
                time: 30,
                unit: 'Mins'
            }
        }
    ]
    render() {
        return (
            <div className='MostRecentContainer'>
                <p>most recent trophy</p>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    style={{ userSelect: 'none', }}
                >
                    {this.RecentData.map((item, index) => {
                        return (
                            <SwiperSlide>
                                <MostRecentCard key={index} {...item} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        )
    }
}
