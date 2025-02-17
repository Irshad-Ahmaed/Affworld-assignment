import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../stores/authStore';

const Login = () => {
  const { error, login, forgotPassword } = useAuthStore();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const prod = import.meta.env.VITE_PRODUCTION;
  
  const handleLogin = () => {
    window.open('https://affworld-assignment-theta.vercel.app/api/auth/google', '_self');
  };

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const loginWithForm = (e)=>{
    e.preventDefault();
    login(formData.email, formData.password);
  }

  const handleToForgotPass = () =>{
    console.log("email", formData.email);
    forgotPassword(formData.email);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form className='py-5' onSubmit={loginWithForm}>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            className="w-full border border-gray-300 p-2 mb-4 rounded"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            className="w-full border border-gray-300 p-2 mb-2 rounded"
            onChange={handleChange}
            required
          />

          <span 
            onClick={handleToForgotPass}
            className='hover:underline text-sm text-gray-500 hover:font-semibold cursor-pointer'>
            Forgot password?
          </span>

          <button
            type="submit"
            className="w-full bg-gray-500 mt-2 text-white py-2 rounded hover:bg-gray-600 cursor-pointer"
          >
            Login
          </button>
        </form>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          Login with Google
        </button>
        <p className="mt-4 text-center">
          Don't have an account? <Link to="/register" className="text-blue-500">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
