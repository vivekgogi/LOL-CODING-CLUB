import React, { useState } from "react";
import CodingContest from "../images/events/CodingContest.jpeg";
import codingcomp from "../images/events/codingcomp.jpg";
import flutterworkshop from "../images/events/flutterworkshop.jpg";
import EventCard from "../components/EventCard";

function PastEvents() {
  const [upcomingEvents] = useState([
    {
      image: CodingContest,
      datetime: "September, 2023",
      title: "Coding Contest Sept 2023",
      action: "View event",
    },
    {
      image: codingcomp,
      datetime: "November, 2022",
      title: "Coding Contest Nov 2022",
      action: "View event",
    },
    {
      image: flutterworkshop,
      datetime: "September 18, 2023 | 5:00 PM",
      title: "Flutter Workshop",
      action: "View event",
    },
  ]);

  return (
    <>
      <div id="events" className="events-content">
        <div className="section-heading">
          <h1>Past Events</h1>
        </div>

        <div className="events-type-description">
          <h3 data-aos="zoom-in" data-aos-duration="1000">
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
