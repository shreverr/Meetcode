import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-28">Login</h1>
      <div className="border-2 p-4 rounded md border-slate-950">
        <form onSubmit={handleSubmit} className="p-4">
          <label htmlFor="email">email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border-2" />
          <br />
          <label htmlFor="password">password:</label>
          <input type="password" id="password" value={formData.password} name="password" onChange={handleChange} className="border-2" />
          <br />
          <button type="submit" className="border-2">submit</button>
        </form>
        <Link to="/register" className="border p-2 rounded-md mt-2">register</Link>
      </div>
    </main>
  );
}
