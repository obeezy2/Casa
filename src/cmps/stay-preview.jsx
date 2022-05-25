
import { Link } from "react-router-dom"

export function StayPreview({ stay }) {
    return <div className="stay-preview">
        <div className="stay-img-container">
        </div>
        <h2 className='stay-name'>{stay.name}</h2>
        <p className="stay-price">${stay}</p>
        <div className="preview-buttons">
            <Link to={`/stay/edit/${stay.id}`}>
                <div className='edit-stay-btn'></div>
            </Link>
            <Link to={`/stay/details/${stay.id}`}>
                <div className='details-stay-btn'></div>
            </Link>
        </div>
    </div>
}

