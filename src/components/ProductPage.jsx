import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import '../css/ProductPage.css';
import TopBanner from './TopBanner';
import { motion } from 'framer-motion';

const ProductPage = () => {
  const textcol = 'var(--dark)';
  const bgc = 'var(--light)';

  const navigate = useNavigate();
  return (
    <>
      <TopBanner content={{ title: 'Nora' }} />
      <div className='product-page-wrapper'>
        <div className='back-btn-wrapper'>
          <motion.a
            onClick={() => navigate(-1)}
            className='back-btn'
            whileHover={{
              scale: 1.05,
              textDecoration: 'underline',
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            &larr; back
          </motion.a>
        </div>
        <div className='web-wrapper'>
          <div className='product-spline-wrapper'>
            <Spline
              className='product-spline-model'
              scene='https://prod.spline.design/YZAdC92tGORsOyN6/scene.splinecode'
            />
          </div>
          <div className='product-info-wrapper'>
            <div className='bold product-name-price'>
              <p className='product-name'>Nora</p>
              <p className='product-price'>$960.00</p>
            </div>
            <p className='product-desc'>
              A timeless mid-century inspired side table combining style and
              function. With an open shelf and a convenient drawer,
              <span className='bold'> Nora</span> offers storage in a sleek and
              elegant design. Elevate your living space with this versatile and
              stylish addition.
            </p>
            <div className='product-details'>
              <motion.a
                className='bold'
                whileHover={{
                  textDecoration: 'underline',
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                Product Details ↗
              </motion.a>
              <p>
                Available in <span className='bold'>Ash</span> &{' '}
                <span className='bold'>Walnut</span>
              </p>
            </div>
            <div className='cart-wrapper'>
              <motion.p
                style={{
                  color: bgc,
                  backgroundColor: textcol,
                  filter: 'none',
                  border: `solid 0.1rem ${textcol}`,
                }}
                className='bold cart-btn'
                whileHover={{
                  color: textcol,
                  backgroundColor: bgc,
                  filter: `drop-shadow(.35rem .35rem 0 ${textcol})`,
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                add to cart
              </motion.p>
              <motion.svg
                className='heart-btn'
                xmlns='http://www.w3.org/2000/svg'
                id='Layer_1'
                data-name='Layer 1'
                viewBox='0 0 24 24'
                width='500'
                height='500'
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                  fill: 'var(--tertiary-pink)',
                  backgroundColor: 'var(--dark)',
                }}
              >
                <path d='M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917Z' />
              </motion.svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
