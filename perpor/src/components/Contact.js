// src/components/Contact.js
import React from 'react';

const Contact = () => {
  const email = "noelle.fontanar@ciit.edu.ph"; // Replace with your actual email

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>
      💻Email: <a href={`mailto:${email}`}>{email}</a>
      💻</p>
      <p>
      💻 Feel free to reach out if you have any questions or just want to connect!💻
      </p>
    </div>
  );
};

export default Contact;