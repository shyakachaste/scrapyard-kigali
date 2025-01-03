import React from 'react';
import '../styles/FAQ.css';
import decorativeLine from '../assets/blue-underline.svg'; 

const FAQ = () => {
  const faqData = [
    {
      question: "What is Scrapyard?",
      answer:
        "Scrapyard is a global hackathon running in Los Angeles and 100+ other cities by high schoolers (like Counterspell) with a “scrappy” theme of stupid inventions! It’s organized by Hack Club, a 501(c)(3) nonprofit that supports a global community of 48k high school makers."
    },
    {
      question: "Who can participate in Scrapyard?",
      answer:
        "All high-school & upper-middle-school aged students are welcome to come! You don't have to be a member of the Hack Club community or be a Hack Club leader."
    },
    {
      question: "All this, for free?",
      answer:
        "Yes, everything is free! Food, snacks, and swag are all included, so you can just enjoy the event without worrying about costs."
    },
    {
      question: "What do I need?",
      answer:
        "Scrapyard is open to high school students around the world who are passionate about making and hacking."
    },
    {
      question: "I’m not good at coding. Can I still participate?",
      answer:
        "This hackathon is for creatives of all skill levels! We'll have workshops and other events so join us and let's learn together. If you'd like to start exploring some introductory projects, check out Hack Club Workshops."
    },
    {
      question: "What can I make at Scrapyard?",
      answer:
        "The scrappiest thing you can imagine –- jank is encouraged. Games? Apps? Websites? Programming languages? Hardware? You name it! We’ll have a bunch of resources and mentors to help you out."
    }
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">
        Frequently Asked Questions
        <img src={decorativeLine} alt="decorative line" className="faq-title-line" />
      </h2>
      <p className="faq-subtitle">Got questions? Look here first! If you need more help, feel free to <a href="mailto:sadd@kigalihacks.live" target="_blank" rel="noopener noreferrer">reach out via email</a>!</p>
      <div className="faq-grid">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{item.question}</h3>
            <p className="faq-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
