import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export const DashBoard = () => {



    const [selected, setSelected] = useState(1);
    const handleClick = (divNum) => () => {
        setSelected(divNum);
    }

    // $('subject').on('click', function () {
    //     $(this).addClass('active').siblings('div').removeClass('active');
    // });



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
                        <div className="listing">Hello</div>
                        <div className="listing">Hello</div>
                        <div className="listing">Hello</div>
                        <div className="listing">Hello</div>
                        <div className="listing">Hello</div>
                        <div className="listing">Hello</div>
                        <div className="listing">Hello</div>
                        <div className="listing">Hello</div>

                        <div className="listing">Hello</div>



                    </div>

                </div>

            </section >
        </main >
    );
};
