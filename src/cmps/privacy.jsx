import privacyImg from '../assets/img/hero/airbnb-privacy.jpeg'

export function Privacy() {


    return (
        <div className="privacy-content">
            <h4 className="legal-terms">Legal Terms</h4>
            <h1 className="casa-privacy">Casa Privacy</h1>
            <img src={privacyImg}></img>

            <div className='policy'>
                <h1>Privacy Policy</h1>
                <p>Our Privacy Policy explains what personal information we collect, how we use personal information,<br></br> how personal information is shared, and privacy rights.

                </p>
            </div>
        </div>
    )

}