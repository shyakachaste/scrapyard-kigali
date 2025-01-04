import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import '../styles/TeamSection.css';
import image1 from '../assets/team/aiman.jpg';
import image2 from '../assets/team/chaste.jpg';
import image4 from '../assets/team/yvan.jpg';
import image5 from '../assets/team/sano.jpg';
import image6 from '../assets/team/cadet.jpg';


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

  {
    name: 'Rukundo Yvan',
    role: 'Techinical Support',
    linkedin: 'https://www.linkedin.com/in/rukundo-yvan-4b98ab276/',
    img: image4,
  },
  {
    name: 'SANO Prince',
    role: 'Technical Support',
    linkedin: 'https://www.linkedin.com/in/sano-prince-bb494a19a/',
    img: image5,
  },
  {
    name: 'Ishimwe Cadet',
    role: 'Marketing Manager',
    linkedin: 'https://www.linkedin.com/in/ishimwe-cadet-b8ab58321/',
    img: image6,
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