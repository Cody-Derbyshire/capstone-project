const InfoBlock = ({ content }) => {
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
          <p style={{ fontFamily: 'bergen-bold', fontSize: '1rem' }}>
            {content.title}
          </p>
          <p style={{ fontSize: '0.6rem' }}>{content.info}</p>
        </div>
        <p
          style={{
            fontSize: '0.8rem',
            color: content.bgc,
            backgroundColor: content.textcol,
            padding: '0 0.25rem',
            width: 'fit-content',
          }}
        >
          {content.button}
        </p>
      </div>
    </>
  );
};

export default InfoBlock;
