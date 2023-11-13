import Spline from '@splinetool/react-spline';
import '../css/Shop.css';
import TopBanner from './TopBanner';
import InfoBlock from './InfoBlock';

const Shop = () => {
  return (
    <>
      <TopBanner content={{ title: 'welcome!' }} />
      <div className='shop-wrapper'>
        <div className='shop-left'>
          <div className='shop-row'>
            <InfoBlock
              content={{
                title: 'New Arrivals',
                info: 'Discover the latest additions to our collection.',
                button: 'explore new arrivals →',
                bgc: 'var(--primary-dark-green)',
                textcol: 'var(--tertiary-blue)',
              }}
            />
            <div className='spline-wrapper bg-s-dg'>
              <Spline
                className='spline '
                scene='https://prod.spline.design/zUrOMBHorzun8hob/scene.splinecode'
              />
            </div>
          </div>
          <div className='shop-row-flipped'>
            <div className='spline-wrapper bg-s-b'>
              <Spline
                className='spline '
                scene='https://prod.spline.design/y3BVmqSdqiVTmDHb/scene.splinecode'
              />
            </div>
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
        </div>
        <div className='shop-right'>
          <div className='shop-row'>
            <InfoBlock
              content={{
                title: 'Sofas',
                info: 'Cozy and concious at the heart of your living room.',
                button: 'explore sofas →',
                bgc: 'var(--primary-light-green)',
                textcol: 'var(--primary-blue)',
              }}
            />
            <div className='spline-wrapper bg-s-lg'>
              <Spline
                className='spline'
                scene='https://prod.spline.design/FDOprUU7S2muxjha/scene.splinecode'
              />
            </div>
          </div>
          <div className='shop-row-flipped margin-bottom'>
            <div className='spline-wrapper bg-s-bg'>
              <Spline
                className='spline '
                scene='https://prod.spline.design/McXzhbD4NOpUCv-O/scene.splinecode'
              />
            </div>
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
        </div>
      </div>
    </>
  );
};

export default Shop;
