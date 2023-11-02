import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useTime, useTransform } from 'framer-motion';

import '../css/Landing.css';
import mobileLogo from '../assets/bg-branding-svg-mobile.svg';
import tabletLogo from '../assets/bg-branding-svg-tablet.svg';
import webLogo from '../assets/bg-branding-svg-web.svg';

const Landing = () => {
  const time = useTime();
  const translateY = useTransform(
    time,
    [0, 1000, 2000], // For every 4 seconds...
    [0, 10, 0], // ...move down 10px, then back up 10px
    { clamp: true }
  );
  const [active, setActive] = useState(false);

  const handleMouseOver = () => {
    setActive(true);
  };

  const handleMouseOut = () => {
    setActive(false);
  };

  return (
    <>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: '3rem',
        }}
      >
        <img
          style={{ paddingTop: '1rem' }}
          src={mobileLogo}
          alt='black garlic logo for mobile view'
        />

        <Link to={'/shop'}>
          <p
            className='explore-button'
            style={{
              fontSize: '1.2rem',
              color: active ? 'var(--dark)' : 'var(--light)',
              backgroundColor: active ? 'var(--light)' : 'var(--dark)',
              filter: active
                ? `drop-shadow(.25rem .25rem 0 var(--dark))`
                : 'none',
              border: `solid 0.1rem var(--dark)`,
              padding: '0.25rem 0.5rem',
              width: 'fit-content',
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            get started &rarr;
          </p>
        </Link>
      </div>
    </>
  );
};

export default Landing;
