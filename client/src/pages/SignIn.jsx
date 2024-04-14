import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';

import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';

import OAuth from '../components/OAuth';

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('All fields are required!'));
    }
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

      if (!res.ok) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
          <Link
            to='/'
            className='flex  items-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
          >
            <div className='w-13 h-13 flex'>
              <img className='w-full h-full p-2' src='/logo.png' alt='logo' />
            </div>
          </Link>
          <p className='text-sm mt-5'>
            Willkommen! Bitte melden Sie sich an, um Ihre Meinung zu unseren
            Produkten zu teilen.
          </p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Deine E-Mail' />
              <TextInput
                type='email'
                placeholder='Name@company.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Deine passwort' />
              <TextInput
                type='password'
                placeholder='**************'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone='greenToBlue'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <div>
                  <Spinner size='sm' /> <span className='pl-3'>Laden...</span>{' '}
                </div>
              ) : (
                'Anmelden'
              )}
            </Button>

            <OAuth />
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Sie haben kein Konto?</span>
            <Link to='/sign-up' className='text-red-600'>
              Hier anmelden
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
