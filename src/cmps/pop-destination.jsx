import React from 'react'
import { Link } from 'react-router-dom'
import tokyo from '../assets/img/logo/tokyo.jpg'
import capetown from '../assets/img/logo/capetown.jpg'
import telaviv from '../assets/img/logo/telaviv.jpg'
import london from '../assets/img/logo/london.webp'
import { useNavigate } from 'react-router-dom'
export function PopDestination() {
    let navigate = useNavigate()

    function onSetFilter() {
        navigate('/stays')
    }



    return (
        <main className="pop-cities-gallery">

            <h1 className='header-popular'>Popular Destinations</h1>

            <section className='pop-cities'>
                <div className='card' onClick={() => onSetFilter()}>
                    <img src={tokyo} />

                    <div className="city-details">
                        <h3 className='color-city'>Tokyo  <span>Japan</span></h3>

                    </div>
                </div>
                <div className='card' onClick={() => onSetFilter()}>

                    <img src={capetown} />

                    <div className="city-details">
                        <h3 className='color-city'>Cape Town <span>South Africa</span></h3>
                    </div>
                </div>
                <div className='card' onClick={() => onSetFilter()}>

                    <img src={telaviv} />

                    <div className="city-details">
                        <h3 className='color-city'>Tel Aviv <span>Israel</span></h3>
                    </div>
                </div>
                <div className='card ' onClick={() => onSetFilter()}>

                    <img src={london} />

                    <div className="city-details">
                        <h3 className='color-city'>London <span>UK</span></h3>

                    </div>
                </div>
            </section>
        </main>
    )
}