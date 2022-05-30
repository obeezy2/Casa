import React from 'react'
import { Link, useLocation } from 'react-router-dom'


export function FilterIcons() {


    const imgs = []
    const details = ['Design', 'Beach', 'Amazing Pools', 'Islands', 'National Parks', 'Cabins', 'OMG!', 'Camping', 'Tiny Homes', 'Lakefront'
        , 'Arctic', 'Amazing Views', 'Desert'

    ]
    for (var i = 1; i < 13; i++) {
        imgs.push(i)
    }

    return (
        <div className={`icon-filters`}>
            {
                imgs.map((img) => {
                    return <div className='filter-whole'><div className='center-div'><img key={img} src={require(`../assets/img/filters/${img}.jpg`)}></img></div><p className='detail-filter'>{details[img - 1]}</p></div>


                })
            }

        </div >
    )
}