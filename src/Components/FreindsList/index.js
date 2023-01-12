import React, { Component } from 'react'
import './style.css'

export default class index extends Component {
    freinds = [
        {
            ref: "https://www.google.com/search?rlz=1C1PNBB_enPS1017PS1017&sxsrf=AJOqlzXRCCMmW68h2nf3nJX4y6ibNtTemw:1673084986287&q=Jonathan+Banks&stick=H4sIAAAAAAAAAONgFuLSz9U3ME4xNqmwUOIEsU3zSgrStcSyk630S8qAKL6gKD-9KDHXKjmxuGQRK59Xfl5iSUZinoJTYl52MQBdry04QgAAAA&sa=X&ved=2ahUKEwidlKWil7X8AhWz9LsIHZVkBFkQ9OUBegQIERAQ&biw=1536&bih=731&dpr=1.25#imgrc=CwjQ-jN1AGrp7M",
            image: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSvIg-10BlZgUjMP7vNfH0d78yfgrH7vCxiBhgOIRBY2DTYNyfslGTZobTaOayL41pVg6Mxvb4y1tVNPwI"
        }, {
            ref: "https://www.google.com/search?rlz=1C1PNBB_enPS1017PS1017&sxsrf=AJOqlzWO93lIVOgQ-aP1BuPAaTZd8dffjQ:1673086391991&q=Dean+Norris&stick=H4sIAAAAAAAAAONgFuLSz9U3ME4xNqmwUAKzTXJSMgortMSyk630S8qAKL6gKD-9KDHXKjmxuGQRK7dLamKegl9-UVFmMQBBjdnMQAAAAA&sa=X&ved=2ahUKEwjFxcrAnLX8AhVmyLsIHWKRBsQQ9OUBegQIERAI&biw=1536&bih=731&dpr=1.25#imgrc=YYvvn7tHhRSxRM",
            image: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTTU9UrQWovjs5u42kc984wjjTSB2mRc0SSMrVwboE2KUj82-upbT-7kZLuRtDyuIB-EBu8nBOiDfmNRu4"
        }, {
            ref: "https://www.google.com/search?rlz=1C1PNBB_enPS1017PS1017&sxsrf=AJOqlzWO93lIVOgQ-aP1BuPAaTZd8dffjQ:1673086391991&q=Bryan+Cranston&stick=H4sIAAAAAAAAAONgFuLSz9U3ME4xNqmwUOIEsU3T8nIstcSyk630S8qAKL6gKD-9KDHXKjmxuGQRK59TUWVinoJzUWJecUl-HgBmx3TxQgAAAA&sa=X&ved=2ahUKEwjFxcrAnLX8AhVmyLsIHWKRBsQQ9OUBegQIERAC&biw=1536&bih=731&dpr=1.25#imgrc=DvMEtrdTfK3AuM",
            image: "https://pbs.twimg.com/media/CtD9wUjWYAIszT_.jpg"
        },
    ]

    getRandomSize(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    render() {
        return (
            <div className='FriendsListContainer'>
                <p>freind list</p>
                <div className='FriendsList'>
                    {[...new Array(6)].map((line, index) => {
                        return (

                            <div key={index}>
                                {
                                    [...new Array(index === 0 ? 5 : (index === 5 ? 5 : (6)))].map((circle, index) => {
                                        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                                        let randomFreind = this.freinds[Math.floor(Math.random() * (this.freinds.length) * 4)]
                                        let size = this.getRandomSize(30, 40)
                                        let randomHigh = (randomFreind) ? size : 30
                                        let randomWidth = randomHigh
                                        return (
                                            <span style={{
                                                background: (randomFreind) ? `url(${randomFreind.image})` : `#${randomColor}`,
                                                backgroundPosition: '50% 50%', backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat', border: `1px solid ${randomColor}`,
                                                height: `${randomHigh}px`, width: `${randomWidth}px`
                                            }}
                                                onClick={_ => { window.open(randomFreind.ref, "_blank") }}
                                                className={`${(randomFreind) ? `FriendItem` : `NoHover`}`}
                                                key={index}>
                                            </span>)
                                    })}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
