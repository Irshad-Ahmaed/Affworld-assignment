import React from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../stores/authStore';

const Register = () => {
  const { register, error } = useAuthStore();

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    await register(name.value, email.value, password.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full border border-gray-300 p-2 mb-4 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-2 mb-4 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-2 mb-4 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
