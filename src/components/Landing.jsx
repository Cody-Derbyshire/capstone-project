import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useTime, useTransform } from 'framer-motion';

import '../css/Landing.css';
import mobileLogo from '../assets/bg-branding-svg-mobile.svg';
import tabletLogo from '../assets/bg-branding-svg-tablet.svg';
import webLogo from '../assets/bg-branding-svg-web.svg';

const Landing = () => {
  const bgc = 'var(--light)';
  const textcol = 'var(--dark)';

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
          alt='black garlic logo for tablet view'
        />
        <img
          className='landing-image-web'
          src={webLogo}
          alt='black garlic logo for web view'
        />

        <Link to={'/shop'}>
          <motion.p
            className='landing-explore-button'
            style={{
              color: bgc,
              backgroundColor: textcol,
              filter: 'none',
              border: `solid 0.1rem ${textcol}`,
            }}
            whileHover={{
              color: textcol,
              backgroundColor: bgc,
              filter: `drop-shadow(.25rem .25rem 0 ${textcol})`,
              border: `solid 0.1rem ${textcol}`,
              scale: 1.01,
            }}
            whileTap={{ scale: 0.9 }}
          >
            get started &rarr;
          </motion.p>
        </Link>
      </div>
    </>
  );
};

export default Landing;
