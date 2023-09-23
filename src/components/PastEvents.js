import React, { useState } from "react";
import CodingContest from "../images/CodingContest.jpeg";
import EventCard from "../components/EventCard";

function PastEvents() {
  const [upcomingEvents] = useState([
    {
      image: CodingContest,
      datetime: "September 18, 2023 | 5:00 PM",
      title: "Coding Contest",
      action: "View Contest",
    },
  ]);

  return (
    <>
      <div id="events" className="events-content">
        <div className="section-heading">
          <h1>Past Events</h1>
        </div>

        <div className="events-type-description">
          <h3>
            Our past events were a treasure trove of growth and learning
            opportunities! We hope you had a chance to experience the
            excitement.
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
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default PastEvents;
