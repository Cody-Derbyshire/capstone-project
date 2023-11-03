import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

import '../css/ProductCard.css';

const ProductCard = ({ content }) => {
  const { material, name, price, desc, bgc, textcol, splineURL, link } =
    content;

  const [active, setActive] = useState(false);

  const handleMouseOver = () => {
    setActive(true);
  };
  const handleClick = () => {
    setActive(true);
    const timer = setTimeout(() => {
      setActive(false);
    }, 1000);
    return () => clearTimeout(timer);
  };

  const handleMouseOut = () => {
    setActive(false);
  };

  return (
    <>
      <div style={{ backgroundColor: bgc }}>
        <Spline
          className='spline-model'
          scene={splineURL}
          style={{
            aspectRatio: '1/1',
            height: 'unset',
            display: 'flex',
            maxWidth: 'calc(50vw - 1rem)',
          }}
        />
        <div
          style={{
            padding: '0.5rem 1rem',
          }}
        >
          <p style={{ textAlign: 'right', color: textcol, fontSize: '0.6rem' }}>
            {material}
          </p>
          <div style={{ borderTop: `0.1rem solid ${textcol}` }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.8rem',
                color: textcol,
              }}
              className='bold'
            >
              <p>{name}</p>
              <p>${price}</p>
            </div>
            <Link to={link}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.6rem',
                  color: active ? textcol : bgc,
                  backgroundColor: active ? bgc : textcol,
                  filter: active
                    ? `drop-shadow(.15rem .15rem 0 ${textcol})`
                    : 'none',
                  border: `solid 0.1rem ${textcol}`,
                  padding: '0 0.25rem',
                }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={handleClick}
              >
                <p>{desc}</p>
                <p>&rarr;</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
