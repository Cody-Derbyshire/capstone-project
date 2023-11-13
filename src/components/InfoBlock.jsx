import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/InfoBlock.css';
import { motion } from 'framer-motion';

const InfoBlock = ({ content }) => {
  const { bgc, textcol, link, info, button, title } = content;

  /*  const [active, setActive] = useState(false);

  const handleMouseOver = () => {
    setActive(true);
  };

  const handleMouseOut = () => {
    setActive(false);
  }; */
  return (
    <>
      <div
        className='info-wrapper'
        style={{
          backgroundColor: bgc,
        }}
      >
        <div
          className='info-text'
          style={{
            color: textcol,
          }}
        >
          <p className='info-title'>{title}</p>
          <p className='info-desc'>{info}</p>
        </div>
        <Link to={link}>
          <motion.p
            className='shop-explore-button'
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
            {button}
          </motion.p>
        </Link>
      </div>
    </>
  );
};

export default InfoBlock;
