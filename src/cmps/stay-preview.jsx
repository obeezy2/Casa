
import { Link } from "react-router-dom"

export function StayPreview({ stay, remove }) {
    return <div className="stay-preview">
        <div className="stay-img-container">
        </div>
        <h2 className='stay-name'>{stay.name}</h2>
        <p className="stay-price">${stay.price}</p>
        <div className="preview-buttons">
            <div onClick={() => remove(stay.id)} className='remove-stay-btn'></div>
            <Link to={`/stay/edit/${stay._id}`}>
                <div className='edit-stay-btn'></div>
            </Link>
            <Link to={`/stay/details/${stay._id}`}>
                <div className='details-stay-btn'></div>
            </Link>
        </div>
    </div>
}

