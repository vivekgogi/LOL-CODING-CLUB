import React from "react";

function ProfileCard({ image, name, designation }) {
  return (
    <>
      <div className="profile">
        <div className="profile-photo">
          <img src={image} alt={name} />
        </div>

        <div className="profile-info">
          <h3 className="title">{name}</h3>
          <p className="position">{designation}</p>
        </div>

        <ul className="social-icons">
          <li>
            <i className="fa-brands fa-linkedin"></i>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProfileCard;
