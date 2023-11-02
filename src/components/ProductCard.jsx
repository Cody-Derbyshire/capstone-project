import { useState } from 'react';
import Spline from '@splinetool/react-spline';

const ProductCard = ({ content }) => {
  const { material, name, price, desc, bgc, textcol, splineURL } = content;

  const [active, setActive] = useState(false);

  const handleMouseOver = () => {
    setActive(true);
  };

  const handleMouseOut = () => {
    setActive(false);
  };
  return (
    <>
      <div>
        <Spline
          className='spline-model'
          scene={splineURL}
          style={{
            aspectRatio: '1/1',
            backgroundColor: bgc,
          }}
        />
        <div
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: bgc,
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
            >
              <p>{desc}</p>
              <p>&rarr;</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
