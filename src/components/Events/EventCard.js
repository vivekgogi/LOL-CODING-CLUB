function EventCard(props) {
  return (
    <>
      {/* <div className="card" data-aos="slide-up" data-aos-duration="2500"> */}
      <div className="card" data-aos="slide-up" data-aos-duration="1500">
        <img src={props.image} alt="Event" />
        <div className="container">
          <p>{props.datetime}</p>
          <h4>{props.title}</h4>
          <button className="action-btn">
            <a
              href={props.registrationform}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.action}
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default EventCard;
