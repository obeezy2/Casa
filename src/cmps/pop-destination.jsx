import React from 'react'

import hongkong from '../assets/img/logo/hongkong.jpg'
import rio from '../assets/img/logo/rio.jpg'
import barcelona from '../assets/img/logo/barcelona.jpg'
import newyork from '../assets/img/logo/newyork.webp'

export function PopDestination({onSetFilter}) {
    return (
        <main className="pop-cities-gallery">

            <h1 className='header-popular'>Popular Destinations</h1>

            <section className='pop-cities'>
                <div className='card' onClick={() => onSetFilter('Hong Kong')}>
                    <img src={hongkong} />

                    <div className="city-details">
                        <h3 className='color-city'>Honk Kong  <span>Honk Kong</span></h3>

                    </div>
                </div>
                <div className='card' onClick={() => onSetFilter('Rio de Janeiro')}>

                    <img src={rio} />

                    <div className="city-details">
                        <h3 className='color-city'>Rio de Janeiro <span>Brazil</span></h3>
                    </div>
                </div>
                <div className='card' onClick={() => onSetFilter('Barcelona')}>

                    <img src={barcelona} />

                    <div className="city-details">
                        <h3 className='color-city'>Barcelona <span>Spain</span></h3>
                    </div>
                </div>
                <div className='card ' onClick={() => onSetFilter('New York')}>

                    <img src={newyork} />

                    <div className="city-details">
                        <h3 className='color-city'>New York <span>United States</span></h3>

                    </div>
                </div>
            </section>
        </main>
    )
}