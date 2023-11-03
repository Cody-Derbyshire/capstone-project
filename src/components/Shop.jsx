import Spline from '@splinetool/react-spline';

import TopBanner from './TopBanner';
import InfoBlock from './InfoBlock';

const Shop = () => {
  return (
    <>
      <TopBanner content={{ title: 'welcome!' }} />
      <div
        style={{
          margin: '0 1rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <InfoBlock
          content={{
            title: 'New Arrivals',
            info: 'Discover the latest additions to our collection.',
            button: 'explore new arrivals →',
            bgc: 'var(--primary-dark-green)',
            textcol: 'var(--tertiary-blue)',
          }}
        />
        <Spline
          className='spline-model'
          scene='https://prod.spline.design/zUrOMBHorzun8hob/scene.splinecode'
          style={{
            aspectRatio: '1/1',
            backgroundColor: 'var(--secondary-dark-green)',
            maxWidth: 'calc(50vw - 1rem)',
          }}
        />
      </div>
      <div
        style={{
          margin: '0 1rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <Spline
          className='spline-model'
          scene='https://prod.spline.design/y3BVmqSdqiVTmDHb/scene.splinecode'
          style={{
            aspectRatio: '1/1',
            backgroundColor: 'var(--secondary-blue)',
            maxWidth: 'calc(50vw - 1rem)',
          }}
        />
        <InfoBlock
          content={{
            title: 'Chairs',
            info: 'Comfort and style meet sustainability.',
            button: 'explore chairs →',
            bgc: 'var(--primary-blue)',
            textcol: 'var(--tertiary-pink)',
          }}
        />
      </div>
      <div
        style={{
          margin: '0 1rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <InfoBlock
          content={{
            title: 'Sofas',
            info: 'Cozy and concious at the heart of your living room.',
            button: 'explore sofas →',
            bgc: 'var(--primary-light-green)',
            textcol: 'var(--primary-blue)',
          }}
        />
        <Spline
          className='spline-model'
          scene='https://prod.spline.design/FDOprUU7S2muxjha/scene.splinecode'
          style={{
            aspectRatio: '1/1',
            backgroundColor: 'var(--secondary-light-green)',
            maxWidth: 'calc(50vw - 1rem)',
          }}
        />
      </div>
      <div
        style={{
          margin: '0 1rem',
          marginBottom: '1rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <Spline
          className='spline-model'
          scene='https://prod.spline.design/McXzhbD4NOpUCv-O/scene.splinecode'
          style={{
            aspectRatio: '1/1',
            backgroundColor: 'var(--secondary-blue-green)',
            maxWidth: 'calc(50vw - 1rem)',
          }}
        />
        <InfoBlock
          content={{
            title: 'Storage',
            info: 'Stylish and eco-conscious organization.',
            button: 'explore storage →',
            bgc: 'var(--primary-blue-green)',
            textcol: 'var(--tertiary-orange)',
            link: '/category',
          }}
        />
      </div>
    </>
  );
};

export default Shop;
