import React from 'react'
import { Link } from 'react-router-dom'
export function FilterIcons() {

    const arr = []

    for (var i = 1; i < 13; i++) {
        arr.push(i)
    }

    return (
        <div className="icon-filters">
            {arr.map((a) => {
                return <div><img key={a} src={require(`../assets/img/filters/${a}.jpg`)}></img></div>
            })}

        </div>
    )
}