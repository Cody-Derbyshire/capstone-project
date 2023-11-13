import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import '../css/ProductCard.css';

const ProductCard = ({ content }) => {
  const { material, name, price, desc, bgc, textcol, splineURL, link } =
    content;

  return (
    <>
      <div style={{ backgroundColor: bgc }}>
        <Spline className='category-spline' scene={splineURL} />
        <div className='category-info'>
          <p className='material' style={{ color: textcol }}>
            {material}
          </p>
          <div style={{ borderTop: `0.1rem solid ${textcol}` }}>
            <div style={{ color: textcol }} className='bold name-price'>
              <p>{name}</p>
              <p>${price}</p>
            </div>
            <Link to={link}>
              <motion.div
                className='category-link-btn'
                style={{
                  color: bgc,
                  backgroundColor: textcol,
                  filter: 'none',
                  border: `solid 0.1rem ${textcol}`,
                }}
                whileHover={{
                  color: textcol,
                  backgroundColor: bgc,
                  filter: `drop-shadow(.15rem .15rem 0 ${textcol})`,
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.99,
                }}
              >
                <p>{desc}</p>
                <p>&rarr;</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
