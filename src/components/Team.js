import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";

function Team() {
  const [teamMembers] = useState([
    {
      name: "Chinmay Annadate",
      designation: "PRESIDENT",
      image: "https://avatars.githubusercontent.com/u/77448083?v=4",
    },
    {
      name: "Chinmay Annadate",
      designation: "PRESIDENT",
      image: "https://avatars.githubusercontent.com/u/77448083?v=4",
    },
    {
      name: "Chinmay Annadate",
      designation: "PRESIDENT",
      image: "https://avatars.githubusercontent.com/u/77448083?v=4",
    },
    {
      name: "Chinmay Annadate",
      designation: "PRESIDENT",
      image: "https://avatars.githubusercontent.com/u/77448083?v=4",
    },
    {
      name: "Chinmay Annadate",
      designation: "PRESIDENT",
      image: "https://avatars.githubusercontent.com/u/77448083?v=4",
    },
    {
      name: "Chinmay Annadate",
      designation: "PRESIDENT",
      image: "https://avatars.githubusercontent.com/u/77448083?v=4",
    },
    {
      name: "Chinmay Annadate",
      designation: "PRESIDENT",
      image: "https://avatars.githubusercontent.com/u/77448083?v=4",
    },
    {
      name: "Chinmay Annadate",
      designation: "PRESIDENT",
      image: "https://avatars.githubusercontent.com/u/77448083?v=4",
    },
    {
      name: "Chinmay Annadate",
      designation: "PRESIDENT",
      image: "https://avatars.githubusercontent.com/u/77448083?v=4",
    },
  ]);

  return (
    <>
      <div id="team" className="team-section">
        <div className="section-heading">
          <h1>OUR TEAM</h1>
          <p>LOL CODING CLUB COMMITTEE 2023-24</p>
        </div>

        <div className="profile-card-container">
          {teamMembers.map((member, index) => (
            <ProfileCard
              key={index}
              image={member.image}
              name={member.name}
              designation={member.designation}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;
