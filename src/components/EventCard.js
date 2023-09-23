import React from "react";

function EventCard({ image, datetime, title, action }) {
  return (
    <>
      <div className="card">
        <img src={image} alt="Event" />
        <div className="container">
          <p>{datetime}</p>
          <h4>{title}</h4>
          <button className="action-btn">
            <a href="#events">{action}</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default EventCard;
