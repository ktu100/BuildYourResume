import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from './Inputs';
import { validateEmail } from '../utils/helper';
import { API_PATHS } from '../utils/apiPaths';
import axiosInstance from '../utils/axiosInstance';
import { UserContext } from '../context/userContext';


const SignUp = ({ setCurrentPage }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!fullName) {
      setError('Please enter full name.');
      return;
    }
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
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name: fullName,
        email,
        password,
      });
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
    <div className='w-[90vw] md:w-[400px] p-8 bg-gradient-to-br from-white to-rose-50 rounded-3xl border border-rose-100 shadow-2xl overflow-hidden'>
      <div className='text-2xl font-black text-slate-900 mb-2'>
        <h3 className='text-2xl font-black text-slate-900 mb-2'>Create Account</h3>
        <p className='text-slate-600 font-medium'>Join thousands of professionals today</p>
      </div>
      <form onSubmit={handleSignUp} className='space-y-4'>
        <Input
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
          label="Full Name"
          placeholder="John Doe"
          type="text"
        />
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email"
          placeholder="email@example.com"
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
        <button type="submit" className='w-full py-4 bg-gradient-to-r from-amber-500 to-rose-600 text-white font-black rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-rose-200 transition-all text-lg'>
          Create Account
        </button>
        <p className='text-center text-sm text-slate-600 font-medium'>
          Already have an account?{' '}
          <button type="button" className='font-black text-amber-600 hover:text-rose-600 transition-colors' onClick={() => setCurrentPage('login')}>
            Sign In
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;