import { Footer } from 'flowbite-react';
// import {
//   BsDiscord,
//   BsFacebook,
//   BsGithub,
//   BsInstagram,
//   BsTwitch,
// } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { useState } from 'react';

// ...

const FooterComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const days = [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
  ];
  const hours = [
    '8:00-12:00 Uhr',
    '7:00-17:00 Uhr',
    '7:00-17:00 Uhr',
    '7:00-17:00 Uhr',
    '7:00-17:00 Uhr',
    '7:00-17:00 Uhr',
    '8:00-13:00 Uhr',
  ];
  const currentDay = new Date().getDay();
  return (
    <Footer container className='border border-t-8 border-teal-800'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='flex  items-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
            >
              <div className='w-20 h-20 flex'>
                <img
                  className='w-full h-full p-2'
                  src='/public/logo.png'
                  alt='logo'
                />
              </div>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4  sm:grid-cols-3  sm:gap-6'>
            <div>
              <Footer.Title title='Sie können uns finden unter:' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href={`https://www.google.com/maps/place/Eleni's+Bakery/@48.669106,9.3726732,17z/data=!3m1!4b1!4m6!3m5!1s0x4799bf68136bdc31:0xbbc9e907b8430180!8m2!3d48.669106!4d9.3726732!16s%2Fg%2F11vwc922gp?entry=ttu`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Hauptstraße 1, 73240 Wendlingen am Neckar
                </Footer.Link>
                {/* 
                <Footer.Link
                  href='Link/2'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Link 2
                </Footer.Link> */}
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Sie können uns kontaktieren unter:' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href={`https://www.google.com/maps/place/Eleni's+Bakery/@48.6699623,9.3702266,17.5z/data=!4m6!3m5!1s0x4799bf68136bdc31:0xbbc9e907b8430180!8m2!3d48.669106!4d9.3726732!16s%2Fg%2F11vwc922gp?entry=ttu`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Telefon: +49-070244028907
                </Footer.Link>

                <Footer.Link
                  href={`https://www.google.com/maps/place/Eleni's+Bakery/@48.6699623,9.3702266,17.5z/data=!4m6!3m5!1s0x4799bf68136bdc31:0xbbc9e907b8430180!8m2!3d48.669106!4d9.3726732!16s%2Fg%2F11vwc922gp?entry=ttu`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Handy: +49-01575 2450913
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className='flex flex-col sm:flex-row gap-3'>
              <Footer.Title
                title='Öffnungszeiten:'
                className='text-sm sm:text-lg'
              />
              <Footer.LinkGroup col className='flex flex-col sm:flex-row'>
                <p className='text-sm sm:text-base'>
                  {days[currentDay]}: {hours[currentDay]}
                </p>
                {isOpen &&
                  days.map((day, index) => (
                    <p key={index} className='text-sm sm:text-base'>
                      {day}: {hours[index]}
                    </p>
                  ))}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className='text-sm sm:text-base text-teal-500 hover:underline mt-2 sm:mt-0'
                >
                  {isOpen ? 'Verbergen' : 'Zeigen'} voller Öffnungszeiten
                </button>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className='my-8' />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Eleni's Bekery Wendlingen"
            year={'2024'}
          />
          {/* <div className='flex gap-6 mt-4 sm:mt-0 sm:justify-center'>
            <Footer.Icon href='#' icon={BsFacebook} />
            <Footer.Icon href='#' icon={BsInstagram} />
            <Footer.Icon href='#' icon={BsGithub} />
            <Footer.Icon href='#' icon={BsTwitch} />
            <Footer.Icon href='#' icon={BsDiscord} />
          </div> */}
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
