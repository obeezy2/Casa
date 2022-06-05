import { Link } from "react-router-dom";
import React from "react";
import 'react-slideshow-image/dist/styles.css'
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import starIcon from '../assets/img/svgs/star.svg'
function numberWithCommas(n) {
    var parts = n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}
// import pictures from '../assets/img/houses'
export function StayPreview({ stay }) {
    // console.log(pictures)

    return (

        <Link to={`/stay/details/${stay._id}`} className="stay-preview-container">
            <div className="stay-img-container">
                <Carousel showThumbs={false} showArrows={true} showStatus={false}  >
                    <div>
                        <img src={require(`../assets/img/houses/${stay.imgUrls[0]}`)} alt="" />
                    </div>
                    <div>
                        <img src={require(`../assets/img/houses/${stay.imgUrls[1]}`)} alt="" />
                    </div>
                    <div>
                        <img src={require(`../assets/img/houses/${stay.imgUrls[2]}`)} alt="" />
                    </div>
                </Carousel>

            </div>
            <div className="staypreview">
                <span className='top-summary'>
                    <span className="stay-address">{stay.address.street} </span>
                    <span className="star-rating">{((stay.reviewScores.rating / 100).toFixed(1)) * 5} <img width='14px' src={starIcon}></img></span>
                </span>
                <span className="stay-summary">{stay.propertyType}</span>
                <span className="stay-summary">{stay.roomType}</span>
                <p className="stay-pricenight"><span className="stay-price">${numberWithCommas(stay.price)}</span> <span className="stay-night">night</span></p>
            </div>
            {/* <Link to={`/stay/edit/${stay.id}`}>
                <div className='edit-stay-btn'></div>
            </Link> */}
        </Link>
    );
}
