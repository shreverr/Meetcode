import React from 'react';
import NavBar from '../components/NavBar';
import MeetingForm from '../components/MeetingForm';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-14 container">
        <p>Where you can code on the go</p>
        <MeetingForm />
      </main>
    </>
  );
}
