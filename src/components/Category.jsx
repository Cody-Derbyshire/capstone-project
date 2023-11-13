import '../css/Category.css';
import TopBanner from './TopBanner';
import ProductCard from './ProductCard';

const Category = () => {
  const noraAsh =
    'https://prod.spline.design/1dBsZmn3pgXl7Hdf/scene.splinecode';
  const noraWalnut =
    'https://prod.spline.design/YZAdC92tGORsOyN6/scene.splinecode';
  const sofiaWalnut =
    'https://prod.spline.design/iYVsXl8oLTv1GmMF/scene.splinecode';
  const sofiaAsh =
    'https://prod.spline.design/AOdryHq2rpcyOyCY/scene.splinecode';
  const felixAsh =
    'https://prod.spline.design/ykO30dgi8SAl7xgi/scene.splinecode';
  const felixWalnut =
    'https://prod.spline.design/qyBLwlvY9BLQMkmX/scene.splinecode';

  return (
    <>
      <TopBanner content={{ title: 'storage' }} />

      <div className='category-wrapper'>
        <ProductCard
          content={{
            name: 'Nora',
            desc: 'Side Table',
            price: '740.00',
            material: 'Ash',
            bgc: 'var(--primary-dark-green)',
            textcol: 'var(--tertiary-blue)',
            splineURL: noraAsh,
          }}
        />
        <ProductCard
          content={{
            name: 'Nora',
            desc: 'Side Table',
            price: '890.00',
            material: 'Walnut',
            bgc: 'var(--primary-blue-green)',
            textcol: 'var(--tertiary-green)',
            splineURL: noraWalnut,
            link: '/category:id',
          }}
        />
        <ProductCard
          content={{
            name: 'Sofia',
            desc: 'Night Stand',
            price: '1020.00',
            material: 'Walnut',
            bgc: 'var(--secondary-blue)',
            textcol: 'var(--tertiary-green)',
            splineURL: sofiaWalnut,
          }}
        />
        <ProductCard
          content={{
            name: 'Sofia',
            desc: 'Night Stand',
            price: '940.00',
            material: 'Ash',
            bgc: 'var(--primary-blue)',
            textcol: 'var(--tertiary-pink)',
            splineURL: sofiaAsh,
          }}
        />
        <ProductCard
          content={{
            name: 'Felix',
            desc: 'Record Stand',
            price: '2100.00',
            material: 'Ash',
            bgc: 'var(--primary-light-green)',
            textcol: 'var(--primary-blue)',
            splineURL: felixAsh,
          }}
        />
        <ProductCard
          className='bottom-margin'
          content={{
            name: 'Felix',
            desc: 'Record Stand',
            price: '2290.00',
            material: 'Walnut',
            bgc: 'var(--secondary-light-green-solid)',
            textcol: 'var(--primary-blue)',
            splineURL: felixWalnut,
          }}
        />
      </div>
    </>
  );
};

export default Category;
