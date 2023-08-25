import React, { useState } from 'react';
import { joinMeeting, newMeeting } from '../services/meetingService';

export default function MeetingForm() {
  const [meetingId, setMeetingId] = useState('');

  const handleInput = (event) => {
    setMeetingId(event.target.value);
  };

  const submitMeetingForm = (event) => {
    event.preventDefault();
    joinMeeting(meetingId);
  };

  return (
    <form onSubmit={submitMeetingForm}>
      <button className="border" type="button" onClick={newMeeting}>new meeting</button>
      <input className="border" type="text" id="meetingcode" value={meetingId} onChange={handleInput} />
      <button type="submit" className="border">join meeting</button>
    </form>
  );
}
