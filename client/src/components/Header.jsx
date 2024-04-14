import {
  Avatar,
  Button,
  Dropdown,
  Navbar,
  NavbarCollapse,
  TextInput,
} from 'flowbite-react';

import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState } from 'react';

const Header = () => {
  const path = useLocation().pathname;
  const location = useLocation();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');

    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });

      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();

    navigate(`/search?${searchQuery}`);
  };
  return (
    <Navbar className='border-b-2'>
      <Link
        to='/'
        className='flex items-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <div className='w-16 h-16'>
          <img
            className='w-full h-full p-2'
            src='/logo.png'
            alt='logo'
          />
        </div>
      </Link>

      <form onSubmit={handleSubmit}>
        <TextInput
          type='text'
          placeholder='Suchen...'
          rightIcon={AiOutlineSearch}
          className='lg:inline md:inline'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button className='w-12 h-10 lg:hidden md:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser?.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profil</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Abmelden</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button gradientDuoTone='greenToBlue' outline>
              Anmelden
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <NavbarCollapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>Startseite</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'>Über uns</Link>
        </Navbar.Link>

      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
