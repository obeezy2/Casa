import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { stayService } from "../services/stay.service";
export const DashBoard = () => {



    const [selected, setSelected] = useState(1);
    const handleClick = (divNum) => () => {
        setSelected(divNum);
    }
    const [hostListings, setHostListings] = useState('')
    // $('subject').on('click', function () {
    //     $(this).addClass('active').siblings('div').removeClass('active');
    // });
    useEffect(() => {
        stayService.getStaysForHost('1').then(res => setHostListings(res))

    }, [])
    console.log(hostListings)
    return (
        <main className="main-hostpage">
            <section className="dashboard">
                <div className="subjects">

                    <div onClick={handleClick(1)} className={selected == 1 ? 'subject active' : 'subject'}>
                        <span>Listings</span>
                    </div>
                    <div onClick={handleClick(2)} className={selected == 2 ? 'subject active' : 'subject'}>
                        <span> Charts</span>
                    </div>
                    <div onClick={handleClick(3)} className={selected == 3 ? 'subject active' : 'subject'}>
                        <span>Add a new listing</span>
                    </div>
                </div>

                <div className="data">
                    <div className="listings">
                        {hostListings && hostListings.map((listing) => {
                            return <div className="listing">
                                <div className="name">{listing.name}</div>
                                <div className="reviews">{listing.reviews.length}</div>
                                <div className="name">{listing.price}</div>
                                <div className="name">{listing.roomType}</div>
                            </div>
                        })}
                    </div>

                </div>

            </section >
        </main >
    );
};
