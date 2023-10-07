import React, { useState } from "react";
import ComingSoon from "../images/ComingSoon.png";
import LOLPowerBIWorkshop from "../images/events/LOLPowerBIWorkshop.png";
import EventCard from "../components/EventCard";

function UpcomingEvents() {
  const [upcomingEvents] = useState([
    {
      image: LOLPowerBIWorkshop,
      datetime: "October 9, 2023 | 4:30 PM",
      title: "Power BI Workshop",
      action: "Register Now",
      registrationform: "https://forms.gle/2DZtRSVfKen122yM8"
    },
  ]);

  return (
    <>
      <div id="events" className="events-content">
        <div className="section-heading">
          <h1>Upcoming Events</h1>
        </div>

        <div className="events-type-description">
          <h3 data-aos="zoom-in" data-aos-duration="1000">
            Our upcoming events are packed with opportunities for growth and
            learning! Mark your calendar for the exciting events!
          </h3>
        </div>

        <div className="events-card-container">
          {upcomingEvents.map((event) => (
            <EventCard
              key={event.date}
              image={event.image}
              datetime={event.datetime}
              title={event.title}
              action={event.action}
              registrationform={event.registrationform}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default UpcomingEvents;
