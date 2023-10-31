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

  return (
    <>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <img src={mobileLogo} alt='black garlic logo for mobile view' />

        <motion.div
          animate={{ translateY: 10 }}
          transition={{ ease: 'anticipate', duration: 1, repeat: Infinity }}
          whileHover={{ scale: '1.2', transition: { duration: 0.5 } }}
        >
          <Link className='down-arrow' to='/shop'>
            <p style={{ fontSize: '3rem' }}>&darr;</p>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Landing;
