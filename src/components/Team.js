import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";

import AkshitaJoshi from "../images/FoundingMembers/AkshitaJoshi.jpg";
import SanyamRawaneJain from "../images/FoundingMembers/SanyamRawaneJain.jpg";
import VarunLohade from "../images/FoundingMembers/VarunLohade.jpg";
import AkarshaJain from "../images/FoundingMembers/AkarshaJain.jpg";
import ChetasRaulkar from "../images/FoundingMembers/ChetasRaulkar.png";
import DurgeshKudalkar from "../images/FoundingMembers/DurgeshKudalkar.jpg";
import RajasDaryapurkar from "../images/FoundingMembers/RajasDaryapurkar.jpg";
import PushkarKonasirasgi from "../images/FoundingMembers/PushkarKonasirasgi.JPG";
import MitaliLade from "../images/FoundingMembers/MitaliLade.jpg";

import ChinmayAnnadate from "../images/CommitteeMembers2023to2024/ChinmayAnnadate.jpg";
import LaxmiKurapati from "../images/CommitteeMembers2023to2024/LaxmiKurapati.jpg";
import VivekGogi from "../images/CommitteeMembers2023to2024/VivekGogi.jpg";
import PratikshaKasliwal from "../images/CommitteeMembers2023to2024/PratikshaKasliwal.jpg";
import VarunPalrecha from "../images/CommitteeMembers2023to2024/VarunPalrecha.JPG";
import YashGosavi from "../images/CommitteeMembers2023to2024/YashGosavi.jpg";
import SakshiBidwai from "../images/CommitteeMembers2023to2024/SakshiBidwai.png";
import AdityaGadekar from "../images/CommitteeMembers2023to2024/AdityaGadekar.png";
import SuneetNankani from "../images/CommitteeMembers2023to2024/SuneetNankani.jpg";
// import MitaliLade from "../images/CommitteeMembers2023to2024/LavanyaIndapure.jpg";
import SrushtiWalli from "../images/CommitteeMembers2023to2024/SrushtiWalli.jpg";
import TanmayKanhed from "../images/CommitteeMembers2023to2024/TanmayKanhed.jpeg";
import PourneemaKulkarni from "../images/CommitteeMembers2023to2024/PourneemaKulkarni.jpg";
import AbhayShankur from "../images/CommitteeMembers2023to2024/AbhayShankur.jpg";
import SiddharthJain from "../images/CommitteeMembers2023to2024/SiddharthJain.jpg";
import MrudulaLokhande from "../images/CommitteeMembers2023to2024/MrudulaLokhande.jpg";
import AryanBhandari from "../images/CommitteeMembers2023to2024/AryanBhandari.jpeg";
import OmJain from "../images/CommitteeMembers2023to2024/OmJain.jpg";
import JahnaviJain from "../images/CommitteeMembers2023to2024/JahnaviJain.jpg";
import AkashPawar from "../images/CommitteeMembers2023to2024/AkashPawar.jpg";
import TrushikaBasude from "../images/CommitteeMembers2023to2024/TrushikaBasude.jpg";
import ShrutiPawar from "../images/CommitteeMembers2023to2024/ShrutiPawar.jpeg";
import ArpitaBaraskar from "../images/CommitteeMembers2023to2024/ArpitaBaraskar.jpg";



function Team() {
  const [FoundingMembers] = useState([
    {
      name: "Akshita Joshi",
      designation: "President",
      image: AkshitaJoshi,
      linkedin: ""
    },
    {
      name: "Sanyam Rawane Jain",
      designation: "Vice President",
      image: SanyamRawaneJain,
      linkedin: ""
    },
    {
      name: "Varun Lohade",
      designation: "Secretary",
      image: VarunLohade,
      linkedin: ""
    },
    {
      name: "Akarsha Jain",
      designation: "Joint Secretary ",
      image: AkarshaJain,
      linkedin: ""
    },
    {
      name: "Chetas Raulkar",
      designation: "Treasurer",
      image: ChetasRaulkar,
      linkedin: ""
    },
    {
      name: "Durgesh Kudalkar",
      designation: "Social Media Manager",
      image: DurgeshKudalkar,
      linkedin: ""
    },
    {
      name: "Rajas Daryapurkar",
      designation: "Director",
      image: RajasDaryapurkar,
      linkedin: ""
    },
    {
      name: "Pushkar Konasirasgi",
      designation: "Director",
      image: PushkarKonasirasgi,
      linkedin: ""
    },
    {
      name: "Mitali Lade",
      designation: "Director",
      image: MitaliLade,
      linkedin: ""
    },    
  ]);

  const [CommitteeMembers2023to2024] = useState([
    {
      name: "Chinmay Annadate",
      designation: "President",
      image: ChinmayAnnadate,
      linkedin: "https://www.linkedin.com/in/chinmay-annadate-790a0a211/"
    },
    {
      name: "Laxmi Kurapati",
      designation: "Vice President",
      image: LaxmiKurapati,
      linkedin: "https://www.linkedin.com/in/laxmi-kurapati-b5a096221/"
    },
    {
      name: "Vivek Gogi",
      designation: "Secretary",
      image: VivekGogi,
      linkedin: "https://www.linkedin.com/in/vivekgogi/"
    },
    {
      name: "Pratiksha Kasliwal",
      designation: "Joint Secretary ",
      image: PratikshaKasliwal,
      linkedin: "https://www.linkedin.com/in/pratiksha-kasliwal-151707210/"
    },
    {
      name: "Varun Palrecha",
      designation: "Treasurer",
      image: VarunPalrecha,
      linkedin: "https://www.linkedin.com/in/varun-palrecha-4a0217130/"
    },
    {
      name: "Yash Gosavi",
      designation: "Social Media Manager",
      image: YashGosavi,
      linkedin: "https://www.linkedin.com/in/yash-gosavi02"
    },
    {
      name: "Sakshi Bidwai",
      designation: "Graphic Designer",
      image: SakshiBidwai,
      linkedin: "https://www.linkedin.com/in/sakshi-bidwai-a48034226"
    },
    {
      name: "Aditya Gadekar",
      designation: "Director",
      image: AdityaGadekar,
      linkedin: "https://www.linkedin.com/in/aditya-gadekar-b3246a246"
    },
    {
      name: "Suneet Nankani",
      designation: "Director",
      image: SuneetNankani,
      linkedin: "https://www.linkedin.com/in/suneet-nankani-601a851b0"
    },    
    {
      name: "Lavanya Indapure",
      designation: "Director",
      image: MitaliLade,
      linkedin: ""
    },    
    {
      name: "Srushti Walli",
      designation: "Director",
      image: SrushtiWalli,
      linkedin: "https://www.linkedin.com/in/srushti-walli-b33399239"
    },    
    {
      name: "Tanmay Kanhed",
      designation: "Director",
      image: TanmayKanhed,
      linkedin: "https://www.linkedin.com/in/tanmay-kanhed-1a2244255"
    },    
    {
      name: "Pourneema  Kulkarni ",
      designation: "Director",
      image: PourneemaKulkarni,
      linkedin: "https://www.linkedin.com/in/pourneema-kulkarni-033839247/"
    },    
    {
      name: "Abhay Shankur",
      designation: "Executive Coordinator",
      image: AbhayShankur,
      linkedin: "https://www.linkedin.com/in/abhayshankur"
    },    
    {
      name: "Siddharth Jain",
      designation: "Executive Coordinator",
      image: SiddharthJain,
      linkedin: "https://www.linkedin.com/in/siddharth-jain-530784216"
    },    
    {
      name: "Mrudula Lokhande",
      designation: "Executive Coordinator",
      image: MrudulaLokhande,
      linkedin: "https://www.linkedin.com/in/mrudula-lokhande"
    },    
    {
      name: "Aryan Bhandari",
      designation: "Student Coordinator",
      image: AryanBhandari,
      linkedin: "https://www.linkedin.com/in/aryan-bhandari-727947252"
    },    
    {
      name: "Om Jain",
      designation: "Student Coordinator",
      image: OmJain,
      linkedin: "https://www.linkedin.com/in/om-jain-67a926258"
    },    
    {
      name: "Jahnavi Jain",
      designation: "Student Coordinator",
      image: JahnaviJain,
      linkedin: "https://www.linkedin.com/in/jahnavi-jain-027681259"
    },    
    {
      name: "Akash Pawar",
      designation: "Content Writer",
      image: AkashPawar,
      linkedin: "https://www.linkedin.com/in/akash-pawar-516a74234"
    },    
    {
      name: "Trushika Basude",
      designation: "Content Writer",
      image: TrushikaBasude,
      linkedin: "https://www.linkedin.com/in/trushika-basude-230491261"
    },    
    {
      name: "Shruti Pawar",
      designation: "Graphic Designer",
      image: ShrutiPawar,
      linkedin: "https://www.linkedin.com/in/shruti-pawar-584299223"
    },    
    {
      name: "Arpita Baraskar",
      designation: "Graphic Designer",
      image: ArpitaBaraskar,
      linkedin: "https://www.linkedin.com/in/arpita-baraskar-966829259"
    },
  ]);

  return (
    <div>
      <div id="team" className="teams-content">
        <div className="section-heading">
          <h3>LOL CODING CLUB FOUNDING MEMBERS</h3>
        </div>

        <div className="profile-card-container">
          {FoundingMembers.map((member, index) => (
            <ProfileCard
              key={index}
              image={member.image}
              name={member.name}
              designation={member.designation}
              linkedin={member.linkedin}
            />
          ))}
        </div>

        <div className="section-heading">
          <h3>LOL CODING CLUB COMMITTEE 2023-24</h3>
        </div>

        <div className="profile-card-container">
          {CommitteeMembers2023to2024.map((member, index) => (
            <ProfileCard
              key={index}
              image={member.image}
              name={member.name}
              designation={member.designation}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
