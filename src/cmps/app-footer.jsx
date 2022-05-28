import { Link } from "react-router-dom";

export function AppFooter() {
    return (
        <footer className="main-footer">

            <section className="footer-nav-container">
                <div className="first-block" >
                    <span>© 2022 Casa,</span>Inc.
                    <Link to="/privacy" className="privacy">Privacy</Link>
                    <span>·</span>
                    <Link to="/">Terms</Link>
                    <span>·</span>
                    <Link to="/">Sitemap</Link>
                    <span>·</span>
                    <Link to="/">Destinations</Link>

                </div>
                <div className="social-container">
                    <span>
                        <span>🌍</span>
                        <span> English (US)</span>
                        <span> $US</span>
                        <Link to="/">Support & resources</Link>

                    </span>

                </div>
            </section>
        </footer >
    )
}