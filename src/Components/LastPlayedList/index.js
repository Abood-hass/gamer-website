import React, { Component } from 'react'
import LastPlayedItem from './LastPlayedItem'
import './style.css'

export default class index extends Component {
    LastPlayedItems = [
        {
            gameImage: 'https://s3-alpha-sig.figma.com/img/5500/c6b9/eb566291dd3131dde450d446c2b7913f?Expires=1673222400&Signature=h2ESKCAyUAP0kWkwXjPJDNCn4AzJem-4JODkl~tqkGp9TCvqdh4cszR7lIettPWwJzWxbYSbXdQ~uTzZZSGr1T0Ig1VLi6H1NSVH~4SSUJ70yzmoXD4uVrvLOQ4U9TPQg-AFxzel0eyN-MyGXq8gsSQF-gJ8EJB8eeFMF4qaz-ju9r7ixxiPNyBh2ZUM~806vqa5GloM3N0iMsK3eS2x1QlsiJOmvPMmcQ4XG84plSKxgJlikSDiF2ZcB~Ov6IxMIDY0uH2ru2GrjlYBkHgng5nPqZW6u6woTbahiCJtvXHoynJfcC-IEB4V8QGXKGVzTVb1LpA9-rb1UncvPYGoUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            gameTitle: "Hogwarts Legacy",
            progress: 50
        },
        {
            gameImage: "https://s3-alpha-sig.figma.com/img/622b/e09d/340d60e824aff655139ae847262f64d7?Expires=1673222400&Signature=Im~Q4~DSvBGUKMu1kZ7zj-EB4YmHZE1Ur47tYLUpHFi1njZhriyKZ06SEJSSqYCsQh8WdFfdJuRYRl2lkJUbHTVrLRbHPgmzuMlYu~ShoGECQxKMBNi2nv86Y0hCi1Rn3iPKme1lK36OI-GfUMiT3VMg3TOMY5dXaH0l2bdCS8rw8wfTr7-wxRK9vwfxee03xjsNmydlDmOugx~ADHO8jt7QkWsF2BIZzsm8v2EgJqPG73WzFIsZtiE9oixQk4gTBAKaUMvmkIgWUiK220Ne6EK-m1lt5ffOmjlrQSYP2G0hpcZPCMXvqOIeh1CdSwGaLw00IPk76K84m~YIkNxm0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            gameTitle: "God Of War: Ragnarök",
            progress: 72.2
        }, {
            gameImage: "https://s3-alpha-sig.figma.com/img/6569/8aa7/08372f6cf4e7459dd018c671b3773bd3?Expires=1673222400&Signature=h0rmbdf1b70Cw1goQhp9AKgQohvk-Xu8xKV645siwguc8PNs5J0NqMoH3P-iH9aQdX1jCoIchR5Dms~q8qBl4ezr0jdWuabEKyDY1KfNaycp5oIuI-Xq~auJlst1yNmHuN2fnNvREgsOn6UgdS~5pI72nru6J-w3zm5HXKMvqV2ob1ymEPDIcfwDoj0R9eVr15pZjpikhMhO65mj73SnxquroSJOg8lGF2ZkgNLWHWkPrRpT~nwgbJMnrp2mlZrABKR7FHVWcPfWvBETDpF5ozddZ5yqlYSw~6XjSLU1iqpQo-x~m1Nni4LA7oWdzw7Fm1ou2lZNblj9VFcxwOHmWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            gameTitle: "Crash Bandicoot N. Sane Trilogy",
            progress: 34
        }, {
            gameImage: "https://s3-alpha-sig.figma.com/img/24f5/08e4/9c9a73382d962e060295f5dca35ffef3?Expires=1673222400&Signature=gmAqBlBbloTxc4bDRMoEJ0ejnqPHtVH4Q7toOwDZGnOBzPQBljA3iShH-RP7HysfakgOzSVpZPRND6FGLHW0D5p9Y8ByprKAggiJej1itxQ6tWedG5f4wLyECvdcnU1U2x6oeWaf5KNGKodJI4TnccdTXSejXi3nIFo1T7lIVx~wrbLTtsMrsybJbM9AT8t18c8GvgJqKuowg8Lkoxs~pqc5ZV9v9bgv9~ofoc-5EVhDIihf4uCn~plyVminGgI~DROTeUFtThrZhT5K552AMHP0mahFdZ9nhGCOeD9w4gHWWkZKe2OsQUijLUJagrJigS4wRoNseO4uB8Q7YPB52g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            gameTitle: "Dying Light 2 Stay Human",
            progress: 100
        }
    ]

    render() {
        return (
            <div className='LastPlayedContainer'>
                <p>last played</p>
                <div>
                    {this.LastPlayedItems.map((game, index) =>
                        <LastPlayedItem {...game} key={index} />)}
                </div>
            </div>
        )
    }
}
