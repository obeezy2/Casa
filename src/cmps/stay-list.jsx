import { StayPreview } from './stay-preview.jsx'



export function StayList({ onRemove, stays }) {

    return <div className="stay-list">
        {stays.map(stay => <StayPreview key={stay.id} stay={stay} />)}
    </div>

}