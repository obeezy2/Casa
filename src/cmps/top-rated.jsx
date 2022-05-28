import React from 'react'
import { Link } from 'react-router-dom'
import tokyo from '../assets/img/logo/tokyo.jpg'
import capetown from '../assets/img/logo/capetown.jpg'
import telaviv from '../assets/img/logo/telaviv.jpg'
import london from '../assets/img/logo/london.webp'

export function TopRated() {

    return (
        <main className="top-rated">

            <h1 className='header-popular'>Popular Destinations</h1>

            <section className='pop-cities'>
                <div className='card'>
                    <img src={`${tokyo}`} />

                    <div className="city-details">
                        <h3 className='color-city'>Tokyo</h3>
                        <h4><span>Japan</span></h4>
                    </div>
                </div>
                <div className='card'>

                    <img src={`${capetown}`} />

                    <div className="city-details">
                        <h3 className='color-city'>Cape Town</h3>
                        <h4><span>South Africa</span></h4>
                    </div>
                </div>
                <div className='card'>

                    <img src={`${telaviv}`} />

                    <div className="city-details">
                        <h3 className='color-city'>Tel Aviv</h3>
                        <h4><span>Israel</span></h4>
                    </div>
                </div>
                <div className='card'>

                    <img src={`${london}`} />

                    <div className="city-details">
                        <h3 className='color-city'>London</h3>
                        <h4><span>UK</span></h4>
                    </div>
                </div>
            </section>
        </main>
    )
}