import { Link } from "react-router-dom";

export function AppFooter() {
    return (
        <footer className="main-footer">
            <section>

                <section className="footer-nav-container">
                    <div >
                        <div>
                            <span>© 2022 Casa, <span>Inc.</span></span>
                        </div>
                        <Link to="/">Privacy</Link>
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
                            <span>English (US)</span>
                            <span>$ US</span>
                        </span>
                        <Link to="/">Support & resources</Link>

                    </div>
                </section>
            </section>
        </footer>
    )
}