import React from "react";

function EventCard({ image, date, title, instructor }) {
  return (
    <>
      <div className="card">
        <img src={image} alt="Event" style={{ width: "100%" }} />
        <div className="container">
          <p>{date}</p>
          <h4>{title}</h4>
          <div className="instructor-and-regbtn">
            <p>By {instructor}</p>
            <button>
              <a href="#events">Register Now</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCard;
