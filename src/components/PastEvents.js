import React, { useState } from "react";
import CodingContest from "../images/events/CodingContest.jpeg";
import codingcomp from "../images/events/codingcomp.jpg";
import threejs from "../images/events/3js.png";
import powerBI from "../images/events/LOLPowerBIWorkshop.png";
import flutterworkshop from "../images/events/flutterworkshop.jpg";
import EventCard from "../components/EventCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function PastEvents() {
  const [upcomingEvents] = useState([
    {
      image: powerBI,
      datetime: "October, 2023",
      title: "Power BI Workshop and Hackathon",
      action: "View event",
    },
    {
      image: CodingContest,
      datetime: "September, 2023",
      title: "Coding Contest Sept 2023",
      action: "View event",
    },
    {
      image: threejs,
      datetime: "March, 2022",
      title: "Three JS Workshop",
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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div id="events" className="events-content">
        <div className="section-heading">
          <h1>Past Events</h1>
        </div>

        {/* <div className="events-type-description">
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
        </div> */}


        <div className="caraousel">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            showDots={true}
            rewind={true}
            rewindWithAnimation={true}
          >
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.date}
                image={event.image}
                datetime={event.datetime}
                title={event.title}
                action={event.action}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default PastEvents;
