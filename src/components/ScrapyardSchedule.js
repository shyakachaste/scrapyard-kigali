import React from 'react';
import '../styles/ScrapyardSchedule.css';

const ScrapyardSchedule = () => {
  const scheduleItems = [
    { time: '8:00 AM – 8:40 AM', activity: 'Doors open & Registration' },
    { time: '8:40 AM – 9:20 AM', activity: 'Breakfast' },
    { time: '9:20 AM – 9:50 AM', activity: 'Team formation & Discussion' },
    { time: '9:50 AM – 10:20 AM', activity: 'Opening ceremony & Theme reveal' },
    { time: '10:20 AM – 12:20 PM', activity: 'Coding session #1 & workshop' },
    { time: '12:20 PM – 13:10 PM', activity: 'Lunch break' },
    { time: '13:10 PM – 16:40 PM', activity: 'Coding session #2' },
    { time: '16:40 PM – 17:00 PM', activity: 'Evening Fun & Social Hour' },
    { time: '17:00 PM – 18:10 PM', activity: 'Coding session #3 & Submission' },
    { time: '18:10 PM – 19:00 PM', activity: 'Judging & Lightning Talks by mentors' },
    { time: '19:00 PM – 19:50 PM', activity: 'Award ceremony & dinner' },
    { time: '19:50 PM – 20:00 PM', activity: 'Closing ceremony' }
  ];

  return (
    <div className="schedule-container">
      <h1 className="schedule-title">Schedule</h1>
      <div className="schedule-list">
        {scheduleItems.map((item, index) => (
          <div key={index} className="schedule-item">
            <div className="time">{item.time}</div>
            <div className="activity">{item.activity}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrapyardSchedule;
