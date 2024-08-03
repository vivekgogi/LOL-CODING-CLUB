import React, { useState } from "react";
import "./Events.css";

import EventCard from "./EventCard";
import ComingSoon from "../../images/ComingSoon.png";
// import BlockchainBlitz from "../../images/events/BlockchainBlitz.png";

function UpcomingEvents() {
  const [upcomingEvents] = useState([
    {
      image: ComingSoon,
      datetime: "",
      title: "",
      action: "Coming soon",
      registrationform: ""
    },
    // {
    //   image: BlockchainBlitz,
    //   datetime: "24 Feb 2024",
    //   title: "Blockchain Blitz Workshop",
    //   action: "Register",
    //   registrationform: "https://forms.gle/L1X9ByWhNwGPuxB7A",
    // },
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