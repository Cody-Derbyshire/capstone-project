import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/InfoBlock.css';

const InfoBlock = ({ content }) => {
  const { bgc, textcol, link, info, button, title } = content;

  const [active, setActive] = useState(false);

  const handleMouseOver = () => {
    setActive(true);
  };

  const handleMouseOut = () => {
    setActive(false);
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          padding: '1rem',
          aspectRatio: '1/1',
          backgroundColor: bgc,
        }}
      >
        <div
          style={{
            color: textcol,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <p style={{ fontFamily: 'bergen-bold', fontSize: '1.25rem' }}>
            {title}
          </p>
          <p style={{ fontSize: '0.6rem' }}>{info}</p>
        </div>
        <Link to={link}>
          <p
            className='explore-button'
            style={{
              fontSize: '0.8rem',
              color: active ? textcol : bgc,
              backgroundColor: active ? bgc : textcol,
              filter: active
                ? `drop-shadow(.15rem .15rem 0 ${textcol})`
                : 'none',
              border: `solid 0.1rem ${textcol}`,
              padding: '0 0.25rem',
              width: 'fit-content',
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {button}
          </p>
        </Link>
      </div>
    </>
  );
};

export default InfoBlock;
