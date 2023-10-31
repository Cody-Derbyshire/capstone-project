const TopBanner = ({ content }) => {
  return (
    <>
      <h1
        style={{
          color: 'var(--light)',
          background: 'var(--dark)',
          margin: '1rem',
          display: 'flex',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '2rem',
        }}
      >
        {content.title}
      </h1>
    </>
  );
};

export default TopBanner;
