import React, { Component } from 'react'
import NewGames from './NewGameCard'
import './style.css'

export default class index extends Component {
    NewGamesData = [
        {
            logoImage: 'https://s3-alpha-sig.figma.com/img/4e94/80c6/5cd6b8b225145f547dd1958dc01941ac?Expires=1673222400&Signature=afiyHHJSoRC34Jkt8myVSHD7~g6xa91on5w44QRsuu3sQYcPl4bqxeKyyVRtbWgqDxasbQR2NYcy6-I2xZxNpe42qDOAKdKyrDf1n0z~w42rN9bnKRrbaqPJBhNuZqqsohKP76honYoQkuIzQgb84aY3iOmRwCc2L52G4PacejFP2iO-CLZsvb6iIYqqhCu0IvQNewYZitd66dIEGwGCTJ-SyVf8pPEhWFoaK5sbvGhs6H8DU~EV9N3fvLFyuKds1pHUmHIqCg0k-cGlRrvlqay7rYO5Y-7PPSwQSwL4MKshfFx4CitwBX2hhlpA4rQzZ22R8jYEcpHVAl2PpKge7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            , imageCharacter: 'https://s3-alpha-sig.figma.com/img/1dcc/bbd3/ce25411c1f2b689bc9557527f83c05dc?Expires=1673222400&Signature=QnzSxBX-NCbUch6Ubje5zw7hZR0K3-Wh3AJrGO--U47wGU-6ts6ghF0LtlxCyx-Hxc79NDzyAE~q2qOd6IhZIfnMkUROJA-teH8ZZrBg~RpFdxUK7F8Cr0BeG-bEEFRObhh7Xws8kPHuztJyQX~i9UH2G913jWIZueZTqjr8Zxg5w0HyAKOhSyHI5DZrnGN2fNbNIOdFU3s2NKhIb8hC1lne3rrYVU~LDLj1OYVWevDXqM8JAUmCoctWEeHV2MzxejlEtoEj14vHYys3koGvMxTENVrRu1EaxYNdssbGvFvnPSM6fkJneDPrVn6Bk17uX5vhe887dxNphBqMKMSk9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            , imageBG: 'https://s3-alpha-sig.figma.com/img/d98d/5d8f/d7799d5137cbe16c82f05bf51250cda6?Expires=1673222400&Signature=fQKV8xrEp76cxOx3hSUSPTcLVTDjSxfQeOGs4gryWRUXREc8f4oiPpVCe-UsDbHeaLCz6zah2BTSNpwKfOH0v1BQPHOEEFb8t-d16nb3FzziYC~ggfLZl8f~0f1W7xtrAjfS7WiQnPQIHoBOQFUOHDlfxhXyGEXOloFVzP7QknghSg45dy1IhfIFob~i9whuhWtgt7WGU5UQtMcDcOKceN0huc9V4a8e4vm1njsrZCG1cWIYc65C-LCpB8U9g3wtSaB1gnXHCG52WVQt2OZVS72GzhZygM2Ar7ZIy--zv97ZDmrkT58-F78-hybN1Ou5IlNXzZEJci37TZcUuw6PXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            , desc: "Join in the new DLC with Kratos to learn more about him and his future."
            , gamePage: "https://www.playstation.com/en-us/games/god-of-war-ragnarok/"
        }, {
            logoImage: 'https://s3-alpha-sig.figma.com/img/8bab/ba3a/f2016467115dbcad82af2044b0129220?Expires=1673222400&Signature=i0AijFNp-AEd56nF6oUU78RNMC9BfGtzLeCCztrj~OURCdm9TepTMkxNI1719qAP8uTycpbCBXf8lDibA1t4UajiVoT0Sj2Q-25k7g07yliyuhKC9RwIKPZYvWCYCbnDJIqpPrPv74ARKHSHuDSilaYath9KTAz2qQF03W87Hy1IOPqtlfNhesI62vnZDI3BzVCRUqkrVwvO3thSXo~YHhqta2ywNYBLtv09Ye~-C827IswgynmZGwWJJrrbFAPwZbZFMq83Vtk~3urHwSoqoDL8KnaVXf-Tk8NTsqUJ2dvGjKRxE6k8MQbbKMuig57XJrcBMxKtJ4H1VEV5lWke6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            , imageCharacter: 'https://s3-alpha-sig.figma.com/img/a36c/c735/0d54ceb2d286b3d32e924541488c7570?Expires=1673222400&Signature=omo9BkW58End0~YrQKjKlxVwahYbY9pZV2TtmKRxMnv3Vw4HDJne4V5iyQTqekMTcKfFjmCuSGiV7rVNOy3V8tiBf5vekWKgCmz-5O20R4xrOGn06B2Bxtgy3YmLqaBR6c338QonirTPfck7Xgi4XdxZq2iG8uicg0pFHTBLwl2bvt6QeL3sDAGnGLSNJgTlsxy-tiB4NFkXU80MQxlwfnd4vlFK33~nnY5vQvD6rJI-fIypizBYXlL97ytTOhWOVpYA-OmY-b3m6ee2oRYkFlVk2YtH7C6cfKSKqFmEPjJTAFHuW~Tv7QHKDjRquMBGX7HKP2I4i4YHb3IIhIvJLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            , imageBG: 'https://s3-alpha-sig.figma.com/img/ce07/69f3/da3d29a64780ac3af7531c212bf7d12d?Expires=1673222400&Signature=lcgpRR5bjcIgLY~nVDkuCQqaZjwcTjF5PYsXJnM8SA-ilwnlCQVxHtyZ57TJcQXdQNoqKfov3LDjcuEtb7c6nQT7SR1yqo2lw-SBXof0zYqvYQkcDYHbC2Rq-OvGas3lW4D-clmcw76O6rnQCXz-4NVqymMhIQIBCH4j6bPSmK~13Nss0fNTWszi5J0CEVAblz4Hd8pyfegxuppJOHdbV~xdm0VT8MrlPbYBgxmSINKUHj1BUGNKNbhi1cyKaMFw3zE7tcaQf2n7V2WS~A4PWg7vOrufOL1k48YS7G-I-BKGrtx-DwpIcN1XqrLls1RUBk31EuXr5oCRTCKMo3RqfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            , desc: 'Miles Morales discovers powers from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks.'
            , gamePage: "https://store.steampowered.com/app/1817190/Marvels_SpiderMan_Miles_Morales/"
            , CardStyleType: 'CardStyle-1'
        }, {
            imageCharacter: 'https://s3-alpha-sig.figma.com/img/a750/02ed/7cf7da5648822e2be610fec2860fa4fd?Expires=1673222400&Signature=RSHzNeq9mKiOGhqLgxzSSJGa0gg8Ee-zQfrM1DSEz2sH6bXm1jG8pYua5~r0pIs5Ds3wy4bEK7M4QOlouY3~J7viD64sHVdhK-T5XiU2UXt5UBH8l3uZB3hNAl-WFyFoF1i3vPBbvcTZ2ib8ar9iAUoliu-k8zsL~CzFOddcFTG17~Nj3rNCsgpgY72425mzihOItCQD24mwCulc8pMIIAvHrY5lxtEDFjmLwXrzkXScz9kda9opdhGQEuqYIWmnLEkdlB078dsGytV~vFjcXOc5coKxeZCdwVyhsxMJ8T6upl4exIcYX5m5SMeBf27Kxpv-o0RPBcVxf5r-ymZipQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            , imageBG: 'https://s3-alpha-sig.figma.com/img/18d4/3df7/1f56c66f57388c05fe9065d3a87c6695?Expires=1673222400&Signature=LBs4138N~MQeNuaeDOnIO1r-CqeCxjpzjkj3VG4QiZosri5n1JJpaYu6dqDIPqVZ4Qis9pHkbLZrzAHjS1XVksjyjWgFOzK3NC4NiCuurriLMj0Wg6wkIc5bScFZh7XyKJxo1XtHXJOBCjZ2DRH41TQBdqrWzwcbY89xMtQAOlN6dU5iIbTvEoRV2Mf6QJt83G1m~MzEqTzK5O4mEI5rCqLZlLiQntsc-TmELtUvECKrH~PBpEhwgDyL4H9EbZoB8nMLzjNnRpZNHi2Xs53E5JbIeqsk1cvIB96WpxBsHdbFztvsOAGpnODLNkNtEQOIjSsgFygtERES8zX~E5MDWQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            , desc: 'Be part of the Suicide Squad and kill the Justice League!- Amanda Waller'
            , gamePage: "https://www.suicidesquadgame.com/en-gb"
        }
    ]
    render() {
        return (
            <div className='NewGamesSliderContainer'>
                <p>New Games</p>
                <p> </p>
                <div className='NewGamesSlider' onBlur={_ => { }}>
                    {this.NewGamesData.map((newGame, index) => <NewGames key={index} {...newGame} />)}
                    {this.NewGamesData.map((newGame, index) => <NewGames key={index} {...newGame} />)}
                </div>
            </div>
        )
    }
}
