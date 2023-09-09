import React, { useState } from "react";
import HeroRight from "../images/HeroRight.png";
import EventCard from "../components/EventCard";

function UpcomingEvents() {
  const [upcomingEvents] = useState([
    {
      image: HeroRight,
      date: "JULY 1, 2023 2:15 PM",
      title: "Git & GitHub Complete Workshop",
      instructor: "LOL Member",
    },
    {
      image: HeroRight,
      date: "JULY 1, 2023 2:15 PM",
      title: "Git & GitHub Complete Workshop",
      instructor: "LOL Member",
    },
    {
      image: HeroRight,
      date: "JULY 1, 2023 2:15 PM",
      title: "Git & GitHub Complete Workshop",
      instructor: "LOL Member",
    },
    {
      image: HeroRight,
      date: "JULY 1, 2023 2:15 PM",
      title: "Git & GitHub Complete Workshop",
      instructor: "LOL Member",
    },
  ]);

  return (
    <>
      <section id="events" className="events-content">
        <div className="section-heading">
          <h1>Upcoming Events</h1>
        </div>

        <div className="events-type-description">
          <h4>
            Our upcoming events are packed with opportunities for growth and
            learning! Mark your calendar for the exciting events!
          </h4>
          <h4 className="view-events">View All</h4>
        </div>

        <div className="events-card-container">
          {upcomingEvents.map((event) => (
            <EventCard
              key={event.date}
              image={event.image}
              date={event.date}
              title={event.title}
              instructor={event.instructor}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default UpcomingEvents;
