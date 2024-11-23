import React, { useState } from 'react';

const RegistrationForm = () => {
  // State to manage form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Basic validation logic
    if (!username || !email || !password) {
      setErrorMessage('All fields are required.');
      return;
    }

    // Clear error message and log form data
    setErrorMessage('');
    console.log({ username, email, password });
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
