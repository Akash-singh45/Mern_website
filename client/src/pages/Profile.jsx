import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserStart,
} from '../redux/user/userSlice';

export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({
    username: currentUser?.username || '',
    email: currentUser?.email || '',
    avatar: currentUser?.avatar || '',
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redirect if user is not logged in
  useEffect(() => {
    if (!currentUser) {
      navigate('/sign-in');
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    if (file) handleFileUpload(file);
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData((prev) => ({ ...prev, avatar: downloadURL }))
        );
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
      navigate('/sign-in');
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch('/api/auth/signout');
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
      navigate('/sign-in'); // You can optionally dispatch a separate signOutSuccess() action
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-white to-slate-100 py-10 px-4 sm:px-8 md:px-20'>
      <div className='max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 flex flex-col items-center'>
        <h2 className='text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800'>
          My Profile
        </h2>
        <div className='flex flex-col items-center gap-4 mb-8'>
          <img
            src={formData.avatar || '/static/images/default-avatar.png'}
            alt='Profile'
            className='w-24 h-24 rounded-full object-cover border-4 border-indigo-200 shadow'
            onClick={() => fileRef.current && fileRef.current.click()}
          />
          <input
            type='file'
            ref={fileRef}
            className='hidden'
            accept='image/*'
            // onChange={handleAvatarChange} // implement as needed
          />
          <button
            className='text-indigo-600 text-sm font-semibold hover:underline'
            onClick={() => fileRef.current && fileRef.current.click()}
          >
            Change Avatar
          </button>
        </div>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-6'>
          <div>
            <label className='block text-gray-700 mb-1'>Username</label>
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              className='w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none'
            />
          </div>
          <div>
            <label className='block text-gray-700 mb-1'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none'
              disabled
            />
          </div>
          {/* Add more fields as needed */}
          <button
            type='submit'
            className='w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition'
          >
            {loading ? 'Loading...' : 'Update Profile'}
          </button>
        </form>
        <div className='flex justify-between mt-5 w-full'>
          <span
            onClick={handleDeleteUser}
            className='text-red-700 cursor-pointer'
          >
            Delete Account
          </span>
          <span onClick={handleSignOut} className='text-red-700 cursor-pointer'>
            Sign Out
          </span>
        </div>
        {error && <p className='text-red-700 mt-5'>{error}</p>}
        {updateSuccess && (
          <p className='text-green-700 mt-5'>User updated successfully!</p>
        )}
      </div>
    </div>
  );
}
