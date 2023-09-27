import React from "react";

function ProfileCard({ image, name, designation, linkedin }) {
  return (
    <>
      <div className="profile" data-aos="slide-up" data-aos-duration="1500">
        <div className="profile-photo">
          <img src={image} alt={name} />
        </div>

        <div className="profile-info">
          <h3 className="title">{name}</h3>
          <p className="designation">{designation}</p>
        </div>

        <ul className="social-icons">
          <li>
            <a href={linkedin} target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProfileCard;
