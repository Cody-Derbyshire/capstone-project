import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import '../css/Header.css';

const Header = () => {
  return (
    <>
      <nav
        style={{
          borderBottom: '0.1rem solid var(--dark)',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0.5rem 1rem',
          paddingBottom: '0.5rem',
        }}
        className='navbar'
      >
        <Link to={'/'}>
          <motion.p
            whileHover={{ scale: 1.1, textDecoration: 'underline' }}
            whileTap={{ scale: 0.9 }}
            style={{ fontWeight: 'bold' }}
          >
            home
          </motion.p>
        </Link>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to={'/shop'}>
            <motion.p
              whileHover={{ scale: 1.1, textDecoration: 'underline' }}
              whileTap={{ scale: 0.9 }}
            >
              shop
            </motion.p>
          </Link>
          <Link to={'/about'}>
            <motion.p
              whileHover={{ scale: 1.1, textDecoration: 'underline' }}
              whileTap={{ scale: 0.9 }}
            >
              about
            </motion.p>
          </Link>
          <Link to={'/contact'}>
            <motion.p
              whileHover={{ scale: 1.1, textDecoration: 'underline' }}
              whileTap={{ scale: 0.9 }}
            >
              contact
            </motion.p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
