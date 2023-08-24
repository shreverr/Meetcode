import React from 'react';

export default function MeetingForm() {
  const submitMeetingForm = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitMeetingForm}>
      <button className="border">new meeting</button>
      <input className="border" type="text" id="meetingcode"></input>
      <button className="border">submit</button>
    </form>
  );
}
