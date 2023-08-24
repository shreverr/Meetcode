import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="absolute top-0 w-full h-14 border flex justify-between items-center p-2">
      <div className="text-xl font-semibold">
        Meetcode
      </div>
      <Link to="/login" className="border p-2 rounded-md">Login</Link>
    </nav>
  );
}
