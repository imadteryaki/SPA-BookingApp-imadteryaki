import React, { useState } from 'react';
import './MailList.scss';

export const MailList = ({ className, ...props }) => {
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform any additional logic here, such as sending the form data to a server
    setEmail('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className={`MailList ${className !== undefined ? className : ''}`}>
      <div className="mailContainer">
        <h2 className="mailTitle">Save time, save money</h2>
        <span className="mailDesc">Sign up and we'll send the best deals to you</span>
        <form className="mailInputContainer" onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};
