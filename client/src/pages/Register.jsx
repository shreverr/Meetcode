import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../services/userService';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser(formData);
  };

  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-28">Register</h1>
      <div className="border-2 p-4 rounded md border-slate-950">
        <form onSubmit={handleSubmit} className="p-4">
          <label htmlFor="name">name:</label>
          <input type="name" id="name" name="name" value={formData.name} onChange={handleChange} className="border-2" />
          <label htmlFor="email">email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border-2" />
          <br />
          <label htmlFor="password">password:</label>
          <input type="password" id="password" value={formData.password} name="password" onChange={handleChange} className="border-2" />
          <br />
          <button type="submit" className="border-2">submit</button>
        </form>
        <Link to="/login" className="border p-2 rounded-md mt-2">login</Link>
      </div>
    </main>
  );
}
