import { StayPreview } from './stay-preview.jsx'



export function StayList({ onRemove, toys }) {

    return <div className="stay-list">
        {toys.map(toy => <StayPreview key={stay.id} stay={stay} />)}
    </div>

}