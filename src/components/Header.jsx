import { Link } from 'react-router-dom';

import '../css/Header.css';

const Header = () => {
  return (
    <>
      <nav
        style={{
          borderBottom: '0.1rem solid var(--dark)',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 1rem',
        }}
        className='navbar'
      >
        <Link to={'/'}>
          <p style={{ fontWeight: 'bold' }}>home</p>
        </Link>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to={'/shop'}>
            <p>shop</p>
          </Link>
          <Link to={'/about'}>
            <p>about</p>
          </Link>
          <Link to={'/contact'}>
            <p>contact</p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
