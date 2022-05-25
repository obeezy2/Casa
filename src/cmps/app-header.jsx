
import { NavLink as Link } from "react-router-dom";


import logoImg from '../assets/img/logo/new-logo.svg'
import { StayFilter } from './stay-filter.jsx'
export function AppHeader() {

    return (<header className="app-header">
        <div className="search-bar">  < StayFilter />
        </div>
        <Link className='explore' to="/stays">Explore</Link>

        <Link className='host' to="/">Become a Host</Link>
        <Link className='user' to="/">User</Link>
        <div className="logo">
            <img className="img-logo" src={`${logoImg}`}></img>
            <Link to='/'> <h1 className="text">casa    </h1></Link>

        </div>
    </header >)


}