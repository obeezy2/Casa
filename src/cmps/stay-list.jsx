import { StayPreview } from "./stay-preview.jsx";
import React, { useEffect } from "react";
export function StayList({ stays }) {
  useEffect(() => {
    const elDots = document.querySelectorAll('.dot')
    elDots.forEach(dot => {
      dot.addEventListener('click', handleDotClick)
    })

    return () => {
      elDots.forEach(dot => {
        dot.removeEventListener('click', handleDotClick)
      })
    }
  }, [])

  useEffect(() => {
    const elArrows = document.querySelectorAll('.control-arrow ')
    elArrows.forEach(arrow => {
      arrow.addEventListener('click', handleDotClick)
    })

    return () => {
      elArrows.forEach(arrow => {
        arrow.removeEventListener('click', handleDotClick)
      })
    }
  }, [])

  const handleDotClick = (ev) => {
    console.log(ev);
    ev.preventDefault()
  }

  return (
    <div className="stay-list-container">
      {stays.map((stay) => (
        <StayPreview key={stay._id} stay={stay} />
      ))}
    </div>
  );
}
