import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from './Inputs';
import { validateEmail } from '../utils/helper';
import { UserContext } from '../context/userContext';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';


const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!password) {
      setError('Please enter the password');
      return;
    }
    setError('');
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, { email, password });
      const { token } = response.data;
      if (token) {
        localStorage.setItem('token', token);
        updateUser(response.data);
        navigate('/dashboard');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className='w-[90vw] md:w-[400px] p-8 bg-gradient-to-br from-white to-amber-50 rounded-3xl border border-amber-100 shadow-2xl'>
      <div className='text-center mb-8'>
        <h3 className='text-2xl font-black text-slate-900 mb-2'>Welcome Back</h3>
        <p className='text-slate-600 font-medium'>Sign in to continue building amazing resumes</p>
      </div>
      <form onSubmit={handleLogin} className='space-y-6'>
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="kkametau50@gmail.com"
          type="email"
        />
        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 characters"
          type="password"
        />
        {error && <div className='text-red-500 text-sm font-medium bg-red-50 border border-red-200 px-4 py-3 rounded-xl'>{error}</div>}
        <button type="submit" className='w-full py-4 bg-gradient-to-r from-amber-600 to-emerald-600 text-white font-black rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-amber-200 transition-all text-lg'>
          Sign In
        </button>
        <p className='text-center text-sm text-slate-600 font-medium'>
          Don't have an account?{' '}
          <button type="button" className='font-black text-amber-600 hover:text-emerald-600 transition-colors' onClick={() => setCurrentPage('signup')}>
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
