import { StayPreview } from "./stay-preview.jsx";
import React from "react";
export function StayList({stays}) {
  if (!stays) {
    return (
      <div className="stay-list-container">
        <h1>No Stays found</h1>
      </div>
    );
  }

  return (
    <div className="stay-list-container">
      {stays.map((stay) => (
        <StayPreview key={stay._id} stay={stay} />
      ))}
    </div>
  );
}
