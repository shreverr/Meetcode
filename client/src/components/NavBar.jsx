import React from 'react';

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full h-10 border flex justify-between items-center p-2">
      <div className="text-xl font-semibold">
        Meetcode
      </div>
      <button type="submit" className="border p-1 rounded-md text-md">Login</button>
    </nav>
  );
}
