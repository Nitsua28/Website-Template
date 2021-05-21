import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards() {
    return (
        <div className='cards'>
            <h1>Card Section</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-1.jpg"
                        text="Sunrise Picture"
                        label='Sunrise Label'
                        path='/services'
                        />
                        <CardItem
                        src='images/img-2.jpg'
                        text='Bali picture'
                        label='Bali text'
                        path='/products'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src='images/img-3.jpg'
                        text='Ocean picture'
                        label='Ocean text'
                        path='/sign-up'
                        />
                        <CardItem
                        src='images/img-4.jpg'
                        text='Tennis picture'
                        label='Tennis text'
                        path='/'
                        />
                        <CardItem
                        src='images/img-5.jpg'
                        text='House picture'
                        label='House text'
                        path='/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
