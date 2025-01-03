import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import '../styles/TeamSection.css';
import image1 from '../assets/aiman.jpg';
import image2 from '../assets/chaste.jpg';


const teamMembers = [
  {
    name: 'Aiman Sady',
    role: 'Event Organizer',
    linkedin: 'https://www.linkedin.com/in/aiman-sady-7838b8326/',
    img: image1,
  },
  {
    name: 'Shyaka Chaste',
    role: 'Event Organizer',
    linkedin: 'https://www.linkedin.com/in/shyakachaste/',
    img: image2,
  },

];

const TeamSection = () => {
  return (
    <div className="team-section">
      <h2 className="team-heading">Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.img} alt={member.name} className="team-img" />
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;