import { useState } from 'react';
import '../css/InfoBlock.css';

const InfoBlock = ({ content }) => {
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
          backgroundColor: content.bgc,
        }}
      >
        <div
          style={{
            color: content.textcol,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <p style={{ fontFamily: 'bergen-bold', fontSize: '1.25rem' }}>
            {content.title}
          </p>
          <p style={{ fontSize: '0.6rem' }}>{content.info}</p>
        </div>
        <p
          className='explore-button'
          style={{
            fontSize: '0.8rem',
            color: active ? content.textcol : content.bgc,
            backgroundColor: active ? content.bgc : content.textcol,
            filter: active
              ? `drop-shadow(.15rem .15rem 0 ${content.textcol})`
              : 'none',
            border: `solid 0.1rem ${content.textcol}`,
            padding: '0 0.25rem',
            width: 'fit-content',
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {content.button}
        </p>
      </div>
    </>
  );
};

export default InfoBlock;
