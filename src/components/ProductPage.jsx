import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import '../css/ProductPage.css';
import TopBanner from './TopBanner';

const ProductPage = () => {
  const [cartActive, setCartActive] = useState(false);
  const [heartActive, setHeartActive] = useState(false);

  const handleCartMouseOver = () => {
    setCartActive(true);
  };
  const handleCartClick = () => {
    setCartActive(true);
    const timer = setTimeout(() => {
      setCartActive(false);
    }, 1000);
    return () => clearTimeout(timer);
  };

  const handleCartMouseOut = () => {
    setCartActive(false);
  };
  const handleHeartMouseOver = () => {
    setHeartActive(true);
  };
  const handleHeartClick = () => {
    setHeartActive(true);
    const timer = setTimeout(() => {
      setHeartActive(false);
    }, 1000);
    return () => clearTimeout(timer);
  };

  const handleHeartMouseOut = () => {
    setHeartActive(false);
  };

  const textcol = 'var(--dark)';
  const bgc = 'var(--light)';

  const navigate = useNavigate();
  return (
    <>
      <TopBanner content={{ title: 'Nora' }} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <a
            onClick={() => navigate(-1)}
            style={{
              display: 'flex',
              margin: '0 1rem',
              marginBottom: '1rem',
              paddingBottom: '1rem',
              borderBottom: `0.1rem solid var(--dark)`,
            }}
          >
            &larr; back
          </a>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '0.5rem',
          }}
        >
          <Spline
            className='spline-model'
            scene='https://prod.spline.design/YZAdC92tGORsOyN6/scene.splinecode'
            style={{
              aspectRatio: '1/1',
              height: 'unset',
              display: 'flex',
              maxWidth: 'calc(100vw - 2rem)',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1rem',
            margin: '0 1rem',
            padding: '1rem 0',
            borderTop: '0.1rem solid var(--dark)',
            color: 'var(--dark)',
          }}
        >
          <div
            className='bold'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '1.5rem',
            }}
          >
            <p>Nora</p>
            <p
              style={{
                backgroundColor: 'var(--dark)',
                color: 'var(--light)',
                padding: '0.25rem 0.5rem',
              }}
            >
              $960.00
            </p>
          </div>
          <p style={{ textAlign: 'justify' }}>
            A timeless mid-century inspired side table combining style and
            function. With an open shelf and a convenient drawer,
            <span className='bold'> Nora</span> offers storage in a sleek and
            elegant design. Elevate your living space with this versatile and
            stylish addition.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <a className='bold'>Product Details ↗</a>
            <p>
              Available in <span className='bold'>Ash</span> &{' '}
              <span className='bold'>Walnut</span>
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              marginTop: '1rem',
            }}
          >
            <p
              style={{
                padding: '0.25rem',
                fontSize: '1.5rem',
                flexGrow: '1',
                textAlign: 'center',
                color: cartActive ? textcol : bgc,
                backgroundColor: cartActive ? bgc : textcol,
                filter: cartActive
                  ? `drop-shadow(.35rem .35rem 0 ${textcol})`
                  : 'none',
                border: `solid 0.1rem ${textcol}`,
              }}
              className='bold'
              onMouseOver={handleCartMouseOver}
              onMouseOut={handleCartMouseOut}
              onClick={handleCartClick}
            >
              add to cart
            </p>
            <svg
              style={{
                width: '1.25rem',
                height: '1.25rem',
                display: 'flex',
                border: '0.125rem solid var(--dark)',
                borderBottomLeftRadius: '50%',
                borderBottomRightRadius: '50%',
                borderTopLeftRadius: '50%',
                borderTopRightRadius: '50%',
                padding: '.7rem',
                fill: heartActive ? 'var(--tertiary-pink)' : 'var(--dark)',
                backgroundColor: heartActive ? 'var(--dark)' : 'var(--light)',
                zIndex: '100',
              }}
              xmlns='http://www.w3.org/2000/svg'
              id='Layer_1'
              data-name='Layer 1'
              viewBox='0 0 24 24'
              width='512'
              height='512'
              onMouseOver={handleHeartMouseOver}
              onMouseOut={handleHeartMouseOut}
              onClick={handleHeartClick}
            >
              <path d='M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917Z' />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
