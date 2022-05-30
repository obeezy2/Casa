import { Link } from "react-router-dom";
import React from "react";
// import pictures from '../assets/img/houses'
export function StayPreview({ stay }) {
    // console.log(pictures)
    return (
        <Link to={`/stay/details/${stay._id}`} className="stay-preview-container">
            <div className="stay-img-container">
                <img src={require(`../assets/img/houses/${stay.imgUrls[0]}`)} alt="" />
            </div>
            <span className="stay-address">{stay.address.street}</span>
            <span className="stay-summary">{stay.summary}</span>
            <p className="stay-price">${stay.price}$/night</p>
            {/* <Link to={`/stay/edit/${stay.id}`}>
                <div className='edit-stay-btn'></div>
            </Link> */}
        </Link>
    );
}
