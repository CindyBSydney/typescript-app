// Signup.tsx
import React, { useState } from 'react';

const Signup = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const saveFields = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        id="firstName"
        type="text"
        name="firstName"
        value={form.firstName}
        onChange={saveFields}
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        type="text"
        name="lastName"
        value={form.lastName}
        onChange={saveFields}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        name="email"
        value={form.email}
        onChange={saveFields}
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        name="password"
        value={form.password}
        onChange={saveFields}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
