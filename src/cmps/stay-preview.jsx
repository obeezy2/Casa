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
            <div className="staypreview">
                <span className='top-summary'>
                    <span className="stay-address">{stay.address.street} </span>
                    <span className="star-rating">{(stay.reviewScores.rating / 100) * 5}★</span>
                </span>
                <span className="stay-summary">{stay.roomType}</span>
                <p className="stay-pricenight"><span className="stay-price">${stay.price}</span> <span className="stay-night">night</span></p>
            </div>
            {/* <Link to={`/stay/edit/${stay.id}`}>
                <div className='edit-stay-btn'></div>
            </Link> */}
        </Link>
    );
}
