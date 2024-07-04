// BookingPage.jsx
import React from 'react';
import { InlineWidget } from 'react-calendly';

const BookingPage = () => {
  return (
    <div>
      <h1>Boka din Reiki behandling</h1>
      <InlineWidget url="https://calendly.com/sammie-slootman/reiki-behandling-60-min" />
    </div>
  );
};

export default BookingPage;
