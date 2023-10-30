import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../css/Header.css';

const Header = () => {
  return (
    <>
      <nav
        style={{
          border: '0.1rem solid var(--dark)',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link to={'/home'}>
          <p>home</p>
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
