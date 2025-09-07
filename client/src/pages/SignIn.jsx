import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className='min-h-screen bg-gradient-to-br from-white to-slate-100 flex items-center justify-center px-4'>
      <div className='w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-10'>
        <h2 className='text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800'>
          Sign In to Your Account
        </h2>
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='Email Address'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none'
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none'
          />
          <button
            type='submit'
            className='w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition'
          >
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </form>
        <div className='my-6 flex items-center'>
          <div className='flex-grow h-px bg-gray-200' />
          <span className='mx-3 text-gray-400 text-sm'>or</span>
          <div className='flex-grow h-px bg-gray-200' />
        </div>
        <OAuth />
        <p className='mt-6 text-center text-gray-600 text-sm'>
          Don&apos;t have an account?{' '}
          <Link
            to='/sign-up'
            className='text-indigo-600 font-semibold hover:underline'
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
