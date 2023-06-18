import React, { useState } from 'react';
import axios from 'axios';

const CheckmarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#34d399" width="24px" height="24px">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 16.17l-4.17-4.17-1.42 1.41L9 19 21.07 6.93l-1.42-1.41L9 16.17z" />
  </svg>
);

const Stats = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with the name and email data
    const formData = {
      name,
      email,
    };

    // Send the data to the backend server
    axios
      .post('http://localhost:3000/api/subscribe', formData)
      .then((response) => {
        console.log('Data sent successfully:', response.data);
        // Reset the form
        setName('');
        setEmail('');
        setIsSubscribed(true);
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };

  return (
    <section className="flexCenter flex-row flex-wrap sm:mb-20 mb-6">
      <div style={{ marginTop: '100px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className="font-poppins font-semibold text-4xl text-white">
          Subscribe to our Email List
          <br className="sm:block hidden" />{' '}
        </h1>
        <p className="font-poppins text-sm text-gray-500" style={{ marginTop: '10px' }}>
          To receive updates on our latest feature releases, news, and community.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleNameChange}
            className="bubble-input"
            style={{ marginRight: '10px', borderRadius: '999px', padding: '8px', width: '200px' }}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
            className="bubble-input"
            style={{ marginRight: '10px', borderRadius: '999px', padding: '8px', width: '200px' }}
          />
          {isSubscribed ? (
            <CheckmarkIcon />
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              className="py-2 px-4 font-poppins font-medium text-[14px] text-primary bg-blue-gradient rounded-[7px] outline-none"
            >
              Subscribe
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Stats;
