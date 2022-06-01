import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export const DashBoard = () => {

    const [subjectClass, changeActiveClass] = useState('subject')

    const changeCurrentSubject = () => {
        changeActiveClass('subject active')
    }





    return (
        <main className="main-hostpage">
            <section className="dashboard">
                <div className="subjects">

                    <div onClick={() => changeCurrentSubject()} className={subjectClass}>
                        <span>Charts</span>
                    </div>
                    <div className='subject active'>
                        <span> Applications</span>
                    </div>
                    <div className='subject'>
                        <span>BlaBla</span>
                    </div>
                </div>

                <div className="data"></div>

            </section >
        </main >
    );
};
