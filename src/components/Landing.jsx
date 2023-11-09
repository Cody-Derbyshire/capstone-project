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
      <div className='landing-wrapper'>
        <img
          className='landing-image-mobile'
          src={mobileLogo}
          alt='black garlic logo for mobile view'
        />
        <img
          className='landing-image-tablet'
          src={tabletLogo}
          alt='black garlic logo for mobile view'
        />
        <img
          className='landing-image-web'
          src={webLogo}
          alt='black garlic logo for mobile view'
        />

        <Link to={'/shop'}>
          <p
            className='landing-explore-button'
            style={{
              color: active ? 'var(--dark)' : 'var(--light)',
              backgroundColor: active ? 'var(--light)' : 'var(--dark)',
              filter: active
                ? `drop-shadow(.25rem .25rem 0 var(--dark))`
                : 'none',
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
